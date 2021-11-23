import react from "react";
import styled from "styled-components"
import CreatePlaylist from "./Components/CreatePlaylist/CreatePlaylist";
import PlaylistManager from "./Components/PlaylistManager/PlaylistManager";


const DisplayHome = styled.div`
  background-color: #444444;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-family: sans-serif;

`
const DisplayHeader = styled.div`
  background-color: #171717;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  

  h1 {
    margin: 15px;
    color: #fff;

    span {
      color: #DA0037;
    }
  }

  div {
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 15px;

    button {
      
      border-radius: 10px;
      background-color: #fff;
      color: #DA0037;
      border: solid #DA0037 2px;
        

    }
  }
`

const DisplayRender = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export default class App extends react.Component {

  state = {
    changePage: 'createPlaylist'
  }

  changePageRender = (page) => {
    this.setState({ changePage: page })
  }

  render() {

    const renderPage = () => {
      if (this.state.changePage === 'createPlaylist') {
        return <CreatePlaylist />
      } else if (this.state.changePage === 'playlistManager') {
        return <PlaylistManager />
      }

    }

    return (

      
      <DisplayHome>

        <DisplayHeader>
          <h1>Lab<span>efy</span></h1>
          <div>
            <button onClick={() => this.changePageRender('createPlaylist')}>Home</button>
            <button onClick={() => this.changePageRender('playlistManager')}>Playlists</button>
          </div>

        </DisplayHeader>
        
        <DisplayRender>
          {renderPage()}
        </DisplayRender>
      </DisplayHome>
    )
  }
}