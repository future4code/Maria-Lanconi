import React from 'react';
import styled from 'styled-components'

const DisplayCardGrande = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const StyleImg = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const StyleDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const StyleTitulo = styled.h4 `
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <DisplayCardGrande>
            <StyleImg src={ props.imagem } />
            <StyleDiv>
                <StyleTitulo>{ props.nome }</StyleTitulo>
                <p>{ props.descricao }</p>
            </StyleDiv>
        </DisplayCardGrande>
    )
}

export default CardGrande;