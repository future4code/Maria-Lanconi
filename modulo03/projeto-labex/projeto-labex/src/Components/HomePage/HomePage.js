import * as Styled from '../../StyledComponents/StyledComponents';
import Header from "../Header/Header";

function HomePage() {
  
  return (
    <Styled.BaseDisplay>

      <Header/>
      <Styled.HomeDisplay>
        <div>
          <h1>Encontre as melhores viagens com os melhores preços</h1>
          <p>Nós te conectamos com as melhores viagem com preços que cabem no seu bolso!</p>
        </div>
        <img src='https://image.freepik.com/free-vector/window-seat-concept-illustration_114360-5952.jpg'></img>
      
      </Styled.HomeDisplay>
    </Styled.BaseDisplay>
  );
}

export default HomePage;
