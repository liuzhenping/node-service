import mongoose from 'mongoose'

mongoose.connection.on('connected', () => {
    console.info('Mongoose connection - Connected');
});
mongoose.connection.on('reconnected', () => {
    console.info('Mongoose connection - Reconnected');
});
mongoose.connection.on('disconnected', () => {
    console.info('Mongoose connection - Disconnected');
});
mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err.stack}`);
});

const getMongoConfig = (database) => {
    const mongodb = {options: {}};
    mongodb.connectString = `mongodb://${database}`;
    // mongodb.options.user = mongoConfig.user;
    // mongodb.options.pass = mongoConfig.password;
    mongodb.options.reconnectTries = Number.MAX_VALUE;
    mongodb.options.useCreateIndex = true;
    mongodb.options.useNewUrlParser = true;
    return mongodb;
};

const mongooseInitializer = {
    init: (database, callback) => {
        const mongoConfig = getMongoConfig(database);
        mongoose.connect(mongoConfig.connectString, mongoConfig.options, (err) => {
            callback(err, mongoose.connection);
        });
    },
};

export {mongooseInitializer};
