import React, { useState } from "react";
import { Link } from "react-router-dom";  // Importe o Link do React Router
import "./Registo.css";

const Registo = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    const newErrors = {};
    for (const key in formData) {
      if (formData[key] === "") {
        newErrors[key] = "Por favor, preencha este campo.";
      }
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As passwords não coincidem.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Reset errors
      setErrors({});

      // TODO: Handle form submission (e.g., send data to server)

      // Display success message
      alert("Cliente criado com sucesso!");
    }
  };

  return (
    <div className="registo-container">
      <h2 className="registo-title">Registo</h2>
      <form onSubmit={handleSubmit}>
        {/* Rest of your form */}
        <div className="form-group">
          <label>Último Nome:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Data de Nascimento:</label>
          <input
            type="text"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && (
            <span className="error">{errors.birthDate}</span>
          )}
        </div>
        <div className="form-group">
          <label>Morada:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <label>Código Postal:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && (
            <span className="error">{errors.postalCode}</span>
          )}
        </div>
        <div className="form-group">
          <label>Número de Telemóvel:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}
        </div>
        <button type="submit">Submeter</button>
        <div className="return-button">
          <Link to="/">Voltar para Home</Link>
        </div>
      </form>
    </div>
  );
};

export default Registo;
