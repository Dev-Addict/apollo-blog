import {Controller, Delete, Get, Patch, Post as PostMethod} from "decopress";

import Post, {IPost} from "../../../models/Post";
import {CreateOne, DeleteOne, GetAll, GetOne, UpdateOne} from "../../helpers/controllers/handlerFactory";

@Controller('/posts')
class PostController {
    @Get('/')
    @GetAll<IPost>(Post)
    getPosts() {}

    @PostMethod('/')
    @CreateOne<IPost>(Post)
    createPost() {}

    @Get('/:id')
    @GetOne<IPost>(Post)
    getPost() {}

    @Patch('/:id')
    @UpdateOne<IPost>(Post)
    updatePost() {}

    @Delete('/:id')
    @DeleteOne<IPost>(Post)
    deletePost() {}
}

export default PostController;
