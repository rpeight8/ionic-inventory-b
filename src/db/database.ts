import sqlite3 from 'sqlite3';
import { Database } from 'sqlite3';

const db: Database = new sqlite3.Database(':memory:');

db.serialize(() => {
  // Create the tools table
  db.run(
    'CREATE TABLE tools (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, quantity INTEGER)'
  );

  // Create the toolbox table
  db.run(
    'CREATE TABLE toolboxes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
  );

  // Create the junction table to link tools and toolboxes
  db.run(
    `CREATE TABLE toolbox_tools (
      toolbox_id INTEGER,
      tool_id INTEGER,
      FOREIGN KEY(toolbox_id) REFERENCES toolboxes(id),
      FOREIGN KEY(tool_id) REFERENCES tools(id),
      PRIMARY KEY (toolbox_id, tool_id)
    )`
  );
});

export default db;
