import find from "../../../helpers/queries/find";

const users = (parentValues, {page, limit, sort, filter}, {models: {User}}, info) =>
    find(User, page, limit, sort, filter);

export default users;
