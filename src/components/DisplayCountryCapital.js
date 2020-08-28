import React from "react";

const DisplayCountryCapital = (props) => {
  const { country, index } = props;
  return (
    <tr>
      <td>{index}</td>
      <td>{country.country}</td>
      <td>{country.capital}</td>
    </tr>
  );
};

export default DisplayCountryCapital;
