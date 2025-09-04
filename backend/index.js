import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import onboardingRoutes from "./routes/auth.routes.js";
import { protectRoute } from "./middleware/auth.middleware.js";

const PORT = process.env.PORT;
const app = express();
const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // allow frontend to send cookies
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/auth/onboard", onboardingRoutes);
app.use("/me", protectRoute, (req, res) => {
  res.send(req.user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
