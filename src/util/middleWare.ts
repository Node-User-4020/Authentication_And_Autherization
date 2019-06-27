

import { IAuth } from '../requests/AuthRequest';
import { NextFunction } from 'express-serve-static-core';
import { ResponseMessages, AuthenticationProjectConstants } from "./Contants";
import { authenticationDao } from '../database/core/AuthenticationCore';
import { userDao } from '../database/core/UserCore';
import ResponseController from './../services/ResponseService';
let jwt = require('jsonwebtoken');

export default class MiddleWare {
    static authenticate(req: Request | IAuth | any, res: any, next: NextFunction) {
    Promise.resolve(req.headers['access-token'])
        .then((token: string | any) => {
            if (!token)
                throw ResponseMessages.NO_AUTHTOKEN

            return Promise.resolve(jwt.verify(token, AuthenticationProjectConstants.SECRET_KEY))
                .then(decoded => {
                    // if everything is good, add user detail and go to other routes
                    return authenticationDao.findByAuthToken(token)
                })
                .catch(err => {
                    throw ResponseMessages.INVALID_AUTHTOKEN
                })
        })
        .then(loginModel => {
            if (!loginModel)
                throw ResponseMessages.INVALID_AUTHTOKEN

            return userDao.findByUserId(loginModel.userId);
        })
        .then(userModel => {
            if (!userModel)
                throw ResponseMessages.USER_DOESNOT_EXIST

            req.body.userModel = userModel
            req.body.userId = userModel._id
            next()
        })
        .catch(err => {
            ResponseController.catchError(req, res, err)
        });
}
}