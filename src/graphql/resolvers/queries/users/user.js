const user = (parentValues, {id}, {models: {User}}, info) => User.findById(id);

export default user
