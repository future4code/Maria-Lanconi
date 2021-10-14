/*
// Interpretação de código

1  a - console.log(filme.elenco[0]) = "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) = "Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) = {canal: "Globo", horario: "14h"}

2  a - console.log(cachorro) = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
console.log(gato) = {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}
console.log(tartaruga) = {
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}
b - copia as propriedades do objeto citado

3 a - false
undefined *colei nessa rs*
b -  false pois é o valor atribuido a esta propriedade, undefined porque ela propriedade não foi definida dentro do objeto.


//Exercicio de escrita de codigo 

const nomePessoa = { 
    nome: 'Maria Fernanda',
    apelidos: ['Nanda', 'Mafe', 'Fê']
}

const nomePessoa02 = {
    ...nomePessoa,
    apelidos: ['Ma', 'Nandinha', 'Fer']
}

function apresentarPessoa(individuo) {
   let apresentacao = console.log(`Eu sou a ${individuo.nome}, mas pode me chamar de: ${individuo.apelidos[0]}, ${individuo.apelidos[1]} ou ${individuo.apelidos[2]}`)
   return apresentacao
}

apresentarPessoa(nomePessoa)
apresentarPessoa(nomePessoa02)

const primeiroUsuario = {
    nome: 'Luis',
    idade: 51,
    profissão: 'Vendedor'
}

const segundoUsuario = {
    nome: 'Vitor Gabriel',
    idade: 26,
    profissão: 'Design'
}

function receberPropriedades(individuo) {
    let relatorioPropriedades = console.log(`O nome do usuário é ${individuo.nome}, possuindo ${individuo.nome.length} caracteres. O usuário possui ${individuo.idade} anos e sua profissão é ${individuo.profissão} e possui ${individuo.profissão.length} caracteres`)
    return relatorioPropriedades
}

receberPropriedades(primeiroUsuario)
receberPropriedades(segundoUsuario)
*/

let carrinho = []

const fruta01 = {
    nome: 'Manga',
    disponibilidade: true
}
const fruta02 = {
    nome: 'Maçã',
    disponibilidade: true
}
const fruta03 = {
    nome: 'Laranja',
    disponibilidade: true
}

function adicionarFrutas(fruta) {
    let frutaAdicionada = carrinho.push(fruta.nome)
    let funcaoRealizada = console.log(`${carrinho}`)
    return funcaoRealizada
}


adicionarFrutas(fruta01)
adicionarFrutas(fruta02)
adicionarFrutas(fruta03)