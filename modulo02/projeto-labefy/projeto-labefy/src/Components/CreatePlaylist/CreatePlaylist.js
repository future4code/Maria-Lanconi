import react from "react";
import axios from "axios";
import styled from "styled-components";


const DisplayCreatePlaylist = styled.div`
    background-color: #171717;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    color: #fff;
    font-family: sans-serif;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 10%;

    h1 {
         
        text-align: center;

        span{
            color: #DA0037;
        }
    }

    div {

        margin: 10px;
        
        input {
            border-radius: 10px;
        }

        button {
            border-radius: 10px;
            background-color: #fff;
            color: #DA0037;
            border: solid #DA0037 2px;
        }
    }
`

export default class CreatePlaylist extends react.Component {
    state = {
        nameInputValue: '',
    }

    handleNameInput = (e) => {
        this.setState({ nameInputValue: e.target.value })
    }

    //Função API

    createPlaylist = () => {
        const body = {
            name: this.state.nameInputValue
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: 'maria-lanconi-carver'
            }
        })
            .then(() => {
                this.setState({ playlistNameInput: '' })
                alert('Playlist criada com sucesso!')
            })
            .catch((error) => {
                console.log(error.response.data)
                alert('Não foi possível criar sua playlist :( ')
            })
    }

    render() {
        return (

            <DisplayCreatePlaylist>
                <h1>Seja bem-vinde ao Lab<span>efy</span></h1>
                <h2>Crie sua playlist:</h2>

                <div>
                    <input
                        placeholder='Nome playlist'
                        value={this.state.nameInputValue}
                        onChange={this.handleNameInput}
                    />

                    <button onClick={this.createPlaylist}>Adicionar</button>
                </div>

            </DisplayCreatePlaylist>
        )
    }
}