import React from "react";
import logo from "../assets/logo-variante.png";

import "../styles/Header.css";

function Header() {
  return (
    <div className="header-content">
      <img src={logo} alt="logo" width="200px" />
      <button className="backtomenu" type="button">
        Retour au menu
      </button>
    </div>
  );
}

export default Header;
