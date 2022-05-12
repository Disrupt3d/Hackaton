import Header from "@components/Header";
import React from "react";
import { Link } from "react-router-dom";
import Boutton from "../components/Boutton";
import menuData from "../data/menuData";

import "../styles/Page01.css";

function Page01() {
  return (
    <div>
      <Header />
      <div className="menu-container">
        {menuData.map((el) => (
          <Link to={el.Link}>
            <Boutton el={el} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page01;
