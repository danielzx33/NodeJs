import { Router } from "../router";
import * as restify from "restify";
import {ListaFunc} from "../userList"

class UserRouter extends Router{
    aplyRoutes(application: restify.Server){
        application.get('/users', (req,res,next)=>{
            ListaFunc.findAll().then(func =>{
                res.json({func: func})
            }) })
        
    }

}

export const usersRouter = new UserRouter();