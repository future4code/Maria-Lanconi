import { useHistory } from 'react-router-dom';
import * as Styled from '../StyledComponents/StyledComponents';

function Header() {

    const history = useHistory()
    
    const goToSignUp = () => {
        history.push('/signUp')
    }

    const goToFeed = () => {
        history.push('/recipesList')
    }


    return (
        <Styled.HeaderDisplay>
            
            <Styled.HeaderTitle>Cookenu</Styled.HeaderTitle>
            
            <Styled.MenuDisplayHeader>
                <Styled.MenuHeader onClick={goToSignUp}>Cadastre-se</Styled.MenuHeader>
                <Styled.MenuHeader  onClick={goToFeed}>Receitas</Styled.MenuHeader >
            </Styled.MenuDisplayHeader>
            
        </Styled.HeaderDisplay>
    )

}

export default Header;