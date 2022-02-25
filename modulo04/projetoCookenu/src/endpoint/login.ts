import { Request, Response } from "express";
import { connection } from "../connection/connection";
import { compare } from '../services/generateHash';
import * as jwt from 'jsonwebtoken';
import { generateToken } from "../services/generateToken";

export const loginUsers = async (req:Request, res:Response):Promise<void> => {
    try {
    
        const {email, password} = req.body
        
        if (!email ||!password) {
            throw new Error('Por favor, preencha todos os campos.')
        }

        //get user on db
        const [user] = await connection('cookenuUsers').where({email})

        //verify hash
        const passwordIsCorrect = await compare(password, user?.password)

        if (!user ||!passwordIsCorrect) {
            throw new Error('Credenciais Inválidas!')
        }

        //user token
        const token = await generateToken(user.id)

        //body output
        res.send({"access_token": token})

    } catch (error:any) {
        res.send(error.message)
    }
       

}