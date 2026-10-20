import React from 'react';
import {renderToString} from 'react-dom/server';
import {App} from './App.jsx';
export {pagePaths,seoFor,siteUrl} from './seo.js';
export {products,merch} from './content.js';
export const render=path=>renderToString(<App initialPath={path}/>);
