import React from "react";
import styled from "styled-components"

const Etapa3Layout = styled.div`
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


export default class Etapa3 extends React.Component {

    render() {
        return (
            <Etapa3Layout>
                <h1>ETAPA 03 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <ol start="5">
                    <ListaLayout>
                        <ListaEspacamento>Por que não terminou um curso de graduação?</ListaEspacamento>
                        <input></input>
                    </ListaLayout>

                    <ListaLayout>
                        <ListaEspacamento>Você fez algum curso complementar?</ListaEspacamento>
                        <select>
                            <option>Nenhum.</option>
                            <option>Sim!</option>
                            
                        </select>
                    </ListaLayout>

                </ol>
            </Etapa3Layout>
        );
    }

}
