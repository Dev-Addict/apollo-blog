import Context from "../../../types/Context";
import {IPost} from "../../../../models/Post";

const commentOf = (
    {commentOf}: IPost,
    args: any,
    {models: {Post}}: Context
) => Post.findById(commentOf);

export default commentOf;
