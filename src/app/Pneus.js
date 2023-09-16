import React from 'react';
import ServicosImage from "../images/pneuReparo.jpg"; // Renomeei a importação para refletir o novo nome
import { Link } from 'react-router-dom'; // Importe o Link para a navegação
import './ServicosPage.css'; // Importe o CSS

const ServicosPage = () => {
  return (
    <div className="servicos-page-container">
      <img className="servicos-page-img" src={ServicosImage} alt="" />
      <div className="servicos-page-text">
        <h1 className="servicos-page-title">Pneus</h1>
        <p className="servicos-page-paragraph">
            Pequenos desalinhamentos e danos na direcção ou na suspensão podem ser difíceis de detectar, e é por isso que ajuda ter alguém a inspeccionar o nível de danos nos pneus. Estas inspecções podem proporcionar paz de espírito e ajudá-lo a evitar reparações dispendiosas de automóveis e pneus no futuro.
        </p>
        <p className="servicos-page-paragraph">
            A nossa equipa é altamente especializada em manutenção automóvel, reparações de veículos e substituição de pneus. Iremos observar e avaliar os danos nos pneus, bem como o impacto que podem ter no seu veículo. Deixe os nossos profissionais de reparação de pneus darem uma vista de olhos. Se algo não lhe parecer bem, é provável que haja um problema.
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

