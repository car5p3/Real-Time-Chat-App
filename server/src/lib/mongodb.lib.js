import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

export const connectDB = async () => {
  try {
    const db = process.env.MONGODB_URI;
    await mongoose.connect(db);
    // console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};