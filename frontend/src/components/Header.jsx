import React from "react";
import logo from "../assets/logo-variante.png";
import accueildata from "../data/accueildata";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Boutton from "./Boutton";

function Header() {
  return (
    <div className="header-content">
      <img src={logo} alt="logo" width="200px" />
      <Link to="/">
        <button className="backtomenu">Retour au menu</button>
      </Link>
    </div>
  );
}

export default Header;
