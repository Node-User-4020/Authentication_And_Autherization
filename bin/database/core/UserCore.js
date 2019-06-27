"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Models_1 = require("./../models/Models");
var UserDao = /** @class */ (function () {
    function UserDao() {
        this.UserModel = Models_1.models.UserModel;
    }
    UserDao.prototype.getUserByEmail = function (emailId) {
        var condition = {
            "emailId": emailId.toLowerCase().toString()
        };
        return this.UserModel
            .findOne(condition)
            .exec();
    };
    UserDao.prototype.saveUser = function (userObj) {
        userObj.emailId = userObj.emailId.toLowerCase().toString();
        var user = new this.UserModel(userObj);
        return user.save();
    };
    UserDao.prototype.findByUserId = function (userId) {
        var condition = {
            "_id": userId
        };
        return this.UserModel
            .findOne(condition)
            .exec();
    };
    return UserDao;
}());
exports.userDao = new UserDao();
