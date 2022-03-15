import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { getTokenData } from "../services/generateToken";
import { connection } from "../connection/connection";

dotenv.config();

export const myProfile = async (req:Request, res:Response):Promise<void> => {
    try {
    
        //verify user token
        const token = getTokenData(req.headers.authorization!)

        //handle empty input
        if(!token){
            throw new Error('Token de Autorização não foi inserido!')
        }

        //get db info
        const userInfo = await connection('cookenuUsers')
        .select('id', 'name', 'email')
        .where({id: token.id})
        
        res.send(userInfo)

    } catch (error:any) {
        res.send(error.message)
    }
}