import express, { Request, Response } from "express";
import cors from 'cors';
import { AddressInfo } from "net";
import { send } from "process";
import { idText } from "typescript";

const app = express();

app.use(cors())
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

//EXERCÍCIO 01
app.get('/ping', (req:Request, res:Response) => {
    res.send('Pong! 🏓')
}) 

//EXERCÍCIO 02
type toDo = {
    userId:any,
    id:any,
    title:string,
    completed:boolean
}

//EXERCÍCIO 03

const listaDeAfazeres:toDo[] = [
    {
        userId: 10,
        id: 1,
        title: 'Fazer Exercícios',
        completed: true
    },
    {
        userId: 10,
        id: 2,
        title: 'Arrumar Guarda-roupa',
        completed: false
    },
    {
        userId: 10,
        id: 3,
        title: 'Fazer Almoço',
        completed: true
    }
]

//EXERCÍCIO 04

app.get('/tarefas/concluidas', (req:Request, res:Response) => {
    const tarefasConcluidas = []

    for(let tarefa of listaDeAfazeres) {
        if ( tarefa.completed === true){
            tarefasConcluidas.push(tarefa.title)
        }
    }

    res.send(tarefasConcluidas)
})

//EXERCÍCIO 05

app.post('/tarefas/novaTarefa/:idUser', (req:Request, res:Response) => {
    const idUser = req.params.idUser
    const { title, completed } = req.body
    
    const novaListaAfazeres = [...listaDeAfazeres,
    {   
        idUser,
        id: Date.now(),
        title,
        completed
    }]

    res.send({novaListaAfazeres})
})

//EXERCÍCIO 06

app.post('/tarefas/editTarefa/:idTarefa', (req:Request, res:Response) => {
    const idTarefa = req.params.idTarefa

    const alterarTarefa = listaDeAfazeres.filter((tarefa) => {
        if (tarefa.id == idTarefa) {
            return tarefa
        }
    }).map((tarefa) => {
        if ( tarefa.completed === true) {
            return tarefa.completed = false
        } else {
            return tarefa.completed = true
        }
    })

    res.send(alterarTarefa)
})

//EXERCÍCIO 07

app.delete('/tarefas/deletTarefa/:idTarefa', (req:Request, res:Response) => {
    const idTarefa = req.params.idTarefa

    const filterToDo = listaDeAfazeres.filter((tarefa) => {
        if (tarefa.id == idTarefa) {
            const index = listaDeAfazeres.indexOf(tarefa)
            
            while(index >= 0){
                listaDeAfazeres.splice (index,1)
                return listaDeAfazeres
            }
        }

        
    })


    res.send(listaDeAfazeres)
})

//EXERCÍCIO 08

app.get('/tarefas/usuario/:idUser', (req:Request, res:Response) => {
    const idUser = req.params.idUser

    const filtroUsuário = listaDeAfazeres.filter((usuario) => {
        if(usuario.userId == idUser) {
            return usuario
        }

    })

    res.send(filtroUsuário)
})