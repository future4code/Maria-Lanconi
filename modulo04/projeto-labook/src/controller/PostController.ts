import {Request, Response} from 'express';
import PostBusiness from "../bussiness/PostBusiness";
import { POST_TYPES } from "../model/Post";
import { authenticationData } from '../model/User';
import { Authenticator } from '../services/Authenticator';

export type CreatePostInputDTO = {
    photo:string, 
    description:string,
    type:POST_TYPES
}

export default class PostController{
    constructor(
        private postBusiness:PostBusiness,
        private authenticator:Authenticator
    ){}

    createPost = async (req:Request, res:Response) => {
        const { photo, description, type } = req.body
        const token: string = req.headers.authorization as string

        //validar token
        const tokenData: authenticationData = this.authenticator.getTokenData(token)

        const input:CreatePostInputDTO = {
            photo, 
            description,
            type
        }

        try{
            const postCreated = await this.postBusiness.createPost(input,tokenData.id)

            res.status(200).send({message: "Post cadastrado com sucesso"})
        }catch(error:any){
            if(error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro para criar o post")
        }
    }

    findPost = async (req:Request, res:Response) => {
        const { id } = req.params

        try{
            const postFounded = await this.postBusiness.findPost(id)

            res.status(200).send({postFounded})
        } catch(error:any){
            if(error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro ao encontrar post")
        }
    }
}
