import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Boutton from "../components/Boutton";
import "../styles/Page02.css";
import Header from "../components/Header";
import questions from "../data/questions";

function Page02() {
  const { age } = useParams();
  const [index, setIndex] = useState(0);
  const [commentaire, setCommentaire] = useState(true);
  const [answer, setAnswer] = useState();
  const [congrats, setCongrats] = useState("Mauvaise réponse");
  const [questionslist, setquestionslistlist] = useState(questions);
  const eductesvieux =
    "Maintenant que tu as compris, tu peux commencer l'éducation de tes vieux.";

  useEffect(() => {
    const handlequestionslistlist = () => {
      setquestionslistlist(questions.filter((e) => e.type === age));
    };
    handlequestionslistlist();
  }, [age]);

  useEffect(() => {
    if (questionslist[index].reponse1.isCorrect === true) {
      setAnswer("reponse1");
    } else if (questionslist[index].reponse2.isCorrect === true) {
      setAnswer("reponse2");
    } else if (questionslist[index].reponse3.isCorrect === true) {
      setAnswer("reponse3");
    } else if (questionslist[index].reponse4.isCorrect === true) {
      setAnswer("reponse4");
    }
  }, [index]);

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
    if (index < questionslist.length - 1) {
      setCongrats("Mauvaise réponse");
      setCommentaire(true);
      setIndex(index + 1);
    } else {
      setCongrats(
        "Bravo ! Tu as terminé le quiz ! Maintenant invite le reste de ta famille à en faire autant ! Educ' tes vieux !"
      );
      setCommentaire(false);
    }
  }

  return (
    <div className="questions-wrapper">
      <Header />
      <div className="wrap-container">
        <img className="question-img" src={questionslist[index].img} alt="" />
        <div className="answer-content">
          <button className="useless-btn" onClick={handleClick1} type="button">
            <Boutton el={questionslist[index].reponse1} />
          </button>

          <button className="useless-btn" onClick={handleClick2} type="button">
            <Boutton el={questionslist[index].reponse2} />
          </button>
          <button className="useless-btn" onClick={handleClick3} type="button">
            <Boutton el={questionslist[index].reponse3} />
          </button>
          <button className="useless-btn" onClick={handleClick4} type="button">
            <Boutton el={questionslist[index].reponse4} />
          </button>
        </div>
      </div>
      <button className="backtomenu" onClick={handleNext} type="button">
        Question suivante
      </button>
      {commentaire ? (
        <div className="question-container">
          {questionslist[index].question}
        </div>
      ) : (
        <div className="question-container">
          {congrats} <br />
          {questionslist[index].commentaire}
          {age === "enfant" ? (
            <p className="eductesvieux">{eductesvieux}</p>
          ) : null}
        </div>
      )}
      <button className="nextquestion" onClick={handleNext}>
        Question suivante
      </button>
    </div>
  );
}

export default Page02;
