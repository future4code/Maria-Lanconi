import react from "react";
import axios from "axios";
import PlaylistTracksCard from "./PlaylistTracksCard";
import styled from "styled-components";

const DisplayTracks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

  button {
            border-radius: 10px;
            background-color: #fff;
            color: #DA0037;
            border: solid #DA0037 2px;
      }
`

const DisplayInput = styled.div `

    width: 50vw;
    display: flex;
    justify-content: space-between;
    margin: 15px;


    input {
        border-radius: 10px;
    }

    button {
        border-radius: 10px;
        background-color: #fff;
        color: #DA0037;
        border: solid #DA0037 2px;
    }
  
`
export default class playlistTracks extends react.Component {

    state = {
        tracks: [],
        nameMusicInput: '',
        nameArtistInput: '',
        urlInput: '',
    }

    handleNameMusicInput = (e) => {
        this.setState({ nameMusicInput: e.target.value })
    }

    handleNameArtistInput = (e) => {
        this.setState({ nameArtistInput: e.target.value })
    }

    handleUrlInput = (e) => {
        this.setState({ urlInput: e.target.value })
    }

    componentDidMount() {
        this.getPlaylistTracks()
    }

    //Funções API

    getPlaylistTracks = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, {
            headers: {
                Authorization: 'maria-lanconi-carver'
            }
        })
            .then((res) => {
                this.setState({ tracks: res.data.result.tracks })
            })
            .catch((error) => {
                console.log(error.response.data)
                alert('não deu')

            })
    }

    addTrackPlaylist = () => {
        const body = {
            name: this.state.nameMusicInput,
            artist: this.state.nameArtistInput,
            url: this.state.urlInput
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, body, {
            headers: {
                Authorization: 'maria-lanconi-carver'
            }
        })
            .then((res) => {
                this.setState({
                    nameMusicInput: '',
                    nameArtistInput: '',
                    urlInput: ''
                })
                alert('Sua música foi adicionada!')
            })
            .catch((error) => {
                console.log(error.response.data)
                alert('Não foi possível adicionaar sua música :( !')
            })
    }

    removeTrack = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${id}`, {
            headers: {
                Authorization: 'maria-lanconi-carver'
            }
        }).then(() => {
            this.getPlaylistTracks()
        }).catch((error) => {
            console.log(error.response.data)

        })
    }

    render() {
        console.log(this.state.tracks)
        const trackList = this.state.tracks.map((item) => {
            return <PlaylistTracksCard
                key={item.id}
                trackName={item.name}
                artist={item.artist}
                removeTracK={this.removeTrack}
                trackId={item.id}
                url={item.url}
            />

        })

        return (
            <DisplayTracks>
                <DisplayInput>
                    <input
                        placeholder='Nome Música'
                        value={this.state.nameMusicInput}
                        onChange={this.handleNameMusicInput}
                    />

                    <input
                        placeholder='Artista'
                        value={this.state.nameArtistInput}
                        onChange={this.handleNameArtistInput}
                    />

                    <input
                        placeholder='Url'
                        value={this.state.urlInput}
                        onChange={this.handleUrlInput}
                    />

                    <button onClick={this.addTrackPlaylist}>Adicionar</button>
                </DisplayInput>

                {trackList}
                                    
                <button onClick={() => this.props.changePage('playlists', '')}>Voltar</button>
               

            </DisplayTracks >
        )
    }
}