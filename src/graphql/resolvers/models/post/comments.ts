import Context from "../../../types/Context";
import {IPost} from "../../../../models/Post";

const comments = (
    {_id}: IPost,
    args: any,
    {models: {Post}}: Context
) => Post.find({commentOf: _id});

export default comments;
