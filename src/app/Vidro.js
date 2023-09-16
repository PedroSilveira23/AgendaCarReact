import React from 'react';
import ServicosImage from "../images/vidroReparo.jpg"; // Renomeei a importação para refletir o novo nome
import { Link } from 'react-router-dom'; // Importe o Link para a navegação
import './ServicosPage.css'; // Importe o CSS

const ServicosPage = () => {
  return (
    <div className="servicos-page-container">
      <img className="servicos-page-img" src={ServicosImage} alt="" />
      <div className="servicos-page-text">
        <h1 className="servicos-page-title">Vidros</h1>
        <p className="servicos-page-paragraph">
            As fissuras no pára-brisas dificultam a visão, colocam o vidro em risco de sofrer mais danos e comprometem o desempenho do seu veículo em caso de colisão. Todos estes problemas ameaçam a sua segurança e a dos seus passageiros, pelo que adiar a reparação ou substituição do pára-brisas é um risco.
        </p>
        <p className="servicos-page-paragraph">
            Oferecemos substituição de vidros para automóveis com serviço móvel gratuito na sua área. Quer se trate do pára-brisas dianteiro, do pára-brisas traseiro, da janela do condutor, da janela do passageiro ou do vidro do quarto.  Dispomos de vidro de qualidade do fabricante do equipamento original para um ajuste perfeito, serviço móvel gratuito, serviço no mesmo dia e uma garantia vitalícia nacional sobre o acabamento.
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



