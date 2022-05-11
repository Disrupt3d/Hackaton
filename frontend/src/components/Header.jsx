import React, { useState } from "react";
import Navbar from "./Navbar";

import "../styles/Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={`header ${showMenu ? "show-nav" : "hide-nav"}`}>
      <h2>Logo</h2>
      <div className="menuWrapper">
        <Navbar handleShowMenu={handleShowMenu} />
      </div>

      <button
        type="button"
        className="navbar-burger"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span className="bar" />
      </button>
    </div>
  );
}

export default Header;
