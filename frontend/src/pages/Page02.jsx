import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Boutton from "../components/Boutton";
import "../styles/Page02.css";
import Header from "@components/Header";
import questions from "../data/questions";

function Page02() {
  const { question } = useContext(UserContext);

  const [index, setIndex] = useState(0);
  const [commentaire, setCommentaire] = useState(true);
  const [answer, setAnswer] = useState();
  const [congrats, setCongrats] = useState("Mauvaise réponse");

  useEffect(() => {
    if (questions[index].reponse1.isCorrect === true) {
      setAnswer("reponse1");
    } else if (questions[index].reponse2.isCorrect === true) {
      setAnswer("reponse2");
    }
    if (questions[index].reponse3.isCorrect === true) {
      setAnswer("reponse3");
    } else {
      setAnswer("reponse4");
    }
  }, [congrats]);

  function handleClick1() {
    setCommentaire(false);
    if (answer === "reponse1") {
      setCongrats("Bravo !");
    }
  }
  function handleClick2() {
    setCommentaire(false);
    if (answer === "reponse2") {
      setCongrats("Bravo !");
    }
  }
  function handleClick3() {
    setCommentaire(false);
    if (answer === "reponse3") {
      setCongrats("Bravo !");
    }
  }
  function handleClick4() {
    setCommentaire(false);
    if (answer === "reponse4") {
      setCongrats("Bravo !");
    }
  }

  function handleNext() {
    setCongrats("Mauvaise réponse");
    setCommentaire(true);
    setIndex(index + 1);
  }
  console.log(answer);

  return (
    <div className="questions-wrapper">
      <Header />
      <div className="wrap-container">
        <img className="question-img" src={questions[index].img} alt="" />
        <div className="answer-content">
          <button className="useless-btn" onClick={handleClick1}>
            <Boutton el={questions[index].reponse1} />
          </button>

          <button className="useless-btn" onClick={handleClick2}>
            <Boutton el={questions[index].reponse2} />
          </button>
          <button className="useless-btn" onClick={handleClick3}>
            <Boutton el={questions[index].reponse3} />
          </button>
          <button className="useless-btn" onClick={handleClick4}>
            <Boutton el={questions[index].reponse4} />
          </button>
        </div>
      </div>
      {commentaire ? (
        <div className="question-container">{questions[index].question}</div>
      ) : (
        <div className="question-container">
          {congrats} <br />
          {questions[index].commentaire}
        </div>
      )}
      <button className="nextquestion" onClick={handleNext}>
        Question suivante
      </button>
    </div>
  );
}

export default Page02;
