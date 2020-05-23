import async from 'async';
import app from "./app";
import {mongooseInitializer} from './mongodb/mongoose'
import config from './config/config'

const initMongoose = (next) => {
    console.log('------- Initializing Mongoose ------- ');
    mongooseInitializer.init(config.database, (err, mongoConn) => {
        next(err, mongoConn);
    });
};

const initServer = (err, mongoConn) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('------- Initializing Server ------- ');
    const port = config.port;
    app.listen(port, () => console.log(`Example app listening on port ${port}`));
};

async.waterfall([initMongoose], initServer);