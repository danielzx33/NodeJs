"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server/Server");
const server = new Server_1.Server();
server.bootStrap().then(server => {
    console.log("rodando em :" + server.application.address().port);
}).catch(err => {
    console.log('Server failed because:');
    console.error(err);
    process.exit(1);
});
