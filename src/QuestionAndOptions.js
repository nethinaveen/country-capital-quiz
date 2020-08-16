import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nextAction, displaySummaryAction } from "./redux";

const QuestionAndOptions = (props) => {
  const { countryObj, answeredListLength } = props;
  const { id, country, capital } = countryObj;
  const [option1, option2, option3, option4] = props.options;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correct, setCorrect] = useState(null);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`handle submit ${selectedAnswer}`);
    setErr(false);
    if (!selectedAnswer) {
      setErr(true);
    } else {
      if (capital === selectedAnswer) {
        setCorrect("Yes");
      } else {
        setCorrect("No");
      }
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setSelectedAnswer(null);
    dispatch(nextAction({ id, correct }));
    setCorrect(null);
    if (answeredListLength === 74) {
      dispatch(displaySummaryAction());
    }
  };

  let result = "";
  if (correct && correct !== "" && correct === "Yes") {
    result = <h4 style={{ color: "#0e5848" }}>Correct answer</h4>;
  } else if (correct && correct !== "" && correct === "No") {
    result = <h4 style={{ color: "#9a092c" }}>Wrong answer</h4>;
  }
  if (err) {
    result = <h4 style={{ color: "#9a092c" }}>Please select an answer</h4>;
  }

  let submitButton,
    nextButton = "";
  if (correct && correct !== "") {
    const buttonDisplay = answeredListLength === 49 ? "Next Question" : "Display Summary"
    submitButton = <button onClick={handleNext}>{buttonDisplay}</button>;
  } else {
    nextButton = <button onClick={handleSubmit}>Submit your answer</button>;
  }

  return (
    <div>
      <form>
        <h3>Question: What is the capital city of "{country}" ?</h3>
        <table width="50%">
          <tbody>
            <tr>
              <td>
                <label>
                  A.{" "}
                  <input
                    type="radio"
                    value={option1}
                    name="answer"
                    checked={selectedAnswer === option1}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />{" "}
                  {option1}
                </label>
              </td>
              <td>
                <label>
                  B.{" "}
                  <input
                    type="radio"
                    value={option2}
                    name="answer"
                    checked={selectedAnswer === option2}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />{" "}
                  {option2}
                </label>
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  C.{" "}
                  <input
                    type="radio"
                    value={option3}
                    name="answer"
                    checked={selectedAnswer === option3}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />{" "}
                  {option3}
                </label>
              </td>
              <td>
                <label>
                  D.{" "}
                  <input
                    type="radio"
                    value={option4}
                    name="answer"
                    checked={selectedAnswer === option4}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />{" "}
                  {option4}
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        {result}
        <br />
        <table width="50%">
          <tbody>
            <tr>
              <td>{submitButton}</td>
            </tr>
          </tbody>
        </table>
      </form>
      <br />
      <table width="50%">
        <tbody>
          <tr>
            <td>{nextButton}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuestionAndOptions;
