import { createTool } from '../models/tool.model';
import { createToolbox } from '../models/toolbox.model';
import { addToolToToolbox } from '../models/toolboxTool.model';

const populateDatabase = async () => {
  try {
    // Create sample tools
    await createTool('Hammer', 10);
    await createTool('Screwdriver', 20);
    await createTool('Wrench', 15);

    // Create sample toolboxes
    await createToolbox('Carpenter Toolbox');
    await createToolbox('Electrician Toolbox');

    // Get tool and toolbox IDs (assuming IDs are 1, 2, 3 for tools and 1, 2 for toolboxes)
    const toolIds = [1, 2, 3];
    const toolboxIds = [1, 2];

    // Add tools to toolboxes
    for (const toolboxId of toolboxIds) {
      for (const toolId of toolIds) {
        await addToolToToolbox(toolboxId, toolId);
      }
    }

    console.log('Database populated successfully.');
  } catch (err) {
    console.error('Error populating database:', err);
  }
};

export default populateDatabase;
