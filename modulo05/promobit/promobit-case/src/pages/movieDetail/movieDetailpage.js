import axios from "axios";
import MovieInfoComponent from '../../components/movieInfo/movieInfoComponent'
import { baseURL, apiKey } from "../../apiServices/apiBaseInfo";
import { changeCurrentPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function MovieDetailPage(){
    const [movieDetail, setMovieDetail] = useState([])
    const {changeToHomePage} = changeCurrentPage(useNavigate())
    const { id } = useParams()

    useEffect(() => {

        const getMovieDetail = () => {
            axios
            .get(`${baseURL}/movie/${id}?api_key=${apiKey}&language=pt-BR`)
            .then(res => {
                setMovieDetail(res.data)
                console.log(res.data)
            })
            .catch(e => {
                console.log('error:', e.response.data.message)
            })
        }

        getMovieDetail()
    }, [id])

    const changePage = () => {
        changeToHomePage()
    }

    
    
    return(
        <div>
            <h1>MoviePage</h1>
            <MovieInfoComponent/>

            <button onClick={changePage}>BACK</button>
            
        </div>
    )
};

export default MovieDetailPage;