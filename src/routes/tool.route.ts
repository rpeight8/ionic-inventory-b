import express from 'express';
import {
  createToolHandler,
  addToolToToolboxHandler,
  getToolsInToolboxHandler,
  getToolsInAllToolboxesHandler,
} from '../controllers/tool.controller';

const router = express.Router();

router.post('/', createToolHandler);
router.post('/add', addToolToToolboxHandler);
router.get('/:toolboxId', getToolsInToolboxHandler);
router.get('/', getToolsInAllToolboxesHandler);

export default router;
