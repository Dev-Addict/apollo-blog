import {Request} from 'express';
import {Model} from 'mongoose';
import {IUser} from "../../models/User";
import {IPost} from "../../models/Post";
import {IRating} from "../../models/Rating";

export default interface Context {
    models: {
        User: Model<IUser>;
        Post: Model<IPost>;
        Rating: Model<IRating>
    };
    req: Request;
}
