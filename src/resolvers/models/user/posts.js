const posts = ({id}, args, {models: {Post}}, info) => Post.find({author: id});

export default posts;
