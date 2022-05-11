import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ handleShowMenu }) {
  return (
    <ul>
      <NavLink to="/" onClick={() => handleShowMenu()}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/Page01" onClick={() => handleShowMenu()}>
        <li>Page01</li>
      </NavLink>
      <NavLink to="/Page02" onClick={() => handleShowMenu()}>
        <li>Page02</li>
      </NavLink>
      <NavLink to="/Page03" onClick={() => handleShowMenu()}>
        <li>Page03</li>
      </NavLink>
      <NavLink to="/Page04" onClick={() => handleShowMenu()}>
        <li>Page04</li>
      </NavLink>
    </ul>
  );
}

export default Navbar;
