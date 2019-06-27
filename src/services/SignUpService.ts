
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
export default class SignUp {
    public static SignUp(req: Request, res: Response) {
        const json: ISignUpRequest = req.body;
        let userDatas: any = {};
        userDao.getUserByEmail(json.emailId)
            .then(user => {
                if (user) throw ResponseMessages.SIGNUP_USER_ALREADY_EXIST;
                const userObj: IUserModel = UtilityMethods.clone(json);
                return userDao.saveUser(userObj);
            }).then(usercreated => {
                if (!usercreated) ResponseMessages.SOMETHING_WENT_WRONG;
                NewResponseController.sendResponse(req, res, usercreated, ErrorCodes.OK, ResponseMessages.SIGNUP_SUCCESSFULLY);
            }).catch(err => NewResponseController.catchError(req, res, err));

    }
}

