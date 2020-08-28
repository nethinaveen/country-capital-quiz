import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { countryList } from "../components/countries";
import _ from "lodash";
import CountriesByContinent from "./CountriesByContinent";

const Revision = () => {
  let byContinent = _.groupBy(countryList, function (o) {
    return o.continent;
  });
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          className="font-weight-bold text-info"
          eventKey="0"
        >
          Asia
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
          eventKey="1"
        >
          Europe
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
          eventKey="2"
        >
          Australia
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
          eventKey="3"
        >
          Africa
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
          eventKey="4"
        >
          North America
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
          eventKey="5"
        >
          South America
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
