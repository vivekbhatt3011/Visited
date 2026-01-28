let map;
let userMarker = null;

export function initMap() {
  map = L.map('map', {
    zoomControl: true,
    worldCopyJump: true
  });

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution: '© OpenStreetMap contributors © CARTO',
      maxZoom: 19,
      minZoom: 2
    }
  ).addTo(map);

  map.setView([20, 0], 2);

  // Force correct size AFTER layout
  setTimeout(() => {
    map.invalidateSize();
  }, 0);

  document
    .getElementById('locate-btn')
    .addEventListener('click', locateUser);

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);
}

function locateUser() {
  map.locate({
    setView: false,
    enableHighAccuracy: true,
    timeout: 10000
  });
}

function onLocationFound(e) {
  const latlng = e.latlng;

  map.setView(latlng, 13, { animate: true });

  const userIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
  });

  if (!userMarker) {
    userMarker = L.marker(latlng, { icon: userIcon }).addTo(map);
  } else {
    userMarker.setLatLng(latlng);
  }
}

function onLocationError(err) {
  console.warn('Location error:', err.message);
}
