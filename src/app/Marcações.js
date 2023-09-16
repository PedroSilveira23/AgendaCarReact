import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Marcações.css'; // Import the CSS file

const Marcações = () => {
  return (
    <div className="marcações-container">
      <h2 className="marcações-title">Marcações</h2>
      <div className="marcações-content">
        <p>
          Bem-vindo à página de Marcações! Aqui você pode visualizar e gerenciar suas marcações.
        </p>
        {/* Add more content or components related to marcações */}
      </div>
      <div className="return-button">
        <Link to="/"> {/* Link to return to the home page */}
          <button>Voltar para Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Marcações;
