//1 - crie uma função que exiba uma mensagem no console
function mensagem() {
    console.log("1-essa é uma bela mensagem, te enche de determinação");
}
mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome(eu) {
    console.log(`2-Quem ta falando aqui é o ${eu}`);
}
nome(`Heitor`)

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
let info = function caracteristicas(nome, idade, estiloMusica) {
    console.log(nome);
    console.log(idade);
    console.log(estiloMusica);
}
info("3-Heitor", "18 anos", "Rap")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function musicaEFilme(filme, musica) {
    console.log(filme);
    console.log(musica);
}
musicaEFilme(`4-Click`, `Estilo cachorro`)

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(num) {
    return num * 3
}
console.log(triplo(10));

//6 - crie uma função que  verifique se uma  variável é true ou false

let variavel = 60<30
function trueOrFalse(variavel) {
    if (variavel == true) {
        console.log("a variavel é verdadeira");
    }
    else if(variavel == false){
        console.log("a variavel é falsa");
    }
    else{
        console.log("algo está errado");
    }
}

trueOrFalse(variavel)