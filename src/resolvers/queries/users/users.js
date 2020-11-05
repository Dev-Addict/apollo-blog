import User from "../../../models/User";
import find from "../../../helpers/queries/find";

const users = (parentValues, {page, limit, sort, filter}, context, info) => find(User, page, limit, sort, filter);

export default users;
