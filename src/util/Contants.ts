//import { AppConfig } from './../../config/AppConfig';
export class ProjectConstants {
    public static readonly LOCALPORT = 8020;
    public static readonly QAPORT = 8020;
    public static readonly STAGINGPORT = 8021;
    public static readonly PRODPORT = 8021;

    public static readonly LOCALDATABASENAME = "Authentication";
    public static readonly QADATABASENAME = "Authentication";
    public static readonly STAGINGDATABASENAME = "Authentication";
    public static readonly PRODDATABASENAME = "Authentication";

    public static readonly LOCALDATABASEPORT = 27017;
    public static readonly QADATABASEPORT = 27030;
    public static readonly STAGINGDATABASEPORT = 27031;
    public static readonly PRODDATABASEPORT = 27017;

    public static readonly LOCAL_URI = "http://10.0.0.170:";
}
export class ApiNames {
    public static readonly AUTHENTICATION = "/api/";
    public static readonly HOME = `${ApiNames.AUTHENTICATION}`;
    public static readonly SIGN_UP = `${ApiNames.AUTHENTICATION}SignUp`;
    public static readonly LOG_IN = `${ApiNames.AUTHENTICATION}LogIn`;
    public static readonly GET_PROFILE = `${ApiNames.AUTHENTICATION}getProfile`;
}

export class AuthenticationProjectConstants {
    public static readonly SECRET_KEY = "developers";
 
}




export class ErrorCodes {
    public static readonly OK = 200;
    public static readonly NO_CONTENT = 204;
    public static readonly BAD_REQUEST = 400;
    public static readonly UNAUTHORIZED = 401;
    public static readonly INVALID_AUTHTOKEN = 403;
    public static readonly PAGE_NOT_FOUND = 404;
    public static readonly NOT_ACCEPTABLE = 406;
    public static readonly REQUEST_TIMEOUT = 408;
    public static readonly CONFLICT = 409;
    public static readonly NO_RESPONSE = 444;
    public static readonly INVALID_TOKEN = 498;
    public static readonly TOKEN_REQUIRED = 499;
}



export class ResponseMessages {

    public static readonly error = (code: Number, msg: string) => {
        return {
            errorCode: code,
            errorMessage: msg
        }
    }
    public static readonly NO_AUTHTOKEN = ResponseMessages.error(100, "No AuthToken");
    public static readonly INVALID_AUTHTOKEN = ResponseMessages.error(101, "No AuthToken"); 
    public static readonly USER_DOESNOT_EXIST = ResponseMessages.error(101, "User Not exist"); 
    public static readonly SIGNUP_USER_ALREADY_EXIST = ResponseMessages.error(101, "User Already exist"); 
    public static readonly SOMETHING_WENT_WRONG = ResponseMessages.error(101, "Something Went Wrong");
    public static readonly INVALID_CREDENTIALS = ResponseMessages.error(101, "Invalid Credentials");
    public static readonly SIGNUP_SUCCESSFULLY = "Signup Sucess";
    public static readonly LOGIN_SUCCESSFULLY = "Login Sucess";
    
    
}
