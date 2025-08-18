import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './db/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRoutes from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservations', reservationRoutes);

dbConnection();

app.use(errorMiddleware);

export default app;