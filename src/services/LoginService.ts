
import NewResponseController from './ResponseService';
import { Request, Response } from 'express-serve-static-core';
import { userDao } from '../database/core/UserCore';
import { ErrorCodes, ResponseMessages } from '../util/Contants';
import { authenticationDao } from '../database/core/AuthenticationCore';
import { IUserModel } from '../database/schemas/User';
import * as path from 'path';
import { isNullOrUndefined } from "util";
import { ISignUpRequest } from '../requests/SignUpRequest';
import { signUpResponse } from '../responses/SignUpResponse';
import { UtilityMethods } from '../util/UtilityMethods';
import { ILoginRequest, IGetProfileRequset } from '../requests/LoginRequest';
import { IAuthenticationModel } from '../database/schemas/Authentication';
import { loginResponse } from '../responses/LoginResponse';
export default class Login {
    public static async  Login(req: Request, res: Response) {
        try{  const json: ILoginRequest = req.body;
            let loginDetails: any = {};
         let user:IUserModel|any=  await userDao.getUserByEmail(json.emailId)
         if(!user || isNullOrUndefined(user)) {
            throw ResponseMessages.USER_DOESNOT_EXIST;
        }
        else{
            if (user.password != json.password) {
                console.log(json.password +":::" +user.password );
                throw ResponseMessages.INVALID_CREDENTIALS;
            }
            else{
                const accessToken = UtilityMethods.JWT();
             let loginData :IAuthenticationModel | any = await authenticationDao.saveUserData(user._id, accessToken, json.deviceId,  json.deviceType);
            // res.send(loginData);
           NewResponseController.sendResponse(req, res, loginResponse(loginData), ErrorCodes.OK, ResponseMessages.LOGIN_SUCCESSFULLY);
             
            }
        }

        }
        catch{(err: any)=>{NewResponseController.catchError(req, res, err)}}
    }

   
}