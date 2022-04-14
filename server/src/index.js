import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js'

dotenv.config();
const app = express();
const port = process.env.PORT;
const url = process.env.DATABASE_URL;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000}));
app.use(cors());

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

