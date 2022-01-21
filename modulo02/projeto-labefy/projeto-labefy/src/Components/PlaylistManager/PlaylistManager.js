import react from "react";
import Playlists from "../PlaylistAndCardPlaylist/Playlists";
import PlaylistTracks from "../PlaylistDetails/PlaylistTracks";


export default class PlaylistManager extends react.Component {

    state = {
        changePage: 'playlists',
        playlistId: ''
    }

    pageRender = (page, id) => {
        this.setState({ changePage: page, playlistId: id })
    }


    render() {
        const renderCurrentPage = () => {
            if (this.state.changePage === "playlists") {
                return <Playlists
                    changePage={this.pageRender}
                />
            } else if (this.state.changePage === "playlistTracks") {
                return <PlaylistTracks
                    playlistId={this.state.playlistId}
                    changePage={this.pageRender}
                />
            }
        }


        return (
            <div>
                {renderCurrentPage()}
            </div >
        )
    }
}