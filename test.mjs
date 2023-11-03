import Database from 'better-sqlite3';
import path from 'path'
const p = process.cwd()
const db = new Database(path.join(p, 'database.db'), { verbose: console.log });
console.log(db,'???;;;--')