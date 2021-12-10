import {useHistory} from 'react-router-dom';
import * as Styled from '../../StyledComponents/StyledComponents';

function Header() {

    const history = useHistory()

    const goToTripPage = () => {
        history.push('/trips/list')
    }

    const goToAdminHomePage = () => {
        history.push('/login')
    }

    return (

        <Styled.HeaderDisplay>
            
            <h1>Labe<span>X</span></h1>
            
            <div>
                <button onClick={goToTripPage}>Viagens</button>  
                <button onClick={goToAdminHomePage}>Perfil</button>    
            </div> 
        </Styled.HeaderDisplay>
     
    );
  }
  
  export default Header;
  