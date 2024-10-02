import { Route } from "../types/core_types/api.types";
import TestController from "../app/modules/test.module/controllers";

export default [
    // test routes
    { path: '/api/test-get/:count?', method: 'get', handler: TestController.testGet }
    // // Маршруты для контейнеров
    // { path: '/containers/create', method: 'POST', handler: ContainerController.create },             // Создание нового контейнера
    // { path: '/containers/all', method: 'GET', handler: ContainerController.getAllContainersData },   // Извлечение всех контейнеров

    // // Маршруты для операций
    // { path: '/container/:container_id/operations/create', method: 'POST', handler: OperationsController.create },             // Создание новой операции
    // { path: '/container/:container_id/operations/', method: 'GET', handler: OperationsController.getOperationsDataByContainerID },  // Извлечение операций по ID их контейнера
] as Array<Route>

