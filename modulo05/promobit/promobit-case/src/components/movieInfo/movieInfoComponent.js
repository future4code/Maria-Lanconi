// Title; ClassificaçãoIndicativa; DataLançamento; Avaliação; Genero;
//sinopse
import * as s from './movieInfoStyle'

function MovieInfoComponent(props){

    return(
        <div>
            <s.DetailPageMainImg alt={`${props.movieTitle} poster`} src={`https://image.tmdb.org/t/p/original${props.moviePoster}`}/>
            <div>
                <s.MainTittle>{props.movieTitle}</s.MainTittle>

                <s.MovieInfos> 
                    {props.relaseDate} •
                    {props.runtime} •
                </s.MovieInfos>

                <s.SecondaryTitle>Sinopse</s.SecondaryTitle>
                <s.MovieInfos>{props.sinopse}</s.MovieInfos>
            </div>
        </div>
    )
};

export default MovieInfoComponent;