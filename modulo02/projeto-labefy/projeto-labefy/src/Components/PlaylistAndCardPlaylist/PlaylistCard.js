import react from "react"
import styled from "styled-components"

const DisplayPlaylistCard = styled.div `
    width: 50vw;
    background-color: #171717;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    color: #fff;
    font-family: sans-serif;
    font-weight: bold;
    padding: 20px;
    margin: 15px;
    cursor: pointer;

    button {
            border-radius: 20px;
            background-color: #fff;
            color: #DA0037;
            border: solid #DA0037 2px;
    }
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