import express from 'express';
import {
  createToolboxHandler,
  getToolboxesHandler,
} from '../controllers/toolbox.controller';

const router = express.Router();

router.post('/', createToolboxHandler);
router.get('/', getToolboxesHandler);

export default router;
