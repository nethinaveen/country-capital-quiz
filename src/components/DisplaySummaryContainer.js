import React from "react";
import { Alert, Table } from "react-bootstrap";
import DisplaySummary from "./DisplaySummary";

const DisplaySummaryContainer = (props) => {
  const { answeredListLength, correctAnswerCounter, answeredList, quizType } = props;
  let expertise = answeredListLength - correctAnswerCounter;
  let suggestion = 0;
  if (expertise > 5) {
    suggestion = (
      <Alert variant="danger">
        <h4>
          You got {expertise} wrong... please revise and try again!
        </h4>
      </Alert>
    );
  } else if (expertise > 0) {
    suggestion = (
      <Alert variant="warning">
        <h4>You are good at this level... a little practice is needed :-)</h4>
      </Alert>
    );
  } else {
    suggestion = (
      <Alert variant="success">
        <h4>You are excellent at this level...</h4>
      </Alert>
    );
  }
  
  const questionColumnHeader = quizType === "flag" ? "Flag" : "Question";
  const answerColumnHeader = quizType === "flag" ? "Selected Country" : "Your Answer";
  const correctColumnHeader = quizType === "flag" ? "Correct Country" : "Correct Answer";

  return (
    <div>
      <h3 className="text-right text-info">
        Total Result - {correctAnswerCounter}/{answeredListLength}
      </h3>
      <br />
      {suggestion}
      <br />
      <Table striped bordered hover variant="light" responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th>{questionColumnHeader}</th>
            <th>{answerColumnHeader}</th>
            <th>{correctColumnHeader}</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {answeredList.map((answeredObj, index) => (
            <DisplaySummary
              key={answeredObj.id}
              answeredObj={answeredObj}
              index={index}
              quizType={quizType}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplaySummaryContainer;
