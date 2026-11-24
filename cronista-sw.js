/* Beta: never cache photos, authentication, or private data. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(e.request.mode!=='navigate'||u.origin!==self.location.origin||u.pathname!==new URL('./cronista.html',self.location.href).pathname)return;
 e.respondWith(fetch(e.request).catch(()=>new Response('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Il Cronista</title><body style="font:20px system-ui;padding:24px;color:#205540"><h1>Sem conexão</h1><p>O beta precisa de internet. Suas fotos originais continuam no celular.</p><a href="./cronista.html">Tentar novamente</a></body></html>',{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})));
});
