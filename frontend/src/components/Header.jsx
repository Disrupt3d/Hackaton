import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/logo-variante.png";
import "../styles/Header.css";

function Header() {
  const { age } = useParams();
  return (
    <div className="header-content">
      <img src={logo} alt="logo" width="200px" />
      <h1 className="app-name">Educ' Tes Vieux</h1>
      <Link to={`/page01/${age}`}>
        <button className="backtomenu" type="button">
          Retour au menu
        </button>
      </Link>
    </div>
  );
}

export default Header;
