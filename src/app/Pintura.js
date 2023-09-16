import React from 'react';
import ServicosImage from "../images/pintura.jpg"; // Renomeei a importação para refletir o novo nome
import { Link } from 'react-router-dom'; // Importe o Link para a navegação
import './ServicosPage.css'; // Importe o CSS

const ServicosPage = () => {
  return (
    <div className="servicos-page-container">
      <img className="servicos-page-img" src={ServicosImage} alt="" />
      <div className="servicos-page-text">
        <h1 className="servicos-page-title">Pintura</h1>
        <p className="servicos-page-paragraph">
            Uma pintura automotiva bem feita pode fazer com que seu veículo se destaque na multidão. Quer esteja a reparar uma colisão, a renovar o seu carro antigo ou apenas a melhorar o aspecto do seu veículo favorito.
        </p>
        <p className="servicos-page-paragraph">
            Precisa apenas de um retoque na pintura? Não tem problema! A equipe da Penske Automotive Collision pode combinar perfeitamente a cor da pintura do seu carro e consertar aquelas lascas de pedra desagradáveis. Também podemos consertar a pintura rachada por meio do nosso processo de retoque de pintura. Oferecemos vários níveis de pintura, desde pintura de carroçaria completa até uma rápida actualização da pintura do seu carro antigo.
        </p>
      </div>
      <div className="return-button">
        <Link to="/"> {/* Link para retornar à página inicial */}
          <button>Voltar para Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicosPage;

