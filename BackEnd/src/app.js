import mongoose from "mongoose";
import express from "express";
import productRouter from "./routes/product";
import userRouter from "./routes/auth";
import categoryRouter from "./routes/category"
import uploadRouter from "./routes/uploadImage"
import cors from 'cors'

const app = express();


app.use(express.json());
app.use(cors())

app.use("/api", productRouter);
app.use("/api",userRouter);
app.use("/api",categoryRouter);
app.use("/api",uploadRouter);

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

export const viteNodeApp = app;
