import { Request, Response } from "express";
import { connection } from "../connection/connection";
import { Recipe } from "../data/recipes";
import { getTokenData } from "../services/generateToken";

export const createRecipe = async (req:Request, res:Response):Promise<void> => {
    try {
        
        const {title, description} = req.body

        //verify user token
        const token = getTokenData(req.headers.authorization!) 
        
        //handle empty input
        if(!token){
            throw new Error('Token de Autorização não foi inserido!')
        }

        const createNewRecipe = new Recipe({title, description})

        const insertNewRecipe = await connection('cookenuRecipes')
        .insert({
            recipe_id: createNewRecipe.getRecipeId(),
            title: createNewRecipe.getRecipeTitle(),
            description: createNewRecipe.getRecipeDescription(),
            creation_date: createNewRecipe.getCreationDate()
        })

        res.send({'message': 'Receita Adicionada com sucesso!' })

    } catch (error:any) {
        res.send(error.message)
    }
}