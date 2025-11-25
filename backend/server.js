import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import dishRoutes from "./routes/dishes.js";

dotenv.config();

const app = express();
const server = createServer(app);


const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "PATCH"]
  }
});


app.use(cors());
app.use(express.json());


app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


app.use("/api/dishes", dishRoutes(io));


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


  
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});