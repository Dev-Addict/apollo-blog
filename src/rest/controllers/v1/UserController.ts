import {Controller, Delete, Get, Patch, Post} from "decopress";

import User, {IUser} from "../../../models/User";
import {CreateOne, DeleteOne, GetAll, GetOne, UpdateOne} from "../../helpers/controllers/handlerFactory";

@Controller('/users')
class UserController {
    @Get('/')
    @GetAll<IUser>(User)
    getUsers() {}

    @Post('/')
    @CreateOne<IUser>(User)
    createUser() {}

    @Get('/:id')
    @GetOne<IUser>(User)
    getUser() {}

    @Patch('/:id')
    @UpdateOne<IUser>(User)
    updateUser() {}

    @Delete('/:id')
    @DeleteOne<IUser>(User)
    deleteUser() {}
}

export default UserController;
