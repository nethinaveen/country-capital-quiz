import React from "react";

const DisplaySummary = (props) => {
  const { country, capital, correct } = props.answeredObj;
  console.log(`DisplaySummary ${country} ${capital} ${correct}`);
  let result;
  if ("Yes" === correct) {
    result = (
      <h4 style={{ color: "#0e5848" }}>
        Correct answer was selected for this question
      </h4>
    );
  } else if ("No" === correct) {
    result = (
      <h4 style={{ color: "#9a092c" }}>
        Wrong answer was selected for this question
      </h4>
    );
  }
  return (
    <div>
      <h3>Question: What is the capital city of "{country}" ?</h3>
      {result}
      <h5>Correct Answer: "{capital}"</h5>
    </div>
  );
};

export default DisplaySummary;
