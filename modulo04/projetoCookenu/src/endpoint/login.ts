import { Request, Response } from "express";
import { connection } from "../connection/connection";
import { compare } from '../services/generateHash';
import * as jwt from 'jsonwebtoken';

export const loginUsers = async (req:Request, res:Response) => {
    try {
    
        const {email, password} = req.body
        
        if (!email ||!password) {
            throw new Error('Por favor, preencha todos os campos.')
        }

        //localizar user
        const [user] = await connection('cookenuUsers').where({email})

        //verificar hash
        const passwordIsCorrect = await compare(password, user?.password)

        if (!user ||!password) {
            throw new Error('Credenciais Inválidas!')
        }

        //token acesso
        const token = jwt.sign(
            { id: user.id },
            String(process.env.KEY),
            { expiresIn: "24h" }
        )

        //body output
        res.send({"access_token": token})

    } catch (error:any) {
        res.send(error.message)
    }
       

}