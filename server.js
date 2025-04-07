import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "node:http";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();
const app = express();
const server = createServer(app);
app.use(express.json());
app.use(cors());
app.use("/api/items", itemRoutes);
app.get("/", (req, res) => {
  res.send("API đang chạy!");
});
const PORT = process.env.PORT || 8800;
server.listen(PORT, () => {
  console.log(`Server đang chạy trên PORT: ${PORT}`);
});
