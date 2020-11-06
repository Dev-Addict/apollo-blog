import find from "../../../helpers/queries/find";

const posts = (parentValues, {page, limit, sort, filter}, {models: {Post}}, info) => {
    filter.published = true;

    return find(Post, page, limit, sort, filter)
};

export default posts;
