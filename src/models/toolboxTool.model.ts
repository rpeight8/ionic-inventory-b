import db from '../db/database';

export const addToolToToolbox = (
  toolboxId: number,
  toolId: number
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO toolbox_tools (toolbox_id, tool_id) VALUES (?, ?)',
      [toolboxId, toolId],
      function (err) {
        if (err) {
          return reject(err);
        }
        resolve();
      }
    );
  });
};
