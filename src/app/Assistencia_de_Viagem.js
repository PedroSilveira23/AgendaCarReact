import React from 'react';
import ServicosImage from "../images/assistencia2.jpg"; // Renomeei a importação para refletir o novo nome
import { Link } from 'react-router-dom'; // Importe o Link para a navegação
import './ServicosPage.css'; // Importe o CSS

const ServicosPage = () => {
  return (
    <div className="servicos-page-container">
      <img className="servicos-page-img" src={ServicosImage} alt="" />
      <div className="servicos-page-text">
        <h1 className="servicos-page-title">Assistência de Viagem</h1>
        <p className="servicos-page-paragraph">
            Se o seu veículo deixar de circular por motivos mecânicos ou eléctricos, será enviado para o local um assistente de avaria.
        </p>
        <p className="servicos-page-paragraph">
            Em geral, os assistentes podem resolver problemas simples, como pneus furados, depósitos vazios ou chaves trancadas no carro, no próprio local. No entanto, se o problema for mais complexo e exigir mais conhecimentos, os assistentes irão provavelmente rebocar o seu veículo para o concessionário, oficina ou estação de serviço mais próxima. Em caso de avaria e de impossibilidade de continuar a conduzir, contacte-nos.
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



