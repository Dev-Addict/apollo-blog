import Context from "../../../types/Context";

interface Args {
    id: string;
}

const post = (
    parentValues: null,
    {id}: Args,
    {models: {Post}}: Context
) => Post.findById(id);

export default post;
