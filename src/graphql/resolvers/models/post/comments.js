const comments = ({_id}, args, {models: {Post}}, info) => Post.find({commentOf: _id});

export default comments;
