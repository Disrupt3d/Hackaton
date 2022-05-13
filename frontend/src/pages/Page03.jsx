/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useParams } from "react-router-dom";
import missions from "../data/missions";
import Header from "../components/Header";

import "../styles/Page03.css";

function Page03() {
  const { age } = useParams();
  return (
    <div className="mission-container">
      <Header />
      <h1 id="missions-title">Missions</h1>
      {missions
        .filter((e) => e.type === age)
        .map((mission) => (
          <div className="mission-all">
            <img
              src={mission.img}
              className="mission-image"
              alt="illustration de la mission"
            />
            <div key={mission.id} className="mission-card">
              <p className="mission-desc">{mission.mission}</p>
              <div className="check">
                <input type="checkbox" id="check" />
                <label htmlFor="check" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Page03;
