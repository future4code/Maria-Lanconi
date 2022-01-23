
const dataAtual = new Date()
const anoAtual:number = dataAtual.getFullYear()

const dataAniversário:string[] = '24/04/2020'.split('/')
const anoDeAniversário:number = Number(dataAniversário.pop())

const idadeUsuário:number = anoAtual - anoDeAniversário

const dataEmisssao:string[] = '07/11/2010'.split('/')
const anoDeEmissao:number = Number(dataEmisssao.pop())

const tempoDeCarteira:number = anoAtual - anoDeEmissao

const renovarCarteira = (idade:number, tempoCarteira:number) => {
    if (idade <= 20 && idade >= 18) {

        if (tempoDeCarteira >= 5) {
            console.log('Você precisa renovar sua carteira este ano!')
        } else {
            console.log('Você não precisa renovar sua carteira este ano!')
        }

    } else if ( idade > 20 && idade <= 50) {
       
        if (tempoDeCarteira >= 10) {
            console.log('Você precisa renovar sua carteira este ano!')
        } else {
            console.log('Você não precisa renovar sua carteira este ano!')
        }

    } else if ( idade > 50) {
        
        if (tempoDeCarteira >= 15) {
            console.log('Você precisa renovar sua carteira este ano!')
        } else {
            console.log('Você não precisa renovar sua carteira este ano!')
        }

    } else {
        console.log('Você não pode ter carta de motorista.')
    }
}

renovarCarteira(idadeUsuário,tempoDeCarteira)