import React from "react";
import Header from "@components/Header";
import UserRanking from "@components/UserRanking";

import "../styles/Page05.css";
import "../styles/UserRanking.css";

function Page05() {
  return (
    <div>
      <Header />
      <h1 className="titreClassement">Classement</h1>
      <UserRanking />
    </div>
  );
}

export default Page05;
