import express from 'express';
import dotenv from 'dotenv';
import Connect from './config/db.js'
import UserRouter from './routes/UserRoutes.js';
import cors from 'cors';

dotenv.config();

Connect();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
)

app.use('/uploads', express.static('uploads'));

app.use('/', UserRouter)

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})

