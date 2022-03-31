import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

//Enviar MySQL

const adicionarUsuario = async (
   name:string | null,
   email:string | null,
   password:string | null):Promise<void> => {
   await connection.raw(`
      INSERT INTO labecommerce_users (
         id, name, email, password
      ) VALUES (
         ${Date.now().toString()},
         "${name}",
         "${email}",
         "${password}"
      )
   `)
}

//EndPoint User

const addUser = async (req:Request, res:Response) => {
  try {
      await adicionarUsuario(
         req.body.name,
         req.body.email,
         req.body.password
      )

      res.send('Usuário cadastrado com sucesso!')

  } catch (error) {
      if (error instanceof Error) {
      res.send({ error, message: error.message })
      } else {
      res.send({ message: "Erro inesperado" })
      }
  }
}

//POST User

app.post("/users", addUser)

//Localizar Usuarios

const getUser = async ():Promise<any> => {
   const users = await connection("labecommerce_users");
   return users;
}

//GET User

app.get("/users", async (req:Request, res:Response) => {
   try {
      const user = await getUser()

      res.send({users: user})

   } catch (error) {
      if (error instanceof Error) {
         res.send({ error, message: error.message })
      } else {
         res.send({ message: "Erro inesperado" })
      }
   }
})

//Enviar MySQL

const adicionarProduto = async (
   name:string | null,
   price: number | null,
   img_url:string | null):Promise<void> => {
   await connection.raw(`
      INSERT INTO labecommerce_products (
         id, name, price, img_url
      ) VALUES (
         ${Date.now().toString()},
         "${name}",
         "${price}",
         "${img_url}"
      )
   `)
}

//Endpoit Produto

const addProduct = async (req:Request, res:Response) => {
   try {
       await adicionarProduto(
          req.body.name,
          req.body.price,
          req.body.img_url
       )
 
       res.send('Produto cadastrado com sucesso!')
 
   } catch (error) {
       if (error instanceof Error) {
       res.send({ error, message: error.message })
       } else {
       res.send({ message: "Erro inesperado" })
       }
   }
}

//Post Produto

app.post("/products", addProduct)

//Localizar Lista de Produtos
const getProduct = async ():Promise<any> => {
   const products = await connection("labecommerce_products");
   return products;
}

//GET Products
app.get("/products", async (req:Request, res:Response) => {
   try {
      const product = await getProduct()

      res.send({products: product})

   } catch (error) {
      if (error instanceof Error) {
         res.send({ error, message: error.message })
      } else {
         res.send({ message: "Erro inesperado" })
      }
   }
})