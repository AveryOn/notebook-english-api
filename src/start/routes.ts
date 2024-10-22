import { Route } from "../types/core_types/api.types";
import TestController from "../app/modules/test.module/controllers";
import AuthController from "../app/modules/auth.module/controllers";

export default [
    // test routes
    { path: '/api/test-get/:count?', method: 'get', handler: TestController.testGet },
    
    // Auth routes
    { path: '/api/auth/sign-up', method: 'post', handler: AuthController.signUp } ,

    
] as Array<Route>

