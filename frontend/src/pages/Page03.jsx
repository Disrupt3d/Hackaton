import React from "react";
import { useParams } from "react-router-dom";
import missions from "../data/missions";

import "../styles/Page03.css";

function Page03() {
  const { age } = useParams();
  return (
    <div>
      <h1>Missions</h1>
      {age === "enfant"
        ? missions
            .filter((e) => e.type === "enfant")
            .map((mission) => (
              <div key={mission.id} className="mission-card">
                <p>{mission.mission}</p>
              </div>
            ))
        : missions
            .filter((e) => e.type === "adulte")
            .map((mission) => (
              <div key={mission.id} className="mission-card">
                <p>{mission.mission}</p>
              </div>
            ))}
    </div>
  );
}

export default Page03;
