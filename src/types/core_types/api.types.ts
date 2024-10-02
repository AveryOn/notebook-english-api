import type { Request, Response } from "express";

export type apiMethods =  'get' | 'post' | 'put' | 'delete' | 'patch';
export type ConfigRouteHandler = { request: Request, response: Response };

export interface Route {
    path: string;
    method: apiMethods;
    handler: (config: { request: Request, response: Response }) => Promise<void>;
}