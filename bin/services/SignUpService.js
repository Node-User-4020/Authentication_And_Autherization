"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseService_1 = require("./ResponseService");
var UserCore_1 = require("../database/core/UserCore");
var Contants_1 = require("../util/Contants");
var SignUpResponse_1 = require("../responses/SignUpResponse");
var UtilityMethods_1 = require("../util/UtilityMethods");
var SignUp = /** @class */ (function () {
    function SignUp() {
    }
    SignUp.SignUp = function (req, res) {
        var json = req.body;
        var userDatas = {};
        var responseObject = SignUpResponse_1.signUpResponse(undefined, undefined);
        UserCore_1.userDao.getUserByEmail(json.emailId)
            .then(function (user) {
            if (user)
                throw Contants_1.ResponseMessages.SIGNUP_USER_ALREADY_EXIST;
            var userObj = UtilityMethods_1.UtilityMethods.clone(json);
            return UserCore_1.userDao.saveUser(userObj);
        }).then(function (usercreated) {
            if (!usercreated)
                Contants_1.ResponseMessages.SOMETHING_WENT_WRONG;
            ResponseService_1.default.sendResponse(req, res, usercreated, Contants_1.ErrorCodes.OK, Contants_1.ResponseMessages.SIGNUP_SUCCESSFULLY);
        }).catch(function (err) { return ResponseService_1.default.catchError(req, res, err); });
    };
    return SignUp;
}());
exports.default = SignUp;
