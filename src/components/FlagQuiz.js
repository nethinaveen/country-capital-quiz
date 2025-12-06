import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import { countryList } from "./countries";
import { hasFlagForCountry } from "../asset/flagsLoader";
import FlagQuestionAndOptions from "./FlagQuestionAndOptions";
import DisplaySummaryContainer from "./DisplaySummaryContainer";

const getFlagOptions = (countryObj) => {
  let countryNames = [];
  let optionsList = [];
  
  // Get all country names from the same continent that have flag images
  countryNames = countryList
    .filter(c => c.continent === countryObj.continent && hasFlagForCountry(c.country))
    .map(c => c.country);
  
  // Filter out the correct country
  const filteredCountryList = countryNames.filter(
    (name) => name !== countryObj.country
  );
  
  // Get 3 random countries as wrong options
  optionsList = filteredCountryList
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  
  // Add the correct country
  optionsList.push(countryObj.country);
  
  // Shuffle all options
  optionsList = optionsList.sort(() => Math.random() - Math.random());
  return optionsList;
};

const FlagQuiz = () => {
  const {
    countryList: countries,
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
        quizType="flag"
      />
    );
  } else {
    // Get only countries with flag images
    const countriesWithFlags = countries.filter(c => hasFlagForCountry(c.country));
    const countryListLength = countriesWithFlags.length;
    
    if (countryListLength === 0) {
      return (
        <Container className="p-3">
          <Jumbotron className="pb-1">
            <h3>No countries with flag images available</h3>
          </Jumbotron>
        </Container>
      );
    }
    
    const randomIndex = Math.floor(Math.random() * countryListLength);
    const countryObj = countriesWithFlags[randomIndex];

    let optionsList = getFlagOptions({ ...countryObj });

    return (
      <Container className="p-3">
        <Jumbotron className="pb-1">
          <h3 className="text-right">
            Result - {correctAnswerCounter}/{numberOfQuestions}
          </h3>
          <br />
          <FlagQuestionAndOptions
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

export default FlagQuiz;
