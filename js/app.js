import { initMap } from './map.js';

window.addEventListener('DOMContentLoaded', () => {
  initMap();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
