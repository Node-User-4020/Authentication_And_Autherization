import { AuthenticationProjectConstants } from "./Contants";

let jwt = require('jsonwebtoken');


export class UtilityMethods {


    /**
     * Generate 6 digit otp, used for phone verification process.
     */
    static generateOtp(): String {

        let otp = "";
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        otp += Math.floor(Math.random() * 10);
        return otp;
    }

    /**
     * Clone all the hasOwnProperty of obj into new object.
     * @param obj object from which hasOwnProperty are copied.
     */
    static clone(obj: any): any {
        let clone: any = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = obj[key];
            }
        }
        return clone;
    }


    static copyValuesFrom(source: any, destination: any): void {
        for (var destkey in destination) {
            for (var srcKey in source) {
                if (destkey == srcKey) {
                    destination[srcKey] = source[srcKey];
                }
            }
        }
    }



    static JWT(): string {
        const payload = { check: true }
        return jwt.sign(payload, AuthenticationProjectConstants.SECRET_KEY);

    }

}