"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var APIResponse = /** @class */ (function () {
    function APIResponse() {
    }
    APIResponse.sendResponse = function (req, res, resObject, resCode, message) {
        var response = APIResponse.response(req, resObject, message);
        res.send(response);
    };
    APIResponse.catchError = function (req, res, err) {
        console.log(err + "**************************");
        if (err.errorCode) {
            console.log("IF CASE" + err.errorMessage);
            // message = 
            err.errorMessage;
            err.code = err.errorCode;
            console.log("IF CASE" + err.errorMessage + "$$$" + err.code);
            APIResponse.sendResponse(req, res, {}, err.code, err.errorMessage);
        }
        else {
            if (err.code) {
                //  message =  `ErrCode:${err.code}, ErrMsg:${err.message}`
                APIResponse.sendResponse(req, res, {}, err.code, "ErrCode:" + err.code + ", ErrMsg:" + err.message);
                // err.message = `ErrCode:${err.code}, ErrMsg:${err.message}`;
            }
            APIResponse.sendResponse(req, res, {}, err.code, "ErrCode:" + err.code + ", ErrMsg:" + err.message);
        }
    };
    APIResponse.response = function (req, resObject, message) {
        var resultResponse = {
            message: message,
            data: resObject
        };
        return resultResponse;
    };
    return APIResponse;
}());
exports.default = APIResponse;
