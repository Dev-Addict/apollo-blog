const find = async (Model, page = 1, limit = 10, sort = '-createdAt', filter = {}) => {
    const skip = (page - 1) * limit;

    const docs = await Model.find(
        JSON.parse(
            JSON.stringify(filter).replace(
                /\b(eq|gt|gte|in|lt|lte|ne|nin|and|not|nor|or|exists|type|expr|jsonSchema|mod|regex|text|where|geoIntersects|geoWithin|near|nearSphere|all|elemMatch|size|bitsAllClear|bitsAllSet|bitsAnySet|meta|slice)\b/g
                , match => `$${match}`)
        )).skip(skip).limit(limit).sort(sort);

    return {
        results: await Model.countDocuments(),
        page,
        limit,
        docs
    }
};

export default find;
