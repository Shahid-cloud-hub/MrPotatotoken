import styled from "styled-components";
import SpaceImg from "../../../images/liquidity/space.webp";

export const RarityContainer = styled("div")`
  .space-background {
    background-image: url(${SpaceImg});
    width: 100%;
    height: 100%;
    min-height: 1300px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-input-field {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
    z-index: 99;

    span {
      font-weight: 700;
      font-size: 14px;
    }

    input {
      background: #000000;
      box-shadow: 0px 3px 4px #474747;
      border-radius: 12px;
      border: none;
      padding: 12px 15px;
      width: 100%;
      color: #fff;

      &::placeholder {
        color: #fff;
        font-weight: 500;
        font-size: 17px;
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

  .rarity_scroll {
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-gap: 15px;
    padding: 26px;
    max-width: 516px;
    overflow: hidden;
    margin: 0px auto;
  }

  .rarity-slider {
    display: flex;
    flex-direction: column;
    align-items: center;

    .font-size {
      font-weight: 700;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 414px) {
    .text-input-field span {
      font-weight: 700;
      font-size: 13px;
    }

    .space-background {
      min-height: 800px;
    }
  }
`;
