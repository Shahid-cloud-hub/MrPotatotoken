import React from "react";
import { useState } from "react";
import styled from "styled-components";
import FaqAccordian from "./FaqAccordian";
import Form from "react-bootstrap/Form";
import ArrowDownImg from "../../assets/images/flags/down-arrow.svg";

const FaqButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0px;

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

  .form-select {
    background-image: url(${ArrowDownImg});
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;

    select {
      display: block;
    }
  }
`;

const FaqButton = styled.button`
  background: transparent;
  /* width: 212px;
  height: 77px; */
  padding: 10px 4px;
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  box-shadow: none;
  outline: none;
  font-size: 12px;
  letter-spacing: 0.2px;
  border-bottom: ${(props) => (props.border ? "3px solid #F4CD68;" : "none")};
  color: ${(props) => (props.color ? "#F4CD68;" : "#8F98A8")};

  &:hover {
    box-shadow: none;
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const Faqbtn = ({ data, btnData }) => {
  const [accordianData, setAccordianData] = useState(data[0]);
  const [addStyle, setAddstyle] = useState(1);

  return (
    <>
      <div className="faq-wrapper">
        <FaqButtonContainer>
          {btnData.map((item, index) => {
            return (
              <>
                <FaqButton
                  key={index}
                  border={item.id === addStyle ? true : false}
                  color={item.id === addStyle ? true : false}
                  onClick={() => {
                    setAccordianData(data[item.id - 1]);
                    setAddstyle(item.id);
                  }}
                >
                  {item.newtitle}
                </FaqButton>
              </>
            );
          })}
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
        </FaqButtonContainer>
      </div>
      <div className="faq-accordian-data">
        <FaqAccordian data={accordianData} />
      </div>
    </>
  );
};

export default Faqbtn;
