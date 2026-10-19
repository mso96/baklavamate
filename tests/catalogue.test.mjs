import test from 'node:test';
import assert from 'node:assert/strict';
import {products,priceFor} from '../src/content.js';
import {migrateBasket,addLine,subtotal} from '../src/cart.js';
test('all five products have the approved 1 kg and 2 kg prices',()=>{assert.equal(products.length,5);for(const p of products){assert.equal(priceFor(p,1000),p.id==='walnut'?28:30);assert.equal(priceFor(p,2000),p.id==='walnut'?56:60)}});
test('legacy half-kilo lines are removed, never enlarged, while valid lines survive',()=>{const result=migrateBasket(JSON.stringify([{id:'walnut',grams:500,quantity:2},{id:'pistachio',grams:1000,quantity:1}]));assert.equal(result.removed,true);assert.deepEqual(result.items,[{id:'pistachio',grams:1000,quantity:1}])});
test('mixed basket retains separate clothing sizes and food weights and exact penny totals',()=>{let basket=[];for(const line of [{id:'walnut',grams:2000},{id:'baklava-tee',size:'M'},{id:'baklava-tee',size:'L'},{id:'nazar-keyring'},{id:'nazar-keyring'}])basket=addLine(basket,line);assert.equal(basket.length,4);assert.equal(subtotal(basket),117.98);assert.equal(basket[3].quantity,2);assert.deepEqual(migrateBasket(JSON.stringify(basket)).items,basket)});
test('malformed storage and unavailable variants cannot enter the basket',()=>{assert.deepEqual(migrateBasket('bad').items,[]);assert.deepEqual(migrateBasket(JSON.stringify([null,{id:'baklava-tee',size:'XXL',quantity:1},{id:'walnut',grams:3000,quantity:1},{id:'nazar-keyring',quantity:-1}])).items,[])});
