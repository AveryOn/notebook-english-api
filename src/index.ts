import express from 'express';
import { Pool } from 'pg';
require('dotenv').config();

const app = express();
const port = 3000;

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: '',
    password: '',
    port: 5432,
});


app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM your_table');
        res.json(result.rows);
    } catch (err: any) {
        res.status(500).send(err.toString());
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});