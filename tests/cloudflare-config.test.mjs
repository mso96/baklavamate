import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import vite from '../vite.config.mjs';
test('Cloudflare deploy builds and serves the same client directory as Vite',()=>{
 const config=JSON.parse(readFileSync(new URL('../wrangler.jsonc',import.meta.url),'utf8'));
 assert.equal(config.name,'baklavamate');
 assert.equal(config.build.command,'npm run build');
 assert.equal(resolve(config.assets.directory),resolve(vite.build.outDir));
 assert.equal(config.assets.not_found_handling,'404-page');
 assert.ok(existsSync(resolve(config.assets.directory,'index.html')));
});
