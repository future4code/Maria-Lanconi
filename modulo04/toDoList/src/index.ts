import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { connection } from './connection';

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

// type user = {
//     id:string,
//     name:string,
//     nickname:string,
//     email:string
// }

const criarUsuario = async(
    id:string,
    name:string,
    nickname:string,
    email:string
    ):Promise<void> => {
    await  connection.raw( `
        INSERT INTO TodoListUser(id, name: nickname, email)
        VALUES({
            ${Date.now().toString},
            "${name}",
            "${nickname}",
            "${email}"
        });
    `);
};
app.post("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
      //   await connection.raw(`
      //     INSERT INTO Actor
      //       (id, name, salary, birth_date, gender)
      //     VALUES (
      //     ${Date.now().toString()},
      //     "${req.body.name}",
      //     ${req.body.salary},
      //     "${req.body.birthDate}",
      //     "${req.body.gender}"
      // );
  
      // `)
  
      //função externa ao endpoint - ele faz a consulta no banco
      await inserirNovosAtores(
        Date.now().toString(),
        req.body.name,
        req.body.salary,
        req.body.birthDate,
        req.body.gender
      );
  
      res.status(201).send("Ator criado!");
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }