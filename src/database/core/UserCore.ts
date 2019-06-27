import { IUserModel, IUserSchema } from "../schemas/User";
import { Model, Promise } from 'mongoose';
import { models } from './../models/Models';

import { isNullOrUndefined } from "util";
import { UtilityMethods } from './../../util/UtilityMethods';
import ModelNames from '../models/ModelDB';
class UserDao {
    UserModel: Model<IUserModel>;
    constructor() {
        this.UserModel = models.UserModel;
    }

    getUserByEmail(emailId: String): Promise<IUserModel> {


        const condition: any = {
            "emailId": emailId.toLowerCase().toString()
        };
        return this.UserModel
            .findOne(condition)
            .exec();
    }

    saveUser(userObj: IUserModel | IUserSchema): Promise<IUserModel> {
        userObj.emailId=  userObj.emailId.toLowerCase().toString()
        const user = new this.UserModel(userObj);
        return user.save();
    }
    findByUserId(userId: String): Promise<IUserModel> {


        const condition: any = {
            "_id": userId
        }
        return this.UserModel
            .findOne(condition)
            .exec();
    }

}
export const userDao = new UserDao();