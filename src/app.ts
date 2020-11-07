import express from 'express';
import {json, urlencoded} from "body-parser";
import morgan from "morgan";

import APIRouter from "./rest/routes/APIRouter";

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.use(json());
app.use(urlencoded({
    extended: true
}));
app.use(morgan('dev'));

app.use('/api', APIRouter);

export default app;
