import React from "react";
import styled from "styled-components"

const Etapa4Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
`


export default class Etapa4 extends React.Component {

    render() {
        return (
            <Etapa4Layout>
                <h1>O FORMULÁRIO ACABOU!</h1>
                <p>Muito obrigada por participar! Entraremos em contato! :)</p>
            
            </Etapa4Layout>
        );
    }

}