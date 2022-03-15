import * as jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

type authenticationData = {
    id:string
}

export const generateToken = async (id:string):Promise<string> => {
    return jwt.sign(
        { id: id },
        String(process.env.KEY),
        { expiresIn: "24h" }
    )
}

export const getTokenData = (token: string): authenticationData | null =>{
    try {
        const { id } = jwt.verify(token, String(process.env.KEY)) as authenticationData
        
        return { id }  
        
    } catch (error) { 
        return null 
    }
}