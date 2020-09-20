/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import regeneratorRuntime from 'regenerator-runtime';
import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: 'comfy-resto',
  precache: 'precache',
});

precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url: 'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      revision: 1,
    },
  ],
  {
    ignoreURLParametersMatching: [/.*/],
  }
);

registerRoute(
  /^https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\//,
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

registerRoute(
  /\.(?:png|jpx|css|svg)$/,
  new CacheFirst({
    cacheName: 'comfy-resto-images',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 30,
      }),
    ],
  })
);
