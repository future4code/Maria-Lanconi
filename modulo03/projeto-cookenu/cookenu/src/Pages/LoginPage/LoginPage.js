import { Login } from '../../Constants/EndPoints';
import Header from '../../Components/Header';
import useForm from '../../Hooks/UseForm';
import { useHistory } from 'react-router-dom';
import * as Styled from '../../StyledComponents/StyledComponents';

function LoginPage() {
  
  const history = useHistory()

  const goToSignUp = () => {
    history.push('/signUp')
  }

  const {form, handleInputChange, clear} = useForm({email: '', password: ''})

  const login = (e) => {
    Login(form)
    clear()
    e.preventDefault()
  }
  
  return (
    <Styled.GeneralDisplay>
      <Header/>
      <Styled.UserDisplay>

        <Styled.FormUserDisplay onSubmit = {login}>

          <Styled.TitleFormUser>Faça o Login</Styled.TitleFormUser>

          <Styled.InputDisplay
            name='email'
            value={form.email}
            onChange={handleInputChange}
            placeholder='E-mail'
            required
            type='email'
          />

          <Styled.InputDisplay
            name='password'
            value={form.password}
            onChange={handleInputChange}
            placeholder='Senha'
            required
            type='password'
          />
        
          <Styled.ButtonDisplay type='submit'>Entrar</Styled.ButtonDisplay>
        
        </Styled.FormUserDisplay>

        <Styled.LinkFormat onClick={goToSignUp}>Não possui uma conta? Cadastre-se</Styled.LinkFormat>

      </Styled.UserDisplay>      
    </Styled.GeneralDisplay>
  );
}

export default LoginPage;
