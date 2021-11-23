import react from "react";
import styled from "styled-components"
import CreatePlaylist from "./Components/CreatePlaylist/CreatePlaylist";
import PlaylistManager from "./Components/PlaylistManager/PlaylistManager";

const DisplayHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;

`
const DisplayHeader = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  

  h1 {
    margin: 10px;
  }

  div {
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 20px;
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
          <h1>Labefy</h1>
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