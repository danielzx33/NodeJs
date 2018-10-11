"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server/Server");
const users_1 = require("./users/users");
const server = new Server_1.Server();
server.bootStrap([users_1.usersRouter]).then(server => {
    console.log("rodando em porta:" + server.application.address().port);
}).catch(err => {
    console.log('Server failed because:');
    console.error(err);
    process.exit(1);
});
