import * as bcrypt from 'bcryptjs';
import dotenv from "dotenv";

dotenv.config();

export const hash = async (password:string):Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(password, salt)

    return result
}

export const compare = async(password: string, hash: string) => {
    const result = await bcrypt.compare(password, hash)
    return result
}
