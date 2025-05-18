import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['email', 'sms', 'in-app'],
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['sent', 'pending', 'failed'],
        default: 'pending'
    },
    attempts: {
        type: Number,
        default: 0
    },
    error: {
        type: String,
    },
}, { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);