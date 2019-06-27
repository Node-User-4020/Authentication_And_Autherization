import { IAuth } from "./AuthRequest";

export interface ILoginRequest 
{
    emailId:String, 
    password:String, 
    deviceId:String, 
    deviceType:String, 
 
}


export interface IGetProfileRequset extends IAuth {
    
}

