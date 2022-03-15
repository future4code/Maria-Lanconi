import { Request, Response } from "express";
import { connection } from "../connection/connection";
import { User } from "../data/user";
import { hash } from '../services/generateHash';
import { generateToken } from "../services/generateToken";


export const signUpUser = async (req:Request, res:Response):Promise<void> => {
    try {
        const {name, email, password} = req.body
        
        //handle empty input
        if(!name || !email || !password) {
            throw new Error('Por favor, preencha todos os campos.')
        }

        //handle min character limit
        if(password.length < 6){
            throw new Error('A senha precisa ter pelo menos seis caracteres.')
        }

        //verify user exist
        const [user] = await connection("cookenuUsers").where({email})

        if(user){
            throw new Error('Usuário já criado!')
        }

        //create User
        const newUser = new User({name, email, password})

        //insert on db
        const insertNewUser = await connection('cookenuUsers')
        .insert({
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: await hash(newUser.getPassword())
        })

        //token 
        const token = await generateToken(newUser.getId())
           
        //body output
        res.send({"access_token": token})

    } catch (error:any) {
        res.send(error.message)
    }
}