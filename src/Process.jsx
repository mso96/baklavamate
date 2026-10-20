import React from 'react';
const steps=[
 {id:'ingredients',title:'FROM TÜRKİYE',body:'Ingredients from Türkiye. The beginning of every good layer.',alt:'Antep pistachios and walnuts on a lavender surface'},
 {id:'craft',title:'IN EXPERT HANDS',body:'Prepared by Turkish baklava masters, with care in every layer.',alt:'Pastry chef hands layering filo and pistachio filling in a baking tray'},
 {id:'baking',title:'BAKED FRESH',body:'Golden, flaky and freshly baked. Ready for a sweet moment.',alt:'Neat rows of square-cut golden pistachio baklava in a tray'}
];
export function Process(){return <section id="our-process" className="process-section" aria-labelledby="process-title"><div className="process-heading"><div className="process-pronunciation"><span>bak-la-vaah</span><small>BAKLAVA, AS YOU SAY IT.</small></div><h2 id="process-title">OUR PROCESS</h2></div><ol className="process-grid">{steps.map((step,i)=><li key={step.id}><div className="process-photo"><img src={`/assets/baklava-process-illustrated-${step.id}${step.id==='baking'?'-square':''}.png`} alt={'Illustration: '+step.alt} width="1024" height="1024" loading="lazy"/><span className="process-number" aria-hidden="true">0{i+1}</span></div><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol></section>}
