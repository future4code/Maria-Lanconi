import * as s from './movieInfoStyle'

function MovieInfoComponent(props){
    const mapMovieGenre = () => {
        if(props.moviegenre){
            return(
                props.moviegenre.map(genre => {
                    return <s.MovieInfos> {genre.name} |</s.MovieInfos>
                })
            )
        }
        
    }

    return(
        <s.MovieDetailContainer>
            
            <s.MovieInfoContainer>

                <s.DetailPageMainImg alt={`${props.movieTitle} poster`} src={`https://image.tmdb.org/t/p/original${props.moviePoster}`}/>
                    <s.MovieInfoContainerChildren>
                        <s.MainTittle>{props.movieTitle}</s.MainTittle>

                        <s.MovieInfos> 
                            {mapMovieGenre()}
                            {props.runtime}Min
                        </s.MovieInfos>

                        <s.SecondaryTitle>Sinopse</s.SecondaryTitle>
                        <s.MovieInfos>{props.sinopse}</s.MovieInfos>
                    </s.MovieInfoContainerChildren>
            </s.MovieInfoContainer>
        </s.MovieDetailContainer>
    )
};

export default MovieInfoComponent;