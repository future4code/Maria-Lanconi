import HomePage from "./Components/HomePage/HomePage";
import MatchesPage from "./Components/MatchesPage/MatchesPage";
import react, {useState} from "react";
import * as Styled from "./Components/StyledComponents/StyledComponents"


const App = () => {
  
  // ----States / Functions----
  const [currentPage, setCurrentPage] = useState('homepage')

  const changePage = () => {
    if (currentPage === 'homepage') {
       return <HomePage
       changePage = {changeToMatchPage}
       />
    } else if (currentPage === 'matchespage') {
      return <MatchesPage
      changePage = {changeToHomePage}
      />
   }
  }

  const changeToMatchPage = () => {
    setCurrentPage('matchespage')
  }

  const changeToHomePage = () => {
    setCurrentPage('homepage')
  }

  return (

    <Styled.AppDisplay>

      <Styled.GlobalStyle/>
      
      {changePage()}

    </Styled.AppDisplay>
  );
}

export default App;
