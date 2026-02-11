import {
  addVisited,
  getVisitedSet,
  addLocalLandmark,
  getAllLocalLandmarks,
  getStats,
  exportData,
  importData
} from './storage.js';

let map;
let markers;
let userMarker = null;

export async function initMap() {
  map = L.map('map').setView([20, 0], 3);

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    { maxZoom: 19 }
  ).addTo(map);

  markers = L.markerClusterGroup();
  map.addLayer(markers);

  map.on('contextmenu', onMapRightClick);

  document.getElementById('locate-btn').onclick = locateUser;

  setupExportImport();

  await loadLandmarks();
  await updateStats();
}

/* ---------- Load Landmarks ---------- */

async function loadLandmarks() {
  markers.clearLayers();

  const res = await fetch('./data/landmarks.json');
  const global = await res.json();
  const local = await getAllLocalLandmarks();
  const visitedSet = await getVisitedSet();

  [...global, ...local].forEach(place => {
    if (!visitedSet.has(place.id)) return;

    const marker = L.marker(
      [place.lat, place.lng],
      { icon: visitedIcon() }
    ).bindPopup(place.name);

    markers.addLayer(marker);
  });
}

/* ---------- Local Add ---------- */

async function onMapRightClick(e) {
  const name = prompt("Name this place:");
  if (!name) return;

  const place = {
    id: `local_${Date.now()}`,
    name,
    lat: e.latlng.lat,
    lng: e.latlng.lng
  };

  await addLocalLandmark(place);
  await addVisited(place.id);

  await loadLandmarks();
  await updateStats();
}

/* ---------- Locate (Red Marker) ---------- */

function locateUser() {
  map.locate({ enableHighAccuracy: true });

  map.on('locationfound', e => {
    map.setView(e.latlng, 13);

    if (!userMarker) {
      userMarker = L.marker(
        e.latlng,
        { icon: userLocationIcon() }
      ).addTo(map);
    } else {
      userMarker.setLatLng(e.latlng);
    }
  });
}

/* ---------- Export / Import ---------- */

function setupExportImport() {
  document.getElementById('export-btn').onclick = async () => {
    const data = await exportData();
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'myfootprints-backup.json';
    a.click();
  };

  const fileInput = document.getElementById('import-file');

  document.getElementById('import-btn').onclick = () =>
    fileInput.click();

  fileInput.onchange = async e => {
    const file = e.target.files[0];
    const text = await file.text();
    await importData(JSON.parse(text));
    location.reload();
  };
}

/* ---------- Stats ---------- */

async function updateStats() {
  const stats = await getStats();
  document.getElementById('stats').innerText =
    `Visited: ${stats.visited} | Custom: ${stats.local}`;
}

/* ---------- Icons ---------- */

function visitedIcon() {
  return L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    iconSize: [25,41],
    iconAnchor: [12,41],
    shadowUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
  });
}

function userLocationIcon() {
  return L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25,41],
    iconAnchor: [12,41],
    shadowUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
  });
}
