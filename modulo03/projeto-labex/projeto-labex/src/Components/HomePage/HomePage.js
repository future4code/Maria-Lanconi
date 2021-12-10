import react from 'react';
import * as Styled from '../../StyledComponents/StyledComponents';
import Header from "../Header/Header";

function HomePage() {
  
  return (
    <Styled.BaseDisplay>

      <Header/>
      <Styled.HomeDisplay>

        <div></div>

        <img src='https://image.freepik.com/free-vector/window-seat-concept-illustration_114360-5952.jpg'></img>
      
      </Styled.HomeDisplay>
    </Styled.BaseDisplay>
  );
}

export default HomePage;
