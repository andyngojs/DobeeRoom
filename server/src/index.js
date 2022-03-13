import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/users.js';

dotenv.config();
const app = express();
const port = process.env.PORT;
const url = process.env.DATABASE_URL;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.use('/api', userRouter);

mongoose.connect(url, { useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
        app.listen(port, () => {
            console.log(`Your app running on http://localhost:${port}`);
        });
    }).catch((error) => {
        console.log("Message: ", error);
    });

