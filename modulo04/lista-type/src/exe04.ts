import { ScriptElementKindModifier } from "typescript"

enum SETOR {
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'
}

type colaborador = {
    nome:string,
    salário:number,
    setor:string,
    presencial:boolean
}

const quadroDeColaboradores:colaborador[] = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

const filtrarQuadro = (arrayDeFuncionario:colaborador[]) => {
    const filtro = (arrayDeFuncionario.filter ((pessoa:colaborador) => {
        return pessoa.setor === SETOR.MARKETING && pessoa.presencial === true
    }))

    return filtro
}

console.log(filtrarQuadro(quadroDeColaboradores))