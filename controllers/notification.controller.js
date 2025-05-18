import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";

export const sendNotification = async (req, res) => {
    try {
        const { userId, type, message } = req.body;

        if (!userId || !type || !message) {
            return res.status(400).json({
                success: false,
                message: "userId, type, and message are required."
            });
        }

        const userExists = await User.findById(userId);
        if (!userExists) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        const notification = await Notification.create({
            userId,
            type,
            message,
            status: "pending"
        });

        return res.status(201).json({
            success: true,
            message: "Notification created successfully.",
            data: notification
        });

    } catch (error) {
        console.error("sendNotification error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error. Try again later."
        });
    }
};

export const getUserNotifications = async (req, res) => {
    try {
        const userId = req.params.id;

        if (req.id !== userId) {
            return res.status(403).json({
                success: false,
                message: "Forbidden: Cannot access other user's notifications."
            });
        }

        const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: notifications
        });

    } catch (error) {
        console.error("getUserNotifications error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error. Try again later."
        });
    }
};
