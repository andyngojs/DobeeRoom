import express from 'express';
import path from "path";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';

dotenv.config();
const app = express();
const port = process.env.PORT;
const url = process.env.DATABASE_URL;
const __dirname = path.resolve();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
    name: 'DobeeRoom',
    keys: ['dobeeroom'],
    maximumAge: 24 * 60 * 60 * 100
}));

app.use('/api', userRouter);
app.use('/api', postRouter);

mongoose.connect(url, { useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
        app.listen(port, () => {
            console.log(`Your app running on http://localhost:${port}`);
        });
    }).catch((error) => {
        console.log("Message: ", error);
    });

