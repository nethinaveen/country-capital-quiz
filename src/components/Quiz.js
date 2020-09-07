import React from "react";
import { useSelector } from "react-redux";
import QuestionAndOptions from "./QuestionAndOptions";
import DisplaySummary from "./DisplaySummary";
import {
  asiaCapitalsList,
  europeCapitalsList,
  australiaCapitalsList,
  northAmericaCapitalsList,
  southAmericaCapitalsList,
  africaCapitalsList,
} from "./countries";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Table, Alert } from "react-bootstrap";

const getCapitalOptions = (countryObj) => {
  let capitalList = [];
  let optionsList = [];
  switch (countryObj.continent) {
    case "Asia":
      capitalList = [...asiaCapitalsList];
      break;
    case "Europe":
      capitalList = [...europeCapitalsList];
      break;
    case "Australia":
      capitalList = [...australiaCapitalsList];
      break;
    case "North America":
      capitalList = [...northAmericaCapitalsList];
      break;
    case "South America":
      capitalList = [...southAmericaCapitalsList];
      break;
    case "Africa":
      capitalList = [...africaCapitalsList];
      break;
    default:
      return optionsList;
  }
  const filteredCapitalList = capitalList.filter(
    (captl) => captl !== countryObj.capital
  );
  optionsList = filteredCapitalList
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  optionsList.push(countryObj.capital);
  optionsList = optionsList.sort(() => Math.random() - Math.random());
  return optionsList;
};

const Quiz = () => {
  const {
    countryList,
    answeredList,
    correctAnswerCounter,
    testCompleted,
    numberOfQuestions,
  } = useSelector((state) => state);
  const answeredListLength = answeredList.length;

  if (testCompleted) {
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
  } else {
    const countryListLength = countryList.length;
    const randomIndex = Math.floor(Math.random() * countryListLength);
    const countryObj = countryList[randomIndex];

    let optionsList = getCapitalOptions({ ...countryObj });

    return (
      <Container className="p-3">
        <Jumbotron className="pb-1">
          <h3 className="text-right">
            Result - {correctAnswerCounter}/{answeredListLength}
          </h3>
          <br />
          <QuestionAndOptions
            options={optionsList}
            countryObj={countryObj}
            numberOfQuestions={numberOfQuestions}
            answeredListLength={answeredListLength}
          />
        </Jumbotron>
      </Container>
    );
  }
};

export default Quiz;
