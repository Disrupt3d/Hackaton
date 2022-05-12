import React from "react";
import "../styles/Boutton.css";

function BouttonQuestion({ text }) {
  return (
    <div>
      <button className="button-main" type="button">
        {text}
      </button>
    </div>
  );
}

export default BouttonQuestion;
