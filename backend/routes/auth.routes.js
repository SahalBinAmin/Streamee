import express from "express";
import {
  login,
  logout,
  signup,
  onboard,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

// Signup Route
router.post("/signup", signup);

// Login Route
router.post("/login", login);

// Logout Route
router.post("/logout", logout);

// Onboarding Route
router.post("/onboard", protectRoute, onboard);

export default router;
