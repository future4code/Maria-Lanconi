import User from '../model/User';
import BaseDatabase from './BaseDatabase';

type FindByEmailResponse ={
    id: string
    name: string
    email: string
    password: string
}[]

export default class UserData extends BaseDatabase {
    protected tableName = 'users_labook'

    insert = async (user:User) => {
        try {
            await BaseDatabase
            .connection(this.tableName)
            .insert({user})
        } catch(error){
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }

    findByEmail = async (email:string) => {
        try {
            const findByEmailResult:FindByEmailResponse = await BaseDatabase
            .connection(this.tableName)
            .select("*")
            .where({ email })

            return findByEmailResult[0]
        } catch(error){
            throw new Error("Erro ao buscar usuário no banco")
        }
    
    }

}
