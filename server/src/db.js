import mongoose from 'mongoose';
import * as dotenv from 'dotenv' 
dotenv.config()

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, err => {
    if(err){
      console.error('Connection to DB failed');
    }else{
      console.log('Connection to DB was successful');
    }
  })
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection failed"));

export default connectDB;