import axios from "axios";
import MovieInfoComponent from '../../components/movieInfo/movieInfoComponent'
import { baseURL, apiKey } from "../../apiServices/apiBaseInfo";
import { changeCurrentPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useLayoutEffect } from "react";
import HeaderComponent from "../../components/header/headerComponent";

function MovieDetailPage(){
    const [movieDetail, setMovieDetail] = useState({})
    const { id } = useParams()

    useLayoutEffect(() => {

        const getMovieDetail = () => {
            axios
            .get(`${baseURL}/movie/${id}?api_key=${apiKey}&language=pt-BR`)
            .then(res => {
                setMovieDetail(res.data)
            })
            .catch(e => {
                console.log('error:', e.response.data.message)
            })
        }

        getMovieDetail()
    }, [id])

    const mapMovieDetail = () => {
        return  <MovieInfoComponent
            movieTitle = {movieDetail.title}
            moviePoster = {movieDetail.poster_path}
            releaseDate = {movieDetail.release_date}
            runtime = {movieDetail.runtime}
            sinopse = {movieDetail.overview}
            moviegenre = {movieDetail.genres}
        />    
               
    }
    
    return(
        <div>
            <HeaderComponent/>
            {mapMovieDetail()}
        </div>
    )
};

export default MovieDetailPage;