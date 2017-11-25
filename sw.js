"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/assets/bitcoin-clashic-clear-512.png","56f70c308941456bd19fb419b7b352cd"],["/assets/bitcoin-clashic-med.jpeg","43206b6bc54a7eac4c78f4d2cfd0c5a8"],["/assets/bitcoin-clashic-square.jpeg","8ad5a11421f09d423055ffa60e7140a0"],["/assets/favicon.ico","405fb4078133937a98ca259febe33a7e"],["/assets/icons/android-chrome-192x192.png","49db532360c7b505a79ed60719aacb21"],["/assets/icons/android-chrome-512x512.png","56f70c308941456bd19fb419b7b352cd"],["/assets/icons/apple-touch-icon.png","90405d33362bd5fa62bb73bbae721119"],["/assets/icons/favicon-16x16.png","17ecb04ef56b2484c8b0dc0f0084f694"],["/assets/icons/favicon-32x32.png","27141fea0a54c29e65694ae8402b4723"],["/assets/icons/mstile-150x150.png","de8c496e9bcb139f11561fef9a4e47ac"],["/bundle.60cca.js","db736826b58028a850d9255607b2a49f"],["/favicon.ico","405fb4078133937a98ca259febe33a7e"],["/index.html","25e35fcec808071be8d2cf1db42ea5bf"],["/manifest.json","862172f5337bb44b4354488541c99512"],["/route-home.chunk.7c375.js","c2d1f59c3b4f46a9ba2dcbe428f3c88f"],["/route-miner.chunk.b99aa.js","1806eb4bd9d08bdb117ef3396b0f7731"],["/style.44330.css","145a8286199f82d1c2ed62e6a96bfc2e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});