import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import MovieDetailPage from "../pages/movieDetailpage";

function Router(){
    return(
        <BrowserRouter>
            <Routes> 
                <Route path='/' element={<HomePage/>}/>

                <Route path='/movie/:id' element={<MovieDetailPage/>}/>

            </Routes>

        </BrowserRouter>
    )
};

export default Router;