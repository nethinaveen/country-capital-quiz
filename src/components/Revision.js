import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { countryList } from "../components/countries";
import _ from "lodash";
import CountriesByContinent from "./CountriesByContinent";

const Revision = () => {
  const [toggleChevron, setToggleChevron] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  let byContinent = _.groupBy(countryList, function (o) {
    return o.continent;
  });

  const handleChevron = (ind) => {
    setToggleChevron(
      toggleChevron.map((org, index) => (ind === index ? !org : true))
    );
  };

  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className="font-weight-bold text-info"
          style={{ cursor: "pointer" }}
          eventKey="0"
          onClick={() => handleChevron(0)}
        >
          Asia
          <div className="float-right">
            {toggleChevron[0] ? (
              "Down"
            ) : (
              "Up"
            )}
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <CountriesByContinent continentCountryList={byContinent["Asia"]} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className="font-weight-bold text-info"
          style={{ cursor: "pointer" }}
          eventKey="1"
          onClick={() => handleChevron(1)}
        >
          Europe
          <div className="float-right">
            {toggleChevron[1] ? (
              "Down"
            ) : (
              "Up"
            )}
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <CountriesByContinent
              continentCountryList={byContinent["Europe"]}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className="font-weight-bold text-info"
          style={{ cursor: "pointer" }}
          eventKey="2"
          onClick={() => handleChevron(2)}
        >
          Australia
          <div className="float-right">
            {toggleChevron[2] ? (
              "Down"
            ) : (
              "Up"
            )}
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <CountriesByContinent
              continentCountryList={byContinent["Australia"]}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className="font-weight-bold text-info"
          style={{ cursor: "pointer" }}
          eventKey="3"
          onClick={() => handleChevron(3)}
        >
          Africa
          <div className="float-right">
            {toggleChevron[3] ? (
              "Down"
            ) : (
              "Up"
            )}
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <CountriesByContinent
              continentCountryList={byContinent["Africa"]}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className="font-weight-bold text-info"
          style={{ cursor: "pointer" }}
          eventKey="4"
          onClick={() => handleChevron(4)}
        >
          North America
          <div className="float-right">
            {toggleChevron[4] ? (
              "Down"
            ) : (
              "Up"
            )}
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <CountriesByContinent
              continentCountryList={byContinent["North America"]}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className="font-weight-bold text-info"
          style={{ cursor: "pointer" }}
          eventKey="5"
          onClick={() => handleChevron(5)}
        >
          South America
          <div className="float-right">
            {toggleChevron[5] ? (
              "Down"
            ) : (
              "Up"
            )}
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <CountriesByContinent
              continentCountryList={byContinent["South America"]}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Revision;
