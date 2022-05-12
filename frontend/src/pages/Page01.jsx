import React from "react";
import { Link } from "react-router-dom";
import Boutton from "../components/Boutton";
import menuData from "../data/menuData";

import "../styles/Page01.css";

function Page01() {
  return (
    <div>
      {menuData.map((el) => (
        <Link to={el.Link}>
          <Boutton el={el} />
        </Link>
      ))}
    </div>
  );
}

export default Page01;
