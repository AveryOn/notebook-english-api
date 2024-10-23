import { ConfigRouteHandler } from "../../../../types/core_types/api.types";
import { SignUpBody } from "../types/index.type";
import { validateSignUpBody } from "../validators/signup.validator";

export default class AuthController {

    // Авторизация
    static async signUp({ request, response }: ConfigRouteHandler) {
        try {
            const body: SignUpBody = request.body;
            const validData = await validateSignUpBody(body);
            console.log('Auth complete sign-up,',body);
            response.send({ data: validData });
        } catch (err) {
            console.error(`[AuthController.signUp] => `, err);
            response.send(err);
            throw err;
        }
    }
}