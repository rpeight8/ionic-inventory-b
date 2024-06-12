import { Request, Response } from 'express';
import { createTool } from '../models/tool.model';
import { addToolToToolbox } from '../models/toolboxTool.model';
import {
  getToolsInToolbox,
  getToolsInAllToolboxes,
} from '../models/tool.model';

export const createToolHandler = async (req: Request, res: Response) => {
  const { title, quantity } = req.body;
  try {
    await createTool(title, quantity);
    res.status(201).send('Tool created');
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    else res.status(500).send('An error occurred');
  }
};

export const addToolToToolboxHandler = async (req: Request, res: Response) => {
  const { toolboxId, toolId } = req.body;
  try {
    await addToolToToolbox(toolboxId, toolId);
    res.status(201).send('Tool added to toolbox');
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    else res.status(500).send('An error occurred');
  }
};

export const getToolsInToolboxHandler = async (req: Request, res: Response) => {
  const { toolboxId } = req.params;
  try {
    const tools = await getToolsInToolbox(parseInt(toolboxId));
    res.status(200).json(tools);
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    else res.status(500).send('An error occurred');
  }
};

export const getToolsInAllToolboxesHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const tools = await getToolsInAllToolboxes();
    res.status(200).json(tools);
  } catch (err) {
    if (err instanceof Error) res.status(500).send(err.message);
    else res.status(500).send('An error occurred');
  }
};
