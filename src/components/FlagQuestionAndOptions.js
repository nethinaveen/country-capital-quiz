import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nextAction, displaySummaryAction } from "../redux";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { getFlagByCountryName } from "../asset/flagsLoader";

const FlagQuestionAndOptions = (props) => {
  const { countryObj, answeredListLength, numberOfQuestions } = props;
  const { id, country } = countryObj;
  const [option1, option2, option3, option4] = props.options;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correct, setCorrect] = useState(null);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  let numOfQues = numberOfQuestions
    ? Number.parseInt(numberOfQuestions) - 1
    : 4;
  const [userAnswer, setUserAnswer] = useState(null);
  
  const flagSrc = getFlagByCountryName(country);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(false);
    if (!selectedAnswer) {
      setErr(true);
    } else {
      if (country === selectedAnswer) {
        setCorrect("Yes");
      } else {
        setCorrect("No");
      }
      setUserAnswer(selectedAnswer);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setSelectedAnswer(null);
    dispatch(nextAction({ id, correct, userAnswer }));
    setCorrect(null);
    if (answeredListLength === numOfQues) {
      dispatch(displaySummaryAction());
    }
  };

  const getAlertStyle = (optionVal) => {
    if (selectedAnswer === optionVal) {
      if (correct && correct !== "" && correct === "Yes") {
        return "success";
      } else if (correct && correct !== "" && correct === "No") {
        return "danger";
      }
    }
    return "light";
  };

  let result = "";
  if (correct && correct !== "" && correct === "Yes") {
    result = <h4 style={{ color: "#0e5848" }}>Correct answer</h4>;
  } else if (correct && correct !== "" && correct === "No") {
    result = <h4 style={{ color: "#9a092c" }}>Wrong answer</h4>;
  }

  let submitButton,
    nextButton = "";
  if (correct && correct !== "") {
    const buttonDisplay =
      answeredListLength === numOfQues ? "Display Summary" : "Next Question";
    submitButton = (
      <Button variant="primary" onClick={handleNext}>
        {buttonDisplay}
      </Button>
    );
  } else {
    nextButton = (
      <Button variant="primary" onClick={handleSubmit}>
        Submit your answer
      </Button>
    );
  }

  return (
    <div>
      <Alert variant="danger" show={err}>
        Please select an answer
      </Alert>
      <form>
        <h3>
          Question {answeredListLength + 1}: Which country does this flag belong to?
        </h3>
        {flagSrc && (
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <img
              src={flagSrc}
              alt="Country flag"
              style={{ width: "200px", height: "auto", maxWidth: "100%", borderRadius: 4 }}
            />
          </div>
        )}
        <table width="50%">
          <tbody>
            <tr>
              <td>
                <Alert variant={getAlertStyle(option1)}>
                  <label>
                    A.{" "}
                    <input
                      type="radio"
                      value={option1}
                      name="answer"
                      checked={selectedAnswer === option1}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      disabled={correct !== null}
                    />{" "}
                    {option1}
                  </label>
                </Alert>
              </td>
            </tr>
            <tr>
              <td>
                <Alert variant={getAlertStyle(option2)}>
                  <label>
                    B.{" "}
                    <input
                      type="radio"
                      value={option2}
                      name="answer"
                      checked={selectedAnswer === option2}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      disabled={correct !== null}
                    />{" "}
                    {option2}
                  </label>
                </Alert>
              </td>
            </tr>
            <tr>
              <td>
                <Alert variant={getAlertStyle(option3)}>
                  <label>
                    C.{" "}
                    <input
                      type="radio"
                      value={option3}
                      name="answer"
                      checked={selectedAnswer === option3}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      disabled={correct !== null}
                    />{" "}
                    {option3}
                  </label>
                </Alert>
              </td>
            </tr>
            <tr>
              <td>
                <Alert variant={getAlertStyle(option4)}>
                  <label>
                    D.{" "}
                    <input
                      type="radio"
                      value={option4}
                      name="answer"
                      checked={selectedAnswer === option4}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      disabled={correct !== null}
                    />{" "}
                    {option4}
                  </label>
                </Alert>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        {result}
        <br />
        <br />
        {submitButton}
        {nextButton}
      </form>
    </div>
  );
};

export default FlagQuestionAndOptions;
