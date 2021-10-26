```
function calculaPrecoTotal(quantidade) {
    if (quantidade < 12 && quantidade > 0) {
        let precoMaca = quantidade * 1.3
        return precoMaca
    } else {
        let precoMaca = quantidade * 1
        return precoMaca
    }
}
  
console.log(calculaPrecoTotal(2))