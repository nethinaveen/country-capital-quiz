import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { numOfQuestionsAction } from "../redux";
import { useHistory } from "react-router-dom";

const WelcomeToFlagQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(false);
    if (!selectedAnswer) {
      setErr(true);
    } else {
      dispatch(numOfQuestionsAction(selectedAnswer));
      history.push({ pathname: "/flagquiz" });
    }
  };

  return (
    <form>
      <h3>Welcome to Flag Quiz</h3>
      <br />
      <br />

      <p>
        You can set the number of questions for the Flag Quiz you wish to take from
        the below options
      </p>
      <br />
      <Alert variant="danger" show={err}>
        Please select an option
      </Alert>
      <ul>
        <li>
          <label>
            {" "}
            <input
              type="radio"
              value="5"
              name="answer"
              checked={selectedAnswer === "5"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />{" "}
            5 Questions (Trial)
          </label>
        </li>
        <li>
          <label>
            {" "}
            <input
              type="radio"
              value="25"
              name="answer"
              checked={selectedAnswer === "25"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />{" "}
            25 Questions (Beginner)
          </label>
        </li>

        <li>
          <label>
            {" "}
            <input
              type="radio"
              value="50"
              name="answer"
              checked={selectedAnswer === "50"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />{" "}
            50 Questions (Intermediate)
          </label>
        </li>
        <li>
          <label>
            {" "}
            <input
              type="radio"
              value="75"
              name="answer"
              checked={selectedAnswer === "75"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />{" "}
            75 Questions (Moderate)
          </label>
        </li>
        <li>
          <label>
            {" "}
            <input
              type="radio"
              value="100"
              name="answer"
              checked={selectedAnswer === "100"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />{" "}
            100 Questions (Advanced)
          </label>
        </li>
        <li>
          <label>
            {" "}
            <input
              type="radio"
              value="189"
              name="answer"
              checked={selectedAnswer === "189"}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />{" "}
            189 Questions (Master)
          </label>
        </li>
      </ul>
      <br />
      <Button variant="primary" onClick={handleSubmit}>
        Start Quiz
      </Button>
    </form>
  );
};

export default WelcomeToFlagQuiz;
