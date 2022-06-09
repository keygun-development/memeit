/* eslint-disable */
import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute('/offline.html');

// install new service worker when ok, then reload page.
self.addEventListener("message", msg => {
    if (msg.data.action === 'skipWaiting') {
        self.skipWaiting()
    }
})