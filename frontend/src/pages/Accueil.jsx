import React from "react";
import Boutton from "@components/Boutton";

// import { HashLink as Link } from "react-router-hash-link";

import "../styles/Accueil.css";

function Accueil() {
  return (
    <div className="accueil-wrapper">
      <h1>Educ' ton Vieux</h1>
      <input
        className="name-container"
        type="text"
        placeholder="Tape ton prénom"
        //value={name}
      />

      <div className="btn-container">
        <Boutton />
        <Boutton />
      </div>
    </div>
  );
}

export default Accueil;
