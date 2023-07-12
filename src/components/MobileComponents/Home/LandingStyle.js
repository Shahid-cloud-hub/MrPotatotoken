import styled from "styled-components";
import DownArrow from "../../../assets/images/background-Banner/Vector.png";

export const MobileContainer = styled("div")`
  z-index: 9;

  @media screen and (max-width: 860px) {
    z-index: 999;
    .m-buy-btn {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  /* @media screen and (max-width: 365px) {
    z-index: 99;
  } */

  .backgroundImg {
    width: 100%;
    height: 100%;

    @media screen and (min-width: 860px) {
      display: none;
    }

    @media screen and (min-width: 825px) {
      display: none;
    }
  }

  .background-win-spin {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;
    max-width: 350px;
  }

  .buy_credits {
    display: flex;
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    padding: 18px;
    gap: 35px;
    min-width: 187px;
    position: relative;
    justify-content: center;

    span {
      font-weight: 700;
      font-size: 12px;
      color: #ffffff;
    }

    .credit_title,
    .credit_score {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    button {
      border-radius: 8px;
      background: #f4cd68;
      box-shadow: 0px 4px 6px #5a4100;
      border: none;
      color: #000;
      padding: 8px;
      font-weight: 700;
      font-size: 13px;
    }

    .credit_score span {
      color: #f4cd68;
    }

    button {
      border-radius: 8px;
    }
    .Buy-btn {
      position: absolute;
      z-index: 99;
      transform: translate(55px, 198px);
    }
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
  }

  .mint-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 40px;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    background: #000000;
    box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.25);
  }

  .navbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leftSidebar {
    z-index: 9999999;
  }

  .mr {
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 999;
    align-items: center;
    gap: 15px;
    transform: translate(-11px, 0px);
  }

  @media screen and (max-width: 375px) {
    .mr {
      z-index: 1;
    }
  }

  .slider-wrapper {
    z-index: 999999;
    margin: 50px 0px 0px;
  }

  .btn-success {
    background-color: #000;
  }

  .btn-success:not(:disabled):not(.disabled):active,
  .btn-success:not(:disabled):not(.disabled).active,
  .show > .btn-success.dropdown-toggle {
    background-color: #000;
    border-color: #000;
    color: #f4cd68;
  }

  .dropdown-menu {
    /* transform: translate(-11px, 41px) !important; */
    background-color: #000;
    box-shadow: 0px 1px 6px 0px #2a2a2a;
    border-radius: 10px;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    transform: translate(-32px, 34px) !important;

    a {
      color: #f4cd68;
      text-align: center;
      font-weight: 700;
      font-size: 18px;

      &:hover {
        background-color: #444;
      }
    }
  }

  .dropdown-toggle {
    padding: 5px 50px;
    color: #f4cd68;
    font-weight: 700;
    font-size: 18px;
    border: 1px solid;
    position: relative;
    margin: 0 auto;

    &:hover {
      background-color: transparent;
    }
  }

  .dropdown-toggle::after {
    content: "";
    position: absolute;
    background-image: url(${DownArrow});
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    border: none;
    right: 0;
    transform: translate(-50%, -50%);
    bottom: 0px;
  }

  .btn-success.dropdown-toggle:focus {
    /* box-shadow: 0 0 0 0.2rem rgb(213 213 213 / 50%); */
  }

  .carousel-holder {
    display: grid;
    max-width: 585px;
    z-index: 999999;
    transform: scale(0.9) translate(0px, 31px);
    width: 100%;
    margin: 0 auto;
  }

  .MintAmountBtn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    .inputAmount {
      position: relative;

      &::before {
        content: "Amount :";
        position: absolute;
        width: 70px;
        height: 40px;
        color: #707070;
        font-weight: 700;
        font-size: 16px;
        z-index: 99;
        top: 10px;
        left: 12px;
      }
      input {
        background: #000000;
        box-shadow: 0px 3px 4px #474747;
        border-radius: 12px;
        border: none;
        padding: 12px 13px 10px 0px;
        color: #fff;
        text-align: right;
        width: 170px;
        position: relative;

        &::placeholder {
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          position: absolute;
          right: 0;
          transform: translate(-13px, 1px);
        }
      }
    }
  }

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;

    button {
      font-family: "mostra-nuova";
      font-weight: 500;
      font-size: 14px;
      color: #f4cd68;
      width: 100%;
      padding: 5px 0px;
      max-width: 115px;
      background: #1c1f25;
      border-radius: 4px;
      border: none;
    }
    .activated-btn {
      border: 1px solid #f4cd68;
    }
  }

  @media screen and (max-width: 768px) {
    .background-win-spin {
      max-width: 610px;
    }

    .buy_credits {
      max-width: 400px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 620px) {
    .background-win-spin {
      max-width: 510px;
    }

    .buy_credits {
      max-width: 400px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 510px) {
    .buy_credits {
      max-width: 350px;
      margin: 0 auto;
    }

    .m-buy-btn {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .slider-wrapper {
      transform: scale(0.8);
      z-index: 999;
      margin: 0;
    }
    .MintAmountBtn .inputAmount {
      padding: 0;
    }

    .carousel-holder {
      height: 330px;
    }
    .dropdown-toggle {
      font-size: 12px;
      padding: 5px 29px;
    }
    .dropdown-toggle::after {
      content: "";
      transform: translate(-50%, -40%);
      width: 12px;
      height: 12px;
      background-size: contain;
    }
    .nav-center {
      button {
        font-size: 12px;
        max-width: 90px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .buy_credits {
      max-width: 350px;
      margin: 0 auto;
    }

    .m-buy-btn {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .slider-wrapper {
      transform: scale(0.8);
      z-index: 999;
      margin: 0;
    }
    .MintAmountBtn .inputAmount {
      padding: 0;
    }

    .carousel-holder {
      height: 330px;
    }
    .dropdown-toggle {
      font-size: 12px;
      padding: 5px 29px;
    }
    .dropdown-toggle::after {
      content: "";
      transform: translate(-50%, -40%);
      width: 12px;
      height: 12px;
      background-size: contain;
    }
    .nav-center {
      button {
        font-size: 12px;
        max-width: 90px;
      }
    }

    .dropdown-menu {
      a {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .buy_credits {
      max-width: 346px;
      margin: 0 auto;
    }

    .dropdown-toggle {
      font-size: 12px;
      padding: 5px 29px;
    }

    .nav-center {
      button {
        font-size: 12px;
        max-width: 90px;
      }
    }
  }

  @media screen and (max-width: 365px) {
    .buy_credits {
      max-width: 316px;
      margin: 0 auto;

      span,
      button {
        font-size: 10px;
      }
    }
  }

  svg {
    display: block;
    width: 1em;
    height: 1em;
    fill: currentColor;
  }

  .select {
    position: relative;
    display: inline-block;
    width: 320px;

    &:focus {
      outline: 0;

      & .selection {
        box-shadow: 0 0 1px 1px #777;
      }
    }
  }

  .label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
  }

  .selection {
    position: relative;
    padding: 5px;
    border: 1px solid #555;
    background: #fff;
  }

  .value {
    position: relative;
    display: inline-block;
    padding: 5px 10px;
  }

  .multiple {
    padding-right: 30px;
    margin-right: 5px;
    background: #777;
    color: #777;
  }

  .delete {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    padding: 10px;
    font-size: 10px;
    cursor: pointer;
  }

  .placeholder {
    padding: 5px 10px;
    color: #777;
  }

  .arrow {
    position: absolute;
    top: 5px;
    right: 5px;
    display: block;
    padding: 10px;
    font-size: 10px;
    color: #777;
  }

  .options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: solid #555;
    border-width: 0 1px;
    background: #fff;
  }

  .option {
    padding: 10px 15px;
    border-bottom: 1px solid #555;
    cursor: pointer;

    &.selected {
      border: 1px solid #777;
      margin: -1px -1px 0;
      background: #777;
    }

    &.focused {
      background: #777;
    }
  }

  .checkbox {
    content: "";
    vertical-align: top;
    display: inline-block;
    width: 16px;
    height: 16px;
    padding: 2px;
    border: 1px solid #555;
    border-radius: 2px;
    margin: 2px 12px 0 0;
    color: #fff;
    font-size: 10px;

    .selected & {
      border-color: red;
      background: white;
    }
  }
`;
