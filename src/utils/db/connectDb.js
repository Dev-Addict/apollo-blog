import mongoose from 'mongoose';
import logger from "node-color-log";

const connectDb = () => {
    const DB = (process.env.DATABASE_URL || '')
        .replace('<password>', process.env.DATABASE_PASSWORD)
        .replace('<dbname>', process.env.DATABASE_NAME);

    mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        logger.info('🍃 Connected to database successfully.');
    });
};

export default connectDb;
