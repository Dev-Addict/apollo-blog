const commentOf = ({commentOf}, args, {models: {Post}}, info) => Post.findById(commentOf);

export default commentOf;
