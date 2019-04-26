import Joi from 'joi';
import mysql from 'mysql';

// env 환경 변수 불러오기
import dotenv from 'dotenv';
dotenv.config();

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
    
    const FirstRegisteration = Joi.object().key({
        id : Joi.string().alphanum().min(6).max(50).required(),
        password : Joi.string().min(6).max(50).required(),
        authCode : Joi.alphanum().required()  
    });

    

    
    ctx.body = 
}