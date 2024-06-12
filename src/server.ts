import app from './app';
import populateDatabase from './scripts/populateDatabase';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await populateDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
};

startServer();
