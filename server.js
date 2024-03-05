import { app } from './app.js';
import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const port = 3000;
const server = 'http://localhost';
export const serverAddress = `${server}:${port}`;

const uriDb = process.env.DB_HOST;

const runServer = async () => {
  try {
    const connection = await mongoose.connect(uriDb);
    console.log('Database connection successful');
    app.listen(port, () => {
      console.log('Server running. Use our API on port: 3000');
      console.log('>>> Press Ctrl+C to stop <<<');
    });
  } catch (error) {
    console.log('Cannot connect to MongoDB');
    console.error(error);
    process.exit(1);
  }
};

runServer();