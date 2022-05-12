import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-variante.png";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header-content">
      <img src={logo} alt="logo" width="200px" />
      <Link to="/">
        <button className="backtomenu" type="button">
          Retour au menu
        </button>
      </Link>
    </div>
  );
}

export default Header;
