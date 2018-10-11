"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../router");
const userList_1 = require("../userList");
class UserRouter extends router_1.Router {
    aplyRoutes(application) {
        application.get('/users', (req, res, next) => {
            userList_1.ListaFunc.findAll().then(func => {
                res.json({ func: func });
            });
        });
    }
}
exports.usersRouter = new UserRouter();
