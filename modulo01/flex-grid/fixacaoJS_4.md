```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let numeroOcorrencias = 0
    for (let i = 0; i <= arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numeroEscolhido) {
            numeroOcorrencias++
        } 
    }
    return console.log(`O número ${numeroEscolhido} aparece ${numeroOcorrencias}x`)
}

let arrayListaNumeros = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]
contaOcorrencias(arrayListaNumeros, 4)