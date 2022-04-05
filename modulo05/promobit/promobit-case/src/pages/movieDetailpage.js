import { changeCurrentPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

function MovieDetailPage(){
    const {changeToHomePage} = changeCurrentPage(useNavigate())

    const changePage = () => {
        changeToHomePage()
    }

    return(
        <div>
            <h1>MoviePage</h1>

            <button onClick={changePage}>BACK</button>
            
        </div>
    )
};

export default MovieDetailPage;