import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Dobeeteam');
});

app.listen(port, () => {
    console.log(`Your app running on http://localhost:${port}`);
});

