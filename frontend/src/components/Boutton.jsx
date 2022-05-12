import React from "react";
import "../styles/Boutton.css";

function Boutton({ el }) {
  return (
    <div>
      <button className="button-main" type="button">
        {el.name}
      </button>
    </div>
  );
}

export default Boutton;
