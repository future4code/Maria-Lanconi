//Exercício 01

//Acessamos os parametros através do process.argv

const nomePessoa = process.argv[2]
const idadePessoa = Number(process.argv[3])

const mensagem = `Olá, ${nomePessoa}! Você tem ${idadePessoa} anos.`
const mensagemApos7Anos = `Olá, ${nomePessoa}! Você tem ${idadePessoa} anos. Em sete anos você terá ${idadePessoa + 7}!`

console.log(mensagemApos7Anos)
