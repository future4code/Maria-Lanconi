// interpretação de código
/*

1 - 10
2 a - 19, 21, 23, 25, 27, 30
b -  É suficiente, no caso dentro do console do if poderiamos acessar uma propriedade da array (index.Of()) e passar o numero como parametro, exemplo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(`O valor maior que 18 é ${numero} e possui indice igual à ${lista.indexOf(numero)}` )
    }
}

const numeroDePets = Number(prompt('Por favor, insira o número de pets que você possui:'))

for (let i = 0; i === numeroDePets; i++){
    if (numeroDePets > 0){
        let nomePet = prompt('Por favor insira o nome do seu pet, um de cada vez:')
        let listaNomesPets = []
        let adicaoDeNomes = listaNomesPets.push(nomePet)
        console.log(`${listaNomesPets}`)
 
    } else if (numeroDePets === 0){
        console.log('Que pena! Você pode adotar um pet!')

    } else {
        console.log('Adicione um valor maior ou igual a 0')
    }
}
*/

let arrayOriginal = [10, 5, 6, 1, 65, 45, 23, 12]
for( let numero of arrayOriginal){
    console.log(numero)
}
for( let numero of arrayOriginal){
    console.log(numero / 10)
}

n = 0
while (n === arrayOriginal.length){
    n++
    let numeropar = arrayOriginal[n] % 2
    let arrayCopia = []
    if (numeropar === 0){
        novoValorArray = arrayCopia.push(numeropar)
        console.log(`${novoValorArray}`)
    }

}
    