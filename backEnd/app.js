import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbconnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservation.route.js';

const app = express();
dotenv.config({ path : "./config/config.env"})



app.use(cors({
  origin: [
    'https://project-book-sphere.vercel.app',
    process.env.FRONTEND_URL
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use("/",(req,res) => {
  res.status(200).json({
    success : true,
    message : "Welcome to Restaurant Reservation API"
  })
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/reservation', reservationRouter)

dbConnection()


app.use(errorMiddleware)
export default app;