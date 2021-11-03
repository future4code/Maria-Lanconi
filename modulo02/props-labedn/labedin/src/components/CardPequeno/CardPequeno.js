import React from 'react';
import styled from 'styled-components'

const DisplaySmallCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    padding: 15px 30px;
    margin: 10px auto;
`
const StyleImgSmallCard = styled.img `
    width: 30px;
    margin-right: 10px;

`
function CardPequeno(props) {
    return (
        <DisplaySmallCard>
            <StyleImgSmallCard src={ props.imagem } />
            <div>
                <h4>{ props.categoria }</h4>
                <p>{ props.infopessoal }</p>
            </div>
        </DisplaySmallCard>
    )
}

export default CardPequeno