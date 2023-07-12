import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import PotatoTokenDisplay from "./PotatoTokenDisplay";

const PotatoTokenButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;

  select {
    background-color: transparent;
    padding: 8px 20px;
    border-radius: 8px;
    color: #f4cd68;
    display: none;
    border: 1px solid;
  }

  option {
    background: #0d0e12;
    border: 1px solid #282c34;
    border-radius: 8px;
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;

    select {
      display: block;
    }
  }
`;

const PotatoTokenBtn = ({ data, btnData }) => {
  const [accordianData, setAccordianData] = useState(data[0]);
  return (
    <>
      <div className="p-token-wrapper">
        <PotatoTokenButtonContainer>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              const selectItemVal = e.target.value;
              setAccordianData(data[selectItemVal - 1]);
            }}
          >
            {btnData.map((item, index) => {
              return (
                <>
                  <option value={item.id} key={index}>
                    {item.newtitle}
                  </option>
                </>
              );
            })}
          </Form.Select>
        </PotatoTokenButtonContainer>
      </div>
      <hr />
      <PotatoTokenDisplay data={accordianData} />
    </>
  );
};

export default PotatoTokenBtn;
