import { CreatePostInputDTO } from "../controller/PostController";
import PostData from "../data/PostData";
import Post, { POST_TYPES } from "../model/Post";
import { authenticationData } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

type PostFindByIdResponse = {
      id: string,
      photo: string,
      description: string,
      type: POST_TYPES,
      createdAt: Date,
      authorId: string
}

export default class PostBusiness{
      constructor(
            private postData:PostData,
            private idGenerator:IdGenerator
      ){}

      createPost = async (input:CreatePostInputDTO, tokenId:string) => {
            const { photo, description, type } = input

            //validacao
            if(!photo || !description || !type){
                  throw new Error("Campos inválidos")
            }

            //criar um id
            const id = this.idGenerator.generateId()
          
            //criar post no banco de dados
            const post = new Post(
                  id,
                  photo,
                  description,
                  type,
                  new Date(),
                  tokenId
            )
            
            await this.postData.insertPost(post)
      }

      findPost = async (id:string) => {
            //validacao
            if(!id){
                  throw new Error("Campos inválidos")
            }

            const postFindByIdResult:PostFindByIdResponse = await this.postData.findById(id)

            return postFindByIdResult
      }
}


    


   
         
   
      
