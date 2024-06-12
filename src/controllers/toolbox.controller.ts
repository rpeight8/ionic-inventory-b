import { Request, Response } from 'express';
import { createToolbox, getAllToolboxes } from '../models/toolbox.model';
import { getToolsInToolbox } from '../models/tool.model';

export const createToolboxHandler = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    await createToolbox(name);
    res.status(201).send('Toolbox created');
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    else res.status(500).send('An error occurred');
  }
};

export const getToolboxesHandler = async (req: Request, res: Response) => {
  try {
    const toolboxes = await getAllToolboxes();
    const toolboxesWithTools = await Promise.all(
      toolboxes.map(async (toolbox) => {
        const tools = await getToolsInToolbox(+toolbox.id);
        return { ...toolbox, tools };
      })
    );
    res.status(200).json(toolboxesWithTools);
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    else res.status(500).send('An error occurred');
  }
};
