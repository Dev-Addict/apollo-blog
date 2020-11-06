import find from "../../../helpers/queries/find";
import FindQueryArgs from "../types/FindQueryArgs";
import Context from "../../../types/Context";

const users = (
    parentValues: null,
    {page, limit, sort, filter}: FindQueryArgs,
    {models: {User}}: Context
) =>
    find(User, page, limit, sort, filter);

export default users;
