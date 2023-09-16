import React from 'react';
import ServicosImage from "../images/estofoCarro.jpg"; // Renomeei a importação para refletir o novo nome
import { Link } from 'react-router-dom'; // Importe o Link para a navegação
import './ServicosPage.css'; // Importe o CSS

const ServicosPage = () => {
  return (
    <div className="servicos-page-container">
      <img className="servicos-page-img" src={ServicosImage} alt="" />
      <div className="servicos-page-text">
        <h1 className="servicos-page-title">Estofos</h1>
        <p className="servicos-page-paragraph">
          A nossa equipa de técnicos de reparação de mobiliário e de pele móvel utiliza a tecnologia e as técnicas mais avançadas e precisas da indústria para revitalizar os seus artigos danificados.
        </p>
        <p className="servicos-page-paragraph">
          Utiliza ferramentas e métodos próprios para eliminar meticulosamente o desbotamento, os rasgões, os rasgões, os arranhões, as goivas, os riscos e os arranhões. Em muitos casos, podemos até restaurar com êxito artigos que tenham sido danificados pelo fogo ou pela água para um estado como novo. Graças à nossa capacidade de fornecer reparações de couro, vinil, tecido e estofos de alta qualidade e um serviço ao cliente excecional, conseguimos expandir o nosso negócio em muitas direções. O nosso objetivo é exceder as expectativas dos clientes. Estamos confiantes na nossa capacidade de ressuscitar os seus artigos danificados ou envelhecidos!
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

