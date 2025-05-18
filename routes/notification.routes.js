import express from "express";
import { 
    sendNotification, 
    getUserNotifications 
} from "../controllers/notification.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/notifications", isAuthenticated, sendNotification);

router.get("/users/:id/notifications", isAuthenticated, getUserNotifications);

export default router;
