import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const InputStyle = styled.input `
  padding: 5px;
  margin: 10px 0 0 5px;
  width: 250px;
`
const ButtonStyle = styled.button `
  padding: 5px;
  margin: 2.5px 0 0 5px;
  width: 200px;
`
class App extends React.Component {
  state = {

    posts: [
      {
        nomeUsuario: 'paula_',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'fernanda02',
        fotoUsuario: 'https://picsum.photos/49/50',
        fotoPost: 'https://picsum.photos/190/150'
      },
      {
        nomeUsuario: 'joaopaulo',
        fotoUsuario: 'https://picsum.photos/47/50',
        fotoPost: 'https://picsum.photos/185/150'
      }
    ],

    valorInputNomeUsuario: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: '',

    
  }

  buttonAdicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
     
    const novosPosts = [...this.state.posts, novoPost]
    this.setState({posts:novosPosts})
  }

  OnChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  } 

  OnChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  OnChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }


  

  render() {

    const ListaDePosts = this.state.posts.map((post) => {
      return (

        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />

      )
    })
    
    return (
      
      <MainContainer>
        <InputStyle
          value={this.state.valorInputNomeUsuario}
          onChange={this.OnChangeInputNomeUsuario}
          placeholder={'Nome Usuário'}
        />

        <InputStyle
          value={this.state.valorInputFotoUsuario}
          onChange={this.OnChangeInputFotoUsuario}
          placeholder={'Foto Usuário'}
        />  

        <InputStyle
          value={this.state.valorInputFotoPost}
          onChange={this.OnChangeInputFotoPost}
          placeholder={'Foto Post'}
        />
        <ButtonStyle onClick={this.buttonAdicionaPost}>Enviar</ButtonStyle>
        
        {ListaDePosts}
      
      </MainContainer>

      

    );
  }
}

export default App;
