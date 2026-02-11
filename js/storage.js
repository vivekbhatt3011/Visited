export const db = new Dexie('MyFootprintsDB');

db.version(3).stores({
  visited: 'id, visitedAt',
  local: 'id, name, lat, lng, createdAt'
});

/* ---------- Visited ---------- */

export async function addVisited(id) {
  return db.visited.put({ id, visitedAt: Date.now() });
}

export async function removeVisited(id) {
  return db.visited.delete(id);
}

export async function getVisitedSet() {
  const all = await db.visited.toArray();
  return new Set(all.map(v => v.id));
}

/* ---------- Local ---------- */

export async function addLocalLandmark(place) {
  return db.local.put({
    ...place,
    createdAt: Date.now()
  });
}

export async function getAllLocalLandmarks() {
  return db.local.toArray();
}

/* ---------- Export / Import ---------- */

export async function exportData() {
  return {
    visited: await db.visited.toArray(),
    local: await db.local.toArray()
  };
}

export async function importData(data) {
  await db.transaction('rw', db.visited, db.local, async () => {
    await db.visited.bulkPut(data.visited);
    await db.local.bulkPut(data.local);
  });
}

/* ---------- Stats ---------- */

export async function getStats() {
  return {
    visited: await db.visited.count(),
    local: await db.local.count()
  };
}