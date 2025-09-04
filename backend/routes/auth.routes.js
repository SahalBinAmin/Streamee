import express from "express";
import {
  login,
  logout,
  signup,
  onboard,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

// Signup , login , logout , onboard Routes
router
  .post("/signup", signup)
  .post("/login", login)
  .post("/logout", logout)
  .post("/onboard", protectRoute, onboard);

router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export default router;
