import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/Logo-no-title.png";
import "../styles/Page06.css";

function Page06() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(redirect);
    };
  }, []);
  return (
    <div>
      <div className="error404_total_container">
        <section className="set">
          <h3 className="errror404_color1">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color2">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color1">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color2">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color1">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color2">Educ&apos; tes vieux</h3>
        </section>
        <section className="error404_container">
          <h1 className="error404_title">ERROR 404</h1>
          <img src={logo2} alt="logo1" className="error404_logo" />
          <h2 className="error404_title2"> Vieux no longer uneducated</h2>
        </section>
        <section className="set2">
          <h3 className="errror404_color1">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color2">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color1">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color2">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color1">Educ&apos; tes vieux</h3>
          <h3 className="errror404_color2">Educ&apos; tes vieux</h3>
        </section>
      </div>
    </div>
  );
}

export default Page06;
