import { AddressInfo } from "net";
import express, {Express} from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { signUpUser } from "./endpoint/signUp";
import { loginUsers } from "./endpoint/login";

//CONFIG
const app:Express = express();

app.use(express.json());
app.use(cors());

dotenv.config();

//SERVER

const server = app.listen(process.env.PORT, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.post("/signup", signUpUser)
app.post("/login", loginUsers)



