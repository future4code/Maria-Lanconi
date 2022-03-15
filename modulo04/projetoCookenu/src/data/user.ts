import { generateID } from "../services/generateID";


type userInfo = {
    name:string,
    email:string,
    password:string
}

export class User {
    
    private id:string = generateID()
    private name:string
    private email:string
    private password:string

    constructor(user:userInfo){
       this.name = user.name
       this.email = user.email
       this.password = user.password
    }
    
    getId():string {
        return this.id
    }

    getName():string {
        return this.name
    }

    getEmail():string {
        return this.email        
    }

    getPassword():string {
        return this.password  
    }

}