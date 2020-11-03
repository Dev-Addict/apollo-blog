import {sign} from 'jsonwebtoken';

const signToken = ({_id}) => sign(
    {
        id: _id
    },
    process.env.JSON_WEB_TOKEN_SECRET,
    {
        expiresIn: process.env.JSON_WEB_TOKEN_TIME
    }
);

export default signToken;
