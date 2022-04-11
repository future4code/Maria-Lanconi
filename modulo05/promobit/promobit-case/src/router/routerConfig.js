import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import MovieDetailPage from "../pages/movieDetail/movieDetailpage";

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