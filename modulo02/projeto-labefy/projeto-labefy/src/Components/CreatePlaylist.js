import react from "react";
import styled from "styled-components";

const DisplayCreatPlaylist = styled.div`
 background-color: #B97A95;
 max-height: 25vh;
 display: flex;
 flex-direction: column;
 margin: 20px;
 padding: 20px;
 border-radius: 15px;
 text-align: center;
 font-family: sans-serif;
 color: #2C061F;
`

const DisplayInputImg = styled.div`
display: flex;
justify-content: center;
align-items: stretch;

input {
    border-radius: 5px;
}

img {
    width: 25px;
    margin-top: 5px;
    cursor: pointer;
}
`

export default class CreatePlaylist extends react.Component {

    render() {
        return (
            <DisplayCreatPlaylist>
                <h1>Crie sua playlist!</h1>
                <DisplayInputImg>
                    <input
                        placeholder='Nome playlist'
                        value={this.props.playlistNameInput}
                        onChange={this.props.handlePlaylistNameInput}
                    />
                    <img onClick={this.props.createPlaylist} src="https://cdn-icons.flaticon.com/png/512/3446/premium/3446451.png?token=exp=1637551570~hmac=b5e303fbaf900666536285c0571015d5"/>
                </DisplayInputImg>
            </DisplayCreatPlaylist>
        )
    }
}