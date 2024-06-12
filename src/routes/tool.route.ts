import express from 'express';
import {
  createToolHandler,
  addToolToToolboxHandler,
  getToolsInToolboxHandler,
  getAllToolsHandler,
} from '../controllers/tool.controller';
import { getAllTools } from '../models/tool.model';

const router = express.Router();

router.post('/', createToolHandler);
router.post('/add', addToolToToolboxHandler);
router.get('/:toolboxId', getToolsInToolboxHandler);
router.get('/', getAllToolsHandler);

export default router;
