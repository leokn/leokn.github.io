// $ID: worker.js, 28 Nov 2018, 13:23, Leonid 'n3o' Knyazev $

/* eslint-disable */

const DEBUG = false;

self.addEventListener('install', event => {
  if (DEBUG) {
    console.info('[SW]: Install event');
  }
});

self.addEventListener('activate', event => {
  if (DEBUG) {
    console.info('[SW]: Activate event');
  }
});

self.addEventListener('message', event => {
  if (DEBUG) {
    console.info('[SW]: Message event');
  }

  switch (event.data.action) {
    case 'skipWaiting':
      if (self.skipWaiting) {
        self.skipWaiting();
        self.clients.claim();
      }
      break;
    default:
      break;
  }
});

self.addEventListener('fetch', event => {
  if (DEBUG) {
    console.info('[SW]: Fetch event');
  }
});
