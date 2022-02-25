import { AddressInfo } from "net";
import express, {Express} from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { signUpUser } from "./endpoint/signUp";
import { loginUsers } from "./endpoint/login";
import { myProfile } from "./endpoint/myProfile";
import { usersProfile } from "./endpoint/usersProfile";
import { Recipe } from "./data/recipes";
import { createRecipe } from "./endpoint/createRecipe";
import { recipe } from "./endpoint/recipe";

//CONFIG
const app:Express = express();

app.use(express.json());
app.use(cors());

dotenv.config();

//REQ

app.post("/signup", signUpUser)
app.post("/login", loginUsers)
app.get("/user/profile", myProfile)
app.get("/user/:id", usersProfile)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", recipe)


//SERVER

const server = app.listen(process.env.PORT, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});




