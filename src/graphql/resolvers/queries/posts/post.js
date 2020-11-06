const post = (parentValues, {id}, {models: {Post}}, info) => Post.findById(id);

export default post;
