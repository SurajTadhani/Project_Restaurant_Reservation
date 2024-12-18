import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservation.route.js';

const app = express();
dotenv.config({ path : "./config/config.env"})

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
  origin: [
    'https://project-restaurant-reservation-frontend.vercel.app',
  
  
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));




// Database Connection
dbConnection()

// Routes
app.use('/api/v1/reservation', reservationRouter)

// Welcome route
app.get("/", (req,res) => {
  res.status(200).json({
    success : true,
    message : "Welcome to Restaurant Reservation API"
  })
})

// Error handling
app.use(errorMiddleware)

export default app;