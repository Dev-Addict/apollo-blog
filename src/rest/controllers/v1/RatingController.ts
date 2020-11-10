import {Controller, Delete, Get, Patch, Post} from "decopress";

import Rating, {IRating} from "../../../models/Rating";
import {CreateOne, DeleteOne, GetAll, GetOne, UpdateOne} from "../../helpers/controllers/handlerFactory";

@Controller('/users')
class RatingController {
    @Get('/')
    @GetAll<IRating>(Rating)
    getRatings() {}

    @Post('/')
    @CreateOne<IRating>(Rating)
    createRating() {}

    @Get('/:id')
    @GetOne<IRating>(Rating)
    getRating() {}

    @Patch('/:id')
    @UpdateOne<IRating>(Rating)
    updateRating() {}

    @Delete('/:id')
    @DeleteOne<IRating>(Rating)
    deleteRating() {}
}

export default RatingController;
