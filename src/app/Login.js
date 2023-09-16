import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Verificar as credenciais
    if (username === 'gestor@gestor.com' && password === 'Gestor1234,') {
      alert('Login bem-sucedido!'); // Ação de login bem-sucedida
      navigate('/Marcações'); // Redirect to Marcações page on successful login
    } else {
      alert('Credenciais inválidas. Tente novamente.'); // Ação de login falhado
    }
  };

  const handleHomeButtonClick = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div>
        <label className="login-label">Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} className="login-input" />
      </div>
      <div>
        <label className="login-label">Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} className="login-input" />
      </div>
      <button onClick={handleLogin} className="login-button">Login</button>
      
      {/* Button to navigate to home */}
      <button onClick={handleHomeButtonClick} className="home-button">Voltar para Home</button>
    </div>
  );
};

export default Login;
