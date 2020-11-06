import find from "../../../helpers/queries/find";
import FindQueryArgs from "../types/FindQueryArgs";
import Context from "../../../types/Context";

const ratings = (
    parentValues: null,
    {page, limit, sort, filter}: FindQueryArgs,
    {models: {Rating}}: Context
) =>
    find(Rating, page, limit, sort, filter);

export default ratings;
