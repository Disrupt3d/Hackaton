import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Boutton from "../components/Boutton";
import "../styles/Page02.css";
import Header from "@components/Header";
import questions from "../data/questions";

function Page02() {
  const { question } = useContext(UserContext);

  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }
  return (
    <div className="questions-wrapper">
      <Header />
      <div className="wrap-container">
        <img className="question-img" src={questions[index].img} alt="" />
        <div className="answer-content">
          <button className="useless-btn" onClick={handleClick}>
            <Boutton el={questions[index].reponse1} />
          </button>

          <button className="useless-btn" onClick={handleClick}>
            <Boutton el={questions[index].reponse2} />
          </button>
          <button className="useless-btn" onClick={handleClick}>
            <Boutton el={questions[index].reponse3} />
          </button>
          <button className="useless-btn" onClick={handleClick}>
            <Boutton el={questions[index].reponse4} />
          </button>
        </div>
      </div>
      <div className="question-container">{questions[index].question}</div>
    </div>
  );
}

export default Page02;
