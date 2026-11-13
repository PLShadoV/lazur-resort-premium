import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'node:stream';
import { StaticRouter } from 'react-router-dom/server';
import { AppContent, AppProviders } from './App';
export function render(path: string): Promise<string> {
 return new Promise((resolve,reject)=>{
  let html='';
  const output=new Writable({write(chunk,_encoding,callback){html+=chunk.toString();callback();}});
  output.on('finish',()=>resolve(html));output.on('error',reject);
  const stream=renderToPipeableStream(<AppProviders><StaticRouter location={path}><AppContent /></StaticRouter></AppProviders>,{onAllReady(){stream.pipe(output);},onError:reject});
 });
}
