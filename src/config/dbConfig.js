import Dexie from 'dexie';

const db = new Dexie('db');
db.version(1).stores({
    pd: `flagStr`
});

export default db;