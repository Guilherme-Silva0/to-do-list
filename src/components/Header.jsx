import React from "react";
import logoInovaxBlue from "../assets/logo-inovax-blue.png";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img src={logoInovaxBlue} alt="Logo da empresa inovas" />
      <div className="text-header-contaier">
        <h2>TO DO LIST</h2>
        <p>Teste de capacidade técnica</p>
      </div>
    </header>
  );
};

export default Header;
