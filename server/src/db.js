const mongoose = require('mongoose');
require('dotenv').config();

const DB_NAME = process.env.DATABASE_NAME;
const USER = process.env.USER_NAME;
const PASSWORD = process.env.USER_PASSWORD;

const connectDB = () => {
  return mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@graphql.x25kbvc.mongodb.net/${DB_NAME}`, {useNewUrlParser: true}, err => {
    if(err){
      console.error('Connection to DB failed');
    }else{
      console.log('Connection to DB was successful');
    }
  })
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection failed"));

module.exports = connectDB;