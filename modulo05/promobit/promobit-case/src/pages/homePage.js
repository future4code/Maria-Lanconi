import { changeCurrentPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiKey, baseURL } from "../apiServices/apiBaseInfo";
import { useState } from "react";

function HomePage(){
    const {changeToMovieDetails} = changeCurrentPage(useNavigate())
    const [result, setResult] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const changePage = () => {
        changeToMovieDetails()
    }

    let currentPage = 1

    const nextPage = () => {
        if(currentPage < totalPages){
            currentPage++
        }

        console.log(currentPage)
        return currentPage
    }

    const getPopularMovies = () => {
        axios
        .get(`${baseURL}/movie/popular?api_key=${apiKey}&language=pt-BR&page=${currentPage}`)
        .then(res => {
            console.log(res.data)
            setTotalPages(res.data.total_pages)
            setResult(res.data.results)
        })
        .catch(e => {
            console.log('error:', e.response.data.message)
        })
    }

    return(
        <div>
            <h1>HomePage</h1>
            {getPopularMovies()}
            
            <button onClick={changePage}>BACK</button>
            <button onClick={() => nextPage()}>PAGE</button>
            
        </div>
        
    )
};

export default HomePage;