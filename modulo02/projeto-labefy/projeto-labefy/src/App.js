import react from "react";
import axios from  "axios";


export default class App extends react.Component {

  state = {
    playlistNameInput: '',
    playlistList: []
  }

  componentDidMount() {
    this.getPlaylist()
  }

  handlePlaylistNameInput = (e) => {
    this.setState({playlistNameInput: e.target.value})
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
      this.setState({playlistNameInput: ''}) 
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
      this.setState({playlistList: res.data.result.list})
    })
    .catch((error) => {
      console.log(error.response.data)
      alert('Houve um problema, tente novamente :(')
    })
  }

  render() {

    const playlistCreated = this.state.playlistList.map((item) => {
      return <div key={item.id}>
          {item.name}
      </div>
  })
    
    return (
      <div> 
         <p>Adicione um nome para sua playlist</p>

         <input
         placeholder = 'Nome playlist'
         value = {this.state.playlistNameInput}
         onChange = {this.handlePlaylistNameInput}
         />

         <button onClick = {this.createPlaylist}>Criar Playlist</button>
         
         {playlistCreated}
      </div>
    )
  }
}