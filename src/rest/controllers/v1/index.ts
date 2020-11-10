import {Request, Response} from "express";
import {Controller, Get, Use} from 'decopress';

import UserController from "./UserController";
import PostController from "./PostController";

@Controller('/v1', {
    mergeParams: true
})
class V1Controller {
    @Get('/')
    v1(req: Request, res: Response) {
        res.json({
            version: '1.0.0',
            author: 'Dev-Addict(Aria Azadi Pour)',
            description: 'apollo-blog rest-api'
        });
    }

    @Use()
    UserController() {
        return new UserController();
    }

    @Use()
    PostController() {
        return new PostController();
    }
}

export default V1Controller;
