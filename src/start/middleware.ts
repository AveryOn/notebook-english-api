import { app } from ".";
import type { Express } from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Синхронизация ППО
export function syncMiddleware(app: Express) {
    app.use(cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: true,
        optionsSuccessStatus: 204
    }));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
    app.use(cookieParser());
}