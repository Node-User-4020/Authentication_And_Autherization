"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { AppConfig } from './../../config/AppConfig';
var ProjectConstants = /** @class */ (function () {
    function ProjectConstants() {
    }
    ProjectConstants.LOCALPORT = 8020;
    ProjectConstants.QAPORT = 8020;
    ProjectConstants.STAGINGPORT = 8021;
    ProjectConstants.PRODPORT = 8021;
    ProjectConstants.LOCALDATABASENAME = "Authentication";
    ProjectConstants.QADATABASENAME = "Authentication";
    ProjectConstants.STAGINGDATABASENAME = "Authentication";
    ProjectConstants.PRODDATABASENAME = "Authentication";
    ProjectConstants.LOCALDATABASEPORT = 27017;
    ProjectConstants.QADATABASEPORT = 27030;
    ProjectConstants.STAGINGDATABASEPORT = 27031;
    ProjectConstants.PRODDATABASEPORT = 27017;
    ProjectConstants.LOCAL_URI = "http://10.0.0.170:";
    return ProjectConstants;
}());
exports.ProjectConstants = ProjectConstants;
var ApiNames = /** @class */ (function () {
    function ApiNames() {
    }
    ApiNames.AUTHENTICATION = "/api/";
    ApiNames.HOME = "" + ApiNames.AUTHENTICATION;
    ApiNames.SIGN_UP = ApiNames.AUTHENTICATION + "SignUp";
    ApiNames.LOG_IN = ApiNames.AUTHENTICATION + "LogIn";
    ApiNames.GET_PROFILE = ApiNames.AUTHENTICATION + "getProfile";
    return ApiNames;
}());
exports.ApiNames = ApiNames;
var AuthenticationProjectConstants = /** @class */ (function () {
    function AuthenticationProjectConstants() {
    }
    AuthenticationProjectConstants.SECRET_KEY = "developers";
    return AuthenticationProjectConstants;
}());
exports.AuthenticationProjectConstants = AuthenticationProjectConstants;
var ErrorCodes = /** @class */ (function () {
    function ErrorCodes() {
    }
    ErrorCodes.OK = 200;
    ErrorCodes.NO_CONTENT = 204;
    ErrorCodes.BAD_REQUEST = 400;
    ErrorCodes.UNAUTHORIZED = 401;
    ErrorCodes.INVALID_AUTHTOKEN = 403;
    ErrorCodes.PAGE_NOT_FOUND = 404;
    ErrorCodes.NOT_ACCEPTABLE = 406;
    ErrorCodes.REQUEST_TIMEOUT = 408;
    ErrorCodes.CONFLICT = 409;
    ErrorCodes.NO_RESPONSE = 444;
    ErrorCodes.INVALID_TOKEN = 498;
    ErrorCodes.TOKEN_REQUIRED = 499;
    return ErrorCodes;
}());
exports.ErrorCodes = ErrorCodes;
var ResponseMessages = /** @class */ (function () {
    function ResponseMessages() {
    }
    ResponseMessages.error = function (code, msg) {
        return {
            errorCode: code,
            errorMessage: msg
        };
    };
    ResponseMessages.NO_AUTHTOKEN = ResponseMessages.error(100, "No AuthToken");
    ResponseMessages.INVALID_AUTHTOKEN = ResponseMessages.error(101, "No AuthToken");
    ResponseMessages.USER_DOESNOT_EXIST = ResponseMessages.error(101, "User Not exist");
    ResponseMessages.SIGNUP_USER_ALREADY_EXIST = ResponseMessages.error(101, "User Already exist");
    ResponseMessages.SOMETHING_WENT_WRONG = ResponseMessages.error(101, "Something Went Wrong");
    ResponseMessages.INVALID_CREDENTIALS = ResponseMessages.error(101, "Invalid Credentials");
    ResponseMessages.SIGNUP_SUCCESSFULLY = "Signup Sucess";
    ResponseMessages.LOGIN_SUCCESSFULLY = "Login Sucess";
    return ResponseMessages;
}());
exports.ResponseMessages = ResponseMessages;
