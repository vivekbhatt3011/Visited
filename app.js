// ─── STORAGE ──────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'travel-map-v4';

function load() {
  try {
    const d = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    pins = d.pins || [];
    visitedLandmarks = new Set(d.visited || []);
  } catch {}
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      pins,
      visited: [...visitedLandmarks],
    }));
  } catch {}
}

// ─── STATE ────────────────────────────────────────────────────────────────────
let pins = [];
let visitedLandmarks = new Set();
let sidebarOpen = false;
let pendingPin = null;
let currentLandmark = null;
let currentViewPin = null;
let selectedCat = 'other';
let lmMarkers = {};
let pinMarkers = {};
let currentLayer = 'standard';

// ─── MAP SETUP ────────────────────────────────────────────────────────────────
const map = L.map('map', { zoomControl: false, attributionControl: true }).setView([20, 0], 2);

const layers = {
  // OpenStreetMap Standard — fully open source, shows roads, lakes, rivers, towns
  standard: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }),
  // OSM Humanitarian — best for local landmarks, villages, waterways in India
  humanitarian: L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Humanitarian OpenStreetMap Team',
    maxZoom: 20,
  }),
  // OpenTopoMap — open source topographic, great for hills, lakes, elevation
  terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://opentopomap.org">OpenTopoMap</a> | © OpenStreetMap contributors',
    maxZoom: 17,
  }),
  // Stadia Alidade Smooth — clean open source base map
  smooth: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://stadiamaps.com/">Stadia Maps</a> | © OpenStreetMap contributors',
    maxZoom: 20,
  }),
  // Esri Satellite — best satellite imagery (free tier, no key needed)
  satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri, Maxar, Earthstar Geographics',
    maxZoom: 19,
  }),
};

layers.standard.addTo(map);
L.control.zoom({ position: 'bottomright' }).addTo(map);

// ─── MAP CLICK → ADD PIN ──────────────────────────────────────────────────────
map.on('click', (e) => {
  pendingPin = { lat: e.latlng.lat, lng: e.latlng.lng };
  document.getElementById('pin-note').value = '';
  selectedCat = 'other';
  renderCatGrid();
  document.getElementById('pin-modal').classList.remove('hidden');
});

// ─── LAYER SWITCHING ──────────────────────────────────────────────────────────
function switchLayer(name) {
  Object.values(layers).forEach(l => map.removeLayer(l));
  layers[name].addTo(map);
  currentLayer = name;
  ['standard', 'humanitarian', 'terrain', 'smooth', 'satellite'].forEach(n => {
    const el = document.getElementById('lt-' + n);
    if (el) el.classList.toggle('active', n === name);
  });
}

// ─── LANDMARK MARKERS ─────────────────────────────────────────────────────────
function regionColor(region) {
  const map = {
    'india':       '#ff9f1c',
    'europe':      '#74c0fc',
    'americas':    '#69db7c',
    'africa':      '#ffd43b',
    'middle-east': '#f783ac',
    'asia':        '#da77f2',
    'oceania':     '#4dd0e1',
    'world':       '#FFD700',
  };
  return map[region] || '#FFD700';
}

function makeLmIcon(lm) {
  const visited = visitedLandmarks.has(lm.id);
  const isIndia = lm.region === 'india';
  const size = visited ? 32 : 24;
  const glowColor = regionColor(lm.region);
  const bg = visited
    ? `radial-gradient(circle, ${glowColor}ee, ${glowColor}99)`
    : `rgba(200,200,200,.1)`;
  const border = visited ? glowColor : `rgba(200,200,200,.3)`;

  return L.divIcon({
    className: '',
    html: `<div style="
      width:${size}px; height:${size}px; border-radius:50%;
      background:${bg}; border:2px solid ${border};
      display:flex; align-items:center; justify-content:center;
      font-size:${visited ? 16 : 12}px;
      box-shadow:${visited ? `0 0 18px ${glowColor}88` : 'none'};
      position:relative; cursor:pointer;">
      ${lm.emoji}
      ${visited ? `<div style="position:absolute;top:-3px;right:-3px;width:10px;height:10px;
        border-radius:50%;background:#52b788;border:1.5px solid #0f0f17"></div>` : ''}
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function renderLandmarkMarkers() {
  ALL_LANDMARKS.forEach(lm => {
    if (lmMarkers[lm.id]) {
      lmMarkers[lm.id].setIcon(makeLmIcon(lm));
    } else {
      const m = L.marker([lm.lat, lm.lng], { icon: makeLmIcon(lm), zIndexOffset: 100 }).addTo(map);
      m.on('click', (e) => { L.DomEvent.stopPropagation(e); openLmModal(lm); });
      lmMarkers[lm.id] = m;
    }
  });
}

// ─── PIN MARKERS ──────────────────────────────────────────────────────────────
function makePinIcon(pin) {
  const cat = CATS[pin.category] || CATS.other;
  return L.divIcon({
    className: '',
    html: `<div style="position:relative;width:28px;height:36px;">
      <div style="width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);
        background:${cat.color};border:2px solid rgba(255,255,255,.25);
        box-shadow:0 0 10px ${cat.color}88;"></div>
      <div style="position:absolute;top:4px;left:50%;transform:translateX(-50%);font-size:12px;">${cat.emoji}</div>
    </div>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
  });
}

function renderPinMarkers() {
  Object.values(pinMarkers).forEach(m => map.removeLayer(m));
  pinMarkers = {};
  pins.forEach(pin => {
    const m = L.marker([pin.lat, pin.lng], { icon: makePinIcon(pin), zIndexOffset: 200 }).addTo(map);
    m.on('click', (e) => { L.DomEvent.stopPropagation(e); openViewModal(pin); });
    pinMarkers[pin.id] = m;
  });
}

// ─── LANDMARK MODAL ───────────────────────────────────────────────────────────
function openLmModal(lm) {
  currentLandmark = lm;
  const visited = visitedLandmarks.has(lm.id);
  document.getElementById('lm-emoji').textContent = lm.emoji;
  document.getElementById('lm-name').textContent = lm.name;
  document.getElementById('lm-country').textContent = '📍 ' + lm.country;

  const sb = document.getElementById('lm-status');
  sb.style.cssText = `background:${visited ? '#0f2e18' : '#1e1e2e'};border:1px solid ${visited ? '#52b788' : '#252535'};color:${visited ? '#52b788' : '#6b6b88'}`;
  sb.textContent = visited ? "✓ You've been here!" : 'Not visited yet';

  const tb = document.getElementById('lm-toggle-btn');
  tb.className = `mbtn ${visited ? 'mbtn-ghost' : 'mbtn-primary'}`;
  if (visited) { tb.style.borderColor = '#444'; tb.style.color = '#888'; }
  else { tb.style.borderColor = ''; tb.style.color = ''; }
  tb.textContent = visited ? 'Mark as Not Visited' : '✓ Mark as Visited';

  document.getElementById('lm-modal').classList.remove('hidden');
}

function closeLmModal() {
  document.getElementById('lm-modal').classList.add('hidden');
  currentLandmark = null;
}

function toggleCurrentLandmark() {
  if (!currentLandmark) return;
  if (visitedLandmarks.has(currentLandmark.id)) visitedLandmarks.delete(currentLandmark.id);
  else visitedLandmarks.add(currentLandmark.id);
  save();
  renderLandmarkMarkers();
  updateStats();
  renderSidebar();
  closeLmModal();
}

// ─── ADD PIN MODAL ────────────────────────────────────────────────────────────
function renderCatGrid() {
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = Object.entries(CATS).map(([id, c]) => `
    <button class="cat-btn ${selectedCat === id ? 'active' : ''}"
      style="${selectedCat === id ? `background:${c.color}33;border-color:${c.color};color:${c.color}` : ''}"
      onclick="selectCat('${id}', this, '${c.color}')">
      ${c.emoji} ${c.label}
    </button>`).join('');
}

function selectCat(id, btn, color) {
  selectedCat = id;
  document.querySelectorAll('.cat-btn').forEach(b => { b.classList.remove('active'); b.style.cssText = ''; });
  btn.classList.add('active');
  btn.style.background = color + '33';
  btn.style.borderColor = color;
  btn.style.color = color;
}

function closePinModal() {
  document.getElementById('pin-modal').classList.add('hidden');
  pendingPin = null;
}

function confirmAddPin() {
  if (!pendingPin) return;
  const pin = {
    id: Math.random().toString(36).slice(2) + Date.now().toString(36),
    lat: pendingPin.lat,
    lng: pendingPin.lng,
    note: document.getElementById('pin-note').value.trim(),
    category: selectedCat,
    date: Date.now(),
  };
  pins.push(pin);
  save();
  renderPinMarkers();
  updateStats();
  renderSidebar();
  closePinModal();
}

// ─── VIEW PIN MODAL ───────────────────────────────────────────────────────────
function openViewModal(pin) {
  currentViewPin = pin;
  const cat = CATS[pin.category] || CATS.other;
  document.getElementById('view-title').textContent = cat.emoji + ' ' + cat.label;
  document.getElementById('view-date').textContent = new Date(pin.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
  const nd = document.getElementById('view-note');
  if (pin.note) { nd.style.display = 'block'; nd.textContent = '"' + pin.note + '"'; }
  else { nd.style.display = 'none'; }
  document.getElementById('view-modal').classList.remove('hidden');
}

function closeViewModal() {
  document.getElementById('view-modal').classList.add('hidden');
  currentViewPin = null;
}

function deleteCurrentPin() {
  if (!currentViewPin) return;
  pins = pins.filter(p => p.id !== currentViewPin.id);
  save();
  renderPinMarkers();
  updateStats();
  renderSidebar();
  closeViewModal();
}

// ─── TOGGLE SIDEBAR ───────────────────────────────────────────────────────────
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  document.getElementById('sidebar').classList.toggle('hidden', !sidebarOpen);
  document.getElementById('btn-sidebar').classList.toggle('active', sidebarOpen);
  if (sidebarOpen) renderSidebar();
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function updateStats() {
  document.getElementById('header-sub').textContent =
    `${pins.length} pin${pins.length !== 1 ? 's' : ''} · ${visitedLandmarks.size}/${ALL_LANDMARKS.length} landmarks`;
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function renderSidebar() {
  if (!sidebarOpen) return;
  const sb = document.getElementById('sidebar');

  const regions = [
    { key: 'india',       label: '🇮🇳 India',       color: '#ff9f1c', landmarks: INDIA_LANDMARKS },
    { key: 'europe',      label: '🇪🇺 Europe',       color: '#74c0fc', landmarks: EUROPE_LANDMARKS },
    { key: 'americas',    label: '🌎 Americas',      color: '#69db7c', landmarks: AMERICAS_LANDMARKS },
    { key: 'africa',      label: '🌍 Africa',        color: '#ffd43b', landmarks: AFRICA_LANDMARKS },
    { key: 'middle-east', label: '🕌 Middle East',   color: '#f783ac', landmarks: MIDDLE_EAST_LANDMARKS },
    { key: 'asia',        label: '🌏 Asia',          color: '#da77f2', landmarks: ASIA_LANDMARKS },
    { key: 'oceania',     label: '🦘 Oceania',       color: '#4dd0e1', landmarks: OCEANIA_LANDMARKS },
  ];

  const lmItem = (lm, visited, color) => `
    <div class="list-item" style="border-left:3px solid ${visited ? color : '#2a2a3a'};${visited ? '' : 'opacity:.6'}"
      onclick="flyToLandmark('${lm.id}')">
      <span style="font-size:${visited ? 17 : 14}px">${lm.emoji}</span>
      <div>
        <div class="lm-name" style="color:${visited ? color : '#aaa'}">${lm.name}</div>
        <div class="lm-country">${lm.country}</div>
      </div>
      ${visited ? `<span class="lm-check">✓</span>` : ''}
    </div>`;

  const totalVisited = visitedLandmarks.size;
  const totalAll = ALL_LANDMARKS.length;

  sb.innerHTML = `
    <div class="stat-box">
      <div class="sidebar-section-title">Overall Progress</div>
      <div class="stat-row">
        <div><div class="stat-num" style="color:#e63946">${pins.length}</div><div class="stat-label">custom pins</div></div>
        <div><div class="stat-num" style="color:#f4a261">${totalVisited}</div><div class="stat-label">of ${totalAll} landmarks</div></div>
      </div>
      <div class="progress-bar-bg" style="margin-bottom:10px">
        <div class="progress-bar-fill" style="width:${(totalVisited/totalAll*100).toFixed(1)}%;background:linear-gradient(90deg,#e63946,#f4a261)"></div>
      </div>
      ${regions.map(r => {
        const v = r.landmarks.filter(lm => visitedLandmarks.has(lm.id)).length;
        const t = r.landmarks.length;
        return `
          <div style="font-size:10px;color:var(--muted);margin-bottom:3px;margin-top:6px">${r.label}: ${v}/${t}</div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width:${(v/t*100).toFixed(1)}%;background:${r.color}"></div>
          </div>`;
      }).join('')}
    </div>

    ${regions.map(r => {
      const visited = r.landmarks.filter(lm => visitedLandmarks.has(lm.id));
      const unvisited = r.landmarks.filter(lm => !visitedLandmarks.has(lm.id));
      return `
        ${visited.length > 0 ? `
          <div class="sidebar-section-title" style="color:${r.color}">✅ ${r.label} Visited (${visited.length})</div>
          ${visited.map(lm => lmItem(lm, true, r.color)).join('')}` : ''}
        <div class="sidebar-section-title">📍 ${r.label} – Still to Visit (${unvisited.length})</div>
        ${unvisited.map(lm => lmItem(lm, false, r.color)).join('')}
      `;
    }).join('')}

    ${pins.length > 0 ? `
      <div class="sidebar-section-title">📍 Custom Pins (${pins.length})</div>
      ${[...pins].reverse().map(pin => {
        const cat = CATS[pin.category] || CATS.other;
        return `<div class="list-item" style="border-left:3px solid ${cat.color}" onclick="flyToPin('${pin.id}')">
          <span style="font-size:16px">${cat.emoji}</span>
          <div>
            <div class="lm-name" style="color:${cat.color}">${cat.label}</div>
            ${pin.note ? `<div class="lm-country" style="font-style:italic">"${pin.note.slice(0,38)}${pin.note.length>38?'…':''}"</div>` : '<div class="lm-country">No note</div>'}
          </div>
          <span style="font-size:9px;color:var(--muted);margin-left:auto">
            ${new Date(pin.date).toLocaleDateString('en-US',{month:'short',day:'numeric'})}
          </span>
        </div>`;
      }).join('')}` : ''}

    ${pins.length===0 && visitedLandmarks.size===0
      ? `<div style="color:var(--muted);font-size:12px;text-align:center;padding:30px 10px">No places yet.<br>Click the map to start!</div>`
      : ''}
  `;
}

function flyToLandmark(id) {
  const lm = ALL_LANDMARKS.find(l => l.id === id);
  if (!lm) return;
  map.flyTo([lm.lat, lm.lng], 13, { duration: 1.4 });
  setTimeout(() => openLmModal(lm), 900);
}

function flyToPin(id) {
  const pin = pins.find(p => p.id === id);
  if (!pin) return;
  map.flyTo([pin.lat, pin.lng], 14, { duration: 1.2 });
  setTimeout(() => openViewModal(pin), 700);
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────
let searchDebounceTimer = null;
let searchMarker = null;

// First search our own landmarks list, then fall back to Nominatim OSM geocoder
function onSearchInput() {
  const q = document.getElementById('search-input').value.trim();
  clearTimeout(searchDebounceTimer);
  if (q.length < 2) { closeSearchResults(); return; }
  searchDebounceTimer = setTimeout(() => runSearch(q), 350);
}

function onSearchKey(e) {
  if (e.key === 'Enter') triggerSearch();
  if (e.key === 'Escape') closeSearchResults();
}

function triggerSearch() {
  const q = document.getElementById('search-input').value.trim();
  if (q.length < 1) return;
  runSearch(q);
}

function runSearch(q) {
  const ql = q.toLowerCase();
  const box = document.getElementById('search-results');
  box.classList.remove('hidden');

  // 1. Search our own landmarks first (instant)
  const localMatches = ALL_LANDMARKS.filter(lm =>
    lm.name.toLowerCase().includes(ql) ||
    lm.country.toLowerCase().includes(ql)
  ).slice(0, 5);

  // Show loading + local results immediately
  showSearchResults(localMatches, true);

  // 2. Also query Nominatim (OpenStreetMap geocoder — open source, no key)
  fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=7&addressdetails=1`, {
    headers: { 'Accept-Language': 'en', 'User-Agent': 'TravelMapApp/1.0' }
  })
  .then(r => r.json())
  .then(data => {
    const osmResults = data.map(item => ({
      name: item.display_name.split(',')[0],
      subtext: item.display_name.split(',').slice(1, 3).join(',').trim(),
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lon),
      type: item.type,
      emoji: nominatimEmoji(item.class, item.type),
      isOsm: true,
    }));
    showSearchResults(localMatches, false, osmResults);
  })
  .catch(() => showSearchResults(localMatches, false, []));
}

function nominatimEmoji(cls, type) {
  if (cls === 'water' || type === 'lake' || type === 'river') return '💧';
  if (cls === 'natural' && type === 'peak') return '🏔️';
  if (cls === 'natural' && type === 'waterfall') return '🌊';
  if (cls === 'natural') return '🌿';
  if (cls === 'historic' || type === 'castle' || type === 'fort') return '🏰';
  if (cls === 'tourism' && type === 'museum') return '🏛️';
  if (cls === 'tourism' && type === 'hotel') return '🏨';
  if (cls === 'amenity' && type === 'place_of_worship') return '🛕';
  if (cls === 'amenity' && type === 'restaurant') return '🍽️';
  if (cls === 'leisure' && type === 'park') return '🌿';
  if (cls === 'boundary' || type === 'administrative') return '📍';
  if (cls === 'place') return '🏘️';
  if (cls === 'highway') return '🛣️';
  return '📍';
}

function showSearchResults(localMatches, loading, osmResults = []) {
  const box = document.getElementById('search-results');
  box.classList.remove('hidden');
  let html = '';

  // Local landmark matches
  if (localMatches.length > 0) {
    html += `<div style="padding:6px 14px 4px;font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted)">Your Landmarks</div>`;
    html += localMatches.map(lm => `
      <div class="search-result-item" onclick="flyToSearchResult(${lm.lat}, ${lm.lng}, '${lm.name.replace(/'/g,"\\'")}', '${lm.emoji}')">
        <span class="sri-icon">${lm.emoji}</span>
        <div>
          <div class="sri-name">${lm.name}</div>
          <div class="sri-sub">${lm.country}</div>
        </div>
      </div>`).join('');
  }

  // OSM results
  if (loading) {
    html += `<div class="search-loading"><div class="search-spinner"></div>Searching OpenStreetMap…</div>`;
  } else if (osmResults.length > 0) {
    html += `<div style="padding:6px 14px 4px;font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted)">OpenStreetMap Results</div>`;
    html += osmResults.map(r => `
      <div class="search-result-item" onclick="flyToSearchResult(${r.lat}, ${r.lng}, '${r.name.replace(/'/g,"\\'")}', '${r.emoji}')">
        <span class="sri-icon">${r.emoji}</span>
        <div>
          <div class="sri-name">${r.name}</div>
          <div class="sri-sub">${r.subtext}</div>
        </div>
      </div>`).join('');
  } else if (!loading && localMatches.length === 0) {
    html += `<div class="search-no-results">No results found. Try a different name.</div>`;
  }

  box.innerHTML = html;
}

function flyToSearchResult(lat, lng, name, emoji) {
  closeSearchResults();
  document.getElementById('search-input').value = name;

  // Remove old search marker
  if (searchMarker) { map.removeLayer(searchMarker); searchMarker = null; }

  // Drop an animated marker
  const icon = L.divIcon({
    className: '',
    html: `<div class="search-marker-dot"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

  searchMarker = L.marker([lat, lng], { icon, zIndexOffset: 1500 }).addTo(map);
  searchMarker.bindPopup(`
    <div style="font-family:'Lato',sans-serif;font-size:13px;color:#eae6da;padding:4px 0">
      <strong style="color:#e63946">${emoji} ${name}</strong>
    </div>
  `, { className: 'dark-popup' }).openPopup();

  map.flyTo([lat, lng], 14, { duration: 1.6 });
}

function closeSearchResults() {
  document.getElementById('search-results').classList.add('hidden');
}

// Close search results when clicking outside
document.addEventListener('click', (e) => {
  if (!document.getElementById('search-wrap').contains(e.target)) {
    closeSearchResults();
  }
});

// ─── SHARE ────────────────────────────────────────────────────────────────────
function shareMap() {
  const indiaCount = INDIA_LANDMARKS.filter(l => visitedLandmarks.has(l.id)).length;
  const text = `I've visited ${pins.length} places & ${visitedLandmarks.size}/${ALL_LANDMARKS.length} world landmarks (${indiaCount} in India)! 🗺️🇮🇳`;
  navigator.clipboard.writeText(text).catch(() => {});
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── CLOSE MODALS ON OVERLAY CLICK ───────────────────────────────────────────
['lm-modal', 'pin-modal', 'view-modal'].forEach(id => {
  document.getElementById(id).addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      if (id === 'lm-modal') closeLmModal();
      else if (id === 'pin-modal') closePinModal();
      else closeViewModal();
    }
  });
});

// ─── GEOLOCATION ─────────────────────────────────────────────────────────────
let myLocationMarker = null;
let myLocationAccuracyCircle = null;
let watchId = null;

function showGeoBar(text, spinning = true) {
  const bar = document.getElementById('geo-bar');
  bar.querySelector('.geo-spinner').style.display = spinning ? 'block' : 'none';
  document.getElementById('geo-bar-text').textContent = text;
  bar.classList.remove('hidden');
}

function hideGeoBar(delay = 0) {
  setTimeout(() => document.getElementById('geo-bar').classList.add('hidden'), delay);
}

function placeMyLocationMarker(lat, lng, accuracy) {
  if (myLocationMarker)       { map.removeLayer(myLocationMarker);       myLocationMarker = null; }
  if (myLocationAccuracyCircle) { map.removeLayer(myLocationAccuracyCircle); myLocationAccuracyCircle = null; }

  myLocationAccuracyCircle = L.circle([lat, lng], {
    radius: accuracy, color: '#e63946', fillColor: '#e63946',
    fillOpacity: 0.08, weight: 1, dashArray: '4 4',
  }).addTo(map);

  const icon = L.divIcon({
    className: '',
    html: `<div class="my-location-marker"><div class="ring"></div><div class="dot"></div></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });

  myLocationMarker = L.marker([lat, lng], { icon, zIndexOffset: 1000 }).addTo(map);
  myLocationMarker.bindPopup(`
    <div style="font-family:'Lato',sans-serif;font-size:13px;color:#eae6da;padding:4px 0">
      <strong style="color:#e63946">📍 You are here</strong><br>
      <span style="font-size:11px;color:#6b6b88">Accuracy: ±${Math.round(accuracy)}m</span>
    </div>
  `, { className: 'dark-popup' });

  document.getElementById('leg-myloc').style.display = 'flex';
}

function locateMe() {
  if (!navigator.geolocation) {
    showGeoBar('⚠️ Geolocation not supported by your browser', false);
    hideGeoBar(3000);
    return;
  }
  const btn = document.getElementById('btn-locate');
  btn.textContent = '⏳ Locating…';
  btn.disabled = true;
  showGeoBar('Detecting your location…', true);

  if (watchId !== null) { navigator.geolocation.clearWatch(watchId); watchId = null; }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude: lat, longitude: lng, accuracy } = pos.coords;
      placeMyLocationMarker(lat, lng, accuracy);
      map.flyTo([lat, lng], 13, { duration: 1.8 });
      showGeoBar(`✓ Located! Accuracy ±${Math.round(accuracy)}m`, false);
      hideGeoBar(3000);
      btn.textContent = '🔴 You are here';
      btn.classList.add('active');
      btn.disabled = false;
      watchId = navigator.geolocation.watchPosition(
        (p) => placeMyLocationMarker(p.coords.latitude, p.coords.longitude, p.coords.accuracy),
        null,
        { enableHighAccuracy: true, maximumAge: 10000 }
      );
    },
    (err) => {
      const msgs = {
        1: '⚠️ Location access denied. Please allow in browser settings.',
        2: '⚠️ Location unavailable. Try again.',
        3: '⚠️ Location request timed out.',
      };
      showGeoBar(msgs[err.code] || '⚠️ Could not get location.', false);
      hideGeoBar(4000);
      btn.textContent = '📍 Locate Me';
      btn.disabled = false;
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
load();
renderLandmarkMarkers();
renderPinMarkers();
updateStats();

// Auto-locate on startup
if (navigator.geolocation) {
  showGeoBar('Detecting your location…', true);
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude: lat, longitude: lng, accuracy } = pos.coords;
      placeMyLocationMarker(lat, lng, accuracy);
      map.flyTo([lat, lng], 11, { duration: 2 });
      showGeoBar(`✓ Located! Accuracy ±${Math.round(accuracy)}m`, false);
      hideGeoBar(3000);
      const btn = document.getElementById('btn-locate');
      btn.textContent = '🔴 You are here';
      btn.classList.add('active');
      watchId = navigator.geolocation.watchPosition(
        (p) => placeMyLocationMarker(p.coords.latitude, p.coords.longitude, p.coords.accuracy),
        null,
        { enableHighAccuracy: true, maximumAge: 10000 }
      );
    },
    () => hideGeoBar(0),
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

// Hide hint on first click
let hintHidden = false;
map.on('click', () => {
  if (!hintHidden) { document.getElementById('hint').style.display = 'none'; hintHidden = true; }
});
