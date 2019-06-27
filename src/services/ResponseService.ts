import {Request, Response }from 'express-serve-static-core'; 


interface IRESPONSE {
    message:any; 
    data:any; 
    cause?:any; 

}

export default class APIResponse {
   
    public static sendResponse(req:Request, res:Response, resObject:any, resCode:any, message:any):void {
        const response = APIResponse.response(req, resObject, message); 
      
            res.send(response); 
    
    }

    public static catchError(req:Request, res:Response, err:any)
     {
        console.log(err+"**************************"); 
        if (err.errorCode) {
            console.log("IF CASE" + err.errorMessage); 
           // message = 
            err.errorMessage; 
            err.code = err.errorCode; 
            console.log("IF CASE" + err.errorMessage +    "$$$" +err.code); 
            APIResponse.sendResponse(req, res,  {}, err.code, err.errorMessage); 
        }
      else{
          if(err.code)
          {
         
          //  message =  `ErrCode:${err.code}, ErrMsg:${err.message}`
            APIResponse.sendResponse(req, res,  {} , err.code,  `ErrCode:${err.code}, ErrMsg:${err.message}`); 
           // err.message = `ErrCode:${err.code}, ErrMsg:${err.message}`;
          }
          APIResponse.sendResponse(req, res,  {}, err.code,  `ErrCode:${err.code}, ErrMsg:${err.message}`);      
      }


    }
    
  

    private static response(req:Request, resObject:any, message:String):IRESPONSE {
        const resultResponse:IRESPONSE =  {
            message:message, 
            data:resObject
        }; 
      
        return resultResponse; 
    }
    
}
