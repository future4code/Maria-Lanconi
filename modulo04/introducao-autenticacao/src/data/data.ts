import { connection } from "../connection"

//INSERT TABLE USER

const createUser = async (
    id:string,
    email: string, 
    password:string
  ) => {
    await connection
    .insert({
      id, 
      email,
      password
    })
    .into('User')
  }