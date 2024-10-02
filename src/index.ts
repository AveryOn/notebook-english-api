import express from 'express';
import { Client } from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
require('dotenv').config();

const app = express();
const port = 3000;


const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: true,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());

const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
    database: process.env.DB_NAME,
});

app.get('/', async (req, res) => {
    try {
        res.json({ data: 'Hello World!' });
    } catch (err: any) {
        res.status(500).send(err.toString());
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});