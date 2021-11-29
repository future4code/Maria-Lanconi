import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  
  const [curtido, setValorCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setValorComentando] = useState(false)
  const [numeroComentarios, setValorNumeroComentarios] = useState(0)
  const [comentarios, setValorComentarios] = useState([])


  const onClickCurtida = () => {

    if (curtido) {
      setValorCurtido(
        !curtido
      )

      setNumeroCurtidas(
        numeroCurtidas - 1
        
      )
    } else {
      setValorCurtido(
        !curtido
        )

      setNumeroCurtidas(
        numeroCurtidas + 1
      )
    }

  };

  const onClickComentario = () => {
    setValorComentando(
      !comentando
    )
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

    setValorComentarios(
      listaDeComentarios     
    )

    setValorComentando(
      false
    )

    setValorNumeroComentarios(
      numeroComentarios + 1 
    )
  }

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = comentando ? (
   
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    
    comentarios.map(comentario => {
      return (
        <CommentContainer key={comentario}>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post