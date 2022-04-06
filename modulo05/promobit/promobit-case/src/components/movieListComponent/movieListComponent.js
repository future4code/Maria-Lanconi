import * as s from './movieListStyle'

function MovieListComponent(props){
    return(
        <div>
            <s.ImageListIcon alt={`${props.movieTitle} poster`} src={`https://image.tmdb.org/t/p/original/${props.moviePoster}`}/>
            <s.MovieTitle onClick={() => {props.changePageFunction(props.movieID)}}>{props.movieTitle}</s.MovieTitle>
            <s.ReleaseDate>{props.releaseDate}</s.ReleaseDate>
        </div>
    )
};

export default MovieListComponent;