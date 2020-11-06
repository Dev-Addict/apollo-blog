import Context from "../../../types/Context";
import {IPost} from "../../../../models/Post";

const author = (
    {author}: IPost,
    args: any,
    {models: {User}}: Context
) => User.findById(author);

export default author;
