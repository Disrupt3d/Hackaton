import React from "react";
import logo from "../assets/logo-variante.png";
import accueildata from "../data/accueildata";

import "../styles/Header.css";
import Boutton from "./Boutton";

function Header() {
  return (
    <div className="header-content">
      <img src={logo} alt="logo" width="200px" />
      <button className="backtomenu">Retour au menu</button>
    </div>
  );
}

export default Header;
