import * as restify from "restify";
import { promises } from "fs";


export class Server{

    application: restify.Server

    initRoutes(): Promise<any>{
        return new Promise((resolve,reject) =>{
            try {
                this.application = restify.createServer({
                    name: 'meat-api'
                })
                this.application.use(restify.plugins.queryParser());

                
                //routes
                
                this.application.get("/login",[(req,res,next) =>{
                    if(req.userAgent && req.userAgent().includes("MSIE 7.0")){
                        res.json({version: "please update your browser"})
                        next(false);
                    }
                    next()
                },
                
                    (req,res,next)=>{
                        res.json({login: "nick",
                        Brownser: req.userAgent(),
                        url: req.href(),
                        query: req.query
                    })
                    return next();
                }])
                this.application.listen(3000, ()=>{
                resolve(this.application)
                })
                
            } catch (error) {
                reject(error)
            }
        })
    }

    bootStrap(): Promise<Server>{
       return this.initRoutes().then(()=>this)
    }
}