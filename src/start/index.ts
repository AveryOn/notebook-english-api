import express from 'express';
import { Client } from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';
import { isValidRestMethod, isValidRestPath } from '../app/validators/kernel.validators';
import type { Route, apiMethods } from '../types/core_types/api.types';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


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

routes.forEach(({ path, method, handler }: Route) => {
    const availableRestMethods = ['get', 'post', 'put', 'delete', 'patch'];
    // Блок проверок на ошибки
    if(!isValidRestMethod(method, availableRestMethods)) throw `"${method}" - не допустимый URL-метод`;
    if(!isValidRestPath(path)) throw `недопустимый формат url-пути - "${path}"`;
    if(!handler) throw `Для маршрута - "[${method}] > ${path}" не определен обработчик пути`;

    // Инициализация маршрута из списка маршрутов Если валидации прошли успешно
    app[method.toLowerCase() as apiMethods](path, async (request, response) => {
        try {
            await handler({ request, response });
        } catch (err) {
            console.error(`[${method.toUpperCase()}] => ${path} - ERROR => `, err);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});