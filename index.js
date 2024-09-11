//arrays,objetos

let metas = ["Ler um livro por mês", "Aprender inglês", "Fazer exercícios físicos"] //array

console.log(metas[0]+ " e " + metas[1])


let meta = {
    value: "Ler um livro por mês",
    address: 2,
    checked: false,
    log: (info) => {
        console.log(info)
    }
}   //objeto

meta.value = "não é mais ler um livro"
meta.log(meta.value)

//function  // arrow function
//const criarMeta = () => {}

// function criarMeta() {}