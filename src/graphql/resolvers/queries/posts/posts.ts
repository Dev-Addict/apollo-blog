import find from "../../../helpers/queries/find";
import FindQueryArgs from "../types/FindQueryArgs";
import Context from "../../../types/Context";

const posts = (
    parentValues: null,
    {page, limit, sort, filter}: FindQueryArgs,
    {models: {Post}}: Context
) => {
    filter.published = true;

    return find(Post, page, limit, sort, filter)
};

export default posts;
