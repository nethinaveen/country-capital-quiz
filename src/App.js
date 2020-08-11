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
        {answeredList.map((answeredObj) => (
          <DisplaySummary key={answeredObj.id} answeredObj={answeredObj} />
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
      <div>
        <h3>
          {correctAnswerCounter}/{answeredListLength}
        </h3>
        <QuestionAndOptions
          options={optionsList}
          countryObj={countryObj}
          answeredListLength={answeredListLength}
        />
      </div>
    );
  }
};

export default App;
