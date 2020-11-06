import {sign} from 'jsonwebtoken';
import {IUser} from "../../models/User";

const signToken = ({_id}: IUser) => sign(
    {
        id: _id
    },
    process.env.JSON_WEB_TOKEN_SECRET!,
    {
        expiresIn: process.env.JSON_WEB_TOKEN_TIME
    }
);

export default signToken;
