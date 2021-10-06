//Interpretação de código

/* 
01 - bool3 = true
    "a." False
    "b." False
    "c." True
    "d." Boolean

02 - Os valores inseridos irão concatenar e não realizar uma operação matemática, para resolver basta converter os valores para number.
    Por exemplo, se forem inseridos 3 e 4 o valor impresso será 34.

03 - let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))
*/

//Escrita de código
/*
let idadeDoUsuario = Number(prompt("Insira sua idade:"))
let idadeDoAmigo = Number(prompt("Insira a idade de seu melhor amigo(a):"))
let comparacaoIdade = idadeDoUsuario > idadeDoAmigo
let diferencaIdade = idadeDoUsuario - idadeDoAmigo

console.log(`Sua idade é maior do que a do seu melhor amigo? ${comparacaoIdade}`)
console.log(`A diferença de idade de vocês é: ${diferencaIdade}`)

let numeroPar = Number(prompt("Insira um número par:"))
let restoNumPar = numeroPar % 2

console.log(`${restoNumPar}`)

//com números pares o resto sempre será 0 e com números ímpares sempre será 1


let idadeUsuario = Number(prompt("Por favor insira sua idade em anos:"))
let idadeMeses = idadeUsuario * 12
let idadeDias = idadeUsuario * 365
let idadeHoras = idadeUsuario * 8760

console.log(`Sua idade em meses é: ${idadeMeses} meses`)
console.log(`Sua idade em dias é: ${idadeDias} dias`)
console.log(`Sua idade em horas é: ${idadeHoras} horas`)


let primeiroNumero = Number(prompt("Insira um número:"))
let segundoNumero = Number(prompt("Insira um segundo número:"))

let maiorValor = primeiroNumero > segundoNumero
let igualdade = primeiroNumero === segundoNumero
let restoPrimeiroNum = primeiroNumero % segundoNumero === 0
let restoSegundoNum = segundoNumero % primeiroNumero ===0

console.log(`1 - ${maiorValor}`)
console.log(`2 - ${igualdade}`)
console.log(`3 - ${restoPrimeiroNum}`)
console.log(`4 - ${restoSegundoNum}`)


let fahrenheitKelvin = (77 - 32) * (5/9) + 273.15
console.log(`O resultado é ${fahrenheitKelvin} K`)

let celsiusFahrenheit = ((80 * (9/5)) + 32)
console.log(`O resultado é ${celsiusFahrenheit}°F`)

let celsiusFahrenheit02 = ((30 * (9/5)) + 32)
let celsiusKelvin = (30 + 273.15)
console.log(`O resultado é ${celsiusFahrenheit02}°F e ${celsiusKelvin} K`)

let valorTemperatura = Number(prompt("Insira um valor de temperatura:"))
let celsiusFahrenheit03 = ((valorTemperatura * (9/5)) + 32)
let celsiusKelvin02 = (valorTemperatura + 273.15)
console.log(`O resultado é ${celsiusFahrenheit03}°F e ${celsiusKelvin02} K`)

let quilowattsConsumido = Number(prompt("Insira o valor de quilowatts consumido em sua residência:"))
let consumoQuilowatts = quilowattsConsumido * 0.05
console.log(`O valor do seu consumo de energia é ${consumoQuilowatts} reais`)

let descontoValorQuilowatts = consumoQuilowatts - (consumoQuilowatts * 0.15)
console.log(`Devido ao desconto de 15% o valor do seu consumo de energia é ${descontoValorQuilowatts} reais`)
*/
let libraQuilograma = 20 / 2.22
console.log(`20lb equivalem a ${libraQuilograma} kg.`)

let oncaQuilograma = 10.5 / 35.274
console.log(`10.5 oz equivalem a ${oncaQuilograma} kg.`)

let milhasMetro = 100 / 0.00062
console.log(`100mi equivalem a ${milhasMetro} m.`)

let pesMetro = 50 / 3.28
console.log(`50ft equivalem a ${pesMetro} m.`)

let galaoLitro = 103.56 / 0.264
console.log(`103.53gal equivalem a ${galaoLitro} L.`)

let xicaraLitro = 450 / 4.16
console.log(`450xic equivalem a ${xicaraLitro} L.`)

let valorGalaoLitro = Number(prompt("Insira um volume para ser convertido de galão (gal) para litros (L):"))
let galaoLitroUsuario = valorGalaoLitro / 0.264
console.log(`${valorGalaoLitro} gal equivalem a ${galaoLitroUsuario} L.`)

