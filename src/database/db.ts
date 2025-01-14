import Database from 'better-sqlite3';
import {checkData, exampleData, filename, tables} from './db-config';

const db = new Database(filename);
db.pragma('journal_mode = WAL');

// init tables, use exec only for CREATE TABLE
db.exec(tables);

 const rowCount = (db.prepare(checkData).get() as {count: number}).count;
 if (rowCount === 0) {
   db.exec(exampleData);
   console.log('Inserted example data.');
 } else {
   console.log('Table already populated.');
}

export default db;
