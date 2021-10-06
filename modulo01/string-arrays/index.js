/*Exercício interpretação código
a. undefined
b. null
c. 10
d. 3
e. [3, 19....]
f. 9

SUBI NUM ÔNIBUS EM MIRROCOS, 27

//Exercício escrita de código

const nomeUsuario = prompt("Insira seu nome:")
const emailUsuario = prompt("Insira seu email:")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)


let comidaFavorita = ["Sushi", "Virado a Paulista", "Strogonoff", "Banana Frita", "Frango Frito"]
console.log(comidaFavorita)
//console.log(`Essa são as minhas comidas preferidas: ${comidaFavorita.join(`/n`)}`) não consegui printar verticalmente

const comidaFavUsuario = prompt("Insira sua comida favorita:")
comidaFavorita[1] = comidaFavUsuario
console.log(`${comidaFavorita}`)

let listadeTarefas = []
const tarefa01 = prompt("Insira uma tarefa do dia-a-dia:")
const tarefa02 = prompt("Insira uma segunda tarefa do dia-a-dia:")
const tarefa03 = prompt("Insira uma terceira tarefa do dia-a-dia:")

listadeTarefas.push(tarefa01)
listadeTarefas.push(tarefa02)
listadeTarefas.push(tarefa03)
console.log(`${listadeTarefas}`)
const indiceDeTarefas = prompt("Por favor insira o número da tarefa já realizada, sendo de 1 a 3:")
let tarefasConcluidas = listadeTarefas.splice(indiceDeTarefas - 1, 1)
console.log(`${listadeTarefas}`)

//Desafio

const stringUsuario = prompt("Por favor, insira uma sentença:")
let stringArray = stringUsuario.split(" ")
console.log(`${stringArray}`)
*/
let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indexFrutas = arrayFrutas.indexOf("Abacaxi")
console.log(`${indexFrutas} ${arrayFrutas.length}`)