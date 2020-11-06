import Context from "../../../types/Context";
import protect from "../../../utils/auth/protect";

interface Args {
    id: string;
}

const deleteRating = async (
    parentValues: null,
    {id}: Args,
    {req, models: {Rating, User}}: Context
) => {
    const {_id: author} = await protect(req, User);

    await Rating.findOneAndDelete({_id: id, author});

    return {
        code: 204,
        success: true,
        message: 'posts deleted.'
    };
};

export default deleteRating;
