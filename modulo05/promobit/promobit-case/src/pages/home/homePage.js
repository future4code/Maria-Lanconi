import axios from "axios";
import MovieListComponent from "../../components/movieListComponent/movieListComponent";
import * as s from './homePageStyle';
import { changeCurrentPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { apiKey, baseURL } from "../../apiServices/apiBaseInfo";
import { useState, useEffect } from "react";
import HeaderComponent from "../../components/header/headerComponent";
import SecondHeaderComponent from "../../components/homeSecondHeader/secondHeaderComponente";

function HomePage(){
    const {changeToMovieDetails} = changeCurrentPage(useNavigate())
    const [result, setResult] = useState([])
    
    useEffect(() => {
        const getPopularMovies = () => {
            axios
            .get(`${baseURL}/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`)
            .then(res => {
                setResult(res.data.results)
               
            })
            .catch(e => {
                console.log('error:', e.response.data.message)
            })
        }
        getPopularMovies()
    }, )
    
    const changePage = (movieID) => {
        changeToMovieDetails(movieID)
    }

    const mapMovieResults = () => {
        if(result[0]){
            return (
                result.map(movie => {
                    return <MovieListComponent key={movie.id}
                    movieTitle = {movie.title}
                    moviePoster = {movie.poster_path}
                    releaseDate = {movie.release_date}
                    changePageFunction= {changePage}
                    movieID = {movie.id}
                    />

                })
            )
        }
    }

    return(
        <>
            <HeaderComponent/>

            <SecondHeaderComponent/>

            <s.MoviesListLayoutConfig>
                {mapMovieResults()}
            </s.MoviesListLayoutConfig>

        </>
        
    )
};

export default HomePage;