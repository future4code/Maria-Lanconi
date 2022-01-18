//Exercício 01

//Acessamos os parametros através do process.argv

// const nomePessoa = process.argv[2]
// const idadePessoa = Number(process.argv[3])

// const mensagem = `Olá, ${nomePessoa}! Você tem ${idadePessoa} anos.`
// const mensagemApos7Anos = `Olá, ${nomePessoa}! Você tem ${idadePessoa} anos. Em sete anos você terá ${idadePessoa + 7}!`

// console.log(mensagemApos7Anos)

//Exercício 02

// switch (process.argv[2]) {
//     case 'add':
//         const valorSoma =  Number(process.argv[3]) + Number(process.argv[4])
//         console.log(valorSoma)
//         break
//     case 'sub':
//         const valorSub = Number(process.argv[3]) - Number(process.argv[4])
//         console.log(valorSub)
//         break
//     case 'mult':
//         const valorMult =  Number(process.argv[3]) * Number(process.argv[4])
//         console.log(valorMult)
//         break
//     case 'div':
//         const valorDiv =  Number(process.argv[3]) / Number(process.argv[4])
//         console.log(valorDiv)
//         break
//     default:
//         console.log('Por gentileza, insira vlaores válidos!')
// }

//Exercio 03

// const listaDeTarefas = ['Limpar a casa']

// const adicionarTarefa = [...listaDeTarefas, process.argv[2]]

// console.log(`Tarefa adicionada com sucesso! Suas tarefas agora são: ${adicionarTarefa}`)

//Exercio 04