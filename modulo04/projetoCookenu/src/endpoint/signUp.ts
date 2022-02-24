import * as jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import { connection } from "../connection/connection";
import { User } from "../data/user";
import { hash } from '../services/generateHash';
import dotenv from "dotenv";

dotenv.config();

export const signUpUser = async (req:Request, res:Response):Promise<void> => {
    try {
        const {name, email, password} = req.body
        
        //pré requisito registro
        if(!name || !email || !password) {
            throw new Error('Por favor, preencha todos os campos.')
        }

        if(password.length < 6){
            throw new Error('A senha precisa ter pelo menos seis caracteres.')
        }

        //criando user | inserindo DB 
        const newUser = new User({name, email, password})

        const insertNewUser = await connection('cookenuUsers')
        .insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: await hash(newUser.getPassword())
        })

        //token acesso
        const token = jwt.sign(
            { id: newUser.getId() },
            String(process.env.KEY),
            { expiresIn: "24h" }
        )
           
        //body output
        res.send({"access_token": token})

    } catch (error:any) {
        res.send(error.message)
    }
}