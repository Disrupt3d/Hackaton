import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Boutton from "../components/Boutton";
import "../styles/Page02.css";

function Page02() {
  const { question } = useContext(UserContext);
  return (
    <div>
      <h1>Question !</h1>
      <h2>{question[0].name}</h2>
      <Boutton text={question[1].name} />
      <Boutton text={question[2].name} />
      <Boutton text={question[3].name} />
      <Boutton text={question[4].name} />
    </div>
  );
}

export default Page02;
