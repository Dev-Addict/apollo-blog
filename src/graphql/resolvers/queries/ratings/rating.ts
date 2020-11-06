import Context from "../../../types/Context";

interface Args {
    id: string;
}

const rating = (
    parentValues: null,
    {id}: Args,
    {models: {Rating}}: Context
) => Rating.findById(id);

export default rating;
