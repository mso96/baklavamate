import {products,merch,priceFor} from './content.js';
export const basketKey='baklava-mate-basket';
export const lineKey=line=>`${line.id}:${line.grams||line.size||'one'}`;
export function itemFor(line){return products.find(p=>p.id===line.id)||merch.find(p=>p.id===line.id)}
export const unitPrice=line=>itemFor(line)?.price||0;
export const lineLabel=line=>{const item=itemFor(line);return item?.slices?`${item.slices} · ${item.tray}`:line.size||'1 keyring'};
export const itemImage=item=>item.image||`/assets/baklava-${item.id}.png`;
export function migrateBasket(raw){
 let parsed;try{parsed=JSON.parse(raw||'[]')}catch{return {items:[],removed:false}}
 if(!Array.isArray(parsed))return {items:[],removed:false};
 let removed=false;const items=[];
 for(const line of parsed){
  if(!line||!Number.isInteger(line.quantity)||line.quantity<1)continue;
  const food=products.find(p=>p.id===line.id),goods=merch.find(p=>p.id===line.id);
  if(food&&line.grams){removed=true;continue}
  if(food)items.push({id:line.id,quantity:Math.min(line.quantity,99)});
  else if(goods&&(!goods.sizes||goods.sizes.includes(line.size)))items.push({id:line.id,...(goods.sizes?{size:line.size}:{}),quantity:Math.min(line.quantity,99)});
 }
 return {items,removed};
}
export function addLine(items,line){const key=lineKey(line);return items.some(x=>lineKey(x)===key)?items.map(x=>lineKey(x)===key?{...x,quantity:Math.min(99,x.quantity+1)}:x):[...items,{...line,quantity:1}]}
export const subtotal=items=>items.reduce((sum,line)=>sum+Math.round(unitPrice(line)*100)*line.quantity,0)/100;
