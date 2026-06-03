import connectDB from './db/index.js';
import express from 'express';

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 800, () => {
      console.log(`port is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Mongodb connection failed', err);
  });

/*
async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log('Connected to DB');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to DB:', error);
  }
}
*/
