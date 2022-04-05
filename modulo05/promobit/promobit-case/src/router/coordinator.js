export const changeCurrentPage = (navigateFunction) => {

    const changeToHomePage = () => {
        navigateFunction('/')
    }

    const changeToMovieDetails = (movieID) => {
        navigateFunction(`/movie/${movieID}`)
    }

    return {changeToHomePage, changeToMovieDetails}
}