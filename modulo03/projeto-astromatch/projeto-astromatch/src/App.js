import react, {useState} from "react";
import {useEffect} from "react";

import HomePage from "./Components/HomePage/HomePage";
import MatchesPage from "./Components/MatchesPage/MatchesPage";




const App = () => {

  // ----States----
  const [currentPage, setCurrentPage] = useState('homepage')

  const changePage = () => {
    if (currentPage === 'homepage') {
      return <HomePage/>
    } else if (currentPage === 'matchespage') {
      return <MatchesPage/>
    }
  }

  const changeToMatchPage = () => {
    setCurrentPage('matchespage')
  }

  const changeToHomePage = () => {
    setCurrentPage('homepage')
  }

  

  return (
    <div>
      {changePage()}

      <button onClick={changeToMatchPage}>MatchPage</button>
      <button onClick={changeToHomePage}>HomePage</button>
      
    </div>
  );
}

export default App;
