import {
  addVisited,
  removeVisited,
  isVisited,
  addLocalLandmark,
  getAllLocalLandmarks
} from './storage.js';

let map;
let userMarker = null;
let firstLocate = true;

/* ---------- Init ---------- */

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
  setTimeout(() => map.invalidateSize(), 0);

  map.on('locationfound', onLocationFound);
  map.on('locationerror', () => map.setView([20, 0], 2));

  document.getElementById('locate-btn').addEventListener('click', () => {
    firstLocate = false;
    locateUser();
  });

  map.on('contextmenu', onMapRightClick);

  locateUser();
  loadLocalLandmarks();
  loadGlobalLandmarks(); // 🔑 FIX
}

/* ---------- Location ---------- */

function locateUser() {
  map.locate({ setView: false, enableHighAccuracy: true });
}

function onLocationFound(e) {
  const zoom = firstLocate ? 5 : 13;
  map.setView(e.latlng, zoom, { animate: true });

  if (!userMarker) {
    userMarker = L.marker(e.latlng, { icon: userLocationIcon() }).addTo(map);
  } else {
    userMarker.setLatLng(e.latlng);
  }
}

/* ---------- Global Landmarks ---------- */

async function loadGlobalLandmarks() {
  const res = await fetch('./data/landmarks.json');
  const landmarks = await res.json();

  for (const place of landmarks) {
    const visited = await isVisited(place.id);
    if (!visited) continue;

    renderVisitedLandmark(place);
  }
}

/* ---------- Local Landmarks ---------- */

async function loadLocalLandmarks() {
  const landmarks = await getAllLocalLandmarks();
  landmarks.forEach(renderLocalLandmark);
}

async function onMapRightClick(e) {
  const name = prompt('Name this place:');
  if (!name) return;

  const place = {
    id: `local_${Date.now()}`,
    name,
    lat: e.latlng.lat,
    lng: e.latlng.lng
  };

  await addLocalLandmark(place);
  await addVisited(place);

  renderVisitedLandmark(place);
}

async function renderLocalLandmark(place) {
  const visited = await isVisited(place.id);
  if (!visited) return;

  renderVisitedLandmark(place);
}

/* ---------- Shared Renderer ---------- */

function renderVisitedLandmark(place) {
  const marker = L.marker(
    [place.lat, place.lng],
    { icon: visitedIcon() }
  )
    .addTo(map)
    .bindPopup(place.name);

  marker.on('click', async () => {
    await removeVisited(place.id);
    map.removeLayer(marker);
  });
}

/* ---------- Icons ---------- */

function visitedIcon() {
  return L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    shadowUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
  });
}

function userLocationIcon() {
  return L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    shadowUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
  });
}
