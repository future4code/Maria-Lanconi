import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoperfil from './fotoperfil/img_perfil.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardGrande 
          imagem= {fotoperfil}
          nome=" Maria Fernanda Lançoni" 
          descricao="Olá, meu nome é Maria Fernanda e tenho 21 anos, sou estudante de Processos Químicos e Desenvolvimento Web, e uma entusiasta em jogos NFT. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
        imagem="https://cdn-icons-png.flaticon.com/512/482/482138.png"
        categoria= "E-mail:"
        infopessoal= "mariafernanda@email.com"
        />

        <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/5654/premium/5654521.png?token=exp=1635966101~hmac=a2d14198133285020946b6a4dc9212e8"
        categoria= "Endereço:"
        infopessoal= "Indaiatuba - SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/968882219363250177/DgSMns88_400x400.jpg" 
          nome="Eurofins Agroscience" 
          descricao=" Assistente de Laboratório | Atuação na área laboratorial em estudos de resíduos de agroquímicos em matrizes Vegetais." 
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/968882219363250177/DgSMns88_400x400.jpg" 
          nome="Eurofins Agroscience" 
          descricao=" Estagiária | Atuação na área laboratorial em estudos de resíduos de agroquímicos em matrizes Vegetais."  
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
