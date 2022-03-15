import { Request, response, Response } from "express";
import { connection } from "../connection/connection";
import { getTokenData } from "../services/generateToken";

export const usersProfile = async (req:Request, res:Response):Promise<void> => {
    try {
        const {id}= req.params
       
        //verify user token
        const token = getTokenData(req.headers.authorization!) 
        
        //handle empty input
        if(!token){
            throw new Error('Token de Autorização não foi inserido!')
        }

        if(!id){
            throw new Error('ID não informado.')
        }
        
        const userInfo = await connection('cookenuUsers')
        .select('id', 'name', 'email')
        .where({id: id})

        res.send(userInfo)
    } catch (error:any) {
        res.send(error.message)
    }
}