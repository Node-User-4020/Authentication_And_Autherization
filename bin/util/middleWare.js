"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contants_1 = require("./Contants");
var AuthenticationCore_1 = require("../database/core/AuthenticationCore");
var UserCore_1 = require("../database/core/UserCore");
var ResponseService_1 = require("./../services/ResponseService");
var jwt = require('jsonwebtoken');
var MiddleWare = /** @class */ (function () {
    function MiddleWare() {
    }
    MiddleWare.authenticate = function (req, res, next) {
        Promise.resolve(req.headers['access-token'])
            .then(function (token) {
            if (!token)
                throw Contants_1.ResponseMessages.NO_AUTHTOKEN;
            return Promise.resolve(jwt.verify(token, Contants_1.AuthenticationProjectConstants.SECRET_KEY))
                .then(function (decoded) {
                // if everything is good, add user detail and go to other routes
                return AuthenticationCore_1.authenticationDao.findByAuthToken(token);
            })
                .catch(function (err) {
                throw Contants_1.ResponseMessages.INVALID_AUTHTOKEN;
            });
        })
            .then(function (loginModel) {
            if (!loginModel)
                throw Contants_1.ResponseMessages.INVALID_AUTHTOKEN;
            return UserCore_1.userDao.findByUserId(loginModel.userId);
        })
            .then(function (userModel) {
            if (!userModel)
                throw Contants_1.ResponseMessages.USER_DOESNOT_EXIST;
            req.body.userModel = userModel;
            req.body.userId = userModel._id;
            next();
        })
            .catch(function (err) {
            ResponseService_1.default.catchError(req, res, err);
        });
    };
    return MiddleWare;
}());
exports.default = MiddleWare;
