import React, { useState } from "react";
import { getFlagByCountryName } from "../asset/flagsLoader";
import Modal from "react-bootstrap/Modal";

const DisplayCountryCapital = (props) => {
  const { country, index } = props;
  const flagSrc = getFlagByCountryName(country.country);
  const [show, setShow] = useState(false);

  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{country.country}</td>
        <td>{country.capital}</td>
        <td style={{ width: 160, textAlign: "center" }}>
          {flagSrc ? (
            <img
              src={flagSrc}
              alt={`${country.country} flag`}
              style={{ width: 64, height: 40, objectFit: "cover", borderRadius: 4, cursor: "pointer" }}
              onClick={() => setShow(true)}
            />
          ) : (
            <span style={{ color: "#ccc" }}>—</span>
          )}
        </td>
      </tr>

      {/* Modal preview for larger flag */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{country.country} Flag</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          {flagSrc ? (
            // Constrain to 256px wide but keep responsive
            <img
              src={flagSrc}
              alt={`${country.country} flag large`}
              style={{ width: 256, maxWidth: "100%", height: "auto", objectFit: "contain" }}
            />
          ) : (
            <span style={{ color: "#ccc" }}>No flag available</span>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplayCountryCapital;
