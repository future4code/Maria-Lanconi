import logo from './logo.svg';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Etapa4 from './Components/Etapa4';
import styled from 'styled-components';
import React from 'react';

const ContainerLayout = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

class PagPrincipal extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {

    switch (this.state.etapa) {

      case 1:
        return <Etapa1/> 

      case 2:
        return <Etapa2 />

      case 3:
        return <Etapa3 />

      case 4:
        return <Etapa4 />

      default:
        return <Etapa1 />
    }
  }
  
  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
}

  render() {
      return (
        <ContainerLayout className="App">
          {this.renderizaEtapa()}
          {this.state.etapa <= 3 && <button onClick = {this.irParaProximaEtapa}>Próxima Etapa</button>}
        </ContainerLayout>
      );
    }
  }


export default PagPrincipal;
