import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './routes/createRouter';

const app = express();

// 使用 morgan 将请求日志打印到控制台
app.use(logger('dev'));

//用body parser 来解析post和url信息中的参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', router);

export default app;
