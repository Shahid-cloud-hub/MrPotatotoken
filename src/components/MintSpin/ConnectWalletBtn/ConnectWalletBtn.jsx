import React from "react";
import styled from "styled-components";

export const InputBtn = styled.div`
  height: 80px;
  border-radius: 70px;
  background: ${(props) => props.gradient};
  color: #000;
  width: 100%;
  border-radius: 50em;
  border: 10px solid transparent;
  padding: 24px 35px 15px 35px;
  position: relative;

  input {
    height: 100%;
    background-color: transparent;
    border: 0;
    outline: 0;
    box-shadow: none;
    padding: 0;
    min-width: 344px;
    font-size: 16px;
    color: #000;
    font-weight: 700;
    padding: 12px 0;
  }
  label {
    padding: 0;
    left: 35px;
    top: 10px;
    font-size: 14px;
    opacity: 1;
    color: #6a6a6a;
    height: fit-content;
    margin: 0;
  }
  .form-control::placeholder {
    font-size: 22px;
    opacity: 1;
    color: #000;
    font-weight: 500;
    -webkit-text-fill-color: #ececec; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
  }
  .form-control:focus {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
  }
  label {
    position: absolute;
    top: 8px;
  }

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

const CustomBtn = styled.button`
  color: #fff;

  padding: 12px 45px;

  background: linear-gradient(180deg, #6ef96b 0.01%, #14994a 99.99%) padding-box,
    linear-gradient(
        0deg,
        #c6a539 0%,
        #c3a339 3.21%,
        #b99b38 5.73%,
        #a88e38 8.01%,
        #917c37 10.15%,
        #736436 12.2%,
        #4e4834 14.14%,
        #333333 15.36%,
        #5a5135 16.08%,
        #7b6b36 16.85%,
        #968037 17.67%,
        #ac9038 18.55%,
        #bb9c39 19.54%,
        #c3a339 20.7%,
        #c6a539 22.47%,
        #edc211 32.08%,
        #fffab3 32.8%,
        #edc211 54.47%,
        #fffab3 65.64%,
        #db921f 79.05%,
        #f2b816 100%
      )
      border-box;
  border-radius: 50em;
  border: 10px solid transparent;

  span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-shadow: 3px 3px 0 #e3a506, -1px -1px 0 #e3a506, 1px -1px 0 #e3a505,
      -1px 1px 0 #e3a506, 1px 1px 0 #e3a505;
  }

  @media screen and (max-width: 500px) {
    span {
      font-size: 12px;
    }
  }
`;

const ConnectBtn = ({ value }) => {
  return (
    <CustomBtn>
      <span style={{ letterSpacing: "1.4px" }}>{value}</span>
    </CustomBtn>
  );
};

export default ConnectBtn;
