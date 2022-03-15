import { generateID } from "../services/generateID";

type recipeInfo = {
    title:string,
    description:string
}

export class Recipe {
    private recipe_id:string = generateID()
    private title:string
    private description:string
    private creation_date:string = ''

    constructor(recipe:recipeInfo){
        this.title = recipe.title,
        this.description = recipe.description
    }

    getRecipeId():string {
        return this.recipe_id
    }

    getRecipeTitle():string{
        return this.title
    }

    getRecipeDescription():string {
        return this.description
    }

    getCreationDate():string{
        const date =  new Date()
        const currentDay = date.getDate()
        const currentMonth = date.getMonth() + 1
        const currentYear = date.getFullYear()
        const currentDate = `${currentYear}/ ${currentMonth}/ ${currentDay}`

        return this.creation_date = currentDate
    }
}