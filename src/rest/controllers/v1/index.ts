import {Controller, Get} from 'decopress';
import {Request, Response} from "express";

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
}

export default V1Controller;
