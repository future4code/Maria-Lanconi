import react from "react";

export default class PlaylistDetails extends react.Component {
    
    playlistTracks = this.props.tracksArray.map ((item) => {
        return <div key = {item.id}>
            {item.name}
            {item.artist}
        </div>
    })

    render () {
        return (
            <div>
                <div>
                    {this.playlistTracks}
                </div>
            </div>
        )
    }
}