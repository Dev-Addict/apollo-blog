import {Router} from 'express';

import v1Router from "./v1";

const APIRouter = Router({
    mergeParams: true
});

APIRouter.use('/v1', v1Router);

export default APIRouter;
