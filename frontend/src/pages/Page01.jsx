import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Boutton from "../components/Boutton";
import menuData from "../data/menuData";

import "../styles/Page01.css";

function Page01() {
  const { age } = useParams();
  return (
    <div>
      <Header />
      <div className="menu-container">
        {age === "enfant"
          ? menuData
              .filter((e) => e.type === "enfant")
              .map((el) => (
                <Link to={el.Link}>
                  <Boutton el={el} />
                </Link>
              ))
          : menuData
              .filter((e) => e.type === "parent")
              .map((el) => (
                <Link to={el.Link}>
                  <Boutton el={el} />
                </Link>
              ))}
      </div>
    </div>
  );
}

export default Page01;
