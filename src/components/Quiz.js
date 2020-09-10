import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  africaCapitalsList,
  asiaCapitalsList,
  australiaCapitalsList,
  europeCapitalsList,
  northAmericaCapitalsList,
  southAmericaCapitalsList,
} from "./countries";
import QuestionAndOptions from "./QuestionAndOptions";
import DisplaySummaryContainer from "./DisplaySummaryContainer";

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
    return (
      <DisplaySummaryContainer
        answeredListLength={answeredListLength}
        correctAnswerCounter={correctAnswerCounter}
        answeredList={answeredList}
      />
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
