import react from "react";
import axios from "axios";

export default class App extends react.Component {

  state = {
    userList: [],

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
      <div>
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

        <button onClick={this.createUser}>Enviar</button>

        <button>Usuários cadastrados</button>

      </div>


    )
  }
}

