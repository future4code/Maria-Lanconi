import React from "react";
import styled from "styled-components"

const Etapa2Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
`
const ListaLayout = styled.div `
    margin: 10px;
`
const ListaEspacamento = styled.li `
    padding: 2px;
    margin-bottom: 2px;
`


export default class Etapa2 extends React.Component {

    render() {
        return (
            <Etapa2Layout>
                <h1>ETAPA 02 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <ol start="5">
                    <ListaLayout>
                        <ListaEspacamento>Qual curso?</ListaEspacamento>
                        <input></input>
                    </ListaLayout>

                    <ListaLayout>
                        <ListaEspacamento>Qual a unidade de ensino?</ListaEspacamento>
                        <input></input>
                    </ListaLayout>

                </ol>
            </Etapa2Layout>
        );
    }

}
