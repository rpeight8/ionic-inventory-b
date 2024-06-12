import express from 'express';
import toolboxRoutes from './routes/toolbox.route';
import toolRoutes from './routes/tool.route';
import utilRoutes from './routes/util.route';

const app = express();

app.use(express.json());

app.use('/toolboxes', toolboxRoutes);
app.use('/tools', toolRoutes);
app.use('/utils', utilRoutes);

export default app;
