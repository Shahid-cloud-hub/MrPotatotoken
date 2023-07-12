import React from "react";
import styled from "styled-components";
import LayoutImg from "../../../assets/images/button/path.webp";
import MintPlay from "../../../assets/images/WinSpin/mr-potato-king-logo.png";
import CloseIcon from "../../../assets/images/NewHomePage/close.png";
import { useState } from "react";
const MyContainer = styled("div")`
  display: flex;

  /* @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:600&display=swap");
  @-webkit-keyframes active {
    from {
      box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
        0 -6px 4px #fefefe, inset 0 0 10px 0px rgba(0, 0, 250, 0.6);
    }
    to {
      box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
        0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
    }
  }
  @keyframes active {
    from {
      box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
        0 -6px 4px #fefefe, inset 0 0 10px 0px rgba(0, 0, 250, 0.6);
    }
    to {
      box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
        0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
    }
  } */

  .grid {
    max-width: 400px;
    /* min-height: 400px; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 40px 25px;
    /* background-color: #d8d9db; */
    position: relative;
  }

  .buy-spins-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    padding-top: 12px;

    input {
      text-align: center;
      max-width: 91px;
      min-height: 45px;
      border-radius: 9px;
      padding: 1px;
      font-size: 14px;
      background: #0c0e11;
      border: 1px solid #282c34;
      box-shadow: 0px 2px 6px #1f1600;
      border-radius: 8px;

      &::placeholder {
        color: #727272;
        font-weight: 700;
      }
    }

    .buy-btn {
      max-width: 59px;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      box-shadow: 0px 2px 6px #1f1600;
      border-radius: 8px;
      padding: 7px;
      width: 100%;
      max-width: 91px;
      min-height: 39px;
      text-align: center;
      background: #1c1f25;
      border-radius: 4px;
    }

    .close-buy-spin-menu {
      cursor: pointer;
      img {
        width: initial;
        height: inherit;
        transform: none;
        cursor: pointer;
      }
    }
  }

  button,
  [role="button"] {
    -webkit-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    outline: none;
    cursor: pointer;
    width: 150px;
    height: 140px;
    /* background-image: linear-gradient(
      to top,
      #e529ff 0%,
      #ae22ff 80%,
      #6616fe 100%
    ); */
    background-image: linear-gradient(
      95deg,
      #fffb3d,
      #a96f05 -11%,
      #fffb3d,
      #a96f05,
      #fffb3d
    );
    border-radius: 90%;
    border: 1px solid #fffb3d;
    box-shadow: 0 4px 3px 1px #fffb3d, 0 6px 8px #fffb3d, 0 -4px 4px #fffb3d,
      0 -6px 4px #fffb3d, inset 0 0 3px 0 #fffb3e;
    transition: all 0.2s ease;
    /* font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #606060; */
    /* text-shadow: 0 1px #fff; */
    /* margin: 30px; */
    position: relative;
  }
  button::-moz-focus-inner,
  [role="button"]::-moz-focus-inner {
    border: 0;
  }
  button > *,
  [role="button"] > * {
    transition: transform 0.2s ease;
  }
  /* button:hover:not([disabled]),
  [role="button"]:hover:not([disabled]) {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
  } */
  /* button:hover:not([disabled]) > *,
  [role="button"]:hover:not([disabled]) > * {
    transform: scale(0.975);
    img {
      display: flex;
    }
  } */
  button:focus:not(:active),
  [role="button"]:focus:not(:active) {
    -webkit-animation: active 0.9s alternate infinite;
    animation: active 0.9s alternate infinite;
    outline: none;
  }
  button:active:not([disabled]),
  [role="button"]:active:not([disabled]) {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }
  /* button:active:not([disabled]) > *,
  [role="button"]:active:not([disabled]) > * {
    transform: scale(0.95);
  } */
  button:disabled,
  [role="button"]:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  /* button.icon,
  [role="button"].icon {
    width: 50px;
  } */
  /* button.icon svg,
  [role="button"].icon svg {
    margin-top: 3px;
    width: 30px;
    height: 30px;
  } */

  /* button::after {
    content: "";
    position: absolute;
    width: 128px;
    min-height: 132.6px;
    background-image: url(${LayoutImg});
    background-repeat: no-repeat;
    background-size: 125px 59px;
    transform: translate(3px, 5px);
  } */

  button {
    span {
      color: #effbf0;
      font-size: 20px;
      /* font-family: "Rammetto One", cursive; */
      -webkit-text-stroke: none;
      /* position: absolute; */
      /* transform: translate(0px, 22px); */
    }

    /* img {
      width: 70px;
      height: 57px;
      transform: rotate(5deg) translate(0px, -20px);
      position: absolute;
    }

    &:hover {
      img {
        display: none;
      }
    } */
  }
  /* @media screen and (max-width: 820px) {
    button {
      width: 106px;
      height: 100px;
    }
    button::after {
      content: "";
      position: absolute;
      width: 128px;
      min-height: 132.6px;
      background-size: 100px 51px;
      transform: translate(15px, 18px);
    }
  }
  @media screen and (max-width: 375px) {
    button {
      width: 75px;
      height: 71px;
    }
    button::after {
      content: "";
      position: absolute;
      width: 128px;
      min-height: 132.6px;
      background-size: 67px 33px;
      transform: translate(31px, 30px);
    }
  } */
`;

const Button = ({ show, setShow }) => {
  return (
    <MyContainer>
      <div className="grid">
        <button>
          {/* <img src={MintPlay} alt="Mintplay" /> */}
          {!show && <span className="spinner-text">SPIN</span>}
          {show && (
            <div className="buy-spins-wrapper">
              <input type="number" placeholder="0" />
              <span className="buy-btn">BUY</span>
              <div
                className="close-buy-spin-menu"
                onClick={() => setShow(false)}
              >
                <img src={CloseIcon} alt="" />
              </div>
            </div>
          )}
        </button>
      </div>
    </MyContainer>
  );
};

export default Button;
