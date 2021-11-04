import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (

      <div>
        <MainContainer>
          <Post
            nomeUsuario={'paula_'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>

        <MainContainer>
          <Post
            nomeUsuario={'fernanda02'}
            fotoUsuario={'https://picsum.photos/49/50'}
            fotoPost={'https://picsum.photos/190/150'}
          />
        </MainContainer>

        <MainContainer>
          <Post
            nomeUsuario={'joaopaulo'}
            fotoUsuario={'https://picsum.photos/47/50'}
            fotoPost={'https://picsum.photos/185/150'}
          />
        </MainContainer>
      </div>
      
    );
  }
}

export default App;
