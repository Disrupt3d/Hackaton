import React from "react";
import Navbar from "./Navbar";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <h2>Logo</h2>

        <div className="footer-navigation">
          <Navbar />
        </div>
        <div className="social-networks">
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
      </div>
      <div className="description">
        <p>
          Designed by <br />
          all right reserved ®- 2022
        </p>
      </div>
    </div>
  );
}

export default Footer;
