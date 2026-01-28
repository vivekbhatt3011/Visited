export const db = new Dexie('MyFootprintsDB');

db.version(2).stores({
  visited: 'id, lat, lng, visitedAt',
  local: 'id, name, lat, lng, createdAt'
});

/* ---------- Visited ---------- */

export async function addVisited(place) {
  return db.visited.put({
    id: place.id,
    lat: place.lat,
    lng: place.lng,
    visitedAt: Date.now()
  });
}

export async function removeVisited(id) {
  return db.visited.delete(id);
}

export async function isVisited(id) {
  return !!(await db.visited.get(id));
}

/* ---------- Local Landmarks ---------- */

export async function addLocalLandmark(place) {
  return db.local.put({
    id: place.id,
    name: place.name,
    lat: place.lat,
    lng: place.lng,
    createdAt: Date.now()
  });
}

export async function getAllLocalLandmarks() {
  return db.local.toArray();
}
