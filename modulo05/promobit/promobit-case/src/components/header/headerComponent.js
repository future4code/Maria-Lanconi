import logoIMG from '../../images/logo.png';
import * as s from './headerComponentStyle';

function HeaderComponent(){
    return(
        <s.HeaderComponent>
            <s.ImgComponentHeader alt='Logo MDB' src={logoIMG}/>
        </s.HeaderComponent>
    )       
};

export default HeaderComponent;