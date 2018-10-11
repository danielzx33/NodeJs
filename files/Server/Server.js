"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = __importStar(require("restify"));
class Server {
    initRoutes(routers) {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'meat-api'
                });
                this.application.use(restify.plugins.queryParser());
                //routes
                for (let router of routers) {
                    router.aplyRoutes(this.application);
                }
                this.application.listen(3000, () => resolve(this.application));
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootStrap(routers = []) {
        return this.initRoutes(routers).then(() => this);
    }
}
exports.Server = Server;
