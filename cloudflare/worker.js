const json=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
const ready=env=>Boolean(env.ENQUIRIES&&env.EMAIL&&env.FORM_RATE_LIMIT&&env.NOTIFICATION_TO&&env.NOTIFICATION_FROM);
export function validate(v){
 if(!v||typeof v!=='object'||Array.isArray(v))return false;
 const limits={name:100,email:254,occasion:80,date:10,time:5,guests:6,kg:5,product:100,notes:1000};
 for(const [key,max] of Object.entries(limits))if(typeof v[key]!=='string'||v[key].length>max||(/[\r\n]/.test(v[key])&&key!=='notes'))return false;
 const day=new Date(v.date+'T00:00:00Z');
 return Boolean(v.name.trim()&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)&&v.occasion&&v.product&&/^\d{4}-\d{2}-\d{2}$/.test(v.date)&&!isNaN(day)&&day.toISOString().slice(0,10)===v.date&&v.date>=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())&&/^([01]\d|2[0-3]):[0-5]\d$/.test(v.time)&&/^\d+$/.test(v.guests)&&Number(v.guests)>=1&&Number(v.guests)<=100000&&(!v.kg||(/^\d+$/.test(v.kg)&&Number(v.kg)>=1&&Number(v.kg)<=10000)));
}
async function readBody(request){
 const reader=request.body?.getReader();if(!reader)throw Error('body');
 let size=0;const chunks=[];while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>8192){await reader.cancel();throw Error('size')}chunks.push(value)}
 const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length}return JSON.parse(new TextDecoder().decode(bytes));
}
export default {async fetch(request,env){
 const url=new URL(request.url);
 if(url.pathname==='/api/forms-status'&&request.method==='GET')return json({enabled:ready(env)});
 if(!url.pathname.startsWith('/api/'))return env.ASSETS.fetch(request);
 if(url.pathname!=='/api/enquiries')return json({error:'Not found'},404);
 if(request.method!=='POST')return json({error:'Method not allowed'},405);
 if(request.headers.get('Origin')!==url.origin)return json({error:'Origin not allowed'},403);
 if(!ready(env))return json({error:'Please email love@baklavamate.com to send your enquiry.'},503);
 if(!request.headers.get('Content-Type')?.startsWith('application/json'))return json({error:'JSON required'},415);
 const rate=await env.FORM_RATE_LIMIT.limit({key:request.headers.get('CF-Connecting-IP')||'unknown'});
 if(!rate.success)return json({error:'Please wait a minute before trying again.'},429);
 let body;try{body=await readBody(request)}catch{return json({error:'Invalid or oversized request'},400)}
 if(body.website||!validate(body.values)||!/^[-a-f0-9]{36}$/.test(body.id||''))return json({error:'Please check the form fields.'},400);
 const values=body.values;
 try{
  const existing=await env.ENQUIRIES.prepare('SELECT id FROM enquiries WHERE id=?').bind(body.id).first();
  if(existing)return json({ok:true,id:body.id});
  const result=await env.ENQUIRIES.prepare('INSERT OR IGNORE INTO enquiries (id,created_at,payload) VALUES (?,?,?)').bind(body.id,new Date().toISOString(),JSON.stringify(values)).run();
  if(result.meta.changes===0)return json({ok:true,id:body.id});
  let status='sent';
  try{await env.EMAIL.send({to:env.NOTIFICATION_TO,from:{email:env.NOTIFICATION_FROM,name:'Baklava Mate enquiries'},replyTo:values.email,subject:'New Baklava Mate event enquiry',text:`Reference: ${body.id}\nTime zone: Europe/London\n\n`+Object.entries(values).map(([k,v])=>`${k}: ${v}`).join('\n')})}catch{status='failed';console.error(JSON.stringify({event:'enquiry_notification_failed',id:body.id}))}
  try{await env.ENQUIRIES.prepare('UPDATE enquiries SET notification_status=? WHERE id=?').bind(status,body.id).run()}catch{console.error(JSON.stringify({event:'notification_status_update_failed',id:body.id}))}
  return json({ok:true,id:body.id},201);
 }catch{console.error(JSON.stringify({event:'enquiry_save_failed'}));return json({error:'We could not save your enquiry. Please retry or email love@baklavamate.com.'},503)}
}};
