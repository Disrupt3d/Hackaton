/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import Boutton from "../components/Boutton";
import accueildata from "../data/accueildata";

import "../styles/Accueil.css";

function Accueil() {
  return (
    <div className="accueil-wrapper">
      <h1>Educ' ton Vieux</h1>
      <input
        className="name-container"
        type="text"
        placeholder="Tape ton prénom"
      />

      <div className="btn-container">
        <Link to="/page01/enfant">
          <Boutton el={accueildata[0]} />
        </Link>
        <Link to="/page01/parent">
          <Boutton el={accueildata[1]} />
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
