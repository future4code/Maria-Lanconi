import express, { Express } from "express";
import cors from "cors";
import { createUser } from "./endpoints/createUser";


const app: Express = express();
app.use(express.json());
app.use(cors());

//Servidor

const server = app.listen(process.env.PORT || 3003, () => {
   console.log(`Server is running`);
    
});

//Endpoint CriarUsuario

app.post('/users', createUser);



