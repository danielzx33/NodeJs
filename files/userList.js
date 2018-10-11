"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listuser = [
    { nome: 'DANIEL GUIMARAES DOS SANTOS', email: 'DANIELZX33@HOTMAIL.COM' },
    { nome: 'thiago', email: 'thiago@HOTMAIL.COM' }
];
class ListaFunc {
    static findAll() {
        return Promise.resolve(listuser);
    }
}
exports.ListaFunc = ListaFunc;
