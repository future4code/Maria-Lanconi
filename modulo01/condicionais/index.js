//Interpretação de código
/*
1 a- Ele recebe um number e verifica se o mesmo é um valor par, caso não seja o número não passa no teste.
b- Apenas os pares
c- Apenas os ímpares

2 a - Recebe uma string referente a fruta e retorna o valor recebido e seu preço
b - O preço da fruta Maçã é R$ 2.25
c - seria impresso o nome e valor da pêra

3 a - a const número esta recebendo uma string pelo promp e o Number esta fazendo a conversão desta string para número
b - Se a let mensagem estivesse fora do escopo a mensagem só seria expressa no terminal se o valor fosse 10
c -  Sim, haverá, isso acontece devido a let mensagem ser citada apenas dentro do escopo do if, não existe uma expressão que faça a chamada dele para escopo global, então é dado como undefined

const idadeUsuario = Number(prompt('Por favor, insira a sua idade:'))
if (idadeUsuario > 18) {
  console.log('Você pode dirigir')
} else {
  console.log('Você não pode dirigir')
}


const horarioAula = prompt('Por favor, insira o turno de estudo, sendo M para matutino, V para vespertino e N para noturno:')


if (horarioAula === 'M') {
  console.log('Bom dia!')
} else if (horarioAula === 'V') {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
}

switch (horarioAula){
  case 'M':
    console.log('Bom dia!')
    break;
  case 'V':
    console.log('Boa tarde!')
    break;
  case 'N':
    console.log('Boa Noite')
    break;
  default:
    console.log('Por favor insira um valor válido')
    break;
}
*/

const generoFilme = prompt('Por favor, poderia me dizer qual o gênero do filme que vamos assistir?')
const precoIngresso = Number(prompt('Por favor, poderia me informar o número do ingresso'))

if ( generoFilme === 'Fantasia' && precoIngresso < 15){
  console.log('Boa noite!')
} else{
  console.log('Escolha outro filme :C')
}