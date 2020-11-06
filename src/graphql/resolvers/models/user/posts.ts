import Context from "../../../types/Context";
import {IUser} from "../../../../models/User";

const posts = (
    {id}: IUser,
    args: any,
    {models: {Post}}: Context
) => Post.find({author: id});

export default posts;
