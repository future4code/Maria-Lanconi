type cliente = {
    cliente:string,
    saldoTotal:number,
    debitos:any[]
}

const clientesBanco:cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const verificarClientes = (clientesBanco:cliente[]) => {
    const mapClients = clientesBanco.map((conta) => {
       const saldo:number = conta.saldoTotal
       const clienteDebitos:number[] = conta.debitos
          
       if (clienteDebitos.length > 0) {
        const reducer = (previousValue:number, currentValue:number) => previousValue + currentValue;
        const somaDebitos:number = clienteDebitos.reduce(reducer)

        if (saldo - somaDebitos < 0) {
            return conta
        }
       }
    })

    const filtro = mapClients.filter((conta) => {
        return conta !== undefined
    })

    return filtro
    
}

console.log(verificarClientes(clientesBanco))