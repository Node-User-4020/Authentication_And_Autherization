"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.loginResponse = function (loginData) {
    return {
        accessToken: loginData.accessToken,
        userId: loginData.userId
    };
};
