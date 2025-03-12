import { useState } from 'react';
import perfil from "./img/perfil portifólio.jpg";
import './App.css';
import Botao from "./components/botao/botao"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={perfil} alt="Foto de Perfil" className="profile-pic" />
      <h1>Bianca Furlanetto</h1>
      <div className="card">
        <button className='Button' onClick={() => console.log}>
        Sobre Mim
        </button>
        <p>
        Olá, meu nome é Bianca Furlanetto, nasci no dia 09 de abril de 2007, tenho 17 anos de idade, moro na cidade de Jaú-sp. Estou no terceiro ano do ensino médio estudando na escol SESI e faço curso de Desenvolvimento de Sistemas no SENAI, sou uma aluna Dev. Também trabalho na pizzaria Don Cheff. Minha cor favorita é roxo, minha comida predileta é macarrão ao molho branco, no meu tempo livre gosto de sair para passear com meu namorado.
        </p>
       
      </div>
     
        
  
    </>
  );
}

export default App;