import React from "react";
import { useParams } from "react-router-dom";
import missions from "../data/missions";
import Header from "../components/Header";

import "../styles/Page03.css";

function Page03() {
  const { age } = useParams();
  return (
    <div>
      <h1>Missions</h1>
      <Header />
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
              <input type="checkbox" className="mission-checkbox" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Page03;
