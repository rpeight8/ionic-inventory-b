import express from 'express';
import cors from 'cors';
import toolboxRoutes from './routes/toolbox.route';
import toolRoutes from './routes/tool.route';
import utilRoutes from './routes/util.route';

const app = express();

app.use(
  cors({
    origin: [
      'capacitor://localhost',
      'ionic://localhost',
      'http://localhost',
      'http://localhost:8080',
      'http://localhost:8100',
    ], // Allow only this origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
  })
);

app.use(express.json());

app.use('/toolboxes', toolboxRoutes);
app.use('/tools', toolRoutes);
app.use('/utils', utilRoutes);

export default app;
