import styled from "styled-components";
import SpaceImg from "../../../images/liquidity/space.webp";
import UpGridentImg from "../../../images/liquidity/up.webp";
import DownGridentImg from "../../../images/liquidity/donw.webp";

export const LiqConatiner = styled("div")`
  .space-background {
    background-image: url(${SpaceImg});
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .bg-grident-up {
    background-image: url(${UpGridentImg});
    background-repeat: no-repeat;
    width: 100%;
    height: 211px;
    margin-bottom: 20px;
    background-size: cover;

    .text-img {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding-top: 40px;

      span {
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        letter-spacing: 0.2px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
    .info-item {
      display: flex;
      justify-content: space-around;
      gap: 35%;
      padding-top: 30px;

      span:nth-child(1) {
        font-weight: 500;
        font-size: 14px;
        color: #afafaf;
      }
      span:nth-child(2) {
        font-weight: 500;
        font-size: 14px;
        color: #fff;
      }
    }
    label {
      display: flex;
      padding: 15px 20px;
      background-color: #000;
      align-items: center;
      justify-content: space-between;
      background: #000000;
      box-shadow: 0px 3px 4px #474747;
      border-radius: 12px;
      margin-top: 15px;

      input {
        border: none;
        background-color: transparent;
        text-align: right;
        color: #fff;

        &::placeholder {
          color: #fff;
          font-weight: 500;
          font-size: 17px;
        }
      }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    textarea:focus,
    input:focus {
      outline: none;
    }
  }

  .bg-grident-down {
    background-image: url(${DownGridentImg});
    background-repeat: no-repeat;
    width: 100%;
    height: 211px;
    background-size: cover;

    .text-img {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding-top: 40px;

      span {
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        letter-spacing: 0.2px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
    .info-item {
      display: flex;
      justify-content: space-around;
      gap: 35%;
      padding-top: 30px;

      span:nth-child(1) {
        font-weight: 500;
        font-size: 14px;
        color: #afafaf;
      }
      span:nth-child(2) {
        font-weight: 500;
        font-size: 14px;
        color: #fff;
      }
    }
    label {
      display: flex;
      padding: 15px 20px;
      background-color: #000;
      align-items: center;
      justify-content: space-between;
      background: #000000;
      box-shadow: 0px 3px 4px #474747;
      border-radius: 12px;
      margin-top: 15px;

      input {
        border: none;
        background-color: transparent;
        text-align: right;
        color: #fff;

        &::placeholder {
          color: #fff;
          font-weight: 500;
          font-size: 17px;
        }
      }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    textarea:focus,
    input:focus {
      outline: none;
    }
  }
  button {
    background: linear-gradient(89.85deg, #16a145 3.35%, #20d810 99.87%);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    padding: 15px 70px;
    font-weight: 500;
    font-size: 18px;
    color: #effbf0;
    margin-top: 50px;
  }

  @media screen and (max-width: 420px) {
    .bg-grident-up {
      background-size: contain;
    }
    .bg-grident-down {
      background-size: contain;
    }
  }
`;
