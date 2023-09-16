import React from 'react';
import ServicosImage from "../images/eletronica2.jpg"; // Renomeei a importação para refletir o novo nome
import { Link } from 'react-router-dom'; // Importe o Link para a navegação
import './ServicosPage.css'; // Importe o CSS

const ServicosPage = () => {
  return (
    <div className="servicos-page-container">
      <img className="servicos-page-img" src={ServicosImage} alt="" />
      <div className="servicos-page-text">
        <h1 className="servicos-page-title">Eletrónica</h1>
        <p className="servicos-page-paragraph">
            Os requisitos da reparação móvel de veículos variam consoante as circunstâncias. Em algumas situações, é uma recolha e transferência básica do seu veículo, enquanto outras situações necessitarão de um reboque. Depois de efetuarmos o trabalho nas nossas instalações, devolvê-lo-emos a tempo.
        </p>
        <p className="servicos-page-paragraph">
            Se as luzes do painel de instrumentos do seu veículo não se acenderem adequadamente, é provável que o sistema elétrico esteja avariado. Outro indicador de um possível problema no sistema elétrico é se os faróis do seu veículo escurecerem quando conduz a baixa velocidade. Um técnico experiente efetuará um diagnóstico específico ao sistema elétrico do seu veículo para controlar a razão da avaria e concluir a reparação essencial. Um técnico verifica a bateria do carro, a doença, a veracidade e a reparação elétrica móvel perto de mim para verificar se esta consegue produzir energia suficiente.
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

