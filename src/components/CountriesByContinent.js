import React from "react";
import DisplayCountryCapital from "./DisplayCountryCapital";
import { Table } from "react-bootstrap";

const CountriesByContinent = (props) => {
  const continentCountryList = props.continentCountryList;
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Country</th>
          <th>Capital City</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        {continentCountryList.map((country, index) => (
          <DisplayCountryCapital key={country.id} index={index + 1} country={country} />
        ))}
      </tbody>
    </Table>
  );
};

export default CountriesByContinent;
