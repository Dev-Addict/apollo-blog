import Context from "../../../types/Context";
import {IRating} from "../../../../models/Rating";

const author = (
    {author}: IRating,
    args: any,
    {models: {User}}: Context
) => User.findById(author);

export default author;
