import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from '../Pages/LoginPage/LoginPage';
import SingUpPage from '../Pages/SingUpPage/SingUpPage';
import RecipesList from '../Pages/RecipesList/RecipesList';
import RecipeDetail from '../Pages/RecipeDetail/RecipeDetail'

export const Router = () => {
    return (
        <BrowserRouter>
        
        <Switch>
            
        <Route exact path='/'>
            <LoginPage/>
        </Route>

        <Route exact path='/signUp'>
            <SingUpPage/>
        </Route>

        <Route exact path='/recipesList'>
            <RecipesList/>
        </Route>

        <Route exact path='/recipeDetail/:id'>
            <RecipeDetail/>
        </Route>

        </Switch>
        </BrowserRouter>
    )
}