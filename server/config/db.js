import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const PORT = process.env.PORT || 3001;

const connectToMongo = 
mongoose.connect("mongodb://localhost:27017").then(()=>{
  console.log("Connected to Mongo")
}).catch(()=>{
  console.log("Failed to connect")
})