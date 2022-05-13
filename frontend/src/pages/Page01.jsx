import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Boutton from "../components/Boutton";
import menuData from "../data/menuData";

import "../styles/Page01.css";

function Page01() {
  const { prenom } = useContext(UserContext);
  const { age } = useParams();
  return (
    <div>
      <Header />
      <div className="menu-user">
        <h1 className="menu-prenom">Bienvenue : {prenom}</h1>
        <p className="menu-level">Niveau : 48</p>
      </div>
      <div className="menu-container">
        {age === "enfant"
          ? menuData
              .filter((e) => e.type === "enfant")
              .map((el) => (
                <Link key={el.id} to={el.Link}>
                  <Boutton el={el} />
                </Link>
              ))
          : menuData
              .filter((e) => e.type === "parent")
              .map((el) => (
                <Link key={el.id} to={el.Link}>
                  <Boutton el={el} />
                </Link>
              ))}
      </div>
    </div>
  );
}

export default Page01;
