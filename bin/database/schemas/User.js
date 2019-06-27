"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    userName: { type: mongoose.Schema.Types.String, default: null },
    emailId: { type: mongoose.Schema.Types.String, default: null },
    password: { type: mongoose.Schema.Types.String, default: null },
    phoneNumber: { type: mongoose.Schema.Types.String, default: null },
    age: { type: mongoose.Schema.Types.String, default: null },
    isAccountVerified: { type: mongoose.Schema.Types.Boolean, default: false },
    createdOn: { type: Date, default: Date.now }
}, { versionKey: false });
exports.userSchema.set('toJSON', { virtuals: true });
