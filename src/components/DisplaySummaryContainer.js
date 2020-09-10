import React from "react";
import { Alert, Table } from "react-bootstrap";
import DisplaySummary from "./DisplaySummary";

const DisplaySummaryContainer = (props) => {
  const { answeredListLength, correctAnswerCounter, answeredList } = props;
  let expertise = answeredListLength - correctAnswerCounter;
  let suggestion = 0;
  if (expertise > 5) {
    suggestion = (
      <Alert variant="danger">
        <h4>
          You got {expertise} wrongs.., please revise and try again the same
          level
        </h4>
      </Alert>
    );
  } else if (expertise > 0) {
    suggestion = (
      <Alert variant="warning">
        <h4>You are good in this level.., little practise is needed :-)</h4>
      </Alert>
    );
  } else {
    suggestion = (
      <Alert variant="success">
        <h4>You are excelled in this level..</h4>
      </Alert>
    );
  }
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
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {answeredList.map((answeredObj, index) => (
            <DisplaySummary
              key={answeredObj.id}
              answeredObj={answeredObj}
              index={index}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplaySummaryContainer;
