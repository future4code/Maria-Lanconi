import react from "react";
import axios from "axios";
import styled from "styled-components";

const DisplayUserListPage = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-family: sans-serif;
`

const DisplayUserCard = styled.div`
 display: flex;
 justify-content: space-between;
 width: 200px;
 margin: 3px;

 button {
     height: 20%;
     width: 15%;
     
 }
`

export default class userList extends react.Component {

    state = {
        users: []
    }
    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'maria-lanconi-carver'
            }
        })
            .then((res) => {
                this.setState({ users: res.data })
            })
            .catch((error) => {
                alert('ERRO! Tente novamente mais tarde!')
            })
    }

    deleteUser = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers : {
                Authorization: 'maria-lanconi-carver'
            }
        })
        .then((res) => {
            alert('Usuário deletado com sucesso!')
            this.getUsers()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    render() {

        const usersList = this.state.users.map((user) => {
            return <DisplayUserCard key={user.id}>
                {user.name}
                <button onClick = {() => this.deleteUser(user.id)}>X</button>
            </DisplayUserCard>
        })

        return (
            <DisplayUserListPage>
                <h1>Lista usuário</h1>

                {usersList}

                <button onClick = {this.props.buttonFunction}>Tela de Cadastro</button>
            </DisplayUserListPage>
        )
    }
}