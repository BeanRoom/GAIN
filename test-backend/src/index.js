// 환경 변수 로드
import dotenv from 'dotenv';
dotenv.config();

import { connection } from 'lib/db.js';

import Koa from 'koa';
import Router from 'koa-router';
import cors  from '@koa/cors';

const app = new Koa();
const router = new Router();
import api from './api';

import mariadb from 'mysql';
//import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';

//import { jwtMiddleware } from 'lib/token';

app.use(cors());

connection.connect();
// mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// // mongodb 연결
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(
//     (response) => {
//         console.log('Successfully connected to mongodb');
//     }
// ).catch(e => {
//     console.error(e);
// });

const port = process.env.PORT || 4000; // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.

app.use(bodyParser()); // 바디파서 적용, 라우터 적용코드보다 상단에 있어야합니다.
//app.use(jwtMiddleware);
router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정
app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
    console.log(`GAIN Backend Server Started.. with port ${port}`);
});