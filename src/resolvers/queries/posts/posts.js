import Post from "../../../models/Post";
import find from "../../../helpers/queries/find";

const posts = (parentValues, {page, limit, sort, filter}, context, info) => {
    filter.published = true;

    return find(Post, page, limit, sort, filter)
};

export default posts;