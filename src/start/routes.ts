import { Route } from "../types/core_types/api.types";
import TestController from "../app/modules/test.module/controllers";

export default [
    // test routes
    { path: '/api/test-get/:count?', method: 'get', handler: TestController.testGet },

    
] as Array<Route>

