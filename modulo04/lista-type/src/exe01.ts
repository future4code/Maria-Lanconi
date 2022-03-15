const nomePessoa:string = 'Maria'
const dataNascimento:string = '24/03/2000'
const arrayNascimento:string[] = dataNascimento.split('/')

console.log(`Olá me chamo ${nomePessoa}, nasci no dia ${arrayNascimento[0]} do mês de ${arrayNascimento[1]} do ano de ${arrayNascimento[2]}`)