"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contants_1 = require("./Contants");
var jwt = require('jsonwebtoken');
var UtilityMethods = /** @class */ (function () {
    function UtilityMethods() {
    }
    /**
     * Generate 6 digit otp, used for phone verification process.
     */
    UtilityMethods.generateOtp = function () {
        var otp = "";
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        return otp;
    };
    /**
     * Clone all the hasOwnProperty of obj into new object.
     * @param obj object from which hasOwnProperty are copied.
     */
    UtilityMethods.clone = function (obj) {
        var clone = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = obj[key];
            }
        }
        return clone;
    };
    UtilityMethods.copyValuesFrom = function (source, destination) {
        for (var destkey in destination) {
            for (var srcKey in source) {
                if (destkey == srcKey) {
                    destination[srcKey] = source[srcKey];
                }
            }
        }
    };
    UtilityMethods.JWT = function () {
        var payload = { check: true };
        return jwt.sign(payload, Contants_1.AuthenticationProjectConstants.SECRET_KEY);
    };
    return UtilityMethods;
}());
exports.UtilityMethods = UtilityMethods;
