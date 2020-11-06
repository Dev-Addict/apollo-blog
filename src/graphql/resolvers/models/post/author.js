const author = ({author}, args, {models: {User}}, info) => User.findById(author);

export default author;
