import Context from "../../../types/Context";

interface Args {
    id: string;
}

const user = (
    parentValues: null,
    {id}: Args,
    {models: {User}}: Context
) => User.findById(id);

export default user
