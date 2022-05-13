import React from "react";
import Header from "../components/Header";

import "../styles/Page04.css";

function Page04() {
  const level = "Niveau 14";
  return (
    <div>
      <Header />
      <h1 id="h1">Mes Badges !</h1>
      <div className="badge-and-level">
        <div className="badge">
          <img
            src="https://cdn.discordapp.com/attachments/973119902506438676/974300629713424454/badge01.png"
            alt="badge01"
          />
          <div className="star">
            <img src="https://i.ibb.co/Kjg8GD1/etoile3.png" alt="star" />
            <img src="https://i.ibb.co/Kjg8GD1/etoile3.png" alt="star" />
            <img src="https://i.ibb.co/Kjg8GD1/etoile3.png" alt="star" />
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/973119902506438676/974301958565404732/badge02.png"
            alt="badge02"
          />
          <div className="star">
            <img src="https://i.ibb.co/Kjg8GD1/etoile3.png" alt="star" />
            <img src="https://i.ibb.co/Kjg8GD1/etoile3.png" alt="star" />
            <img src="https://i.ibb.co/Kjg8GD1/etoile3.png" alt="star" />
          </div>
        </div>
        <div className="level" />
        <div className="button-badge">{level}</div>
      </div>
    </div>
  );
}

export default Page04;
