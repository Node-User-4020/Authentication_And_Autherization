"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models_1 = require("./../models/Models");
var AuthenticationDao = /** @class */ (function () {
    function AuthenticationDao() {
        this.AuthenticationModel = Models_1.models.AuthenticationModel;
    }
    AuthenticationDao.prototype.findByAuthToken = function (accessToken) {
        return this.AuthenticationModel
            .findOne({ 'accessToken': accessToken })
            .exec();
    };
    AuthenticationDao.prototype.saveUserData = function (userId, accessToken, deviceId, deviceType) {
        var userObj = {
            "userId": userId,
            "accessToken": accessToken,
            "deviceId": deviceId,
            "deviceType": deviceType,
        };
        var saveData = new this.AuthenticationModel(userObj);
        return saveData.save();
    };
    return AuthenticationDao;
}());
exports.authenticationDao = new AuthenticationDao();
