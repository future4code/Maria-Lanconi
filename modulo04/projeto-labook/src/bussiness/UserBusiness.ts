import UserData from "../data/UserData";
import User from "../model/User";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { SignupInputDTO, LoginInputDTO } from "../controller/UserController";
import { compare } from "bcryptjs";

type UserFindByEmail = {
    id:string
    name:string
    email:string 
    password:string
}

export default class UserBusiness {
    constructor(
        private userData:UserData,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}

    signup = async (input:SignupInputDTO) => {

        //validacao
        const {name, email, password} = input

        if(!email || !name || !password){
            throw new Error("Campos inválidos")
        }

        //verificar se o usuario existe
        const registeredUser = await this.userData.findByEmail(email)
        
        if(registeredUser){
            throw new Error ("Email já cadastrado")
        }

        //criar um id
        const id = this.idGenerator.generateId()

        //criptografar a senha
        const hashedPassword = await this.hashManager.hash(password)

        //criar usuario no banco
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )

        console.log(user)

        await this.userData.insert(user)

        //gerar e retornar token
        const token = this.authenticator.generateToken({id})
        
        return token
    }

    login = async (input:LoginInputDTO) => {
        
        //validacao
        const {email, password} = input

        if(!email || !password){
            throw new Error("Campos inválidos")
        }

        //encontrar usuário 
        const userFindByEmail:UserFindByEmail = await this.userData.findByEmail(email)

        if(!userFindByEmail) {
            throw new Error("E-mail incorreto")
        }

        //verificar senhar
        const passwordIsCorrect: boolean = await compare(password, userFindByEmail.password)

        if(!passwordIsCorrect) {
            throw new Error("Senha Incorreta")
        }

        //gerar token
        const id = userFindByEmail.id

        const token = this.authenticator.generateToken({id})

        return token
    }
}

