const model = (valor1:string, valor:number)=>{
    let nome:string;
    if(valor == 1) nome = valor1;

    return nome;

}

console.log(model("teste",1))
console.log(model("", 2))
console.log();