import { useHistory } from 'react-router-dom'
import { SignUp } from '../../Constants/EndPoints'
import Header from '../../Components/Header'
import  useForm  from '../../Hooks/UseForm'
import * as Styled from '../../StyledComponents/StyledComponents'

function SingUpPage() {

  const history = useHistory()
  
  const {form, handleInputChange, clear} = useForm({name: '', email: '', password: ''})
  
  const signUp = (e) => {
    SignUp(form, history)
    clear()
    e.preventDefault()
  }

  return (
      <Styled.GeneralDisplay>
        
        <Header/>

        <Styled.UserDisplay>

          <Styled.FormUserDisplay onSubmit={signUp}>
            
              <Styled.TitleFormUser>Faça seu Cadastro</Styled.TitleFormUser>

            <Styled.InputDisplay
              name='name'
              value={form.name}
              onChange={handleInputChange}
              placeholder='Nome'
              required
              type='text'
            />

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
              pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
            />

            <Styled.ButtonDisplay type='submit'>Enviar</Styled.ButtonDisplay>
          </Styled.FormUserDisplay>
        </Styled.UserDisplay>
      </Styled.GeneralDisplay>
    );
  }
  
export default SingUpPage;
  