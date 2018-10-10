import { Server } from "./Server/Server";

const server = new Server();
server.bootStrap().then(server =>{
    console.log("rodando em :" + server.application.address().port)
}).catch(err=>{
    console.log('Server failed because:')
    console.error(err)
    process.exit(1)
}
)









