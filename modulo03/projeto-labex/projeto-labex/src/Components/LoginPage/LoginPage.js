import {useHistory} from 'react-router-dom';
import useForm from '../../UseForm/UseForm';
import Header from '../Header/Header';
import * as Styled from '../../StyledComponents/StyledComponents';
import { Login } from '../../API/Functions';


function LoginPage () {

    //----Function Page Change----
    const history = useHistory()

    const goBackPage = () => {
        history.goBack()
    };

      
    //----Function General----

    const { form, onChange, cleanFields } = useForm({email: '', password: ''});

    const loginAdmin = (e) => {
        Login(form, history)
        e.preventDefault()
        cleanFields()
    }

    

        return (
        <Styled.BaseDisplay> 
            <Header/>
            <Styled.ContentDisplay>
                <Styled.FormDisplay onSubmit={loginAdmin}>
                    <h1>Faça seu login</h1>
                    <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="E-mail"
                        required
                        type="email"
                    />

                    <input
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        placeholder="Senha"
                        required
                        type="password"
                    />

                    <Styled.ButtonDisplay>
                        <button onClick={goBackPage}>Voltar</button>
                        <button type='submit'>Login</button>
                    </Styled.ButtonDisplay>
                    
                </Styled.FormDisplay>
            </Styled.ContentDisplay>
        </Styled.BaseDisplay>
    )
};

export default LoginPage;