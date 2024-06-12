import express from 'express';
import toolboxRoutes from './routes/toolbox.route';
import toolRoutes from './routes/tool.route';

const app = express();

app.use(express.json());

app.use('/toolboxes', toolboxRoutes);
app.use('/tools', toolRoutes);

export default app;
