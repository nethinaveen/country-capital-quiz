import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const DisplaySummary = (props) => {
  const index = props.index;
  const { country, capital, correct, selectedAnswer } = props.answeredObj;
  let result;
  let styleClass = "";
  if ("Yes" === correct) {
    result = <FontAwesomeIcon icon={faCheckCircle} className="text-success" />;
  } else if ("No" === correct) {
    result = <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />;
    styleClass = "table-danger";
  }
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
