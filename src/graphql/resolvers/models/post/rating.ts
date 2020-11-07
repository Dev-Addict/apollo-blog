import Context from "../../../types/Context";
import {IPost} from "../../../../models/Post";

const author = (
    {_id}: IPost,
    args: any,
    {models: {Rating}}: Context
) => Rating.aggregate([
    {$match: {post: _id}},
    {
        $group: {
            _id: '$_id',
            value: {$sum: "$value"},
            amount: {$sum: 1}
        }
    }
]);

export default author;
