import { app } from "./app";
import { CuboBusiness } from "./business/cuboBusiness";
import { CuboController } from "./controller/cuboController";
import { CuboDatabase } from "./data/cuboDatabase";
import { getUserParticipationInfo, postNewUser } from "./router/cuboRouter";
import { IDGenerator } from "./services/generateId";

//CuboController

const cuboNetworking = new CuboController(
    new CuboBusiness(
        new IDGenerator,
        new CuboDatabase
    )
)



app.get(getUserParticipationInfo, cuboNetworking.showAllUsersParticipation)
app.post(postNewUser, cuboNetworking.insertNewUserOnTable)