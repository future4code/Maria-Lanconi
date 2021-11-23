import react from "react";
import axios from "axios";
import PlaylistsCard from "./PlaylistCard";


export default class Playlists extends react.Component {

    state = {
        playlists: [],
    }


    componentDidMount() {
        this.getPlaylist()
    }


    //Funções API

    getPlaylist = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'maria-lanconi-carver'
            }
        })
            .then((res) => {
                this.setState({ playlists: res.data.result.list })
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
    render() {

        const playlistsCreated = this.state.playlists.map((item) => {
            return <PlaylistsCard
                key={item.id}
                playlistName={item.name}
                changePage={this.props.changePage}
                deleteButton={this.deletePlaylist}
                playlistId={item.id}
            />

        })
        return (
            <div>
                {playlistsCreated}
            </div >
        )
    }
}