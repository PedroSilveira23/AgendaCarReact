import React from "react";
import { Link } from "react-router-dom";
import image from "../images/shoopcar.jpg";
import Estofos from "../images/estofoCarro.jpg";
import Vidro from "../images/vidroReparo.jpg";
import Mecanica from "../images/mecanica4.jpg";
import Pneus from "../images/pneuReparo.jpg";
import BateChapas from "../images/bateChapas.jpg";
import Eletr from "../images/eletronica2.jpg";
import Pintura from "../images/pintura.jpg";
import Assist from "../images/assistencia2.jpg";
import "./home.css";
import "./carousel.css";
import "../App.css";

const Home = () => {
  return (
    <>
      <div class="hero_area">
        <header class="header_section">
          <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
              <a class="navbar-brand mr-5" href="/">
                <span>AGENDACAR</span>
              </a>

              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul class="navbar-nav  ">
                    <li class="nav-item">
                      <a class="nav-link" href="/Login">
                        {" "}
                        LOGIN{" "}
                      </a>
                    </li>
                    {/* A terminar mais tarde 
                    <li className="nav-item">
                      <a className="nav-link" href="/Registo">
                        REGISTO
                      </a>
                    </li>
                    */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section class="slider_section position-relative">
          <div class="container">
            <div
              class="row"
              style={{ overflowX: "hidden", overflowY: "hidden" }}
            >
              <div class="col-md-7">
                <div class="detail-box">
                  <div>
                    <h1>
                      Bem-vindo ao <br />
                      <span>AGENDACAR</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="about_section layout_padding">
        <div class="container">
          <div class="row" style={{ overflowX: "hidden", overflowY: "hidden" }}>
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h2>Quem somos</h2>
                </div>
                <p>
                  A AgendaCar surgiu na cadeira de Desenvolvimento Web do
                  Politécnico de Tomar. O primeiro produto da AgendaCar foram os
                  tubos de escape. Foi através deste compomente que a AgendaCar
                  conquistou o seu espaço na área de após-venda, ocupando,
                  atualmente, todo o tipo de serviços de reparação rápida de
                  automóveis.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="img-box">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class=" layout_padding">
        <section class="layout_padding">
          <div class="container text-center">
            <div class="heading_container_servicos">
              <h2>Serviços diponíveis</h2>
            </div>
          </div>
          <br />
          <div
            class="row-carousel"
            style={{
              marginRight: 100,
              marginLeft: 100,
              width: "90%",
              overflowY: "hidden",
            }}
          >
            <div class="row__inner">
              <Link to="/Estofos">
                <div className="tile">
                  <div className="tile__media">
                    <img className="tile__img" src={Estofos} alt="" />
                  </div>
                  <div className="tile__details">
                    <div className="tile__title text-white">Estofos</div>
                  </div>
                </div>
              </Link>

              <Link to="/Vidro">
              <div class="tile">
                <div class="tile__media">
                  <img class="tile__img" src={Vidro} alt="" />
                </div>
                <div class="tile__details">
                  <div class="tile__title">Vidro</div>
                </div>
              </div>
              </Link>

              <Link to="/Mecanica">
              <div class="tile">
                <div class="tile__media">
                  <img class="tile__img" src={Mecanica} alt="" />
                </div>
                <div class="tile__details">
                  <div class="tile__title">Mecânica</div>
                </div>
              </div>
              </Link>

              <Link to="/Pneus">
              <div class="tile">
                <div class="tile__media">
                  <img class="tile__img" src={Pneus} alt="" />
                </div>
                <div class="tile__details">
                  <div class="tile__title">Pneus</div>
                </div>
              </div>
              </Link>

              <Link to="/BateChapas">
              <div class="tile">
                <div class="tile__media">
                  <img class="tile__img" src={BateChapas} alt="" />
                </div>
                <div class="tile__details">
                  <div class="tile__title">Bate-chapas</div>
                </div>
              </div>
              </Link>

              <Link to="/Eletronica">
              <div class="tile">
                <div class="tile__media">
                  <img class="tile__img" src={Eletr} alt="" />
                </div>
                <div class="tile__details">
                  <div class="tile__title">Eletricidade/Eletrónica</div>
                </div>
              </div>
              </Link>

              <Link to="/Pintura">
              <div class="tile">
                <div class="tile__media">
                  <img class="tile__img" src={Pintura} alt="" />
                </div>
                <div class="tile__details">
                  <div class="tile__title">Pintura</div>
                </div>
              </div>
              </Link>

              <Link to="/Assistencia_de_Viagem">
              <div class="tile">
                <div class="tile__media">
                  <img class="tile__img" src={Assist} alt="" />
                </div>
                <div class="tile__details">
                  <div class="tile__title">Assistência de viagem</div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section class="info_section layout_padding">
        <div class="footer_contact">
          <div class="heading_container">
            <h2>CONTACTA-NOS</h2>
          </div>

          <div class="box">
            <a href="" class="img-box" style={{ marginRight: "10px" }}>
              <img src="images/location.png" alt="" class="img-1" />
              <img src="images/location-o.png" alt="" class="img-2" />
              Politécnico de Tomar
            </a>
            <a href="" class="img-box" style={{ marginRight: "10px" }}>
              <img src="images/call.png" alt="" class="img-1" />
              <img src="images/call-o.png" alt="" class="img-2" />
              +351 911111111
            </a>
            <a href="" class="img-box">
              <img src="images/envelope.png" alt="" class="img-1" />
              <img src="images/envelope-o.png" alt="" class="img-2" />
              agendacar
              <br />
              @gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
