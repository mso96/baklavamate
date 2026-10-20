import React from 'react';
const steps=[
 {id:'ingredients',title:'FROM TÜRKİYE',body:'Ingredients from Türkiye. The beginning of every good layer.',alt:'Pistachios, walnuts and fine filo pastry on a lavender surface'},
 {id:'craft',title:'IN EXPERT HANDS',body:'Prepared by Turkish baklava masters, with care in every layer.',alt:'Pastry chef hands layering filo and pistachio filling in a baking tray'},
 {id:'baking',title:'BAKED FRESH',body:'Golden, flaky and freshly baked. Ready for a sweet moment.',alt:'A tray of freshly baked golden pistachio baklava'}
];
export function Process(){return <section id="our-process" className="process-section" aria-labelledby="process-title"><h2 id="process-title"><span>GOOD BAKLAVA STARTS HERE</span></h2><div className="process-grid">{steps.map(step=><article key={step.id}><div className="process-photo"><img src={`/assets/baklava-process-illustrated-${step.id}.png`} alt={'Illustration: '+step.alt} width="1024" height="1024" loading="lazy"/><h3>{step.title}</h3></div><p>{step.body}</p></article>)}</div></section>}
