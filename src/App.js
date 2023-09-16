// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/Home';
import Oficinas from './app/Oficinas';
import Login from './app/Login';
import Registo from './app/Registo';
import Marcações from './app/Marcações'; // Import the Marcações component

import Estofos from './app/Estofos';
import Vidro from './app/Vidro';
import Mecanica from './app/Mecanica';
import Pneus from './app/Pneus';
import Eletronica from './app/Eletronica';
import BateChapas from './app/BateChapas';
import Assistencia_de_Viagem from './app/Assistencia_de_Viagem';
import Pintura from './app/Pintura';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Oficinas" element={<Oficinas />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registo" element={<Registo />} />
          <Route path="/Estofos" element={<Estofos />} />
          <Route path="/Vidro" element={<Vidro />} />
          <Route path="/Mecanica" element={<Mecanica />} />
          <Route path="/Pneus" element={<Pneus />} />
          <Route path="/Eletronica" element={<Eletronica />} />
          <Route path="/BateChapas" element={<BateChapas />} />
          <Route path="/Assistencia_de_Viagem" element={<Assistencia_de_Viagem />} />
          <Route path="/Pintura" element={<Pintura />} />
          <Route exact path="/Marcações" element={<Marcações />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
