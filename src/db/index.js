import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

dotenv.config();

// Basic environment validation to give clearer errors at startup
const requiredVars = ['MONGODB_URL', 'PORT'];
const missing = requiredVars.filter((v) => !process.env[v]);
if (missing.length) {
  console.error(
    `Missing required environment variable(s): ${missing.join(', ')}`
  );
  console.error(
    'Please add them to your .env file (see .env.example or Atlas connection string).'
  );
  process.exit(1);
}

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log('Connected to DB');
    console.log(`Connected to DB: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('Error connecting to DB:', error);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectDB;
