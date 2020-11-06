import Context from "../../../types/Context";
import {IRating} from "../../../../models/Rating";

const post = (
    {post}: IRating,
    args: any,
    {models: {Post}}: Context
) => Post.findById(post);

export default post;
