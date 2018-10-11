import * as restify from 'restify'

export abstract class Router{
    abstract aplyRoutes(application: restify.Server)
}