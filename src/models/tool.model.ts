import db from '../db/database';
import type { Tool } from '../types/tool';

export const createTool = (
  title: string,
  quantity: number
): Promise<number> => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO tools (title, quantity) VALUES (?, ?)',
      [title, quantity],
      function (err) {
        if (err) {
          return reject(err);
        }
        // Resolve the promise with the ID of the newly created tool
        resolve(this.lastID);
      }
    );
  });
};

export const getAllTools = (): Promise<Tool[]> => {
  return new Promise((resolve, reject) => {
    db.all<Tool>('SELECT id, title, quantity FROM tools', (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

export const getToolsInToolbox = (toolboxId: number): Promise<Tool[]> => {
  return new Promise((resolve, reject) => {
    db.all<Tool>(
      `SELECT tools.id, tools.title, tools.quantity
       FROM tools
       JOIN toolbox_tools ON tools.id = toolbox_tools.tool_id
       WHERE toolbox_tools.toolbox_id = ?`,
      [toolboxId],
      (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      }
    );
  });
};

export const getToolsInAllToolboxes = (): Promise<Tool[]> => {
  return new Promise((resolve, reject) => {
    db.all<Tool>(
      `SELECT tools.id, tools.title, tools.quantity
       FROM tools
       JOIN toolbox_tools ON tools.id = toolbox_tools.tool_id`,
      [],
      (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      }
    );
  });
};
