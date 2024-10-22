import { ConfigRouteHandler } from "../../../../types/core_types/api.types";

export default class AuthController {

    // Авторизация
    static async signUp({ request, response }: ConfigRouteHandler) {
        try {
            const body = request.body;
            console.log('Auth complete sign-up,',body);
            response.send({ data: 'Connect!' });
        } catch (err) {
            console.error(`[ContainerController.create] => `, err);
            response.send(err);
            throw err;
        }
    }
}