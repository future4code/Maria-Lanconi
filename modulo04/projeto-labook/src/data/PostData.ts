import Post, {POST_TYPES} from "../model/Post";
import BaseDatabase from "./BaseDatabase";

type FindByIdResponse = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}[]

export default class PostData extends BaseDatabase {
    protected tableName = 'posts_labook'

    insertPost = async (post:Post) => {
        try{
            await BaseDatabase
            .connection(this.tableName)
            .insert({post})
        } catch(error){
            throw new Error("Erro ao criar post no banco de dados")
        }
    }

    findById = async (id:string) => {
        try {

            const findByIdResult:FindByIdResponse = await BaseDatabase
            .connection(this.tableName)
            .select("*")
            .where({ id })

            return findByIdResult[0]
        } catch(error){
            throw new Error("Erro ao buscar post no banco")
        }
        
    }
}