/* 
Основные шаги для внедрения JWT

Регистрация пользователя:
    При регистрации хешируйте пароль с помощью bcrypt или другой надежной библиотеки.
    Сохраняйте информацию о пользователе в базе данных.

Аутентификация:
    При входе пользователя проверяйте введенные учетные данные.
    Если они верные, создайте JWT с помощью jsonwebtoken и отправьте его клиенту.
    В токен добавьте полезные данные, такие как userId и role.

Middleware для защиты маршрутов:

    Создайте middleware, который будет проверять наличие и валидность JWT в заголовках запросов.
    Если токен валиден, извлекайте информацию о пользователе и добавляйте ее к объекту запроса.

Авторизация:
    Используйте информацию о роли, чтобы управлять доступом к защищенным маршрутам.

*/
import jwt from 'jsonwebtoken';


// Создание jwt токена
export async function generateJwtToken(payload: any) {
    return new Promise((resolve, reject) => {
        try {
            const res = jwt.sign(payload, 'secret', { expiresIn: 604800, algorithm: 'HS256' });
            resolve(res);
        } catch (err) {
            reject(err)
        }
    });
}

// Верификация токена
export async function verifyJwtToken(token: string, secret: string, ) {
    return new Promise((resolve, reject) => {
        try {
            resolve(jwt.verify(token, secret))
        } catch (err) {
            reject(err);
        }
    });
}
