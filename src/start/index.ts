import express from 'express';
import { syncMiddleware } from './middleware';
import routes from './routes';
import { isValidRestMethod, isValidRestPath } from '../app/validators/kernel.validators';
import type { Route, apiMethods } from '../types/core_types/api.types';
require('dotenv').config();
import '../database/index';
import { migrationsRun } from '../database/migrations';

// migrationsRun();

export const app = express();
syncMiddleware(app)

const port = process.env.PORT || 3000;

// Регистрация маршрутов
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