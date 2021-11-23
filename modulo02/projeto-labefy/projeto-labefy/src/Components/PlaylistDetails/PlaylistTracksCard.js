import react from "react";
import styled from "styled-components";

const TrackCardDisplay = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 30%;
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
                    <source src={this.props.url} type="mp4" />
                </audio>
                
            </TrackCardDisplay>
        )
    }
}