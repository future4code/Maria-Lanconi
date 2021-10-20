```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salario = 2000
  let salarioFinal = salario + 100 * qtdeCarrosVendidos + valorTotalVendas * 0.05 
  return salarioFinal
}
console.log(`${salarioFinal}`)