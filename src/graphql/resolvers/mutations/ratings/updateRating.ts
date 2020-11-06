import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";

interface Args {
    data: any;
    id: string;
}

const updateRating = async (
    parentValues: null,
    {data, id}: Args,
    {req, models: {Rating, User}}: Context
) => {
    const {_id: author} = await protect(req, User);

    const rating = await Rating.findOneAndUpdate({author, _id: id}, data);

    return {
        code: 200,
        success: true,
        message: 'posts updated',
        rating
    };
};

export default updateRating;
