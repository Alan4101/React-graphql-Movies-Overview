import mongoose from "mongoose";
import * as dotenv from "dotenv";

export class MongoDBConnect {
  private dbConnection;
  constructor() {
    this.dbConnection = this.initializeDBConnection();
  }
  async initializeDBConnection() {
    dotenv.config();
    return mongoose.connect(process.env.MONGO_URL!, (error) => {
      if (error) {
        console.error("Connection to DB failed");
      } else {
        console.log("Connection to DB was successful");
      }
    });
  }
  
}
