import {useHistory} from 'react-router-dom';
import * as Styled from '../../StyledComponents/StyledComponents';

function AdminMenu() {

    const history = useHistory()
    
    const goToCreatePage = () => {
        history.push('/admin/trips/create')
    }
        
    const goBackPage = () => {
        history.goBack()
    };
    
    const logOut = () => {
        localStorage.clear()
        document.location.reload(true)
    };
    
    return (

        <Styled.AdminMenu>
          <p onClick={goToCreatePage}>Nova viagem</p>
          <p onClick={goBackPage}>Voltar</p>
          <p onClick={logOut}>Sair</p>
        </Styled.AdminMenu>
     
    );
  }
  
  export default AdminMenu;
  