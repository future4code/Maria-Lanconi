import React from "react";
import styled from "styled-components"

const Etapa1Layout = styled.div`
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


export default class Etapa1 extends React.Component {

    render() {
        return (
            <Etapa1Layout>
                <h1>ETAPA 01 - DADOS GERAIS</h1>
                <ol>
                    <ListaLayout>
                        <ListaEspacamento>Qual seu nome?</ListaEspacamento>
                        <input></input>
                    </ListaLayout>

                    <ListaLayout>
                        <ListaEspacamento>Qual sua idade?</ListaEspacamento>
                        <input></input>
                    </ListaLayout>

                    <ListaLayout>
                        <ListaEspacamento>Qual seu email?</ListaEspacamento>
                        <input></input>
                    </ListaLayout>

                    <ListaLayout>
                        <ListaEspacamento>Qual a sua escolaridade?</ListaEspacamento>
                        <select>
                            <option>Ensino Médio Incompleto</option>
                            <option>Ensino Médio Completo</option>
                            <option>Ensino Superior Incompleto</option>
                            <option>Ensino Superior Completo</option>
                        </select>
                    </ListaLayout>

                </ol>
            </Etapa1Layout>
        );
    }

}

