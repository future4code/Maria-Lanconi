/*
// Exercicio interpretação de código

1- a) 10 50
b) Só executaria a função e nada seria impresso no console

02- a) Ela pede uma informação, neste caso o texto, e da uma função onde esta irá retirar a caixa alta da frase e verificar se a frase possui a string cenoura
b) true; true; false

//Escrita de código

function identificarUsuario() {
    let nomeUsuario = "Maria Fernanda"
    let idadeUsuario = "21"
    let cidadeUsuario = "Indaiatuba"
    let ocupacaoUsuario = "estudante"
    let perfilUsuario = `Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${ocupacaoUsuario}`
    return perfilUsuario
}

const apresentacaoUsuario = identificarUsuario()
console.log(apresentacaoUsuario)

function identificarUsuario() {
    let nomeUsuario = prompt("Insira o seu nome:")
    let idadeUsuario = prompt("Insira sua idade:")
    let cidadeUsuario = prompt("Insira a cidade onde você reside:")
    let ocupacaoUsuario = prompt("Insira sua ocupação:")
    let perfilUsuario = `Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${ocupacaoUsuario}`
    return perfilUsuario
}

const apresentacaoUsuario = identificarUsuario()
console.log(apresentacaoUsuario)


function somarParametros(x, y) {
    let soma = x + y
    return soma
}

function comparaçaoParametros(x, y) {
    let comparacao = x <= y
    return comparacao
}

let primeiroParametro = Number(prompt("Insira o primeiro valor:"))
let segundoParametro = Number(prompt("Insira o segundo valor:"))

const resultadoSoma = somarParametros(primeiroParametro, segundoParametro)
console.log(`${resultadoSoma}`)

const resultadoComparacao = comparaçaoParametros(primeiroParametro, segundoParametro)
console.log(`${resultadoComparacao}`)

function avaliarString (x) {
    let stringLowerCase = x.toLowerCase()
    let stringLength = x.length
    let string = `${stringLowerCase} tem um tamanho de ${stringLength} caracteres`
    return string
}

let stringUsuario = prompt("Insira uma frase:")

const stringAvaliada = avaliarString(stringUsuario)
console.log(`${stringAvaliada}`)
*/

function somarParametros(x, y) {
    let soma = x + y
    return soma
}

function subtrairParametros(x, y) {
    let subitracao = x - y
    return subitracao
}

function multiplicarParametros(x, y) {
    let multiplicacao = x * y
    return multiplicacao
}

function dividirParametros(x, y) {
    let divisao = x / y
    return divisao
}

let primeiroParametro = Number(prompt("Insira um valor:"))
let segundoParametro = Number(prompt("Insira o segundo valor:"))

const resultadoSoma = somarParametros(primeiroParametro, segundoParametro)
const resultadoSubtracao = subtrairParametros(primeiroParametro, segundoParametro)
const resultadoMultiplicacao = multiplicarParametros(primeiroParametro, segundoParametro)
const resultadoDivisao = dividirParametros(primeiroParametro, segundoParametro)

console.log(`Números inseridos: ${primeiroParametro} e ${segundoParametro} \n Soma: ${resultadoSoma} \n Diferença: ${resultadoSubtracao} \n Multiplicacão: ${resultadoMultiplicacao} \n Divisão: ${resultadoDivisao}`)