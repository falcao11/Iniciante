//arrays,objetos

let meta = {
    value: "Ler um livro por mês",
    //address: 2,
    checked: false,
    /*log: (info) =>{
        console.log(info)
    }*/
}   //objeto

meta.value = "não é mais ler um livro"
//meta.log(meta.value)

//function  // arrow function
//const criarMeta = () => {}

// function criarMeta() {}

let metas = [
    meta,
    {
        value: "Caminhar 2 minutos todos os dias",
        checked: false
    }
] //array

console.log(metas[0].value+ " e " + metas[1].value)