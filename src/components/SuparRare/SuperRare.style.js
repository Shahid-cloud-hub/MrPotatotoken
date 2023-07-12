import styled from "styled-components";
import downArrow from "../../assets/images/down.png";
import upArrow from "../../assets/images/up.png";

export const SuperRareContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0px 20px 0px 0px;

  .scroll-bar {
    display: flex;
    width: 100%;
    max-width: 240px;
    height: 41px;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    border: 1px solid #4b4b4b;
    background: #1f1f1f;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    span {
      color: #a8a8a8;
      font-family: "mostra-nuova";
      font-size: 16px;
      font-weight: 300;
    }
  }

  @media screen and (max-width: 820px) {
    align-items: center;
  }

  .ai-logo {
    display: flex;
    align-items: center;
    gap: 20px;

    span {
      font-family: "mostra-nuova", sans-serif;
      font-weight: 700;
      font-size: 40px;
      color: #f4cd68;
    }
  }

  .ai-filter-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    button {
      display: flex !important;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      padding: 12px 0px;
      max-width: 160px;
      width: 100%;
      background-color: #1c1f25;
      border: 1px solid #bd9e4c;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      gap: 4px;
      color: #ffffff;
      margin: 4px;
      cursor: pointer;

      span {
        color: #ffffff;
      }
    }
    .betactive {
      border: 1px solid;
      /* border-image: linear-gradient(45deg, #997860, #ffa133) 1; */
      /* position: relative; */
      /* border-image: linear-gradient(90deg, #997860 -8.82%, #ffa133 111.76%); */
    }
    .betactive-pseudo {
      position: relative;
      /* padding: 10px 20px; */
      /* background: #fff; */
      margin: 4px;
      border-radius: 12px;
    }
    .betactive-pseudo::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -4px;
      border-radius: inherit;
      /* background-image: linear-gradient(45deg, #997860, #ffa133); */
      background: linear-gradient(
        118.51deg,
        #e1f5fe -4.48%,
        #ff67f9 56.27%,
        #e1f5fe 107.68%
      );

      /* border: 1px solid transparent; */
      /* background: linear-gradient(45deg, #997860, #ffa133) 1;
      -webkit-mask:
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude; */
    }
    .betactive-pseudo-mask {
      position: relative;
      /* padding: 15px 20px; */
    }

    .slick-prev {
      transform: translate(46px, 10.6rem);
      display: none !important;
    }

    .slick-next {
      transform: translate(-46px, 10.6rem);
      display: none !important;
    }
    .slick-slider {
      width: 100%;
      max-width: 900px;
      margin: -4px auto;
    }

    .betactive-pseudo-mask::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 12px;
      border: 1px solid transparent;
      /* background: linear-gradient(45deg, #997860, #ffa133) border-box; */
      /* -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0); */
      /* -webkit-mask-composite: destination-out; */
      /* mask-composite: exclude; */
    }
    .gradient-text {
      /* background: linear-gradient(to right, #997860, #ffa133); */
      background: linear-gradient(
        118.51deg,
        #e1f5fe -4.48%,
        #ff67f9 56.27%,
        #e1f5fe 107.68%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* text-fill-color: transparent; */
    }
    .slick-track {
      display: flex;
      gap: 10px;
    }

    .slick-arrow {
      button {
        display: none;
      }
    }
    .active {
      color: #ffffff;
    }
  }

  .market-place-btn {
    display: flex;
    width: 100%;

    .active {
      border: 1px solid #f4cd68;
      color: #f4cd68;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      padding: 10px 0px;
      max-width: 100px;
      width: 100%;
      border-radius: 8px;
      background-color: #1c1f25;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      gap: 4px;
      color: #fada87;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      font-family: "mostra-nuova", sans-serif;
      font-weight: 700;

      .active {
        border: 1px solid #f4cd68;
        color: #f4cd68;
      }
    }
    .hide-styles {
      background: none;
      box-shadow: none;
      padding: 0px;
      border: none;
    }
  }

  #title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .market-place-filter-btn {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    .my-nft-tabs-btns {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 20px;
      width: 100%;

      .my-nft-claim-btn {
        /* width: 100%; */

        button {
          display: flex;
          width: 100%;
          max-width: 230px;
          gap: 20px;
          justify-content: space-between;
          background: linear-gradient(
            173.49deg,
            #0f120f -58.84%,
            #31802f 103.9%
          );
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #50ff6c;
          border-radius: 12px;
          color: #89ffa3;
          font-weight: 700;
          font-size: 14px;

          span {
            color: #fff;
          }
        }
      }

      button {
        background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
        border: 1px solid #4682b4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        color: #fff;
        padding: 17px 39px;
        cursor: pointer;
      }
    }

    .parent-wrapper {
      /* display: flex; */
      /* flex-direction: column; */
      /* justify-content: flex-end; */
      /* width: 100%; */
      /* gap: 20px; */
      padding-top: 10px;

      /* padding: 10px 20px; */

      .react-dropdown {
        position: relative;
        display: inline-block;
        padding: 8px 22px;
        min-width: 140px;
        cursor: pointer;
        user-select: none;
        border-radius: 0.4em;
        box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);
        outline: none;
        box-sizing: border-box;
        background: linear-gradient(
          1.09deg,
          rgb(0, 0, 0) 1%,
          rgb(89, 66, 7) 219.03%
        );
        border: 1px solid rgb(189, 158, 76);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
        border-radius: 12px;
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
  }
  .parent-wrapper-filter {
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-end; */
    /* width: 100%; */
    /* gap: 20px; */
    padding-top: 10px;

    /* padding: 10px 20px; */

    .react-dropdown {
      position: relative;
      display: inline-block;
      padding: 15px 10px;
      min-width: 10em;
      cursor: pointer;
      user-select: none;
      border-radius: 0.4em;
      box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);
      outline: none;
      box-sizing: border-box;
      background: linear-gradient(180deg, #331f3d 0%, #1c1c1c 112.83%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border: 1px solid #a533ff;
      border-radius: 12px;
      color: #fff;

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
        box-sizing: border-box;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: initial;
        background: white;
        top: 50%;
        right: 0;
        transform: translate(-90%, -50%);
        transition: clip-path 330ms ease;
        clip-path: polygon(0 0, 100% 0, 50% 100%, 50% 100%);
      }
      .optList {
        position: absolute;
        top: 100%;
        left: 0;
        list-style: none;
        /* !important will affect the rest of your CSS despite being in a layer */
        /* margin: 0 !important; */
        /* padding: 0 !important; */
        box-sizing: border-box;
        width: 100%;
        min-width: 318px;
        max-height: 430px;
        overflow-y: auto;
        overflow-x: hidden;
        border: 0.2em solid #a533ff;
        border-top-width: 0.1em;
        border-radius: 0.4em;
        box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);
        /* background: #5f9ea0; */
        background: linear-gradient(180deg, #331f3d 0%, #1c1c1c 112.83%);
        transition: transform 330ms ease, opacity 330ms ease;
        transform: translateY(1px);
        z-index: 11;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: flex-start;
        padding-left: 25px;
        margin-top: 10px;
        &.hidden {
          max-height: 0;
          visibility: hidden;
        }

        &::-webkit-scrollbar {
          display: block;
          width: 8px;
        }
        &::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.35);
          -webkit-border-radius: 10px;
          border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #331f3d 0%, #1c1c1c 112.83%);
          border-right: none;
          border-left: none;
          border-radius: 10px;
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
      }
      .option {
        padding: 10px 0px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        animation-delay: calc(40ms * var(--index)) !important;
        font-family: "mostra-nuova", sans-serif;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        hr {
          border-top: 1px solid #fff;
          max-width: 100px;
          margin: 0 auto;
        }
      }
      &.active {
        &::after {
          clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%);
        }
        .option {
          animation: drop 220ms ease forwards;
        }
      }
      .highlight {
        /* background-color: #5f9ea0; */
        background: linear-gradient(
          118.51deg,
          #e1f5fe -4.48%,
          #ff67f9 56.27%,
          #e1f5fe 107.68%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
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

  @media screen and (max-width: 1180px) {
    .ai-filter-btn {
      display: none;
    }

    .ai-logo {
      display: flex;
      justify-content: center;
      padding-top: 30px;
    }
  }

  @media screen and (min-width: 1180px) {
    .parent-wrapper-filter {
      display: none;
    }
  }

  @media screen and (max-width: 880px) {
    padding: 0px 70px;

    .market-place-btn {
      justify-content: center;
      width: 100%;
    }
    .market-place-filter-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 540px) {
    .market-place-btn {
      button {
        font-size: 14px;
      }
    }
    .scroll-bar {
      max-width: 315px;
    }

    .market-place-filter-btn {
      gap: 10px;
      overflow: hidden;

      .parent-wrapper {
        .react-dropdown {
          min-width: 130px;

          .value {
            font-size: 12px;
            padding-top: 2px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    padding: 0 20px;

    .market-place-btn {
      a {
        max-width: 98px;
        font-size: 12px;
      }
      button {
        font-size: 14px;
      }

      img {
        width: 34px;
      }
    }

    .market-place-filter-btn {
      gap: 10px;

      .parent-wrapper {
        .react-dropdown {
          min-width: 115px;
          padding: 9px 20px 6px 17px;

          .value {
            font-size: 11px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 395px) {
    .market-place-btn {
      a {
        max-width: 60px;
        font-size: 10px;
      }
      button {
        font-size: 14px;
      }
    }
    .market-place-filter-btn {
      gap: 10px;

      .parent-wrapper {
        .react-dropdown {
          min-width: 55px;
          padding: 7px 23px 4px 7px;

          .value {
            font-size: 11px;
          }
        }
      }
    }
  }
`;

export const MarketPlaceContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 30px 0px;
  place-items: center;

  .cryptoAi {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0px;
    gap: 24px;
    background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
    border-radius: 12px;
    width: 100%;
    max-width: 310px;
    border: 1px solid #fcdf3b;

    #white {
      font-family: "mostra-nuova";
      font-weight: 800;
      font-size: 16px;
      color: #e1f5fe;
    }
    span {
      font-family: "mostra-nuova";
      font-weight: 700;
      font-size: 15px;
      color: #b1b1b1;
    }
    #brown {
      background: linear-gradient(
        118.51deg,
        #e1f5fe -4.48%,
        #ffcb67 56.27%,
        #e1f5fe 107.68%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: "mostra-nuova";
      font-weight: 900;
      font-size: 14px;
    }
    .head {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      span {
        font-size: 16px;
      }
    }
    .stats {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .cryptoScore {
        display: flex;
        gap: 10px;
        .score {
          display: flex;
          align-items: center;
          gap: 7px;
        }
      }
      .Address {
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: space-between;

        .cryptoId {
          display: flex;
          align-items: center;
          gap: 5px;
          span {
            text-decoration-line: underline;
          }
        }
      }
    }
    .Social {
      display: flex;
      align-items: center;
      gap: 50px;

      .list {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 11px;

        .item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
      .list1 {
        display: flex;
        flex-direction: column;
        gap: 5px;

        span {
          font-weight: 800;
          font-size: 18px;
          font-family: "mostra-nuova";
          background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }
    .priceButton {
      display: flex;
      gap: 10px;

      .last-price {
        width: 100%;
        max-width: 90px;
        min-height: 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #1c1c1c 39.58%, #62286b 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #d036ae;
        border-radius: 34px;
        padding: 5px 21px;

        span {
          font-weight: 500;
          font-size: 10px;
          font-family: "mostra-nuova";
          color: #9c67ae;
        }
        div {
          display: flex;
          gap: 5px;
          align-items: center;
          span {
            font-family: "mostra-nuova";
            font-weight: 700;
            font-size: 14px;
            /* color: #ec9eff; */

            color: ${(props) => props.notConnectedcolor};
            text-shadow: 0px 0px 30px #000000;
          }
        }
      }

      .sale-price {
        content: inherit;
        width: 100%;
        max-width: 90px;
        min-height: 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #0f120f 39.58%, #225321 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #50ff6c;
        border-radius: 34px;
        padding: 5px 15px;

        span {
          font-weight: 500;
          font-size: 10px;
          font-family: "mostra-nuova";
          color: #5f9ea0;
        }
        div {
          display: flex;
          gap: 5px;
          align-items: center;
          span {
            font-family: "mostra-nuova";
            font-weight: 700;
            font-size: 14px;
            color: #89ffa3;
            text-shadow: 0px 0px 30px #000000;
          }
        }
      }

      .next-price {
        width: 100%;
        max-width: 90px;
        min-height: 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #1e90ff;
        border-radius: 34px;
        padding: 5px 21px;

        span {
          font-weight: 500;
          font-size: 10px;
          font-family: "mostra-nuova";
          color: #70a1bc;
        }
        div {
          display: flex;
          gap: 5px;
          align-items: center;
          span {
            font-family: "mostra-nuova";
            font-weight: 700;
            font-size: 14px;
            color: #64baff;
            text-shadow: 0px 0px 30px #000000;
          }
        }
      }
    }

    .wallet {
      display: flex;
      gap: 110px;
      width: 100%;
      margin-bottom: 10px;

      #buy {
        font-family: "mostra-nuova";
        font-weight: 700;
        font-size: 12px;
        color: #89ffa3;
        text-decoration-line: none;
      }
      .wallet-list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
          display: flex;
          align-items: center;
          text-decoration-line: underline;
          gap: 7px;
        }
      }
      #wallet {
        font-family: "mostra-nuova";
        font-weight: 700;
        font-size: 12px;
        background: linear-gradient(
          118.51deg,
          #e1f5fe -4.48%,
          #ffcb67 56.27%,
          #e1f5fe 107.68%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-decoration-line: none;
      }

      .price-list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
      .wrapper-main-nft {
        position: relative;
        width: 100%;
        height: calc(10vh - 4px);
        padding: 0;
        overflow-y: auto;
        overflow-x: hidden;
        z-index: 9;
        top: 6px;
        padding: 0px 20px;
        margin-right: 10px;

        &::-webkit-scrollbar {
          display: block;
          width: 8px;
        }
        &::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.35);
          -webkit-border-radius: 10px;
          border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
          border-right: none;
          border-left: none;
          border-radius: 10px;
        }
        div {
          display: flex;
          gap: 7px;
          justify-content: space-between;
        }
      }
    }
  }

  .wallet-not-connected {
    background: linear-gradient(173.49deg, #0f120f -58.84%, #31802f 103.9%);
    box-shadow: none;
    border-radius: 34px;
    padding: 13px 7px;
    span {
      color: #89ffa3;
      font-size: 12px;
      font-family: "mostra-nuova";
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1385px) {
    grid-template-columns: ${(props) => props.displayCard};
    transform: ${(props) => props.trans};

    .wallet-not-connected {
      padding: 13px 7px;

      span {
        font-size: 10px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    .cryptoAi {
      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 13px 7px;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .cryptoAi {
      gap: 2px;
      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 13px 7px;
          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;

    .cryptoAi {
      gap: 24px;
      max-width: 400px;
      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 13px 7px;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr 1fr;

    .cryptoAi {
      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 13px 7px;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .cryptoAi {
      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 13px 7px;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
    .cryptoAi {
      max-width: 400px;
      gap: 13px;

      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 13px 13px;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    transform: ${(props) => props.img2};
    .cryptoAi {
      max-width: 400px;
      gap: 13px;

      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 13px 13px;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    transform: ${(props) => props.img};
    .cryptoAi {
      max-width: 400px;
      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 10px;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 380px) {
    grid-template-columns: 1fr;
    .cryptoAi {
      max-width: 300px;
      gap: 5px;

      .priceButton {
        gap: 5px;
        .wallet-not-connected {
          padding: 10px;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const LeaderboardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 15px;
  padding-left: 43px;
  /* padding: 40px 0px; */
  /* transform: translate(-210px, 0px); */

  .head {
    display: flex;
    gap: 15px;
    align-items: end;

    .reverse {
      display: flex;
      gap: 17px;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .crown {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    gap: 5px;

    span {
      font-family: "Junegull";
      font-weight: 400;
      font-size: 24px;
      color: #f5f5f5;
    }
  }

  .card {
    width: 100%;
    min-width: 219px;
    min-height: 193px;
    background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
    border: 1px solid #fcdf3b;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 28px;
        font-weight: 700;
        font-size: 12px;
        color: #89ffa3;
        text-shadow: 0px 0px 30px #000000;
        background: linear-gradient(173.49deg, #0f120f -58.84%, #31802f 103.9%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #50ff6c;
        border-radius: 34px;
      }

      span {
        font-weight: 700;
        font-size: 16px;
        font-family: "mostra-nuova";
        color: #e1f5fe;
      }
      #brown {
        font-family: "mostra-nuova";
        font-weight: 700;
        font-size: 14px;
        background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .id {
      display: flex;
      align-items: center;
      gap: 15px;
      span {
        font-family: "mostra-nuova";
        font-weight: 300;
        font-size: 11px;
        text-decoration-line: underline;
        color: #b1b1b1;
        align-items: center;
        display: flex;
        gap: 5px;
      }
    }
    .score {
      display: flex;
      align-items: center;
      gap: 5px;
      span {
        font-family: "mostra-nuova";
        font-weight: 300;
        font-size: 14px;
        color: #b1b1b1;
      }
    }
  }
  .card1 {
    width: 100%;
    min-width: 219px;
    min-height: 235px;
    background: linear-gradient(180.07deg, #8f8737 -1.92%, #1d0a00 98.15%);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ffa133;
    justify-content: center;
    gap: 10px;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 28px;
        font-weight: 700;
        font-size: 12px;
        color: #89ffa3;
        text-shadow: 0px 0px 30px #000000;
        background: linear-gradient(173.49deg, #0f120f -58.84%, #31802f 103.9%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #50ff6c;
        border-radius: 34px;
      }
      span {
        font-weight: 700;
        font-size: 16px;
        font-family: "mostra-nuova";
        color: #e1f5fe;
      }
      #brown {
        font-family: "mostra-nuova";
        font-weight: 700;
        font-size: 14px;
        background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .id {
      display: flex;
      align-items: center;
      gap: 15px;
      span {
        font-family: "mostra-nuova";
        font-weight: 300;
        font-size: 11px;
        text-decoration-line: underline;
        color: #b1b1b1;
        align-items: center;
        display: flex;
        gap: 5px;
      }
    }
    .score {
      display: flex;
      align-items: center;
      gap: 5px;
      span {
        font-family: "mostra-nuova";
        font-weight: 300;
        font-size: 14px;
        color: #b1b1b1;
      }
    }
  }

  .main-body {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 15px;
    width: 100%;

    .rectangle {
      width: 100%;
      max-width: 690px;
      min-height: 87px;
      background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
      border: 1px solid #fcdf3b;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 20px;

      .title-id-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
      }
    }
    .icon {
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        font-family: "Junegull";
        font-weight: 400;
        font-size: 16px;
        background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 28px;
        font-weight: 700;
        font-size: 12px;
        color: #89ffa3;
        text-shadow: 0px 0px 30px #000000;
        background: linear-gradient(173.49deg, #0f120f -58.84%, #31802f 103.9%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #50ff6c;
        border-radius: 34px;
      }
      .buy-btn {
        display: flex;
        gap: 10px;
      }
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      span {
        font-weight: 700;
        font-size: 16px;
        font-family: "mostra-nuova";
        color: #e1f5fe;
      }
      #brown {
        font-family: "mostra-nuova";
        font-weight: 700;
        font-size: 14px;
        background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .id {
      display: flex;
      align-items: center;
      gap: 15px;
      span {
        font-family: "mostra-nuova";
        font-weight: 300;
        font-size: 11px;
        text-decoration-line: underline;
        color: #b1b1b1;
        align-items: center;
        display: flex;
        gap: 5px;
      }
    }
    .score {
      display: flex;
      align-items: center;
      gap: 5px;
      span {
        font-family: "mostra-nuova";
        font-weight: 300;
        font-size: 14px;
        color: #b1b1b1;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    padding-left: 20px;

    .head {
      max-width: 450px;
      flex-wrap: nowrap;
      /* flex-direction: column; */
      width: 100%;

      .box {
        width: 100%;
      }

      .reverse {
        display: flex;
        flex-direction: inherit;
        width: 100%;
        display: flex;
        flex-direction: inherit;
        width: 100%;
        gap: 14px;

        .box {
          width: 100%;

          .card1,
          .card {
            width: 100%;
          }
        }
      }
    }

    .main-body {
      width: 100%;
      max-width: 600px;
      .rectangle {
        max-width: 690px;
      }
    }
  }

  @media screen and (max-width: 980px) {
    padding-left: 110px;
    .head {
      padding: 0 60px;
    }

    .main-body {
      width: 100%;
      max-width: 400px;

      .rectangle {
        .title-id-wrapper {
          width: 42%;
        }
      }
    }
  }

  @media screen and (max-width: 880px) {
    padding-left: 45px;

    .head {
      max-width: 460px;
      padding: 0 5px;
      flex-flow: nowrap;

      .reverse {
        flex-direction: inherit;
        gap: 13px;
      }
    }
    .main-body {
      width: 100%;
      max-width: 650px;
      .rectangle {
        max-width: 689px;

        .title-id-wrapper {
          width: 42%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 20px;

    .main-body {
      width: 100%;
      max-width: 650px;
    }
  }

  @media screen and (max-width: 620px) {
    padding: 0;
    .head {
      margin: auto;

      max-width: 400px;
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;

      .box {
        width: 100%;
      }

      .reverse {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;

        .box {
          width: 100%;

          .card1,
          .card {
            width: 100%;
          }
        }
      }
    }

    .main-body {
      width: 100%;
      max-width: 520px;
      .rectangle {
        max-width: 480px;
      }

      .icon {
        /* button {
          width: 39px;
          font-size: 10px;
        } */
        .buy-btn {
          flex-direction: column;
          gap: 5px;
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .main-body {
      width: 100%;
      max-width: 420px;

      .rectangle {
        max-width: 480px;
      }

      .icon {
        /* button {
          width: 39px;
          font-size: 10px;
        } */
        .buy-btn {
          flex-direction: column;
          gap: 5px;
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    .head {
      padding: 0px 30px;
    }

    .main-body {
      width: 100%;
      max-width: 320px;
      .title {
        span {
          font-size: 12px;
        }
      }
      .rectangle {
        min-width: 370px;

        .title-id-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    .main-body {
      width: 100%;
      max-width: 335px;

      .rectangle {
        min-width: 330px;
        padding: 0px 15px;
        .title-id-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }
`;

//Cart
export const CartContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 35px;
  background: #130e19;
  border-radius: 20px;
  padding: 25px;
  @media screen and (max-width: 500px) {
    padding: 15px;
  }
  .back {
    position: relative;
    cursor: pointer;
    img:nth-child(1) {
      position: absolute;
    }
    img:nth-child(2) {
      position: absolute;
      left: 20px;
    }
  }
  h1 {
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    color: #ffffff;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #afafaf;
  }
  .cart-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: auto;
    grid-gap: 40px;
    @media screen and (max-width: 500px) {
      width: 100%;
      margin: 0;
    }
  }
  .cart-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 25px;
  }
  .check-sec {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: flex-end;
    grid-gap: 10px;
    background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
    border-radius: 10px;
    padding: 10px 15px;
    @media screen and (max-width: 1450px) {
      width: 40%;
    }
    @media screen and (max-width: 1200px) {
      width: 48%;
    }
    @media screen and (max-width: 820px) {
      width: 100%;
    }
  }
  .sub-total {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-gap: 10px;
    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #ffffff;
    }
    h5 {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: 0.02em;
      color: #ffffff;
    }
  }
  .checkout-btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-gap: 10px;
    background: #ffffff;
    box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.24);
    border-radius: 10px;
    padding: 20px 15px;
    width: 50%;
    margin-bottom: 0px;
    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.025em;
      color: #281f17;
    }
  }
`;

export const CartItemsContainer = styled.div`
  .item-card {
    background: #19180e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 8px;
  }
  .item-left {
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
  .item-img {
    width: 30%;
    padding: 8px;
    background: linear-gradient(
      180deg,
      rgba(218, 134, 56, 0.25) 0%,
      rgba(203, 189, 63, 0.25) 100%
    );
    border-radius: 8px;
    border: 1.5px solid rgba(218, 134, 56, 0.25);
    img {
      width: 100%;
    }
  }
  .item-details {
    display: flex;
    flex-direction: column;
    width: 170px;
    grid-gap: 10px;
    h1 {
      font-weight: 700;
      font-size: 16px;
      line-height: 95%;
      color: #e1f5fe;
    }
    p {
      background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      font-size: 14px;
      line-height: 95%;
    }
  }
  .item-right {
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
  .price {
    margin-right: 25px;
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      text-align: right;
      letter-spacing: 0.015em;
      color: #f4f4f4;
    }
  }
  .counter {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-gap: 10px;
    background: #251d16;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 8px 16px 10px;
    height: 119px;
    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
      :nth-child(1) {
        cursor: pointer;
      }
      :nth-child(3) {
        cursor: pointer;
      }
    }
  }
  .remove-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffecec;
    border-radius: 10px;
    height: 119px;
    padding: 0px 16px;
    cursor: pointer;
  }
`;

//CartDropDown
export const DropDownContainer = styled("div")`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  width: 65%;
  background: #251d16;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  h5 {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    margin: 0;
  }
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  top: 45px;
  left: -32px;
  width: 83%;
  z-index: 1;
  @media screen and (max-width: 1080px) {
    top: 36px;
    left: 0px;
    width: 100%;
  }
`;

export const DropDownList = styled("ul")`
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  z-index: 400;
  overflow-y: ${({ id, openId }) => (id == openId ? "auto" : "hidden")};

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #0e626d;
    border-radius: 5px;
    /* border: 1px solid ${(props) => props.theme.body}; */
  }
  ::-webkit-scrollbar-thumb {
    background: #a6ccea;
    border-radius: 5px;
    border-left: 7px solid #a6ccea;
    border-right: 7px solid #a6ccea;
  }
`;

export const ListItem = styled("li")`
  background: ${(props) => props.theme.body};
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: rgba(121, 153, 157, 0.15);
  border-radius: 0px;
  list-style: none;
  padding: 12px 8px;
  background: #251d16;
`;

export const ArrowDownIcon = styled.div`
  display: ${({ id, openId }) => (id != openId ? "block" : "none")};
  img {
    width: 100%;
  }
`;

export const ArrowUpIcon = styled.div`
  display: ${({ id, openId }) => (id == openId ? "block" : "none")};
  img {
    width: 100%;
  }
`;

//TabCart
export const CartTab = styled.div`
  width: 100%;
  margin: auto;
  background: #19180e;
  border-radius: 8px;
  display: flex;
  grid-gap: 15px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  .img-section {
    width: 25%;
    background: linear-gradient(
      180deg,
      rgba(218, 134, 56, 0.25) 0%,
      rgba(203, 189, 63, 0.25) 100%
    );
    border-radius: 8px;
    border: 1.5px solid rgba(225, 245, 254, 1);
    padding: 10px;
    img {
      width: 100%;
    }
  }
  .proInfo-section {
    width: 75%;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    align-items: flex-start;
    .pro-title {
      display: flex;
      flex-direction: column;
      grid-gap: 5px;
      h1 {
        color: #e1f5fe;
        font-weight: 700;
        font-size: 16px;
        line-height: 95%;
      }
      h5 {
        font-weight: 700;
        font-size: 14px;
        line-height: 95%;
        background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .price-sec {
      p {
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-align: right;
        letter-spacing: 0.015em;
        color: #ffffff;
      }
    }
    .last-sec {
      width: 100%;
      display: flex;
      align-items: center;
      grid-gap: 5px;
      .counter {
        border: 2px solid rgba(121, 153, 157, 0.15);
        background: #251d16;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        width: 34%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        grid-gap: 32px;
        height: 38px;
        p {
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          cursor: pointer;
        }
        @media screen and (max-width: 950px) {
          grid-gap: 10px;
        }
      }
      .remove-item {
        border: 2px solid rgba(121, 153, 157, 0.15);
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(255, 236, 236);
        border-radius: 10px;
        width: 32%;
        cursor: pointer;
        height: 36px;
      }
      .tab-dropdown {
        width: 34%;
      }
    }
  }
`;

//Checkout
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #130e19;
  border-radius: 20px;
  padding: 25px;

  .sec-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;

    @media screen and (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      grid-gap: 20px;
      padding-left: 0px;
    }

    .left-sec-wrapper {
      width: 49%;
      display: flex;
      flex-direction: column;
      grid-gap: 20px;
      height: 100%;
      justify-content: space-between;

      @media screen and (max-width: 700px) {
        width: 100%;
        padding-top: 20px;
      }

      .shipping-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(25, 24, 14, 1);
        border-radius: 10px;
        padding: 16px;

        .info {
          display: flex;
          flex-direction: column;
          grid-gap: 25px;
          justify-content: center;

          span {
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
          }

          .name-address {
            display: flex;
            flex-direction: column;

            .address {
              display: flex;
              grid-gap: 5px;
              align-items: center;
            }

            h5 {
              font-weight: 700;
              font-size: 14px;
              line-height: 21px;
            }
            span:nth-child(2) {
              font-weight: 300;
              font-size: 14px;
              line-height: 19px;
              color: rgba(166, 166, 166, 1);
            }
          }
        }
      }
      .payment-method-wrapper {
        display: flex;
        flex-direction: column;
        grid-gap: 10px;
        background: rgba(25, 24, 14, 1);
        border-radius: 10px;
        .shipping-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          .info {
            display: flex;
            flex-direction: column;
            grid-gap: 25px;
            justify-content: center;
            span {
              font-weight: 500;
              font-size: 12px;
              line-height: 14px;
            }
            .name-address {
              display: flex;
              flex-direction: column;
              .address {
                display: flex;
                grid-gap: 5px;
                align-items: center;
              }
              h5 {
                font-weight: 700;
                font-size: 14px;
                line-height: 21px;
              }
              span:nth-child(2) {
                font-weight: 300;
                font-size: 14px;
                line-height: 19px;
                color: rgba(166, 166, 166, 1);
              }
            }
          }
        }

        .pay-method {
          display: flex;
          grid-gap: 10px;
          align-items: center;
          justify-content: center;
          padding: 0px 16px 16px 16px;

          .card {
            width: 50%;
            border-radius: 8px;
            height: 100px;
            justify-content: space-between;
            padding: 5px 15px;
            background-image: linear-gradient(
              to right,
              rgba(255, 177, 153, 1),
              rgba(255, 132, 187, 1),
              rgba(253, 178, 232, 1)
            );
            .card-Info {
              display: flex;
              flex-direction: column;
              grid-gap: 9px;
            }
            p {
              color: rgba(255, 255, 255, 1);
              font-weight: 500;
              font-size: 10px;
              line-height: 10px;
            }
          }
          .crypto {
            width: 50%;
            border-radius: 9px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5px 15px;
            background-image: linear-gradient(
              to right,
              rgba(251, 253, 178, 1),
              rgba(118, 255, 165, 1)
            );
            .crypto-Info {
              display: flex;
              flex-direction: column;
              grid-gap: 10px;
            }
            h5 {
              color: rgba(1, 27, 31, 1);
              font-size: 16px;
              font-weight: 700;
              margin: 2px 0px;
            }
            p {
              color: rgba(124, 124, 124, 1);
              font-weight: 500;
              font-size: 10px;
              line-height: 10px;
            }
          }
        }
      }
    }
    .right-sec-wrapper {
      width: 49%;
      display: flex;
      flex-direction: column;
      grid-gap: 20px;
      height: 100%;
      justify-content: space-between;

      @media screen and (max-width: 700px) {
        width: 100%;
      }

      .shipping-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(25, 24, 14, 1);
        border-radius: 10px;
        padding: 16px;
        .info {
          display: flex;
          flex-direction: column;
          grid-gap: 25px;
          justify-content: center;
          span {
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
          }
          .name-address {
            display: flex;
            flex-direction: column;
            .address {
              display: flex;
              grid-gap: 5px;
              align-items: center;
            }
            h5 {
              font-weight: 700;
              font-size: 14px;
              line-height: 21px;
            }
            span:nth-child(1) {
              font-weight: 300;
              font-size: 14px;
              line-height: 19px;
              color: rgba(166, 166, 166, 1);
              @media screen and (max-width: 1255px) {
                height: 38px;
              }
              @media screen and (max-width: 896px) {
                height: 56px;
              }
              @media screen and (max-width: 820px) {
                height: 38px;
              }
            }
            span:nth-child(2) {
              font-weight: 300;
              font-size: 14px;
              line-height: 19px;
              color: rgba(166, 166, 166, 1);
            }
          }
        }
      }

      .order-total {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        grid-gap: 10px;
      }

      .total {
        display: flex;
        flex-direction: column;
        grid-gap: 10px;

        .values {
          display: flex;
          justify-content: space-between;

          span {
            font-size: 14px;
            font-weight: 300;
            line-height: 19px;
            color: rgba(152, 152, 152, 1);
          }
        }

        .line {
          margin: 0;
          border: 1px solid rgba(152, 152, 152, 1);
        }
      }

      .order-btn-bg {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(
          to right,
          rgba(153, 123, 96, 1),
          rgba(255, 235, 51, 1)
        );
        border-radius: 10px;
        height: 81px;
        .order-btn {
          background: rgba(255, 255, 255, 1);
          color: rgba(40, 31, 23, 1);
          margin: 0px 5%;
          width: 95%;
          max-width: 95%;
          font-size: 14px;
          font-weight: 700;
          line-height: 21px;
          border: none;
          text-shadow: none;
          border-radius: 10px;
          padding: 15px 0px;
          box-shadow: none !important;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .sec-wrapper
      .left-sec-wrapper
      .payment-method-wrapper
      .pay-method
      .crypto
      .crypto-Info
      p:nth-child(2) {
      /* add your styles here, for example: */
      font-size: 8px;
    }
  }

  @media screen and (max-width: 420px) {
    .sec-wrapper
      .left-sec-wrapper
      .payment-method-wrapper
      .pay-method
      .crypto
      h5 {
      font-size: 12px;
    }

    .sec-wrapper
      .left-sec-wrapper
      .payment-method-wrapper
      .pay-method
      .crypto
      .crypto-Info
      p:nth-child(2) {
      /* add your styles here, for example: */
      font-size: 6px;
    }
  }
`;

//ETH and BNB pages

export const EthCArdContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;

  .token-card-conainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    gap: 36px;
  }
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
  .no-card-founded {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    h2 {
      color: #fff;
    }
  }

  .cryptoAi {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px;
    gap: 15px;
    background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
    border-radius: 12px;
    width: 100%;
    max-width: 322px;
    border: 1px solid #fcdf3b;

    #white {
      font-family: "mostra-nuova";
      font-weight: 800;
      font-size: 16px;
      color: #e1f5fe;
    }
    span {
      font-family: "mostra-nuova";
      font-weight: 700;
      font-size: 15px;
      color: #b1b1b1;
    }
    #brown {
      background: linear-gradient(
        118.51deg,
        #e1f5fe -4.48%,
        #ffcb67 56.27%,
        #e1f5fe 107.68%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: "mostra-nuova";
      font-weight: 900;
      font-size: 14px;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      span {
        font-size: 16px;
      }
    }
    .scoreRank {
      display: flex;
      align-items: center;
      gap: 15px;
      .score {
        display: flex;
        align-items: center;
        gap: 2px;
      }
    }
    .stats {
      display: flex;
      flex-direction: column;
      width: 100%;
      .cryptoScore {
        display: flex;
        gap: 10px;
        .score {
          display: flex;
          align-items: center;
          gap: 7px;
        }
      }

      .Address {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .cryptoId {
          display: flex;
          align-items: center;
          gap: 5px;
          span {
            font-family: "mostra-nuova";
            font-weight: 300;
            font-size: 14px;
            color: #b1b1b1;
            text-decoration-line: underline;
          }
        }
        .scoreRank {
          gap: 8px;
        }
      }
    }

    .priceButton {
      display: flex;
      gap: 40px;
      .greenbtn {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .turnover {
        color: #5f9ea0;
        font-family: "mostra-nuova";
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        flex-direction: column;
        padding: 0px 20px;

        span {
          color: #89ffa3;
          text-shadow: 0px 0px 30px 0px #000;
          font-family: "mostra-nuova";
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 143.7%;
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }

      .sale-price {
        content: inherit;
        width: 100%;
        max-width: 114px;
        min-height: 46.02px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #0f120f 39.58%, #225321 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #50ff6c;
        border-radius: 34px;
        padding: 5px 10px;
        gap: 5px;

        span {
          font-weight: 500;
          font-size: 11px;
          color: #f5f5f5;
          text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          font-family: Arial;
        }
        div {
          display: flex;
          gap: 5px;
          align-items: center;
          span {
            font-family: "mostra-nuova";
            font-weight: 700;
            font-size: 14px;
            color: #89ffa3;
            text-shadow: 0px 0px 30px #000000;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .token-card-conainer {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    .token-card-conainer {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 540px) {
    .cryptoAi {
      margin: 0 auto;
    }
    .token-card-conainer {
      grid-template-columns: 1fr;
    }
  }
`;
