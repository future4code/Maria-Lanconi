import react from "react";
import styled from "styled-components";

const TrackCardDisplay = styled.div `
    background-color: #171717;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    color: #fff;
    font-family: sans-serif;

    div {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

    }
`

export default class PlaylistTracksCard extends react.Component {

    
    render() {

        return (
            <TrackCardDisplay>
              
                <div>
                    <p>{this.props.trackName}</p> - <p>{this.props.artist}</p>
                    <button onClick={() => this.props.removeTracK(this.props.trackId)}>X</button>
                </div>
                <audio controls="controls">
                    <source src={this.props.url} type="audio/ogg" />
                </audio>
                
            </TrackCardDisplay>
        )
    }
}