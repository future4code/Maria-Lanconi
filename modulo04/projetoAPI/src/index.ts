import express, { Request, Response } from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.get('/ping', (req:Request, res:Response) => {
    res.status(200).send("pong!")
})

type extrato = {
    valor:number,
    data:string,
    descrição:string
}

type user = {
    nome:string,
    documento:string,
    nascimento:string
    saldo:number,
    extrato:extrato[]
} 

const listaDeUsuário:user[] = [
    {
        nome: "Teste1",
        documento: "123.456.678-22",
        nascimento: "27/03/2008",
        saldo: 100,
        extrato: []
    }
    
]

// Criar Conta OK
// >18 anos OK
// CPF != OK
// POST: {nome, CPF, data nascimento} OK
// Type user { nome, cpf, data de nascimento, saldo=0} OK
// Type extrato [{valor, data, descrição}] OK

app.post('/users/create', (req:Request, res:Response) => {
    try {
        const { nome, documento, nascimento} = req.body

        const nascimentoData:number = Number(nascimento.split('/').splice(2))
        const dataAtual:number = new Date().getFullYear()
        const idade = dataAtual - nascimentoData

        if ( idade < 18) {
            throw new Error('Você precisar ter mais de 18 anos para abrir uma conta!')
        }

        for(let usuario of listaDeUsuário) {
            if( usuario.documento === documento) {
                throw new Error('Você já possui cadastro em nosso banco!')
            }
        }

        const adionandoUsuario = [...listaDeUsuário, {
            nome,
            documento,
            nascimento,
            saldo: 0,
            extrato: []
        }]

        res.status(200).send(adionandoUsuario)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
       
})

// Passar CPF e Nome OK
// Get saldo OK

app.get('/saldo', (req:Request, res:Response) =>{
    try {
        const nome = req.query.nome
        const doc = req.query.doc
        let saldoUsuario
         
        if (!nome) {
            throw new Error('Nome inválido, por favor insira um nome correto.')
        }

        if(!doc){
            throw new Error('Documento inválido, por favor insira um documento correto.')
        }

        for ( let usuario of listaDeUsuário) {
            if ( nome === usuario.nome && doc === usuario.documento) {
                saldoUsuario = usuario.saldo
            } else {
                throw new Error('Nome ou documento incorreto, por favor, verifique as informações.')
            }
        }

        res.status(200).send({saldoUsuario})
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

//Não esta lendo o array inteiro

app.post('/saldo', (req:Request, res:Response) => {
    try{
        const nome = req.query.nome
        const doc = req.query.doc
        const valor = req.body.valor
        let saldoAtual
        let nomeUsuario
        let docUsuario

        if(!valor){
            throw new Error('Insira o valor que deseja adicionar.')
        }

        for ( let i=0; i < listaDeUsuário.length; i++){
            nomeUsuario = listaDeUsuário[i].nome
            docUsuario = listaDeUsuário[i].documento
            
            if ( listaDeUsuário[i].nome === nome && listaDeUsuário[i].documento === doc) {
                saldoAtual = listaDeUsuário[i].saldo + valor
            }
        }

        res.status(200).send({nomeUsuario, docUsuario, nome, doc, saldoAtual})
    } catch(error:any) {
        res.status(400).send(error.message)
    }
})
