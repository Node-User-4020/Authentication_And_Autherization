"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseService_1 = require("./ResponseService");
var UserCore_1 = require("../database/core/UserCore");
var Contants_1 = require("../util/Contants");
var AuthenticationCore_1 = require("../database/core/AuthenticationCore");
var util_1 = require("util");
var UtilityMethods_1 = require("../util/UtilityMethods");
var LoginResponse_1 = require("../responses/LoginResponse");
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.Login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var json, loginDetails, user, accessToken, loginData, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        json = req.body;
                        loginDetails = {};
                        return [4 /*yield*/, UserCore_1.userDao.getUserByEmail(json.emailId)];
                    case 1:
                        user = _b.sent();
                        if (!(!user || util_1.isNullOrUndefined(user))) return [3 /*break*/, 2];
                        throw Contants_1.ResponseMessages.USER_DOESNOT_EXIST;
                    case 2:
                        if (!(user.password != json.password)) return [3 /*break*/, 3];
                        console.log(json.password + ":::" + user.password);
                        throw Contants_1.ResponseMessages.INVALID_CREDENTIALS;
                    case 3:
                        accessToken = UtilityMethods_1.UtilityMethods.JWT();
                        return [4 /*yield*/, AuthenticationCore_1.authenticationDao.saveUserData(user._id, accessToken, json.deviceId, json.deviceType)];
                    case 4:
                        loginData = _b.sent();
                        // res.send(loginData);
                        ResponseService_1.default.sendResponse(req, res, LoginResponse_1.loginResponse(loginData), Contants_1.ErrorCodes.OK, Contants_1.ResponseMessages.LOGIN_SUCCESSFULLY);
                        _b.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        _a = _b.sent();
                        (function (err) { ResponseService_1.default.catchError(req, res, err); });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Login;
}());
exports.default = Login;
