import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { getFlagByCountryName, hasFlagForCountry } from "../asset/flagsLoader";

const DisplaySummary = (props) => {
  const index = props.index;
  const { country, capital, correct, selectedAnswer } = props.answeredObj;
  const isQuizType = props.quizType || "capital"; // "capital" or "flag"
  
  let result;
  let styleClass = "";
  if ("Yes" === correct) {
    result = <FontAwesomeIcon icon={faCheckCircle} className="text-success" />;
  } else if ("No" === correct) {
    result = <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />;
    styleClass = "table-danger";
  }

  // For flag quiz
  if (isQuizType === "flag" && hasFlagForCountry(country)) {
    const flagSrc = getFlagByCountryName(country);
    return (
      <tr className={styleClass}>
        <td>{index + 1}</td>
        <td>
          {flagSrc && (
            <img
              src={flagSrc}
              alt={country}
              style={{ width: "64px", height: "auto", borderRadius: "4px" }}
            />
          )}
        </td>
        <td>{selectedAnswer}</td>
        <td>{country}</td>
        <td>{result}</td>
      </tr>
    );
  }

  // For capital quiz
  return (
    <tr className={styleClass}>
      <td>{index + 1}</td>
      <td>What is the capital city of "{country}" ?</td>
      <td>{selectedAnswer}</td>
      <td>{capital}</td>
      <td>{result}</td>
    </tr>
  );
};

export default DisplaySummary;
