import react from "react";
import axios from "axios";


export default class App extends react.Component {

  state = {
    playlistNameInput: '',
    musicNameInput: '',
    artistNameInput: '',
    urlMusicInput: '',
    playlistId: '',
    playlistList: [],
    playlistTracksList: []
  }

  componentDidMount() {
    this.getPlaylist()
  }

  handlePlaylistNameInput = (e) => {
    this.setState({ playlistNameInput: e.target.value })
  }

  handleMusicNameInput = (e) => {
    this.setState({ musicNameInput: e.target.value })
  }

  handleArtistNameInput = (e) => {
    this.setState({ artistNameInput: e.target.value })
  }

  handleUrlMusicInput = (e) => {
    this.setState({ urlMusicInput: e.target.value })
  }

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
        this.setState({ playlistTracksList: res.data.result.tracks, playlistCreated: id })
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  render() {

    const playlistTracks = this.state.playlistTracksList.map((item) => {
      return <div key={item.id}>
        {item.name}
      </div>
    })

    const playlistCreated = this.state.playlistList.map((item) => {
      return <div key={item.id}>

        {item.name}

        <button onClick={() => this.deletePlaylist(item.id)}>Excluir</button>
        <button onClick={() => this.getPlaylistTracks(item.id)}>+</button>

        {playlistTracks}

      </div>
    })

    return (
      <div>
        <p>Adicione um nome para sua playlist</p>

        <input
          placeholder='Nome playlist'
          value={this.state.playlistNameInput}
          onChange={this.handlePlaylistNameInput}
        />
        <button onClick={this.createPlaylist}>Criar Playlist</button>

        {this.state.playlistList.length > 0 ? playlistCreated : 'Crie sua primeira playlist :D'}
      </div>
    )
  }
}