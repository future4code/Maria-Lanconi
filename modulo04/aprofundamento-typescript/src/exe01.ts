// const minhaString:string = 3
// Demonstra erro.

// const meuNumero:number | string = 'asdasd'
// Você pode fazer desta forma.

enum Cores {
    VERMELHA = 'vermelha',
    LARANJA = 'laranja',
    AMARELHA = 'amarela',
    VERDE = 'verde',
    AZUL = 'azul',
    VIOLETA = 'violeta'
}

type pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}

const ana:pessoa = {
    nome: 'Ana',
    idade: 31,
    corFavorita: Cores.AZUL
}

const pedro:pessoa = {
    nome: 'Pedro',
    idade: 12,
    corFavorita: Cores.AMARELHA
}

const bruno:pessoa = {
    nome: 'Bruno',
    idade: 23,
    corFavorita: Cores.VERDE
}

console.log(bruno)