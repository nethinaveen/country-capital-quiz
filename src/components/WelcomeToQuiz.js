import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { numOfQuestionsAction } from "../redux";
import { useHistory } from "react-router-dom";

const WelcomeToQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`handle submit ${selectedAnswer}`);
    setErr(false);
    if (!selectedAnswer) {
      setErr(true);
    } else {
      dispatch(numOfQuestionsAction(selectedAnswer));
      history.push({ pathname: "/quiz" });
    }
  };

  return (
    <form>
      <h3>Welcome to Quiz</h3>
      <br />
      <br />

      <p>
        you can set the number of questions for the Quiz you wish to take from
        the below options
      </p>
      <br />
      <Alert variant="danger" show={err}>
        {" "}
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
            5 Questions (Trail)
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
            100 Questions (Expert)
          </label>
        </li>
      </ul>
      <br />
      <table width="50%">
        <tbody>
          <tr>
            <td>
              {" "}
              <Button variant="primary" onClick={handleSubmit}>
                Start the quiz !!
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default WelcomeToQuiz;
