import Joi from 'joi';
import crypto from 'crypto';
import { account, student, teacher, guest } from '../../models';

//import { Maria, sequelize } from 'lib/db.js';

// env 환경 변수 불러오기
import dotenv from 'dotenv';
dotenv.config();

// post로 받은 authCode의 값에 따라서 권한을 설정해주기 위한 함수
const authorizeUser = (authCode) => {
    
    if(authCode == process.env.studentCode)
        return 0;
    else if(authCode == process.env.teacherCode)
        return 1;
    else if(authCode == process.env.guestCode)
        return 2;
    else return 3;
}

export const Register = async (ctx) => {
    
    const FirstRegisteration = Joi.object().keys({
        id : Joi.string().alphanum().min(6).max(50).required(),
        password : Joi.string().min(6).max(50).required(),
        authCode : Joi.string().alphanum().required()  
    });

    const firstResult = Joi.validate(ctx.request.body, FirstRegisteration);

    // joi의 형식 검사에서 에러 발생 시 400 에러코드를 전송하고, body에 001 이라는 내용을 담아 joi 오류임을 알려줌
    if(firstResult.error) {
        ctx.status = 400;
        ctx.body = {
            "error" : "001"
        }
        return;
    }

    const exist = await account.findAll({
        where: {
            id : ctx.request.body.id
        }
    });

    if(exist.length){
        console.log("this column is already existed");

        ctx.status = 400;
        ctx.body = {
            "error" : "002"
        }
        return;
    }

    let id = ctx.request.body.id;
    let password = ctx.request.body.password;
    let password2 = crypto.createHmac('sha256', process.env.Password_KEY).update(password).digest('hex');
    const users = await account.findAll();
    let userCode = (users.length+1).toString();

    for(var i=0;userCode.length<4;i++){
        userCode = "0" + userCode;
    }

    userCode = "U" + userCode;

    let auth = authorizeUser(ctx.request.body.authCode);

    console.log(`ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\nid 값 : ${id}\npassword 값 : ${password}\nhash 값 : ${password2}\nuserCode 값 : ${userCode}\nauth 값 : ${auth}\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ`);
    
    account.create({
        id : id,
        password : password2,
        userCode : userCode,
        auth : auth
    });
}

