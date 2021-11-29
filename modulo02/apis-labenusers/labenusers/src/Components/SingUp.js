import react from "react";
import axios from "axios";
import styled from "styled-components";


const DisplaySingUpPage = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-family: sans-serif;
`
const DisplayInput = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 input {
     margin: 3px;
 }
 
`
const ButtonDisplay = styled.button `
    width: 150px;
    margin: 2.5px
`
export default class App extends react.Component {

    state = {
        nameInputValue: '',
        emailInputValue: ''

    }

    getUserId = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users)', {
            headers: {
                Authorization: 'maria-lanconi-carver'
            }
        })
            .then((res) => {
                this.setState({ userList: res.data })
                console.log(this.state.userList)
            })
            .catch((error) => {
                console.log(error.response.data)
                alert('Não foi possível registrar o usuário.')
            })

    }

    createUser = () => {
        const body = {
            name: this.state.nameInputValue,
            email: this.state.emailInputValue
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "maria-lanconi-carver"
            }
        })
            .then((res) => {
                this.setState({ nameInputValue: '' })
                this.setState({ emailInputValue: '' })
                alert('Usuário registrado com sucesso!')
            })
            .catch((error) => {
                console.log(error.response.data)
                alert('Não foi possível registrar o usuário.')
            })
    }

    handleNameInputValue = (e) => {
        this.setState({ nameInputValue: e.target.value })
    }

    handleEmailInputValue = (e) => {
        this.setState({ emailInputValue: e.target.value })
    }



    render() {
        return (
            <DisplaySingUpPage>
                <h1>Tela de Cadastro</h1>
                <DisplayInput>
                    <input
                        placeholder='Nome'
                        value={this.state.nameInputValue}
                        onChange={this.handleNameInputValue}
                    />

                    <input
                        placeholder='E-mail'
                        value={this.state.emailInputValue}
                        onChange={this.handleEmailInputValue}
                    />

                    <ButtonDisplay onClick={this.createUser}>Enviar</ButtonDisplay>

                </DisplayInput>

                <ButtonDisplay onClick={this.props.buttonFunction}>Lista Usuários</ButtonDisplay>
            </DisplaySingUpPage>


        )
    }
}
