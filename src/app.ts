import express from 'express';
import {setRoutes} from 'decopress';
import {json, urlencoded} from "body-parser";
import morgan from "morgan";

import APIController from "./rest/controllers/APIController";

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

setRoutes(new APIController(), app);

export default app;
