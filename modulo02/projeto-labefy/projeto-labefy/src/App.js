import react from "react";
import axios from "axios";
import styled from "styled-components"
import CreatePlaylist from "./Components/CreatePlaylist";
import PlaylistDetails from "./Components/PlaylistDetails";

const DisplayContent = styled.div`
  height: 100vh;
  background-color: #FEFBF3;
  display: grid;
  grid-template-columns: 25% 1fr;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #2C061F;
`
const DisplayList = styled.div`
  max-height: 100vh;
  margin: 20px;
  padding: 20px;
  background-color: #B97A95;
  border-radius: 15px;
`

const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  img {
    width: 20px;
    cursor: pointer;
  }
`
export default class App extends react.Component {

  state = {
    playlistList: [],
    playlistNameInput: '',
    playlistTracksList: [],
    changePage: 1
  }

  // Função geral

  componentDidMount() {
    this.getPlaylist()
  }

  handlePlaylistNameInput = (e) => {
    this.setState({ playlistNameInput: e.target.value })
  }


  // Função API
  createPlaylist = () => {
    const body = {
      name: this.state.playlistNameInput
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
  getPlaylist = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'maria-lanconi-carver'
      }
    })
      .then((res) => {
        this.setState({ playlistList: res.data.result.list })
      })
      .catch((error) => {
        console.log(error.response.data)
        alert('Houve um problema, tente novamente :(')
      })
  }

  deletePlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: 'maria-lanconi-carver'
      }
    })
      .then((res) => {
        alert('Playlist deletada com sucesso!')
        this.getPlaylist()
      })
      .catch((error) => {
        alert('Não foi possível deletar sua playlist!')
        console.log(error.response.data)
      })
  }

  getPlaylistTracks = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
      headers: {
        Authorization: 'maria-lanconi-carver'
      }
    })
      .then((res) => {
        this.setState({ playlistTracksList: res.data.result.tracks })
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }


  render() {

    const playlistCreated = this.state.playlistList.map((item) => {
      return <ListContent key={item.id}>

        <a onClick={() => this.getPlaylistTracks(item.id)}>{item.name}</a>
        <img onClick={() => this.deletePlaylist(item.id)} src="https://cdn-icons.flaticon.com/png/512/3138/premium/3138336.png?token=exp=1637550523~hmac=4f6e53aa04babd002eb877c14b366030"/>

      </ListContent>
    })
    console.log(this.state.getPlaylistTracks)

    return (

      <DisplayContent>

        <DisplayList>
          <h2>Suas playlists:</h2>
          {playlistCreated}
        </DisplayList>

        <CreatePlaylist
          playlistNameInput={this.state.playlistNameInput}
          handlePlaylistNameInput={this.handlePlaylistNameInput}
          createPlaylist={this.createPlaylist}
        />

      </DisplayContent>
    )
  }
}