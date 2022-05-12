import React from "react";
import "../styles/Boutton.css";
import fleche from "../assets/fleche.png";

function Boutton({ el }) {
  return (
    <div>
      <button className="button-main" type="button">
        {el.name}
        {el.fleche ? <img className="fleche" src={fleche} alt="fleche" /> : ""}
      </button>
    </div>
  );
}

export default Boutton;
