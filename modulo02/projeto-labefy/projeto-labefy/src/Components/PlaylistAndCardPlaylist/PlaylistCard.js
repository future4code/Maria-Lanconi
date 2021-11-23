import react from "react"
import styled from "styled-components"

const DisplayPlaylistCard = styled.div `
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default class PlaylistsCard extends react.Component {
    render() {
        
        return (
            <DisplayPlaylistCard>
                <p onClick= {() => this.props.changePage('playlistTracks', this.props.playlistId )}>{this.props.playlistName}</p>
                <button onClick = {() => this.props.deleteButton(this.props.playlistId)}>X</button>
            </DisplayPlaylistCard>
        )
    }
}