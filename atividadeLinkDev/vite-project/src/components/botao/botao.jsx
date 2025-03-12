import { useNavigate } from 'react-router-dom';
import './botao.css';

function Botao() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/outra-tela');
  };

  return (
    <div className="botao-container">
      <button className="navigate-button" onClick={handleClick}>
        Abrir Outra Tela
      </button>
    </div>
  );
}