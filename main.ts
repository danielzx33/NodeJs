import { Server } from "./Server/Server";
import {usersRouter} from "./users/users"

const server = new Server();
server.bootStrap([usersRouter]).then(server =>{
    console.log("rodando em porta:" + server.application.address().port)
}).catch(err=>{
    console.log('Server failed because:')
    console.error(err)
    process.exit(1)
}
)









