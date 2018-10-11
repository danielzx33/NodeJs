import * as restify from "restify";
import { promises } from "fs";
import {Router} from "../router"


export class Server{

    application: restify.Server

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve,reject) =>{
            try {
                this.application = restify.createServer({
                    name: 'meat-api'
                })
                this.application.use(restify.plugins.queryParser());

                
                //routes
                for(let router of routers){
                    router.aplyRoutes(this.application)

                }
                this.application.listen(3000, ()=> resolve(this.application))
                
               
                
            } catch (error) {
                reject(error)
            }
        })
    }

    bootStrap(routers: Router[] = [] ): Promise<Server>{
       return this.initRoutes(routers).then(()=>this)
    }
}