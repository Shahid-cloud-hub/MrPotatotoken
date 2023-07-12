import styled from "styled-components";
import downArrow from "../../assets/images/down.png";
import upArrow from "../../assets/images/up.png";

export const MarketFilter = styled("div")`
  .market-flter-wrapper {
    display: flex;
    align-items: baseline;
    gap: 25px;

    button {
      display: flex;
      gap: 5px;
      border-radius: 8px;
      border: 1px solid rgb(189, 158, 76);
      background: var(--grad, linear-gradient(0deg, #000 0%, #594207 100%));
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 7px;
      max-width: 115px;
      color: #fada87;
      font-size: 14px;
      font-family: "mostra-nuova", sans-serif;

      .active-button {
        border: 1px solid #fff;
        color: #fff;
      }

      .de-active-botton {
        border: 1px solid #f4cd68;
        color: #f4cd68;
      }
    }
  }

  .parent-wrapper {
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-end; */
    width: 100%;
    max-width: 115px;

    /* gap: 20px; */
    /* padding-top: 10px; */

    /* padding: 10px 20px; */

    .react-dropdown {
      position: relative;
      display: inline-block;
      padding: 3px 22px;
      width: 100%;
      /* max-width: 115px;s */
      cursor: pointer;
      user-select: none;
      border-radius: 8px;
      outline: none;
      box-sizing: border-box;
      background: var(--grad, linear-gradient(0deg, #000 0%, #594207 100%));
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border: 1px solid rgb(189, 158, 76);
      color: #fff;

      #title {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px #ed6f1e;
      }
      &::before {
        content: "";
        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;
        box-sizing: border-box;
        height: 100%;
        /* width: 3em; */
        padding-top: 0.6em;
        /* border-left: 0.2em solid #1c1c1c; */
        border-radius: 0 0.4em 0.4em 0;
        /* background-color: #5f9ea0; */
        background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
      }
      &::after {
        content: ""; /* If not empty make sure to set a charset meta tag */
        position: absolute;
        z-index: 10;
        width: 17px;
        height: 17px;
        background-size: 14px;
        background-repeat: no-repeat;
        /* background: #fada87; */
        top: 50%;
        right: 0;
        transform: translate(-35%, -50%);
        transition: background-image 330ms ease;
        background-image: url(${downArrow});
        /* clip-path: polygon(0 0, 100% 0, 50% 100%, 50% 100%); */
      }
      .optList {
        position: absolute;
        top: 100%;
        left: 0;
        list-style: none;
        /* !important will affect the rest of your CSS despite being in a layer */
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box;
        min-width: 100%;
        max-height: 20em;
        overflow-y: auto;
        overflow-x: hidden;
        border: 0.2em solid rgb(189, 158, 76);
        border-top-width: 0.1em;
        border-radius: 0 0 0.4em 0.4em;
        box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);
        /* background: #5f9ea0; */
        background: linear-gradient(
          1.09deg,
          rgb(0, 0, 0) 1%,
          rgb(89, 66, 7) 219.03%
        );
        transition: transform 330ms ease, opacity 330ms ease;
        transform: translateY(1px);
        z-index: 5;
        text-align: center;

        &.hidden {
          max-height: 0;
          visibility: hidden;
        }
      }
      .value {
        display: inline-block;
        font-size: 14px;
        /* width: 100%; */
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        vertical-align: top;
        text-align: center;
        font-family: "mostra-nuova", sans-serif;
        padding-top: 2px;
        color: #fada87;
      }
      .option {
        padding: 10px;
        font-size: 14px;
        opacity: 0;
        animation-delay: calc(40ms * var(--index)) !important;
        font-family: "mostra-nuova", sans-serif;

        hr {
          border-top: 1px solid #fff;
          max-width: 100px;
          margin: 0 auto;
        }
      }
      &.active {
        &::after {
          /* clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%); */
          background-image: url(${upArrow});
        }
        .option {
          animation: drop 220ms ease forwards;
        }
      }
      .highlight {
        background-color: rgb(189, 158, 76);
        color: white;
        font-weight: bold;
      }
      select {
        visibility: hidden;
        max-height: 0;
        position: absolute;
        padding: 0;
        margin: 0;
      }
    }

    @keyframes drop {
      from {
        transform: translateY(-5px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    button {
      width: 108px;
      background: #5f9ea0;
      border-radius: 8px;
      border: none;
      color: #ffffff;
      font-size: 14px;
      font-family: "mostra-nuova", sans-serif;
      padding: 10px 0px;
      cursor: pointer;
      margin-right: 4%;
    }
  }

  @media screen and (max-width: 1024px) {
    .market-flter-wrapper {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 820px) {
    .market-flter-wrapper {
      justify-content: center;
    }
  }

  @media screen and (max-width: 540px) {
    .market-flter-wrapper {
      justify-content: center;
      gap: 15px;

      button {
        max-width: 95px;
      }
    }

    .parent-wrapper {
      max-width: 95px;
      .react-dropdown {
        padding: 3px 10px;
      }
    }
  }
`;
