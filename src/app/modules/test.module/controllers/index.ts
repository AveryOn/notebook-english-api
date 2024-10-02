import { ConfigRouteHandler } from "../../../../types/core_types/api.types";

export default class TestController {
    static async testGet({ request, response }: ConfigRouteHandler) {
        try {
            console.log(request.url);
            response.send({ data: 'Connect!' });
        } catch (err) {
            console.error(`[ContainerController.create] => `, err);
            response.send(err);
            throw err;
        }
    }
}