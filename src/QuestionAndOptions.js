import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nextAction, displaySummaryAction } from "./redux";

function QuestionAndOptions(props) {
  const { countryObj, answeredListLength } = props;
  const { id, country, capital } = countryObj;
  const [option1, option2, option3, option4] = props.options;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correct, setCorrect] = useState(null);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`handle submit ${e}, ${selectedAnswer}`);
    if (capital === selectedAnswer) {
      setCorrect("Yes");
    } else {
      setCorrect("No");
    }
  }

  function handleNext(e) {
    e.preventDefault();
    setSelectedAnswer(null);
    dispatch(nextAction({ id, correct }));
    setCorrect(null);
    if (answeredListLength === 1) {
      dispatch(displaySummaryAction());
    }
  }

  let result = "";
  if (correct && correct !== "" && correct === "Yes") {
    result = <h4 style={{ color: "#0e5848" }}>Correct answer</h4>;
  } else if (correct && correct !== "" && correct === "No") {
    result = <h4 style={{ color: "#9a092c" }}>Wrong answer</h4>;
  }

  let submitButton,
    nextButton = "";
  if (correct && correct !== "") {
    submitButton = <button onClick={handleNext}>Next Question</button>;
  } else {
    nextButton = <button onClick={handleSubmit}>Submit your answer</button>;
  }

  return (
    <div>
      <h3>Question: What is the capital city of {country} ?</h3>
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
            <td>{nextButton}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default QuestionAndOptions;
