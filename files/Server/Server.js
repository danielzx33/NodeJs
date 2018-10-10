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
    initRoutes() {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'meat-api'
                });
                this.application.use(restify.plugins.queryParser());
                //routes
                this.application.get("/login", [(req, res, next) => {
                        if (req.userAgent && req.userAgent().includes("MSIE 7.0")) {
                            res.json({ version: "please update your browser" });
                            next(false);
                        }
                        next();
                    },
                    (req, res, next) => {
                        res.json({ login: "nick",
                            Brownser: req.userAgent(),
                            url: req.href(),
                            query: req.query
                        });
                        return next();
                    }]);
                this.application.listen(3000, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    bootStrap() {
        return this.initRoutes().then(() => this);
    }
}
exports.Server = Server;
