const palavraEscolhida:string = 'asd'

const verificarAnagramas = (palavra:string) => {
    let numeroLetras:number = palavra.length
    
    for (let i = 1; i < palavra.length; i++) {
       numeroLetras *= i
    }

    return numeroLetras
}
 
console.log(verificarAnagramas(palavraEscolhida))