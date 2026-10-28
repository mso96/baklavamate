import test from 'node:test';
import assert from 'node:assert/strict';
import {products,priceFor} from '../src/content.js';
import {migrateBasket,addLine,subtotal} from '../src/cart.js';
test('all six event trays have the approved slice counts and prices',()=>{assert.equal(products.length,6);assert.deepEqual(products.map(p=>[p.slices,p.price]),[['86 slices',90],['34 slices',70],['68–72 pieces',70],['96 slices',70],['84 slices',120],['84 slices',120]]);for(const p of products)assert.equal(priceFor(p),p.price)});
test('legacy weight lines are removed while tray lines survive',()=>{const result=migrateBasket(JSON.stringify([{id:'pistachio',grams:1000,quantity:2},{id:'sobiyet',quantity:1}]));assert.equal(result.removed,true);assert.deepEqual(result.items,[{id:'sobiyet',quantity:1}])});
test('mixed tray basket retains exact keyring totals',()=>{let basket=[];for(const line of [{id:'pistachio'},{id:'nazar-keyring'},{id:'nazar-keyring'}])basket=addLine(basket,line);assert.equal(basket.length,2);assert.equal(subtotal(basket),101.98);assert.equal(basket[1].quantity,2);assert.deepEqual(migrateBasket(JSON.stringify(basket)).items,basket)});
test('retired shirts are removed from saved baskets',()=>{assert.deepEqual(migrateBasket(JSON.stringify([{id:'baklava-tee',size:'M',quantity:1},{id:'nazar-keyring',quantity:1}])).items,[{id:'nazar-keyring',quantity:1}])});
test('malformed storage and unavailable variants cannot enter the basket',()=>{assert.deepEqual(migrateBasket('bad').items,[]);assert.deepEqual(migrateBasket(JSON.stringify([null,{id:'baklava-tee',size:'XXL',quantity:1},{id:'unknown',quantity:1},{id:'nazar-keyring',quantity:-1}])).items,[])});
