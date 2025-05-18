import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

import userRoutes from './routes/user.routes.js';
import notificationRoutes from './routes/notification.routes.js';


dotenv.config({});

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (_, res) => {

    res.status(200).json({ 
        message: "Server is running...",
        success: true
    });
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    
  origin: 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions)); 

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/notification", notificationRoutes);

app.listen(PORT,() => {

  connectDB();
  console.log(`Server is running on port ${PORT}`); 
});





