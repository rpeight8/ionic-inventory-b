// src/database.ts
import sqlite3 from "sqlite3";
import { Database } from "sqlite3";

const db: Database = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(
    "CREATE TABLE tools (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, quantity INTEGER)"
  );
});

export default db;
