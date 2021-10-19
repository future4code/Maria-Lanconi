// Interpretação código
/*

1 - { nome: "Amanda Rangel", apelido: "Mandi" } 0 [{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }]
  { nome: "Laís Petra", apelido: "Laura" }, 1 [{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }]
  { nome: "Letícia Chijo", apelido: "Chijo" }, 2
  [ {nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }]
2 - [Amanda Rangel", "Laís Petra", "Letícia Chijo"]
3- { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const novoPet = pets.map((array)=>{
    return array.nome
})
console.log(`${novoPet}`)

const novoPetRaca = pets.filter ((pet) => {
    return pet.raca === "Salsicha"
})
console.log(novoPetRaca)

const darDescontoPet = pets.filter ((racaPet) => {
    return racaPet.raca === "Poodle"
}). map ((mensagemDesconto) => {
    return `Você ganhou um cupom de 10% para tosar o / a ${mensagemDesconto.nome}`
})
console.log (darDescontoPet)
*/
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
const nomesProdutos = produtos.map((array)=>{
    return array.nome
})
console.log(`${nomesProdutos}`)

const produtosDescontos = produtos.map((array)=>{
    let produtoDesconto = (`nome: ${array.nome}, preço: ${array.preco - array.preco * 0.05} `)
    return produtoDesconto
})
console.log(produtosDescontos)

const produtosBebidas = produtos.filter((array)=>{
    return array.categoria === "Bebidas"
})
console.log(produtosBebidas)

const produtosYpe = produtos.filter((array)=>{
    let nomeProduto = array.nome
    return nomeProduto.includes("Ypê")
})
console.log(produtosYpe)

const indicarPrecoProdutosYpe = produtos.filter((array)=>{
    let nomeProduto = array.nome
    return nomeProduto.includes("Ypê")
}).map ((mensagemPreço) => {
    return `Compre ${mensagemPreço.nome} por ${mensagemPreço.preco}`
})

console.log(indicarPrecoProdutosYpe)