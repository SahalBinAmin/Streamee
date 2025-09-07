import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import chatRoutes from "./routes/chat.route.js";

const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://streamee.vercel.app", // deployed frontend
    ],
    credentials: true, // allow frontend to send cookies
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/*spalt", (req, res) => {
  app.use("api/auth", authRoutes);
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
