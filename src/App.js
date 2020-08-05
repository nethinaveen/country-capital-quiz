import React from "react";
import { useSelector } from "react-redux";
import QuestionAndOptions from "./QuestionAndOptions";
import DisplaySummary from "./DisplaySummary";

function App() {
  const state = useSelector((state) => state);
  const {
    countryList,
    asiaCapitalsList,
    answeredList,
    correctAnswerCounter,
    testCompleted,
  } = state;
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
    console.log(`country List ${countryList}`);
    const countryListLength = countryList.length;
    const randomIndex = Math.floor(Math.random() * countryListLength);
    console.log(`country randomIndex ${randomIndex}`);
    const countryObj = countryList[randomIndex];
    console.log(`country object ${countryObj}`);
    console.log(`Asia Capitals list ${asiaCapitalsList}`);
    const capitalCity = countryObj.capital;
    const filteredAsiaCapitalsList = asiaCapitalsList.filter(
      (captl) => captl !== capitalCity
    );
    let optionsList = filteredAsiaCapitalsList
      .sort(() => Math.random() - Math.random())
      .slice(0, 3);
    optionsList.push(capitalCity);
    optionsList = optionsList.sort(() => Math.random() - Math.random());
    console.log(`Options list ${optionsList}`);
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
}

export default App;
