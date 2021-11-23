import react from "react";
import axios from "axios";
import styled from "styled-components";


const DisplayCreatePlaylist = styled.div`
    width: 100vw;;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
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
                <h1>Seja bem-vinde ao Labefy</h1>
                <h2>Crie sua playlist:</h2>

                <input
                    placeholder='Nome playlist'
                    value={this.state.nameInputValue}
                    onChange={this.handleNameInput}
                />

                <button onClick={this.createPlaylist}>Adicionar</button>
            </DisplayCreatePlaylist>
        )
    }
}