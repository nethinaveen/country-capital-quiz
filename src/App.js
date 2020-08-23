import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
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
import 'bootstrap/dist/css/bootstrap.min.css';

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
  console.log(`Options list ${optionsList}`);
  return optionsList;
};

const App = () => {
  const {
    countryList,
    answeredList,
    correctAnswerCounter,
    testCompleted,
  } = useSelector((state) => state);

  console.log(`test completed flag ${testCompleted}`);
  if (testCompleted) {
    return (
      <div>
        {answeredList.map((answeredObj, index) => (
          <DisplaySummary
            key={answeredObj.id}
            answeredObj={answeredObj}
            index={index}
          />
        ))}
      </div>
    );
  } else {
    const countryListLength = countryList.length;
    const randomIndex = Math.floor(Math.random() * countryListLength);
    console.log(`country randomIndex ${randomIndex}`);
    const countryObj = countryList[randomIndex];

    let optionsList = getCapitalOptions({ ...countryObj });
    const answeredListLength = answeredList.length;

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
            answeredListLength={answeredListLength}
          />
        </Jumbotron>
      </Container>
    );
  }
};

export default App;
