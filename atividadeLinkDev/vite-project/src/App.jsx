import React from 'react';
import perfil from "./img/perfil portifólio.jpg";
import projetoStoryLeft from "./img/Captura de tela 2025-03-18 161247.png" 
import projetoMindTech from "./img/Captura de tela 2025-03-18 163548.png"
import projetoNetflix from "./img/Captura de tela 2025-03-18 164211.png"
import './App.css';

function App() {
  return (
    <>
      <img src={perfil} alt="Foto de Perfil" className="profile-pic" />
      <h1>Bianca Furlanetto</h1>
      <div className="card">
        <p>
          Meu nome é Bianca Furlanetto, nasci no dia 09 de abril de 2007, e atualmente tenho 17 anos. Resido na cidade de Jaú, São Paulo. No momento, estou cursando o terceiro ano do ensino médio na escola SESI e, paralelamente, realizo o curso de Desenvolvimento de Sistemas no SENAI, sendo uma aluna dedicada à área de Desenvolvimento.
          Atualmente, também trabalho na pizzaria Don Cheff. Em relação aos meus gostos pessoais, minha cor preferida é o roxo, e minha comida favorita é macarrão ao molho branco. Nos meus momentos livres, gosto de sair para passeios com meu namorado.
        </p>

        <h1>Esses são alguns dos meus projetos:</h1>

        <p>Projeto Netflix</p>
        <img src={projetoNetflix} alt="./img/Captura de tela 2025-03-18 164211.png" className="project-Netflix"/>
        <p>O projeto Netflix foi um dos primeiros desenvolvidos em sala de aula. Seu objetivo é recriar o design da página da Netflix, adaptado ao nosso estilo, mas mantendo uma aparência fiel ao original.</p>
        
        <p>Projeto MindTech</p>
        <img src={projetoMindTech} alt="./img/Captura de tela 2025-03-18 163548.png" className="project-MindTech"/>
        <p>O MindTech é um site desenvolvido em grupo, que surge como uma solução inovadora para um problema crescente em nossa sociedade: a dificuldade enfrentada por pessoas com transtornos mentais para iniciar e manter um tratamento adequado. Este projeto busca facilitar o acesso a informações, recursos e apoio especializado.</p>

        

        <p>Projeto StoryLeft</p>
        <img src={projetoStoryLeft} alt="./img/Captura de tela 2025-03-18 161247.png"className="project-StoryLeft" /> 
        <p>Por fim, entre os exemplos, o projeto StoryLeft foi mais um site desenvolvido em equipe, no qual criamos uma biblioteca virtual inovadora. O objetivo desse projeto foi proporcionar uma plataforma acessível e interativa para a leitura e compartilhamento de histórias.</p>
       

      </div>
    </>
  );
}

export default App;