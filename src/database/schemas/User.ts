import * as mongoose from "mongoose"; 
import {Document, Schema }from 'mongoose';

import ModelsDB from '../models/ModelDB';  
import References from '../models/References'; 
import { IAuthenticationModel } from "./Authentication";


export const userSchema = new Schema( {
  userName: {type:mongoose.Schema.Types.String, default : null}, 
  emailId: {type:mongoose.Schema.Types.String, default : null}, 
  password: {type:mongoose.Schema.Types.String , default : null}, 
  phoneNumber: {type:mongoose.Schema.Types.String, default : null}, 
  age: {type:mongoose.Schema.Types.String, default : null}, 
  isAccountVerified: {type:mongoose.Schema.Types.Boolean, default : false} ,
  createdOn: {type:Date, default:Date.now}
  
},  {versionKey:false }); 
userSchema.set('toJSON',  {virtuals:true });

export interface IUserSchema {
  userName:String, 
  emailId:String, 
  password:String, 
  phoneNumber:String, 
  age:String,
  isAccountVerified:Boolean
}
/**
 * Model for UserDetail document of mongoDb
 */
export interface IUserModel extends IUserSchema, Document {
}