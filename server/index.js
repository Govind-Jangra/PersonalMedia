import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
//MONGOOSE config
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running in  Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
