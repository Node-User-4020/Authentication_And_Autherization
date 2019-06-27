
import { Model, Promise } from 'mongoose';
import { models } from './../models/Models';
import { IAuthenticationModel, IAuthenticationSchema } from './../schemas/Authentication';
class AuthenticationDao {
    AuthenticationModel: Model<IAuthenticationModel>;
    constructor() {
        this.AuthenticationModel = models.AuthenticationModel;
    }
    
    findByAuthToken(accessToken: String): Promise<IAuthenticationModel> {
        return this.AuthenticationModel
            .findOne({ 'accessToken': accessToken })
            .exec();
    }

    saveUserData(userId: String, accessToken: String, deviceId: String, deviceType: String): Promise<IAuthenticationModel> {
        const userObj = {
            "userId": userId,
            "accessToken": accessToken,
            "deviceId": deviceId,
            "deviceType": deviceType,
         
        }
        const saveData = new this.AuthenticationModel(userObj);
        return saveData.save();
    }
}

export const authenticationDao = new AuthenticationDao();