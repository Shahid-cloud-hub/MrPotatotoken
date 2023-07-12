import styled from "styled-components";

export const LiquidityNFTContainer = styled("div")`
  /* width: 100%; */
  .background {
    /* padding: 0px 10px; */
    width: 100%;
    /* max-width: 760px; */
    display: flex;
    gap: 50px;
    /* align-items: center; */
    /* justify-content: center; */
    /* justify-content: center; */
    /* margin: 120px auto; */
    /* max-width: 800px !important; */
    max-width: ${(props) => props.maxWid};
    margin: ${(props) => props.marginVal};
  }

  .tabs {
    display: flex;
    /* min-height: 348px; */
    min-height: ${(props) => props.minHei};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px !important;
    background: linear-gradient(
      1.09deg,
      #000000 1%,
      #594207 219.03%
    ) !important;
    border: 1px solid #f4cd68 !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
    border-radius: 12px !important;
    gap: 15px;
    width: 100%;
    max-width: 543px;
    position: relative;

    .left-top-side {
      position: absolute;
      left: -44px;
      top: -23px;
    }
    .right-top-side {
      position: absolute;
      right: -25px;
      top: -23px;
    }

    .left-side {
      position: absolute;
      left: -25px;
      bottom: -29px;
    }
    .right-side {
      position: absolute;
      right: -43px;
      bottom: -35px;
    }

    button {
      background: transparent;
      mix-blend-mode: hard-light;
      filter: blur(0.72px);
      height: 90px;
      box-shadow: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .heading1 {
      /* padding-top: 10px; */
      text-align: center;
      width: 100%;

      span {
        font-family: "mostra-nuova", sans-serif;
        font-weight: 900;
        font-size: 21px;
        color: #f3ba2f;
        padding-left: 5px;
      }
      hr {
        height: 2px;
        max-width: 930px;
        background: #f3ba2f;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin: 10px auto;
        flex: none;
        order: 1;
        flex-grow: 0;
        width: 100%;
      }
    }
    .convert-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .convert {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        gap: 65px;
        padding-top: 20px;
        max-width: 310px;

        #icon {
          cursor: pointer;
        }
        /* button {
        img {
          max-width: 150px;
        }
      } */
      }
    }

    .balance {
      display: flex;
      align-items: center;
      gap: 70px;
      padding: 0px 35px;

      .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        .textspan {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          #blue {
            font-family: "mostra-nuova", sans-serif;
            font-size: 20px;
            color: #1e90ff;
          }
        }
        gap: 10px;
        img {
          width: 60px;
        }
        span {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
        }
      }
    }

    content {
      position: absolute;
      display: none;
    }

    .truai {
      display: flex;
      flex-direction: column;

      select {
        background: transparent;
        border: none;
        appearance: none;
        color: #fff;
        font-weight: 600;
      }
      .input-container {
        position: relative;
      }
      .input-container1 {
        position: relative;
      }

      /* .input-container::after {
        content: "m";
        position: absolute;
        top: 20px;
        right: 90px;
        font-weight: 700;
        font-size: 12px;
        color: #fff;
        padding: 4px;
      } */

      .input-container input[type="text"] {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
      }
      /* .input-container1::after {
        content: "m";
        position: absolute;
        top: 20px;
        right: 128px;
        font-weight: 700;
        font-size: 12px;
        color: #fff;
        padding: 4px;
      } */

      .input-container1 input[type="text"] {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
      }

      input {
        background: transparent;
        box-shadow: none;
        color: #fff;
        font-family: "mostra-nuova", sans-serif;
        font-weight: 700;
        padding: 8px 0px;
        max-width: 100px;
        font-size: 22px;
        position: relative;
        /* &::after {
          content: "bn";
          position: absolute;
          font-size: 11px;
          bottom: 0px;
        } */

        &::placeholder {
          font-family: "mostra-nuova", sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #fff;
          position: relative;
          /* 
          &::after {
            content: "bn";
            position: absolute;
            font-size: 11px;
            bottom: 0px;
          } */
        }
      }
      input::placeholder::after {
        content: "▼";
        color: red;
        margin-left: 5px;
      }

      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;
      }
      .text {
        display: flex;
        align-items: center;
        gap: 15px;
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      font-family: "mostra-nuova", sans-serif;

      span {
        font-size: 16px;
      }
    }
    #icon {
      transform: translate(-24px, 0px);
    }
    span {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      color: #ffffff;
    }

    #grey {
      font-weight: 700;
      font-size: 15px;
      color: #637592;
      position: relative;

      /* &::after {
        content: "bn";
        position: absolute;
        font-size: 11px;
        bottom: 0px;
      } */
    }
    #blue {
      font-weight: 700;
      font-size: 12px;
      color: #3d6eff;
    }

    @media screen and (max-width: 420px) {
      padding: 10px;
    }

    .tabs-btn {
      display: flex;
      gap: 25px;
      border-bottom: 1px solid #282c34;
      padding: 10px;

      button {
        border: none;
        background-color: transparent;
        font-weight: 700;
        font-size: 12px;
        padding: 0 30px;

        img {
          width: 100%;
          max-width: 120px;
        }
      }
    }
  }
  .metapoints {
    width: 100%;
    max-width: 330px;
  }
  .items-container {
    /* width: 349px; */
    width: 100%;
    max-width: 400px;
    /* height: 405px; */
    min-height: 400px;
    background: #0a0a0a;
    border: 1px solid #f4cd68;
    border-radius: 8px;
  }
  .all-items {
    display: flex;
    gap: 10px;
    padding: 10px;
  }
  .item-1 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    grid-gap: 8px;
    align-items: center;

    .part-img {
      border: 1px solid rgba(244, 205, 104, 1);
      min-height: 150px;
      border-radius: 15px;
      width: 100%;
    }
    .hollow-box {
      border: 1.44422px solid #f4cd68;
      filter: blur(1.20352px);
      border-radius: 10px;
      width: 113px;
      height: 108px;
      margin: 3px 0px;
      @media screen and (max-width: 1230px) {
        width: 111px;
        height: 105px;
        margin: 6px 0px;
      }
      @media screen and (max-width: 1140px) {
        width: 102px;
      }
      @media screen and (max-width: 1080px) {
        width: 111px;
        height: 105px;
        margin: 6px 0px;
      }
    }
    img {
      width: 100%;
      margin-bottom: 5px;

      /* max-width: 100px; */
    }
  }
  .box {
    display: flex;
    justify-content: space-evenly;
    gap: 3px;
    width: 100%;
    button {
      width: 45%;
      /* max-width: 40px; */
      min-height: 30px;
      background: #161616;
      color: #26e2b3;
      border: 1px solid #26e2b3;
      border-radius: 8px;
      color: #26e2b3;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
      }
      img {
        width: 15px;
      }
    }
    #upload {
      border: 1px solid #f4cd68;
    }
  }
  .box1 {
    display: flex;
    justify-content: space-evenly;
    gap: 3px;
    margin-bottom: 10px;
    /* max-width: 86px; */
    /* min-height: 87px; */
    background: #161616;
    color: #26e2b3;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #26e2b3;
    border-radius: 8px;
    padding: 2px 15px;
    button {
      color: #26e2b3;
      font-size: 16px;
      background: #161616;
      cursor: pointer;
      width: 100%;
      border: none;
      padding: 0;
      box-shadow: none;
      img {
        width: 43px;
      }
    }
    #upload {
      border: 1px solid #f4cd68;
    }

    .dropdown-content {
      display: flex;
      justify-content: center;
      min-height: 50px;
      #dropdown {
        padding: 0;

        img {
          width: 56px;
          height: 42px;
        }
      }
    }
  }

  .sell-btns {
    display: flex;
    gap: 5px;
    padding: 10px 0px 5px 0px;

    button {
      background: #22252d;
      border: 1px solid #f4cd68;
      border-radius: 4px;
      color: #f4cd68;
      font-size: 14px;
    }
  }

  .activated-1 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: none;
  }

  .activated-1::after {
    content: "";
    position: absolute;
    width: 196px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -10px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  @media screen and (max-width: 420px) {
    .activated-1::after {
      width: 160px;
    }
  }

  .activated-2 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: none;
  }

  .activated-2::after {
    content: "";
    position: absolute;
    width: 180px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -1px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  @media screen and (max-width: 820px) {
    .background {
      max-width: 790px;
      margin: 0 auto;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 786px) {
    .background {
      max-width: 659px;
      margin: 0 auto;
    }

    .tabs > .convert {
      gap: 60px;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 620px) {
    .background {
      padding: 0px 0px 25px;
      max-width: 550px;
      margin: 0 auto;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 520px) {
    .background {
      width: 100%;
      flex-direction: column;
      align-items: center;
      padding: 0px 0px 25px;
      max-width: 550px;
      margin: 0 auto;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 420px) {
    .activated-2::after {
      width: 150px;
    }

    .tabs {
      transform: scale(0.8);
      .left-side {
        left: -12px;
        bottom: -8px;
        width: 35px;
      }

      .right-side {
        right: -21px;
        bottom: -8px;
        width: 45px;
      }
    }

    .tabs > .convert {
      gap: 20px;

      #icon {
        width: 30px;
        transform: translate(-9px, 10px);
      }

      .truai {
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }
    }
    button img {
      width: 150px;
      transform: none !important;
    }
  }

  @media screen and (max-width: 390px) {
    .tabs > .convert {
      gap: 20px;

      .truai {
        .text {
          gap: 10px;
        }
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }

      #grey {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .tabs > .convert {
      gap: 5px;

      .truai {
        .text {
          gap: 10px;
        }
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }

      #grey {
        font-size: 12px;
      }
    }
  }

  .de-activated {
    font-weight: 700;
    font-size: 12px;
    color: #8f98a8;
    box-shadow: none;
  }
`;

export const LiquidityTokenContainer = styled("div")`
  /* width: 100%; */
  .background {
    /* padding: 0px 10px; */
    width: 85%;
    /* max-width: 760px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* justify-content: center; */
    /* margin: 120px auto; */
    /* max-width: 800px !important; */
    max-width: ${(props) => props.maxWid};
    margin: ${(props) => props.marginVal};
  }

  .tabs {
    display: flex;
    /* min-height: 348px; */
    min-height: ${(props) => props.minHei};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px !important;
    background: linear-gradient(
      1.09deg,
      #000000 1%,
      #594207 219.03%
    ) !important;
    border: 1px solid #f4cd68 !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
    border-radius: 12px !important;
    gap: 15px;
    width: 100%;
    max-width: ${(props) => props.tabMaxWid};
    position: relative;

    .left-side {
      position: absolute;
      left: -25px;
      bottom: -29px;
    }
    .right-side {
      position: absolute;
      right: -43px;
      bottom: -35px;
    }

    button {
      background: transparent;
      mix-blend-mode: hard-light;
      filter: blur(0.72px);
      height: 90px;
      box-shadow: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .heading1 {
      /* padding-top: 10px; */
      text-align: center;
      width: 100%;

      span {
        font-family: "mostra-nuova", sans-serif;
        font-weight: 900;
        font-size: 21px;
        color: #f3ba2f;
        padding-left: 5px;
      }
      hr {
        height: 2px;
        max-width: 930px;
        background: #f3ba2f;
        box-shadow: 0px 0px 0px #ffffff;
        border: none;
        margin: 10px auto;
        flex: none;
        order: 1;
        flex-grow: 0;
        width: 100%;
      }
    }

    .convert {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      justify-content: space-around;
      -webkit-justify-content: space-around;
      align-items: center;
      -webkit-align-items: center;
      width: 100%;
      gap: 65px;
      -webkit-gap: 65px;
      padding-top: 20px;
      max-width: 550px;

      #icon {
        cursor: pointer;
      }
      /* button {
        img {
          max-width: 150px;
        }
      } */
    }
    .balance {
      display: flex;
      align-items: center;
      gap: 70px;
      padding: 0px 35px;

      .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        .textspan {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          #blue {
            font-family: "mostra-nuova", sans-serif;
            font-size: 20px;
            color: #1e90ff;
          }
        }
        gap: 10px;
        img {
          width: 60px;
        }
        span {
          font-family: "mostra-nuova", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
        }
      }
    }

    content {
      position: absolute;
      display: none;
    }

    .truai {
      display: flex;
      flex-direction: column;

      select {
        background: transparent;
        border: none;
        appearance: none;
        color: #fff;
        font-weight: 600;
      }
      .input-container {
        position: relative;
      }
      .input-container1 {
        position: relative;
      }

      /* .input-container::after {
        content: "bn";
        position: absolute;
        top: 17px;
        right: 109px;
        font-weight: 700;
        font-size: 12px;
        color: #fff;
        padding: 4px;
      } */

      .input-container input[type="text"] {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
      }
      /* .input-container1::after {
        content: "bn";
        position: absolute;
        top: 17px;
        right: 128px;
        font-weight: 700;
        font-size: 12px;
        color: #fff;
        padding: 4px;
      } */

      .input-container1 input[type="text"] {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
      }

      input {
        background: transparent;
        box-shadow: none;
        color: #fff;
        font-family: "mostra-nuova", sans-serif;
        font-weight: 700;
        padding: 8px 0px;
        max-width: 100px;
        font-size: 22px;
        position: relative;
        &::after {
          content: "bn";
          position: absolute;
          font-size: 11px;
          bottom: 0px;
        }

        &::placeholder {
          font-family: "mostra-nuova", sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #fff;
          position: relative;

          &::after {
            content: "bn";
            position: absolute;
            font-size: 11px;
            bottom: 0px;
          }
        }
      }
      input::placeholder::after {
        content: "▼";
        color: red;
        margin-left: 5px;
      }

      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;
      }
      .text {
        display: flex;
        align-items: center;
        gap: 15px;
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
      font-family: "mostra-nuova", sans-serif;

      span {
        font-size: 16px;
      }
    }
    #icon {
      transform: translate(-24px, 0px);
    }
    span {
      font-family: "mostra-nuova", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      color: #ffffff;
    }

    #grey {
      font-weight: 700;
      font-size: 15px;
      color: #637592;
      position: relative;

      &::after {
        content: "bn";
        position: absolute;
        font-size: 11px;
        bottom: 0px;
      }
    }
    #blue {
      font-weight: 700;
      font-size: 12px;
      color: #3d6eff;
    }

    @media screen and (max-width: 420px) {
      padding: 10px;
    }

    .tabs-btn {
      display: flex;
      gap: 25px;
      border-bottom: 1px solid #282c34;
      padding: 10px;

      button {
        border: none;
        background-color: transparent;
        font-weight: 700;
        font-size: 12px;
        padding: 0 30px;

        img {
          width: 100%;
          max-width: 120px;
        }
      }
    }
  }

  .activated-1 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: none;
  }

  .activated-1::after {
    content: "";
    position: absolute;
    width: 196px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -10px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  @media screen and (max-width: 420px) {
    .activated-1::after {
      width: 160px;
    }
  }

  .activated-2 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: none;
  }

  .activated-2::after {
    content: "";
    position: absolute;
    width: 180px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -1px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  @media screen and (max-width: 820px) {
    .background {
      max-width: 790px;
      margin: 0 auto;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 786px) {
    .background {
      max-width: 659px;
      margin: 0 auto;
    }

    .tabs > .convert {
      gap: 60px;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 620px) {
    .background {
      padding: 0px 0px;
      max-width: 550px;
      margin: 0 auto;
      width: 100%;
    }

    .tabs > .convert {
      gap: 20px;
    }

    .tabs-btn {
      justify-content: center;
    }
  }

  @media screen and (max-width: 520px) {
    .tabs > .convert {
      gap: 10px;
      transform: translate(10px, 10px);
    }
  }

  @media screen and (max-width: 420px) {
    .activated-2::after {
      width: 150px;
    }
    .tabs > .convert {
      justify-content: center;
      gap: 0px;
      -webkit-gap: 0px;
      -webkit-justify-content: center;

      #icon {
        width: 30px;
        transform: translate(-9px, 10px);
      }

      .tabs > .convert {
        gap: 10px;
      }

      .truai {
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }
    }
    button img {
      width: 150px;
      transform: none !important;
    }
  }

  @media screen and (max-width: 390px) {
    .tabs > .convert {
      justify-content: center;
      -webkit-justify-content: center;
      gap: 0px;
      -webkit-gap: 0px;

      .truai {
        .text {
          gap: 10px;
        }
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }

      #grey {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .tabs > .convert {
      justify-content: center;
      -webkit-justify-content: center;
      gap: 0px;
      -webkit-gap: 0px;

      .truai {
        .text {
          gap: 10px;
        }
        label {
          font-size: 12px;
        }

        input::placeholder {
          font-size: 16px;
        }
      }

      #grey {
        font-size: 12px;
      }
    }
  }

  .de-activated {
    font-weight: 700;
    font-size: 12px;
    color: #8f98a8;
    box-shadow: none;
  }
`;

export const MrPotatoNFTCardsContainer = styled("div")`
  .NftWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 1180px) {
      align-items: center;
    }
  }

  .titlewrap {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }
  .nft-card-wrapper {
    width: 100%;
    min-width: 1100px;

    display: flex;
    gap: 20px;
    transform: scale(0.7) translate(-22%, -10%);

    /* @media screen and (max-width: 1024px) {
        transform: scale(0.7);
        align-items: center;
        max-width: 934px;
        flex-wrap: wrap;
        justify-content: center;
      } */

    .rarity_scroll {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      transform: translate(10px, -8%);
      transition: all 0.4s ease;
    }

    .search-nft {
      display: flex;
      gap: 25px;
    }
  }

  .potato-learn {
    display: flex;
    flex-direction: column;
  }

  .play-btn {
    background: #f4cd68;
    box-shadow: 0px 4px 6px #5a4100;
    border-radius: 8px;
    border: none;
    color: #000;
    padding: 15px 70px;
    font-weight: 700;
    font-size: 16px;
  }

  @media screen and (max-width: 420px) {
    .titlewrap {
      flex-direction: column;
    }
    .nft-card-wrapper {
      transform: scale(0.7) translate(-26.5%, -18%);
      min-width: 505px;
      position: absolute;
      overflow: hidden;
    }

    .rarity_scroll {
      transform: translate(10px, 0%);
    }

    .search-nft {
      flex-wrap: wrap;
      max-width: 523px;
      max-height: 830px;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 375px) {
    .nft-card-wrapper {
      transform: scale(0.7) translate(-24.5%, -18%);
    }
  }
`;
export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  max-width: 983px;
  min-height: 225px;
  background: linear-gradient(180deg, #1f313d 24.68%, #1c1c1c 63.46%);
  border: 1px solid #5f9ea0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  gap: 30px;
  button {
    background: #6495ed;
    border-radius: 12px;
    width: 108px;
    height: 34px;
    font-size: 15px;
    color: #ffffff;
    font-family: "mostra-nuova";
    border: none;
  }

  .heading {
    padding-top: 10px;
    text-align: center;
    span {
      font-family: "mostra-nuova";
      font-style: normal;
      font-weight: 900;
      font-size: 21px;

      color: #5f9ea0;
    }
    hr {
      height: 2px;
      width: 433px;
      background: #5f9ea0;
      box-shadow: 0px 0px 0px #ffffff;
      border: none;
      margin-top: 10px;
    }
  }
  .heading1 {
    padding-top: 10px;
    text-align: center;
    span {
      font-family: "mostra-nuova";
      font-style: normal;
      font-weight: 900;
      font-size: 21px;

      color: #1e90ff;
    }
    hr {
      height: 2px;
      width: 860px;
      background: #1e90ff;
      box-shadow: 0px 0px 0px #ffffff;
      border: none;
      margin-top: 10px;
    }
  }
  .convert {
    display: flex;
    align-items: center;
    gap: 210px;
  }
  .balance {
    display: flex;
    align-items: center;
    gap: 70px;
    padding: 0px 35px;

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      .textspan {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        #blue {
          font-family: "mostra-nuova";
          font-size: 20px;
          color: #1e90ff;
        }
      }
      gap: 10px;
      img {
        width: 60px;
      }
      span {
        font-family: "Junegull";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        color: #ffffff;
      }
    }
  }

  content {
    position: absolute;
    display: none;
  }

  .truai {
    display: flex;
    flex-direction: column;
    .dropdown {
      display: flex;
      flex-direction: column;
      gap: 5px;
      position: relative;

      input {
        background: transparent;
      }

      input::placeholder {
        font-family: "mostra-nuova", sans-serif;
        font-weight: 800;
        font-size: 15px;
      }
    }

    .select {
      background: #020f18;
      border-radius: 4px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      transform: translate(30px, 31px);
      width: 100%;
      height: 192px;
      max-width: 174px;
      div {
        font-family: "mostra-nuova";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;

        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
    .select1 {
      background: #020f18;
      border-radius: 4px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      transform: translate(30px, 31px);
      width: 100%;
      height: 192px;
      max-width: 174px;
      div {
        font-family: "mostra-nuova";
        font-style: normal;
        font-weight: 700;
        font-size: 15px;

        color: #ffffff;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }

  label {
    font-size: 15px;
    color: #637592;
    display: flex;
    gap: 5px;

    input {
      border: none;
      background: transparent;
      padding-left: 10px;
      max-width: 89px;
    }
    input::placeholder {
      font-size: 15px;
      color: #ffffff;
    }
  }
  #icon {
    margin-right: 40px;
  }
  span {
    font-family: "mostra-nuova";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;

    color: #ffffff;
  }

  #grey {
    font-weight: 500;
    font-size: 15px;

    color: #637592;
  }
  #blue {
    font-weight: 700;
    font-size: 12px;

    color: #3d6eff;
  }
  @media screen and (max-width: 1280px) {
    max-width: 860px;
    .heading1 {
      hr {
        width: 835px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .convert {
      gap: 180px;
    }
  }
  @media screen and (max-width: 820px) {
    .convert {
      gap: 160px;
    }
    .heading1 {
      hr {
        width: 760px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .convert {
      gap: 160px;
    }
    .heading1 {
      hr {
        width: 720px;
      }
    }
  }
  @media screen and (max-width: 540px) {
    .convert {
      gap: 5px;
      padding-left: 78px;
    }
    .truai {
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        input::placeholder {
          font-family: "mostra-nuova";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;

          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .select {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-25px, 219px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
      .select1 {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-15px, 33px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        padding-left: 10px;
        max-width: 35px;
      }
      input::placeholder {
        font-size: 14px;
        color: #ffffff;
      }
    }
    #icon {
      margin-right: 10px;
      width: 40px;
    }
    span {
      font-size: 18px;
    }

    #grey {
      font-size: 12px;
    }
    #blue {
      font-size: 10px;
    }
    .balance {
      gap: 10px;

      .icon {
        .textspan {
          gap: 5px;
          #blue {
            font-size: 10px;
          }
        }
        gap: 10px;
        img {
          width: 40px;
        }
        span {
          font-size: 14px;
        }
      }
    }

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        width: 290px;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        height: 2px;
        width: 290px;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    .convert {
      gap: 5px;
      padding-left: 78px;
    }
    .truai {
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        input::placeholder {
          font-family: "mostra-nuova";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;

          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .select {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-25px, 219px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
      .select1 {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-15px, 33px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        padding-left: 10px;
        max-width: 35px;
      }
      input::placeholder {
        font-size: 14px;
        color: #ffffff;
      }
    }
    #icon {
      margin-right: 10px;
      width: 40px;
    }
    span {
      font-size: 18px;
    }

    #grey {
      font-size: 12px;
    }
    #blue {
      font-size: 10px;
    }
    .balance {
      gap: 10px;

      .icon {
        .textspan {
          gap: 5px;
          #blue {
            font-size: 10px;
          }
        }
        gap: 10px;
        img {
          width: 40px;
        }
        span {
          font-size: 14px;
        }
      }
    }

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        width: 290px;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        height: 2px;
        width: 290px;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 375px) {
    .convert {
      gap: 5px;
      padding-left: 78px;
    }
    .truai {
      .dropdown {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;

        input::placeholder {
          font-family: "mostra-nuova";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;

          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .select {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-25px, 219px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
      .select1 {
        max-width: 135px;
        padding: 10px;
        gap: 10px;
        transform: translate(-15px, 33px);
        div {
          font-size: 12px;
          gap: 8px;
        }
      }
    }

    label {
      font-size: 15px;
      color: #637592;
      display: flex;
      gap: 5px;

      input {
        padding-left: 10px;
        max-width: 35px;
      }
      input::placeholder {
        font-size: 14px;
        color: #ffffff;
      }
    }
    #icon {
      margin-right: 10px;
      width: 40px;
    }
    span {
      font-size: 18px;
    }

    #grey {
      font-size: 12px;
    }
    #blue {
      font-size: 10px;
    }
    .balance {
      gap: 10px;

      .icon {
        .textspan {
          gap: 5px;
          #blue {
            font-size: 10px;
          }
        }
        gap: 10px;
        img {
          width: 40px;
        }
        span {
          font-size: 14px;
        }
      }
    }

    .heading {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        width: 290px;
        margin-top: 10px;
      }
    }
    .heading1 {
      padding-top: 10px;
      text-align: center;
      span {
        font-size: 18px;
      }
      hr {
        height: 2px;
        width: 290px;
        margin-top: 10px;
      }
    }
  }
`;
