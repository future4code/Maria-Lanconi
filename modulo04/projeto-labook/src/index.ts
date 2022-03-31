import {app} from './app';
import PostBusiness from './bussiness/PostBusiness';
import UserBusiness from "./bussiness/UserBusiness"
import PostController from './controller/PostController';
import UserController from "./controller/UserController"
import PostData from './data/PostData';
import UserData from "./data/UserData"
import { authenticationData } from "./model/User"
import { Authenticator } from "./services/Authenticator"
import { HashManager } from "./services/HashManager"
import { IdGenerator } from "./services/IdGenerator"

const userController = new UserController(
   new UserBusiness(
      new UserData(),
      new IdGenerator(),
      new HashManager(),
      new Authenticator()
   )
)

const postController = new PostController(
   new PostBusiness(
      new PostData(),
      new IdGenerator()
   ),
   new Authenticator()
)


app.post('/user/signup', userController.signup)
app.post('/users/login', userController.login)
app.post('/posts/create', postController.createPost)
app.get('/posts/:id', postController.findPost)