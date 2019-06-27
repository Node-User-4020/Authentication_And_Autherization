import * as express from 'express';
import { json } from "body-parser";
import { ApiNames } from '../util/Contants';

var bodyParser = require('body-parser');
import SignUp from '../services/SignUpService';
import Login from '../services/LoginService';
import MiddleWare  from '../util/middleWare';
class ApiRouter {

  public router: express.Router;

  constructor() {
    this.router = express();
  
    this.addMiddlewares();
    this.addRoutes();
  }

  // Add all middlewares here that will get request before routes.
  addMiddlewares(): void {
    
    this.router.use(json());
    this.router.use(bodyParser.urlencoded({ extended: false }));
    
  }


  addRoutes(): void {

    this.router.get(ApiNames.HOME, (req : any, res : any )=>{
      res.send("API SUCESS!!!!");
    });
    this.router.post(ApiNames.SIGN_UP, SignUp.SignUp);
    this.router.post(ApiNames.LOG_IN, Login.Login);
   
    
  }
}
export default new ApiRouter().router; 