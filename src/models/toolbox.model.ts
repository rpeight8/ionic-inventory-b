import db from '../db/database';
import type { Toolbox } from '../types/toolbox';

export const createToolbox = (name: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO toolboxes (name) VALUES (?)', [name], function (err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

export const getAllToolboxes = (): Promise<Toolbox[]> => {
  return new Promise((resolve, reject) => {
    db.all<Toolbox>('SELECT * FROM toolboxes', [], (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};
