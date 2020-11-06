import {AuthenticationError} from "apollo-server-express";
import {verify} from "jsonwebtoken";

const protect = async ({headers: {authorization: bearerToken}}, User) => {
    if (!bearerToken) throw new AuthenticationError('can\'t find the token.');
    if (!bearerToken.startsWith('Bearer ')) throw new AuthenticationError('token is invalid.');
    const token = bearerToken.split(' ')[1];

    const {id} = verify(token, process.env.JSON_WEB_TOKEN_SECRET);
    const user = await User.findById(id);

    if (!user) throw new AuthenticationError('token is invalid.');

    return user;
};

export default protect;
