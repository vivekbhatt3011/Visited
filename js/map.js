let map;
let userMarker = null;

export function initMap() {
  map = L.map('map', {
    zoomControl: true,
    worldCopyJump: true // allows smooth horizontal repetition
  });

  // Detailed, open-source map tiles
  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution: '© OpenStreetMap contributors © CARTO',
      maxZoom: 19,
      minZoom: 2
    }
  ).addTo(map);

  // Initial location on load
  locateUser();

  // Button to re-center on user
  document
    .getElementById('locate-btn')
    .addEventListener('click', locateUser);

  // Clamp latitude to avoid vertical repetition
  map.on('move', clampLatitude);
}

/**
 * Prevent vertical world repetition
 */
function clampLatitude() {
  const center = map.getCenter();
  const maxLat = 85;

  if (center.lat > maxLat) {
    map.setView([maxLat, center.lng], map.getZoom(), { animate: false });
  }

  if (center.lat < -maxLat) {
    map.setView([-maxLat, center.lng], map.getZoom(), { animate: false });
  }
}

/**
 * Locate user and mark as landmark icon
 */
function locateUser() {
  if (!navigator.geolocation) {
    fallbackView();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const userLatLng = [lat, lng];

      map.setView(userLatLng, 13, { animate: true });

      const userIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
      });

      if (!userMarker) {
        userMarker = L.marker(userLatLng, {
          icon: userIcon,
          keyboard: false
        }).addTo(map);
      } else {
        userMarker.setLatLng(userLatLng);
      }
    },
    () => fallbackView(),
    {
      enableHighAccuracy: true,
      timeout: 10000
    }
  );
}

/**
 * Default view if location is unavailable
 */
function fallbackView() {
  map.setView([20, 78], 4);
}
