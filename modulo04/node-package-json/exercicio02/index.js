//Exercício 02

switch (process.argv[2]) {
    case 'add':
        const valorSoma =  Number(process.argv[3]) + Number(process.argv[4])
        console.log(valorSoma)
        break
    case 'sub':
        const valorSub = Number(process.argv[3]) - Number(process.argv[4])
        console.log(valorSub)
        break
    case 'mult':
        const valorMult =  Number(process.argv[3]) * Number(process.argv[4])
        console.log(valorMult)
        break
    case 'div':
        const valorDiv =  Number(process.argv[3]) / Number(process.argv[4])
        console.log(valorDiv)
        break
    default:
        console.log('Por gentileza, insira vlaores válidos!')
}
