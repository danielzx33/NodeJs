import { resolve } from "url";

const listuser = [
    {nome: 'DANIEL GUIMARAES DOS SANTOS', email: 'DANIELZX33@HOTMAIL.COM'},
    {nome: 'thiago', email: 'thiago@HOTMAIL.COM'} 
]

export class ListaFunc{
    static findAll(): Promise<any[]>{
        return Promise.resolve(listuser);
    }
}

