import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import {
  getRecommendedUsers,
  getMyFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendReqs,
} from "../controllers/user.controller";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUsers).get("/myfriends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router
  .get("/friend-requests", getFriendRequests)
  .get("/outgoint-friend-requests", getOutgoingFriendReqs);

export default router;
