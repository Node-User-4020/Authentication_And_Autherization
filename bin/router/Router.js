"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var body_parser_1 = require("body-parser");
var Contants_1 = require("../util/Contants");
var bodyParser = require('body-parser');
var SignUpService_1 = require("../services/SignUpService");
var LoginService_1 = require("../services/LoginService");
var ApiRouter = /** @class */ (function () {
    function ApiRouter() {
        this.router = express();
        this.addMiddlewares();
        this.addRoutes();
    }
    // Add all middlewares here that will get request before routes.
    ApiRouter.prototype.addMiddlewares = function () {
        this.router.use(body_parser_1.json());
        this.router.use(bodyParser.urlencoded({ extended: false }));
    };
    ApiRouter.prototype.addRoutes = function () {
        this.router.get(Contants_1.ApiNames.HOME, function (req, res) {
            res.send("API SUCESS!!!!");
        });
        this.router.post(Contants_1.ApiNames.SIGN_UP, SignUpService_1.default.SignUp);
        this.router.post(Contants_1.ApiNames.LOG_IN, LoginService_1.default.Login);
    };
    return ApiRouter;
}());
exports.default = new ApiRouter().router;
