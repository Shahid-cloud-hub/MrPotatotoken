import styled from "styled-components";

export const PotatoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  max-width: 1100px;
  width: 100%;

  .background {
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: ${(props) => props.maxWid};
    width: 100%;
    /* margin: 0 auto; */
  }

  .meta-potato-wrapper {
    width: 100%;
  }

  .potato-land-tabs {
    display: flex;
    margin-bottom: 20px;
    gap: 15px;
    align-items: center;

    .tabs-btn {
      display: flex;
      /* justify-content: space-between; */
      gap: 15px;
      width: 100%;
      button {
        border: none;
        background: #1c1f25;
        border-radius: 8px;
        font-weight: 700;
        font-size: 20px;
        color: #ffffff;
        width: 100%;
        min-height: 59px;
        max-width: 175px;
        padding: 0px;
      }
      a {
        width: 100%;
        max-width: 175px;
        button {
          border: none;
          background: #1c1f25;
          border-radius: 8px;
          font-weight: 700;
          font-size: 20px;
          color: #ffffff;
          width: 100%;
          min-height: 51px;
          max-width: 175px;
          padding: 0px;
        }
      }

      /* img {
        max-width: 29px;
      } */

      .myland-active {
        border: 1px solid #f4cd68;
        color: #f4cd68;
        transition: all 0.3s ease-in-out;
      }

      .myland-de-active {
        border: none;
        color: #fff;
      }
    }

    img {
      max-width: none;
    }

    .tabs-btn1 {
      display: flex;
      /* justify-content: space-between; */
      gap: 15px;
      width: 100%;
      a {
        button {
          border: none;
          background: #1c1f25;
          border-radius: 8px;
          font-weight: 700;
          font-size: 20px;
          color: #ffffff;
          width: 100%;
          min-height: 34px;
          max-width: 99px;
          padding: 0px;
        }
      }

      /* img {
        max-width: 29px;
      } */

      .myland-active {
        border: 1px solid #f4cd68;
        color: #f4cd68;
        transition: all 0.3s ease-in-out;
      }

      .myland-de-active {
        border: none;
        color: #fff;
      }
    }
  }

  .doller-potato-wrapper {
    display: flex;
  }

  .withdraw-input-wrapper-up {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    /* max-height: 60px; */

    .input-box {
      display: flex;
      align-items: center;
      width: 100%;

      .uniSwap-wrapper {
        display: flex;
        flex-direction: column;
        height: 128px;
        align-items: center;
        justify-content: center;
      }

      input {
        width: 100%;
        background: linear-gradient(180deg, #000000 0%, #594207 100%);
        /* Yellow Color */
        border: 1px solid #f4cd68;
        border-radius: 8px;
        min-height: 55px;
        color: #fff;
        font-weight: 700;

        &::placeholder {
          font-weight: 700;
          font-family: "mostra-nuova", sans-serif;
          color: #fff;
        }
      }
    }
  }

  .withdraw-input-wrapper-down {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 60px;

    .input-box {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        width: 100%;
        background: linear-gradient(180deg, #000000 0%, #594207 100%);
        /* Yellow Color */
        border: 1px solid #f4cd68;
        border-radius: 8px;
        min-height: 45px;
        max-width: 160px;

        &::placeholder {
          font-weight: 700;
          font-family: "mostra-nuova", sans-serif;
          color: #fff;
        }
      }
    }
  }

  button {
    border: none;
    background: transparent;
    padding: 0px;
    box-shadow: none;
  }

  .mt {
    margin-top: 43px;
  }

  .myland-active {
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 934px; */

    .tabs-btn {
      display: flex;
      gap: 30px;
      padding-top: 74px;

      button {
        border: none;
        background: #1c1f25;
        border-radius: 8px;
        font-weight: 700;
        font-size: 24px;
        color: #ffffff;
        padding: 15px 93px;
      }

      .myland-active {
        border: 1px solid #f4cd68;
        color: #f4cd68;
        transition: all 0.3s ease-in-out;
      }

      .myland-de-active {
        border: none;
        color: #fff;
      }
    }
  }

  hr {
    border-radius: 5px;
    border-top: 3px solid #282c34;
    max-width: 934px;
    width: 100%;
    margin: 30px 0;
  }

  .title-items {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 934px;

    span {
      font-weight: 700;
      font-size: 30px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      border: none;
      background: linear-gradient(180deg, #b91919 0%, #650000 100%);
      border: 1px solid #282c34;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding: 9px 20px;
    }
  }

  .Mr-title-items {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 934px;

    span {
      font-weight: 700;
      font-size: 30px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      border: none;
      background: linear-gradient(180deg, #191fb9 0%, #1a0065 100%);
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding: 6px 20px;
    }
  }

  .tabs {
    display: flex;
    flex-direction: column;
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    /* max-width: 934px; */
    padding: 10px 25px;

    .tabs-btn {
      display: flex;
      gap: 20px;
      border-bottom: 1px solid #282c34;
      padding: 10px;

      button {
        border: none;
        background-color: transparent;
        font-weight: 700;
        font-size: 12px;
        padding: 0 8px;
      }
    }
  }

  .activated-1 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-1::after {
    content: "";
    position: absolute;
    width: 132px;
    background-color: #f4cd68;
    height: 3px;
    border-radius: 5px;
    left: -9px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-2 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-2::after {
    content: "";
    position: absolute;
    width: 140px;
    background-color: #f4cd68;
    height: 3px;
    border-radius: 5px;
    left: 0px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .de-activated {
    font-weight: 700;
    font-size: 12px;
    color: #8f98a8;
    box-shadow: none;
  }

  .table {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(180deg, #000000 0%, #594207 100%);
    border: 1px solid #f4cd68;
    border-radius: 8px;
    width: 100%;
    padding: 10px 30px;
    margin: 0;
    position: relative;

    .th {
      display: flex;
      border-bottom: 1px solid #f4cd68;
      font-weight: 700;
      font-size: 12px;
      color: #f4cd68;
      gap: 0px;
    }

    .th-main {
      display: flex;
      width: 100%;
      align-items: center;
      /* text-align: center; */
    }

    .table-small-wrapper {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 5px;
      margin-left: 19px;
    }

    .td {
      display: flex;
      gap: 40px;
      align-items: center;
    }

    .td-main {
      display: flex;
      align-items: center;
      width: 100%;
      /* text-align: center; */

      .fir-title {
        max-width: 150px;
        width: 100%;
      }

      .fir-title_3 {
        /* display: flex; */
        /* gap: 10px; */
        /* max-width: 115px; */
        width: 220px;
        position: relative;

        &::after {
          content: "bn";
          position: absolute;
          font-size: 11px;
          bottom: 5px;
          left: 74px;
        }
      }

      .fir-title_1 {
        /* max-width: 162px; */
        width: 100%;
        font-size: 14px;
      }

      .fir-title_1:nth-child(6) {
        transform: translate(23px, 0px);
      }

      .gray-title_1 {
        /* display: flex; */
        /* gap: 10px; */
        /* max-width: 225px; */
        /* width: 100%; */
        width: 220px;
      }
      .gray-title_2 {
        /* display: flex; */
        /* gap: 10px; */
        /* min-width: 225px; */
        width: 220px;

        /* span:nth-child(1) {
          color: #8f98a8;
        } */
      }
      .gray-title_3 {
        /* display: flex; */
        /* gap: 10px; */
        /* max-width: 115px; */
        width: 220px;
        position: relative;

        &::after {
          content: "bn";
          position: absolute;
          font-size: 11px;
          bottom: 0px;
          left: 72px;
        }
        /* span:nth-child(1) {
          color: #8f98a8;
        } */
      }
      .gray-title_4 {
        display: flex;
        gap: 10px;
      }
    }
  }
  .table div {
    padding: 2px;
  }

  .bianceImg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .coin-market {
    display: flex;
    gap: 15px;
    /* position: absolute; */
    bottom: 0;
    left: 0;
    padding: 0 !important;
    transform: translate(-13px, -9px);
    width: 800px;
    margin-left: 10px;
  }

  .coin-address {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #a5a5a5;
  }

  .coin-renounded {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #f4cd68;
  }

  .bianceLogo {
    position: absolute;
    right: 0;
    top: 0;
  }

  .polygonImg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .mint-table-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 100%;
    padding: 0px 9px;

    .mint-table {
      display: flex;
      width: 100%;
      padding: 10px 40px;
      /* Yellow Gradient */
      background: linear-gradient(180deg, #000000 0%, #594207 100%);
      /* Yellow Color */
      border: 1px solid #f4cd68;
      border-radius: 8px;
      width: 100%;
      /* max-width: 515px; */
      position: relative;

      .bianceImg {
        display: flex;
        position: absolute;
        top: 7px;
        left: 5px;

        span {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;

          img {
            transform: translate(0px, 2px);
          }
        }
      }

      .mint-item-1 {
        width: 100%;
        transform: translate(0px, 20px);
      }

      .mint-item-2 {
        width: 100%;
        transform: translate(0px, 20px);
      }

      hr {
        background: #f4cd68;
        border-radius: 5px;
        opacity: 1;
        height: 2px;
        margin: 15px 0px;
        border: none;
      }

      .mint-table-th,
      .mint-table-td {
        display: flex;
        justify-content: space-around;
      }

      .th-text-color {
        color: #f4cd68;
        font-weight: 700;
        font-size: 12px;
      }
      #market-price-style {
        transform: translate(16px, 0px);
      }

      .td-text-color {
        color: #fff;
        font-weight: 700;
        font-size: 14px;
      }
    }

    .table-withdraw-btn {
      display: flex;
      align-items: flex-end;

      input {
        width: 100%;
        background: linear-gradient(180deg, #000000 0%, #594207 100%);
        /* Yellow Color */
        border: 1px solid #f4cd68;
        border-radius: 8px;
        max-height: 38px;
        max-width: 150px;
        color: #fff;
        font-weight: 700;

        &::placeholder {
          font-weight: 700;
          font-family: "mostra-nuova", sans-serif;
          color: #fff;
        }
      }

      button {
        background: transparent;
        border: none;
        box-shadow: none;
        /* padding: 0; */
        img {
          transform: translate(0px, 29px);
        }
      }
    }
  }

  @media screen and (max-width: 1380px) {
    .background {
      max-width: 1030px;
    }

    .tabs {
      max-width: 800px;
      margin: 0 auto;
    }

    .table {
      margin: 0 auto !important;
      max-width: 920px;
      overflow-x: scroll;

      .th {
        width: 100%;
        /* min-width: 934px; */
      }

      .td {
        width: 100%;
        /* min-width: 934px; */
      }
      .th-main div {
        /* min-width: 183px; */
      }

      .td-main div {
        /* min-width: 183px; */
      }

      .td-main {
        /* .fir-title {
          max-width: 230px;
        } */
      }
    }
    /* .bianceLogo {
      right: -17rem;
    } */
  }

  @media screen and (max-width: 1280px) {
    .background {
      max-width: 820px;
    }

    .potato-land-tabs {
      .tabs-btn {
        justify-content: center;
      }
      .tabs-btn1 {
        justify-content: center;
      }
    }

    .mint-table-wrapper {
      padding-top: 30px;
      .mint-table {
        flex-direction: column;
      }
    }

    .table {
      max-width: 720px;
      overflow-x: scroll;
      margin: 0px !important;

      .th {
        width: 100%;
        min-width: 1065px;
      }

      .td {
        width: 100%;
        min-width: 934px;
      }
      .th-main div {
        min-width: 183px;
      }

      .td-main div {
        min-width: 203px;
      }

      .td-main {
        .fir-title {
          max-width: 230px;
        }
      }
    }
    .bianceLogo {
      right: -17rem;
    }
  }

  @media screen and (max-width: 1080px) {
    .background {
      max-width: 720px;
      /* margin: 0 auto; */
    }

    .withdraw-input-wrapper-up {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    .background {
      max-width: 680px;
      margin: 0 auto;
    }

    .tabs {
      max-width: 720px;
    }

    .table {
      max-width: 720px;
      overflow-x: scroll;

      .th {
        width: 100%;
        min-width: 1065px;
      }
      .th-main div {
        min-width: 183px;
      }

      .td-main div {
        min-width: 203px;
      }

      .td-main {
        .fir-title {
          min-width: 183px;
        }
      }
    }
    .bianceLogo {
      right: -25rem;
    }
  }

  @media screen and (max-width: 820px) {
    .background {
      max-width: 720px;
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      max-width: 620px;
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      max-width: 620px;
    }
  }

  @media screen and (max-width: 620px) {
    .background {
      max-width: 580px;
      padding: 0px;
    }
  }

  @media screen and (max-width: 420px) {
    .table {
      .th {
        width: 100%;
        min-width: 1090px;
      }
      .th-main div {
        min-width: 183px;
      }

      .td-main div {
        min-width: 189px;
      }

      .td-main {
        .fir-title {
          min-width: 183px;
        }
        .fir-title_1 {
          text-align: center;
        }

        .fir-title_1:nth-child(6) {
          transform: translate(0, 0);
        }
      }
    }
    .bianceLogo {
      right: -38rem;
    }

    .withdraw-input-wrapper-down {
      flex-direction: column;
      max-height: fit-content;
    }
  }

  @media screen and (max-width: 414px) {
    .background {
      max-width: 380px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 375px) {
    .background {
      max-width: 340px;
      margin: 0 auto;

      .tabs {
        .activated-1 {
          font-size: 10px;

          .activated-1::after {
            width: 115px;
          }
        }

        .activated-2 {
          font-size: 10px;

          .activated-2::after {
            width: 115px;
          }
        }

        .de-activated {
          font-size: 10px;
        }
      }
    }

    .myland-active,
    .myland-de-active {
      img {
        max-width: 130px;
      }
    }
  }
`;

export const PepePotatoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 17px;
  max-width: 1100px;
  width: 100%;

  .potato-stats-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    /* max-width: 934px; */
    /* min-height: 439px; */
    background: linear-gradient(180deg, #000000 0%, #594207 100%);
    border: 1px solid #f4cd68;
    border-radius: 8px;
    position: relative;
    gap: 15px;

    .affiliate-links {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      position: absolute;
      right: 0;
    }

    .tax-box {
      display: flex;
      flex-direction: column;
      background: linear-gradient(180.07deg, #473223 -1.92%, #1c0e02 98.15%);
      border-radius: 8px;
      gap: 5px;
      padding: 1px 10px;
      position: absolute;
      border: 1px solid #f4cd68;
      top: 65px;
      right: 10px;
      max-width: 300px;
      min-height: 36px;

      span {
        text-decoration-line: none;
      }
    }

    .contract-wrapper {
      display: flex;
      align-items: center;
      gap: 40px;
      /* justify-content: space-between; */
      padding: 0px 5px;
      /* gap: 90px; */
    }

    .contract-renounced {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column;
      padding: 20px 0px;
      gap: 10px;
    }

    .affiliate-btn {
      display: flex;
      align-items: center;
      gap: 7px;
      justify-content: center;
      width: 108px;
      background: linear-gradient(180.07deg, #473223 -1.92%, #1c0e02 98.15%);
      border-radius: 8px;
      padding: 8px 0px;
      border: 1px solid rgb(244, 171, 104);
    }
    span {
      font-family: "DM Sans";
      font-weight: 700;
      font-size: 12px;
      text-decoration-line: underline;
      color: #f4ab68;
    }
  }

  .contract {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 87px;

    a {
      font-weight: 700;
      font-size: 12px;
      color: #00b800;
      display: flex;
      align-items: flex-end;
      gap: 5px;
      text-decoration: none;
    }
  }

  .address {
    display: flex;
    align-items: center;
    gap: 18px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      text-decoration: none;

      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      color: #a5a5a5;
    }
  }

  .pink-swap {
    display: flex;
    align-items: center;

    .pink-affiliate {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      button {
        border: none;
        background: transparent;
        padding: 0px;
        box-shadow: none;
        max-height: 65px;
      }
      span {
        font-family: "Erica One";
        font-weight: 400;
        font-size: 14px;
        text-decoration-line: underline;
        color: #ffffff;
      }
    }
  }

  .contract-audit-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 10px 15px 32px;

    .audit-btns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 341px;
      width: 100%;
      gap: 15px;

      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 12px;
        /* gap: 10px; */
        width: 100%;
        max-width: 195px;
        min-height: 44px;
        background: linear-gradient(180.07deg, #473223 -1.92%, #1c0e02 98.15%);
        border: 1px solid #f4ab68;
        border-radius: 8px;
        font-weight: 700;
        font-size: 12px;
        color: #f4ab68;
      }
    }

    .coming-wrapper {
      display: flex;
      gap: 60px;
      padding: 0px 10px;
      width: 100%;
      justify-content: flex-start;
      transform: translate(-17px, -9px);
      align-items: center;

      .coming-soon {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        justify-content: end;
        width: 100%;
        max-width: 100px;
        min-height: 117px;
        border: 1px solid rgb(244, 171, 104);
        background: linear-gradient(
          180.07deg,
          rgb(71, 50, 35) -1.92%,
          rgb(28, 14, 2) 98.15%
        );
        border-radius: 8px;
        padding: 0px 5px;
      }
    }
  }

  .background {
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: ${(props) => props.maxWid};
    width: 100%;
    margin: 0 auto;
  }

  .meta-potato-wrapper {
    width: 100%;
  }

  .potato-land-tabs {
    display: flex;
    /* margin-bottom: 20px; */
    gap: 15px;
    align-items: center;

    .tabs-btn {
      display: flex;
      /* justify-content: space-between; */
      gap: 15px;
      width: 100%;

      button {
        border: none;
        background: #1c1f25;
        border-radius: 8px;
        font-weight: 700;
        font-size: 20px;
        color: #ffffff;
        width: 100%;
        min-height: 59px;
        max-width: 175px;
        padding: 0px;
      }
      /* img {
        max-width: 29px;
      } */

      .myland-active {
        border: 1px solid #f4cd68;
        color: #f4cd68;
        transition: all 0.3s ease-in-out;
      }

      .myland-de-active {
        border: none;
        color: #fff;
      }
    }

    img {
      max-width: none;
    }

    .tabs-btn1 {
      display: flex;
      /* justify-content: space-between; */
      gap: 15px;
      width: 100%;
      a {
        width: 100%;
        max-width: 99px;

        button {
          border: none;
          background: #1c1f25;
          border-radius: 8px;
          /* font-weight: 700; */
          /* font-size: 20px; */
          /* color: #ffffff; */
          width: 100%;
          /* min-height: 34px; */
          max-width: 99px;
          padding: 0px;
        }
      }

      /* img {
        max-width: 29px;
      } */

      .myland-active {
        border: 1px solid #f4cd68;
        color: #f4cd68;
        transition: all 0.3s ease-in-out;
      }

      .myland-de-active {
        border: none;
        color: #fff;
      }
    }
  }

  .doller-potato-wrapper {
    display: flex;
  }

  .withdraw-input-wrapper-up {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    /* max-height: 60px; */

    .input-box {
      display: flex;
      align-items: center;
      width: 100%;

      .uniSwap-wrapper {
        display: flex;
        flex-direction: column;
        height: 128px;
        align-items: center;
        justify-content: center;
      }

      input {
        width: 100%;
        background: linear-gradient(180deg, #000000 0%, #594207 100%);
        /* Yellow Color */
        border: 1px solid #f4cd68;
        border-radius: 8px;
        min-height: 55px;
        color: #fff;
        font-weight: 700;

        &::placeholder {
          font-weight: 700;
          font-family: "mostra-nuova", sans-serif;
          color: #fff;
        }
      }
    }
  }

  .withdraw-input-wrapper-down {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 60px;

    .input-box {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        width: 100%;
        background: linear-gradient(180deg, #000000 0%, #594207 100%);
        /* Yellow Color */
        border: 1px solid #f4cd68;
        border-radius: 8px;
        min-height: 45px;
        max-width: 160px;

        &::placeholder {
          font-weight: 700;
          font-family: "mostra-nuova", sans-serif;
          color: #fff;
        }
      }
    }
  }

  button {
    border: none;
    background: transparent;
    padding: 0px;
    box-shadow: none;
  }

  .mt {
    margin-top: 43px;
  }

  .myland-active {
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 934px; */

    .tabs-btn {
      display: flex;
      gap: 30px;
      padding-top: 74px;

      button {
        border: none;
        background: #1c1f25;
        border-radius: 8px;
        font-weight: 700;
        font-size: 24px;
        color: #ffffff;
        padding: 15px 93px;
      }

      .myland-active {
        border: 1px solid #f4cd68;
        color: #f4cd68;
        transition: all 0.3s ease-in-out;
      }

      .myland-de-active {
        border: none;
        color: #fff;
      }
    }
  }

  hr {
    border-radius: 5px;
    border-top: 3px solid #282c34;
    max-width: 934px;
    width: 100%;
    margin: 30px 0;
  }

  .title-items {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 934px;

    span {
      font-weight: 700;
      font-size: 30px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      border: none;
      background: linear-gradient(180deg, #b91919 0%, #650000 100%);
      border: 1px solid #282c34;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding: 9px 20px;
    }
  }

  .Mr-title-items {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 934px;

    span {
      font-weight: 700;
      font-size: 30px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      border: none;
      background: linear-gradient(180deg, #191fb9 0%, #1a0065 100%);
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding: 6px 20px;
    }
  }

  .tabs {
    display: flex;
    flex-direction: column;
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    /* max-width: 934px; */
    padding: 10px 25px;

    .tabs-btn {
      display: flex;
      gap: 20px;
      border-bottom: 1px solid #282c34;
      padding: 10px;

      button {
        border: none;
        background-color: transparent;
        font-weight: 700;
        font-size: 12px;
        padding: 0 8px;
      }
    }
  }

  .activated-1 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-1::after {
    content: "";
    position: absolute;
    width: 132px;
    background-color: #f4cd68;
    height: 3px;
    border-radius: 5px;
    left: -9px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-2 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-2::after {
    content: "";
    position: absolute;
    width: 140px;
    background-color: #f4cd68;
    height: 3px;
    border-radius: 5px;
    left: 0px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .de-activated {
    font-weight: 700;
    font-size: 12px;
    color: #8f98a8;
    box-shadow: none;
  }

  .table {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(180deg, #000000 0%, #594207 100%);
    border: 1px solid #f4cd68;
    border-radius: 8px;
    width: 100%;
    padding: 10px 30px;
    margin: 0 auto;
    position: relative;
    max-width: 1080px;

    .th {
      display: flex;
      border-bottom: 1px solid #f4cd68;
      font-weight: 700;
      font-size: 12px;
      color: #f4cd68;
      gap: 0px;
    }

    .th-main {
      display: flex;
      width: 100%;
      align-items: center;
      /* text-align: center; */
    }

    .table-small-wrapper {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 5px;
      margin-left: 19px;
    }

    .td {
      display: flex;
      gap: 40px;
      align-items: center;
    }

    .td-main {
      display: flex;
      align-items: center;
      width: 100%;
      /* text-align: center; */

      .fir-title {
        max-width: 150px;
        width: 100%;
      }

      .fir-title_3 {
        /* display: flex; */
        /* gap: 10px; */
        /* max-width: 115px; */
        width: 220px;
        position: relative;

        &::after {
          content: "bn";
          position: absolute;
          font-size: 11px;
          bottom: 5px;
          left: 74px;
        }
      }

      .fir-title_1 {
        /* max-width: 162px; */
        width: 100%;
        font-size: 14px;
      }

      .fir-title_1:nth-child(6) {
        transform: translate(23px, 0px);
      }

      .gray-title_1 {
        /* display: flex; */
        /* gap: 10px; */
        /* max-width: 225px; */
        /* width: 100%; */
        width: 220px;
      }
      .gray-title_2 {
        /* display: flex; */
        /* gap: 10px; */
        /* min-width: 225px; */
        width: 220px;

        /* span:nth-child(1) {
          color: #8f98a8;
        } */
      }
      .gray-title_3 {
        /* display: flex; */
        /* gap: 10px; */
        /* max-width: 115px; */
        width: 220px;
        position: relative;

        &::after {
          content: "bn";
          position: absolute;
          font-size: 11px;
          bottom: 0px;
          left: 72px;
        }
        /* span:nth-child(1) {
          color: #8f98a8;
        } */
      }
      .gray-title_4 {
        display: flex;
        gap: 10px;
      }
    }
  }
  .table div {
    padding: 2px;
  }

  .bianceImg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .coin-market {
    display: flex;
    gap: 15px;
    /* position: absolute; */
    bottom: 0;
    left: 0;
    padding: 0 !important;
    transform: translate(-13px, -9px);
    width: 800px;
    margin-left: 10px;
  }

  .coin-address {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #a5a5a5;
  }

  .coin-renounded {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #f4cd68;
  }

  .bianceLogo {
    position: absolute;
    right: 0;
    top: 0;
  }

  .polygonImg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .mint-table-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 100%;
    padding: 10px 9px;

    .mint-table {
      width: 100%;
      padding: 20px 40px;
      /* Yellow Gradient */
      background: linear-gradient(180deg, #000000 0%, #594207 100%);
      /* Yellow Color */
      border: 1px solid #f4cd68;
      border-radius: 8px;
      width: 100%;
      /* max-width: 515px; */
      position: relative;
      min-height: 144px;

      .bianceImg {
        position: absolute;
        top: 7px;
        left: 5px;
      }

      hr {
        background: #f4cd68;
        border-radius: 5px;
        opacity: 1;
        height: 2px;
        margin: 15px 0px;
        border: none;
      }

      .mint-table-th,
      .mint-table-td {
        display: flex;
        justify-content: space-around;
      }

      .th-text-color {
        color: #f4cd68;
        font-weight: 700;
        font-size: 12px;

        #market-price-style {
          transform: translate(16px, 0px);
        }
      }

      .td-text-color {
        color: #fff;
        font-weight: 700;
        font-size: 14px;
      }
    }

    .table-withdraw-btn {
      display: flex;
      align-items: flex-end;

      input {
        width: 100%;
        background: linear-gradient(180deg, #000000 0%, #594207 100%);
        /* Yellow Color */
        border: 1px solid #f4cd68;
        border-radius: 8px;
        max-height: 38px;
        max-width: 150px;
        color: #fff;
        font-weight: 700;

        &::placeholder {
          font-weight: 700;
          font-family: "mostra-nuova", sans-serif;
          color: #fff;
        }
      }

      button {
        background: transparent;
        border: none;
        box-shadow: none;
        /* padding: 0; */
        img {
          transform: translate(0px, 29px);
        }
      }
    }
  }

  @media screen and (max-width: 1380px) {
    max-width: 977px;
    .background {
      max-width: 977px;
    }

    .tabs {
      max-width: 800px;
      margin: 0 auto;
    }

    .table {
      margin: 0 auto !important;
      max-width: 920px;
      overflow-x: scroll;

      .th {
        width: 100%;
        /* min-width: 934px; */
      }

      .td {
        width: 100%;
        /* min-width: 934px; */
      }
      .th-main div {
        /* min-width: 183px; */
      }

      .td-main div {
        /* min-width: 183px; */
      }

      .td-main {
        /* .fir-title {
          max-width: 230px;
        } */
      }
    }
    /* .bianceLogo {
      right: -17rem;
    } */
  }

  @media screen and (max-width: 1280px) {
    max-width: 820px;
    .background {
      max-width: 820px;
    }

    .mint-table-wrapper {
      padding: 30px 10px;

      .mint-table {
        flex-direction: column;
        padding: 10px;
        min-height: 285px;
        max-width: 690px;

        .mint-item-1 {
          padding-top: 25px;
          transform: none;

          #max-supply-th {
            transform: translate(-42px, 0px);
          }
          #circulating-supply-th {
            transform: translate(-18px, 0px);
          }
          #market-cap-th {
            transform: translate(2px, 0px);
          }
          #max-supply-td {
            transform: translate(-23px, 0px);
          }
          #circulating-supply-td {
            transform: translate(-4px, 0px);
          }
          #market-cap-td {
            transform: translate(38px, 0px);
          }
        }

        .mint-item-2 {
          transform: translate(0px, 38px);

          #market-price-th {
            transform: translate(-56px, 0px);
          }
          #team-wallet-th {
            display: flex;
            align-items: center;
            gap: 5px;
            transform: translate(-39px, 0px);
          }
          #cex-wallet-th {
            display: flex;
            align-items: center;
            gap: 5px;
            transform: translate(6px, 0px);
          }
          #market-price-td {
            transform: translate(-31px, 0px);
          }
          #team-wallet-td {
            transform: translate(-28px, 0px);
          }
          #cex-wallet-td {
            transform: translate(-17px, 0px);
          }
        }

        .bianceImg {
          position: initial;
          margin-bottom: 15px;
        }
      }
    }

    .potato-stats-wrapper {
      .tax-box {
        top: 10px;
        padding: 2px 11px;
        transform: translate(0px, 46px);
      }
      .contract-wrapper {
        justify-content: flex-start;
        padding-top: 25px;
      }
      .contract-audit-wrapper {
        flex-direction: row-reverse;

        .audit-btns {
          display: grid;
          max-width: 393px;
        }
        .coming-wrapper {
          padding: 0px;
          gap: 10px;
          justify-content: end;
        }
      }
    }

    .table {
      max-width: 720px;
      overflow-x: scroll;
      margin: 0px !important;

      .th {
        width: 100%;
        min-width: 1065px;
      }

      .td {
        width: 100%;
        min-width: 934px;
      }
      .th-main div {
        min-width: 183px;
      }

      .td-main div {
        min-width: 203px;
      }

      .td-main {
        .fir-title {
          max-width: 230px;
        }
      }
    }
    .bianceLogo {
      right: -17rem;
    }
  }

  @media screen and (max-width: 1080px) {
    .background {
      max-width: 720px;
      /* margin: 0 auto; */
    }

    .withdraw-input-wrapper-up {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    .background {
      max-width: 580px;
    }

    .potato-stats-wrapper {
      .tax-box {
        transform: translate(0px, 0px);
      }
      .contract-wrapper {
        justify-content: flex-start;
        padding-top: 40px;
      }
      .contract-audit-wrapper {
        padding: 0px 25px;

        .audit-btns {
          display: flex;
          max-width: 200px;
        }
        .coming-wrapper {
          gap: 30px;
        }
      }
    }

    .tabs {
      max-width: 720px;
    }

    .table {
      max-width: 720px;
      overflow-x: scroll;

      .th {
        width: 100%;
        min-width: 1065px;
      }
      .th-main div {
        min-width: 183px;
      }

      .td-main div {
        min-width: 203px;
      }

      .td-main {
        .fir-title {
          min-width: 183px;
        }
      }
    }
    .bianceLogo {
      right: -25rem;
    }
  }

  @media screen and (max-width: 820px) {
    .background {
      max-width: 720px;
    }
    .potato-stats-wrapper .contract-audit-wrapper .audit-btns {
      display: grid !important;
      grid-auto-columns: 1fr 1fr;
      max-width: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      max-width: 620px;
    }

    .potato-stats-wrapper {
      max-width: 652px;
      margin: 0 auto;
      .contract-wrapper {
        justify-content: center;
        flex-direction: column;
        gap: 0px;
      }
      .contract-audit-wrapper {
        flex-direction: column;
        .audit-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 493px;
          place-items: center;

          a {
            max-width: 245px;
          }
        }
        .coming-wrapper {
          justify-content: center;
          transform: scale(0.9);

          .coming-soon {
            border: none;
            background: transparent;
            justify-content: end;
          }
        }
      }
    }
  }

  @media screen and (max-width: 620px) {
    .background {
      max-width: 580px;
      padding: 0px;
    }

    .mint-table-wrapper {
      .mint-table {
        #market-price-style {
          transform: translate(-8px, 0px);
        }

        #market-place {
          transform: translate(-31px, 0px);
        }
      }
    }

    .potato-stats-wrapper {
      .tax-box {
        padding: 3px 11px;
        transform: translate(0px, 0px);
      }
      .contract-wrapper {
        justify-content: center;
        flex-direction: column;
        gap: 0px;
      }
      .contract-audit-wrapper {
        flex-direction: column;
        .audit-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 493px;
          place-items: center;

          a {
            max-width: 190px;
          }
        }
        .coming-wrapper {
          transform: scale(0.7);
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    max-width: 450px;
    margin: 0 auto;

    .background {
      max-width: 480px;
      margin: 0 auto;
    }

    .contract {
      justify-content: center;
      gap: 24px;
      -webkit-gap: 24px;
    }

    .pink-swap {
      transform: translate(10px, 20px);
    }

    .potato-stats-wrapper {
      .tax-box {
        top: 9px;
        padding: 3px 11px;
        transform: translate(0px, 0px);
      }
      .affiliate-links {
        transform: scale(0.8);
        right: -23px;
        padding: 0px;
      }
    }

    .potato-stats-wrapper {
      gap: 10px;
      .contract-renounced {
        padding: 0px 20px;
        align-items: center;
        -webkit-align-items: center;
      }
      .contract-wrapper {
        justify-content: center;
        flex-direction: column;
        gap: 0px;

        .contract-renounced {
          .address {
            span {
              font-size: 10px;
            }
            /* transform: scale(0.8); */
          }
        }
      }
      .mint-table-wrapper {
        padding: 0px 10px 15px;

        .mint-table {
          .bianceImg {
            margin-bottom: 40px;
          }

          .mint-table-th {
            #max-supply-th {
              transform: translate(-30px, 0px);
            }
            #circulating-supply-th {
              transform: translate(-10px, 0px);
            }
            #cex-wallet-th {
              display: flex;
              align-items: center;
              transform: translate(-27px, 0px);
            }
            #team-wallet-th {
              display: flex;
              align-items: center;
              gap: 5px;
              transform: translate(7px, 0px);
            }

            #market-price-th {
              transform: translate(-36px, 0px);
            }

            #market-cap-th {
              transform: translate(-40px, 0px);
            }
          }

          .mint-table-td {
            #cex-wallet-td {
              transform: translate(-39px, 0px);
            }
            #team-wallet-td {
              transform: translate(-36px, 0px);
            }
            #market-price-td {
              transform: translate(-37px, 0px);
            }
            #market-cap-td {
              transform: translate(-63px, 0px);
            }
            #max-supply-td {
              transform: translate(-29px, 0px);
            }
            #circulating-supply-td {
              transform: translate(-23px, 0px);
            }
          }

          .td-text-color {
            font-size: 10px;
          }
        }
      }
      .contract-audit-wrapper {
        flex-direction: column;
        padding: 25px 10px;

        .audit-btns {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 493px;

          a {
            max-width: 202px;
          }
        }
        .coming-wrapper {
          transform: translate(-5px, 0px) scale(0.74);

          .uniSwap {
            transform: translate(0px, 10px);
          }
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
    max-width: 375px;
    margin: 0 auto;

    .background {
      max-width: 380px;
      margin: 0 auto;
    }

    .contract {
      justify-content: center;
      gap: 24px;
      -webkit-gap: 24px;
    }

    .pink-swap {
      transform: translate(10px, 20px);
    }

    .potato-stats-wrapper {
      .tax-box {
        top: 9px;
        padding: 3px 11px;
        transform: translate(0px, 0px);
      }
      .affiliate-links {
        transform: scale(0.8);
        right: -23px;
        padding: 0px;
      }
    }

    .potato-stats-wrapper {
      gap: 10px;
      .contract-renounced {
        padding: 0px 20px;
        align-items: center;
        -webkit-align-items: center;
      }
      .contract-wrapper {
        justify-content: center;
        flex-direction: column;
        gap: 0px;

        .contract-renounced {
          .address {
            span {
              font-size: 10px;
            }
            /* transform: scale(0.8); */
          }
        }
      }
      .mint-table-wrapper {
        padding: 0px 10px 15px;

        .mint-table {
          .bianceImg {
            margin-bottom: 40px;
          }

          .mint-table-th {
            #max-supply-th {
              transform: translate(-24px, 0px);
            }
            #circulating-supply-th {
              transform: translate(-10px, 0px);
            }
            #cex-wallet-th {
              display: flex;
              align-items: center;
              transform: translate(-22px, 0px);
            }
            #team-wallet-th {
              display: flex;
              align-items: center;
              gap: 5px;
              transform: translate(4px, 0px);
            }

            #market-price-th {
              transform: translate(-32px, 0px);
            }

            #market-cap-th {
              transform: translate(-40px, 0px);
            }
          }

          .mint-table-td {
            #cex-wallet-td {
              transform: translate(-28px, 0px);
            }
            #team-wallet-td {
              transform: translate(-33px, 0px);
            }
            #market-price-td {
              transform: translate(-35px, 0px);
            }
            #market-cap-td {
              transform: translate(-67px, 0px);
            }
            #max-supply-td {
              transform: translate(-17px, 0px);
            }
            #circulating-supply-td {
              transform: translate(-12px, 0px);
            }
          }
        }
      }
      .contract-audit-wrapper {
        flex-direction: column;
        padding: 25px 10px;

        .audit-btns {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 493px;

          a {
            max-width: 172px;
          }
        }
        .coming-wrapper {
          transform: translate(-5px, 0px) scale(0.74);
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    max-width: 345px;
    margin: 0 auto;

    .background {
      max-width: 350px;
      margin: 0 auto;

      .tabs {
        .activated-1 {
          font-size: 10px;

          .activated-1::after {
            width: 115px;
          }
        }

        .activated-2 {
          font-size: 10px;

          .activated-2::after {
            width: 115px;
          }
        }

        .de-activated {
          font-size: 10px;
        }
      }
    }

    .contract {
      justify-content: center;
      gap: 18px;
      -webkit-gap: 18px;
    }

    .potato-stats-wrapper {
      .affiliate-links {
        transform: scale(0.8);
        right: -23px;
        padding: 0px;
      }
    }

    .mint-table-wrapper {
      .mint-table {
        .td-text-color {
          font-size: 12px;
        }
        #market-price-style {
          transform: translate(-8px, 0px);
        }

        #market-place {
          transform: translate(-31px, 0px);
        }
      }
    }

    .potato-stats-wrapper {
      .contract-wrapper {
        justify-content: center;
        flex-direction: column;
        gap: 0px;

        .contract-renounced {
          .address {
            /* transform: scale(0.8); */

            span {
              font-size: 10px;
            }
          }
        }
      }
      .contract-audit-wrapper {
        flex-direction: column;
        .audit-btns {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 493px;

          a {
            max-width: 145px;
            font-size: 11px;
          }
        }
        .coming-wrapper {
          transform: translate(-5px, 0px) scale(0.65);
        }
      }
    }
  }
`;

export const PotatoNFTContainer = styled("div")`
  .container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 934px;

    @media screen and (max-width: 1240px) {
      max-width: 934px;
    }

    @media screen and (max-width: 1024px) {
      max-width: 803px;
    }
    @media screen and (max-width: 900px) {
      max-width: 764px;
    }
    @media screen and (max-width: 768px) {
      align-items: center;
    }
  }

  .mt {
    margin-top: 43px;
  }

  /* hr {
    border-radius: 5px;
    border-top: 3px solid #282c34;
  } */

  .title-items {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 934px;

    span {
      font-weight: 700;
      font-size: 30px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      border: none;
      background: linear-gradient(180deg, #b91919 0%, #650000 100%);
      border: 1px solid #282c34;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding: 9px 20px;
    }
  }

  .Mr-title-items {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 934px;

    span {
      font-weight: 700;
      font-size: 30px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      border: none;
      background: linear-gradient(180deg, #191fb9 0%, #1a0065 100%);
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding: 6px 20px;
    }
  }

  .tabs {
    display: flex;
    flex-direction: column;
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    max-width: 934px;
    padding: 10px 25px;

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
        padding: 0 8px;
      }
    }
  }

  .activated-1 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
  }

  .activated-1::after {
    content: "";
    position: absolute;
    width: 112px;
    background-color: #f4cd68;
    height: 3px;
    border-radius: 5px;
    left: -9px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-2 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
  }

  .activated-2::after {
    content: "";
    position: absolute;
    width: 110px;
    background-color: #f4cd68;
    height: 3px;
    border-radius: 5px;
    left: 0px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .de-activated {
    font-weight: 700;
    font-size: 12px;
    color: #8f98a8;
  }

  .table {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    background: #1c1f25;
    border-radius: 8px;
    width: 100%;
    padding: 20px;
    margin: 0;

    .th {
      display: flex;
      border-bottom: 1px solid #282c34;
      font-weight: 700;
      font-size: 12px;
      color: #f4cd68;
      gap: 40px;
    }

    .td {
      display: flex;
      gap: 40px;
      align-items: center;
    }
  }
  .table div {
    padding: 5px;
  }
`;

export const OurPartnersContainer = styled("div")`
  padding: 80px 80px 0px 0px;
  .tabs {
    display: flex;
    flex-direction: column;
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    padding: 10px;

    .tabs-btn {
      display: flex;
      gap: 10px;
      border-bottom: 1px solid #282c34;
      padding: 10px;

      button {
        border: none;
        background-color: transparent;
        font-weight: 700;
        font-size: 12px;
        padding: 0 50px;
        box-shadow: none;
      }
    }
  }

  .activated-1 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    transition: all 0.3s ease;
  }

  .activated-1::after {
    content: "";
    position: absolute;
    width: 132px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -9px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-2 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    transition: all 0.3s ease;
  }

  .activated-2::after {
    content: "";
    position: absolute;
    width: 105px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: 20px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-3 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
  }

  .activated-3::after {
    content: "";
    position: absolute;
    width: 120px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: 2px;
    bottom: 0;
    transform: translate(0px, 12px);
    transition: all 0.3s ease;
  }

  .activated-4 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
  }

  .activated-4::after {
    content: "";
    position: absolute;
    width: 130px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -4px;
    bottom: 0;
    transform: translate(0px, 12px);
    transition: all 0.3s ease;
  }

  .activated-5 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
  }

  .activated-5::after {
    content: "";
    position: absolute;
    width: 135px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: 9px;
    bottom: 0;
    transform: translate(0px, 12px);
    transition: all 0.3s ease;
  }

  .activated-6 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
  }

  .activated-6::after {
    content: "";
    position: absolute;
    width: 160px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: 20px;
    bottom: 0;
    transform: translate(0px, 12px);
    transition: all 0.3s ease;
  }

  .de-activated {
    font-weight: 700;
    font-size: 12px;
    color: #8f98a8;
  }
  .our-title {
    display: flex;
    padding: 37px 10px;

    span {
      font-weight: 700;
      font-size: 30px;
    }
  }

  @media screen and (max-width: 1280px) {
    .tabs {
      .tabs-btn {
        button {
          padding: 0 47px;
        }
      }
    }
  }
`;

export const SmallPotatoContainer = styled("div")`
  padding: 10px;
  .main-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    .video-wrapper {
      display: flex;
      gap: 30px;
    }

    video {
      max-width: 100px;
      border-radius: 8px;
    }

    .harvestedbtn {
      display: flex;
      margin-top: 7px;

      input {
        background: #0d0e12;
        border-radius: 8px 0px 0px 8px;
        padding: 13px 30px;
        border: none;
        color: #fff;
        max-width: 180px;
        height: 50px;
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

    .harvestcol {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 12px;
    }
  }

  .potato-token-item {
    display: flex;
    align-items: center;
    gap: 8px;

    div {
      font-weight: 700;
      font-size: 16px;
      color: #8f98a8;

      span {
        color: #fff;
        font-weight: 700;
        font-size: 16px;
      }
    }
  }

  button {
    background: #f4cd68;
    box-shadow: 0px 4px 6px #5a4100;
    /* border-radius: 8px; */
    border: none;
    color: #000;
    padding: 12px 25px;
    border-radius: 0px 8px 8px 0px;
    padding: 13px 30px;
    font-weight: 700;
    font-size: 16px;
    height: 50px;
  }

  @media screen and (max-width: 420px) {
    .harvestedbtn {
      input {
        display: none;
      }
    }

    button {
      border-radius: 8px;
    }
  }
`;

export const LiquidityReflections = styled("div")`
  .liquidity-reflection {
    /* max-width: 934px; */
    /* background: #1c1f25; */
    border-radius: 8px;
    margin-bottom: 50px;
  }

  .activated-1 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-1::after {
    content: "";
    position: absolute;
    width: 185px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -9px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-2 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-2::after {
    content: "";
    position: absolute;
    width: 160px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -8px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-3 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-3::after {
    content: "";
    position: absolute;
    width: 199px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -10px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-4 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-4::after {
    content: "";
    position: absolute;
    width: 150px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -10px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .activated-5 {
    font-weight: 700;
    font-size: 12px;
    color: #f4cd68;
    position: relative;
    box-shadow: none;
  }

  .activated-5::after {
    content: "";
    position: absolute;
    width: 150px;
    background-color: #f4cd68;
    height: 4px;
    border-radius: 5px;
    left: -10px;
    bottom: 0;
    transform: translate(0px, 12px);
  }

  .de-activated {
    font-weight: 700;
    font-size: 12px;
    color: #8f98a8;
    box-shadow: none;
  }

  // Liquidity Bridge Reflections Stlying //

  .liquiditybridgeReflections {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 20px;
    height: 250px;

    span {
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
  }

  .polygon-section {
    display: flex;
    align-items: center;
    gap: 60px;

    .pol-item-1 {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
    }

    .pol-item-2 {
      display: flex;
      gap: 10px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
      }
    }
  }

  .biance-section {
    display: flex;
    align-items: center;
    gap: 60px;

    .bian-item-1 {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
    }

    .bian-item-2 {
      display: flex;
      gap: 10px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
      }
    }
  }

  // NFT Bridge Reflections Stlying //

  .nftbridgeReflections {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 20px;
    height: 250px;

    span {
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
  }

  .polygon-section {
    display: flex;
    align-items: center;
    gap: 60px;

    .pol-item-1 {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
    }

    .pol-item-2 {
      display: flex;
      gap: 10px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
      }
    }
  }

  .biance-section {
    display: flex;
    align-items: center;
    gap: 60px;

    .bian-item-1 {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
    }

    .bian-item-2 {
      display: flex;
      gap: 10px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
      }
    }
  }

  .vote-btn {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding-top: 30px;

    button {
      border: none;
      color: #1f1f1f;
      background: #f4cd68;
      box-shadow: 0px 4px 6px #5a4100;
      border-radius: 8px;
      font-weight: 700;
      font-size: 12px;
      padding: 13px 20px;
    }
  }

  // Opensea Royality Reflections Stlying //

  .openseaRoyalityReflections {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 20px;
    height: 250px;
    position: relative;

    span {
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
  }

  .ship-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .polygon-section {
    display: flex;
    align-items: center;
    gap: 60px;

    .pol-item-1 {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
    }

    .pol-item-2 {
      display: flex;
      gap: 10px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
      }
    }
  }

  .ship-container {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    left: -16px;
    bottom: 0;

    span {
      font-weight: 700;
      font-size: 11px;
      color: #8f98a8;
    }
  }

  // WinSpin Reflections Stlying //

  .winspinReflections {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 20px;
    height: 250px;

    span {
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
  }

  .winSpin-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .biance-section {
    display: flex;
    align-items: center;
    gap: 60px;

    .bian-item-1 {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
    }

    .bian-item-2 {
      display: flex;
      gap: 10px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
      }
    }
  }

  .vote-btn {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding-top: 30px;

    button {
      border: none;
      color: #1f1f1f;
      background: #f4cd68;
      box-shadow: 0px 4px 6px #5a4100;
      border-radius: 8px;
      font-weight: 700;
      font-size: 12px;
      padding: 13px 20px;
    }
  }

  // GameFi Reflections Stlying //

  .gameFireflections {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 20px;
    height: 250px;

    span {
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
  }

  .nftCard-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .polygon-section {
    display: flex;
    align-items: center;
    gap: 60px;

    .pol-item-1 {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
      }
    }

    .pol-item-2 {
      display: flex;
      gap: 10px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
      }
    }
  }

  .vote-btn {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding-top: 30px;

    button {
      border: none;
      color: #1f1f1f;
      background: #f4cd68;
      box-shadow: 0px 4px 6px #5a4100;
      border-radius: 8px;
      font-weight: 700;
      font-size: 12px;
      padding: 13px 20px;
    }
  }
`;

export const MetaPotatoNFTContainer = styled("div")`
  padding: 10px;
  .main-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .harvestedbtn {
      input {
        background: #0d0e12;
        border-radius: 8px 0px 0px 8px;
        padding: 15px 30px;
        border: none;
        color: #fff;
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

    .harvestcol {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 12px;
    }
  }

  .meta-potato-item {
    display: flex;
    align-items: left;
    gap: 8px;
    flex-direction: column;

    div {
      color: #8f98a8;
      padding: 10px;
      span {
        color: #fff;
      }
    }
  }

  button {
    background: #f4cd68;
    box-shadow: 0px 4px 6px #5a4100;
    /* border-radius: 8px; */
    border: none;
    color: #000;
    padding: 12px 25px;
    border-radius: 0px 8px 8px 0px;
    padding: 15px 30px;
    font-weight: 700;
    font-size: 16px;
  }
`;

export const MyLandContainer = styled("div")`
  .background {
    display: flex;
    background: #1c1f25;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    max-width: 934px;
    width: 100%;
    height: 50vh;
  }

  .land-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    max-width: 890px;
    width: 100%;
    gap: 30px;

    .landCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 0;

      img {
        width: 100%;
      }
    }

    .landCard_1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 200px;
      padding: 30px 0;

      img {
        width: 100%;
      }
    }

    .land-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-weight: 700;
        font-size: 16px;
      }

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #f4cd68;
      }

      span:nth-child(3) {
        margin-top: 18px;
        margin-bottom: 30px;
      }

      button {
        border: none;
        color: #1f1f1f;
        background: #f4cd68;
        box-shadow: 0px 4px 6px #5a4100;
        border-radius: 8px;
        padding: 12px 60px;
      }
    }
  }
`;

export const LandSaleContainer = styled("div")`
  .background {
    display: flex;
    background: #1c1f25;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    max-width: 934px;
    width: 100%;
    height: 50vh;
  }
`;

export const HarvestContainer = styled("div")`
  .background {
    display: flex;
    background: #1c1f25;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    max-width: 934px;
    width: 100%;
    height: 50vh;
  }

  .land-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    max-width: 890px;
    width: 100%;
    gap: 30px;

    .landCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 0;

      img {
        width: 100%;
      }
    }

    .landCard_1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 200px;
      padding: 30px 0;

      img {
        width: 100%;
      }
    }

    .land-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        font-weight: 700;
        font-size: 16px;
      }

      span:nth-child(1) {
        font-weight: 700;
        font-size: 16px;
        color: #f4cd68;
      }

      span:nth-child(3) {
        margin-top: 18px;
        margin-bottom: 30px;
      }

      button {
        border: none;
        color: #1f1f1f;
        background: #f4cd68;
        box-shadow: 0px 4px 6px #5a4100;
        border-radius: 8px;
        padding: 12px 60px;
      }
    }
  }
`;

export const StakeContainer = styled("div")`
  width: 100%;
  min-height: 255px;
  border-radius: 8px;
  background: linear-gradient(180deg, #000000 0%, #594207 100%);
  border: 1px solid rgb(244, 205, 104);
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .heading {
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    padding-left: 55px;
  }
  .stake-amount {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .amount {
      width: 100%;
      max-width: 611px;
      min-height: 147px;
      background: linear-gradient(265.43deg, #0d0900 5.8%, #2f2304 96.81%);
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      /* align-items: center;
      justify-content: space-around; */
      .amount-dropdown {
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: center;

        label {
          font-weight: 600;
          font-size: 12px;
          gap: 5px;

          color: #a9a9a9;
          display: flex;
          flex-direction: column;

          input {
            width: 169px;
            height: 27px;
            background: transparent;
            border-radius: 4px;
            border: 1px solid rgb(244, 205, 104);

            &::placeholder {
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              color: #ffffff;
            }
          }
          input:focus {
            outline: none;
            background-color: transparent;
          }
          select {
            width: 169px;
            height: 27px;
            background: transparent;
            border-radius: 4px;
            border: 1px solid rgb(244, 205, 104);

            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            color: #ffffff;

            // for carrot icon

            appearance: none;
            background-image: url("https://res.cloudinary.com/dfjmnwwan/image/upload/v1685430848/AI-NFT%27s/gridicons_dropdown_wdrrs2.png"); /* Specify the path to your custom arrow icon */
            background-repeat: no-repeat;
            background-position: right center;
            padding: 0px 5px;
          }
          select:focus {
            outline: none;
            background-color: transparent;
          }

          select {
            border-radius: 4px;
            border: 1px solid rgb(244, 205, 104);
            /* background: linear-gradient(
              265.43deg,
              #0d0900 5.8%,
              #2f2304 96.81%
            ); */
          }
          select option:hover {
            background-color: #ddd;
          }
        }
      }
      .amount-param {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 5px;

        span {
          font-weight: 600;
          font-size: 12px;

          color: #a9a9a9;
        }
        .params {
          width: 100%;
          max-width: 385px;
          min-height: 31px;
          border: 1px solid rgb(244, 205, 104);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          #active {
            width: 141px;
            background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
            border-radius: 20px;
            text-align: center;
            padding: 4px 0px;
          }
          span {
            font-weight: 600;
            font-size: 14px;
            color: #ffffff;
          }
        }
      }
    }

    .amount-percentage {
      display: flex;
      align-items: center;
      flex-direction: column;

      .percentage {
        display: flex;
        flex-direction: column;
        align-items: center;
        span:nth-child(1) {
          font-weight: 900;
          font-size: 34px;
          background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        #white {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff !important;
          background: transparent;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .stake-amount {
      .amount {
        max-width: 485px;

        min-height: 230px;
      }
    }
    .stake-amount .amount .amount-param .params {
      max-width: 350px;
    }
    .stake-amount .amount .amount-dropdown {
      flex-direction: column;
      gap: 10px;
    }
  }
  @media screen and (max-width: 960px) {
    padding: 10px 0px;

    .heading {
      padding-left: 85px;
    }
    .stake-amount {
      .amount {
        max-width: 250px;
        min-height: 280px;
      }
    }
    .stake-amount .amount .amount-param .params {
      padding: 0px 10px;
      max-width: 169px;
      gap: 3px;

      span {
        font-size: 14px;
      }
    }
    .stake-amount .amount .amount-param {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 43px;
    }
    .stake-amount .amount .amount-dropdown {
      flex-direction: column;
    }
    .stake-amount .amount .amount-param .params #active {
      width: 90px;
      padding: 12px 10px;
    }
  }
  @media screen and (max-width: 820px) {
    .heading {
      padding-left: 95px;
    }
  }
  @media screen and (max-width: 768px) {
    .heading {
      padding-left: 75px;
    }
  }
  @media screen and (max-width: 620px) {
    padding: 10px 0px;

    .heading {
      padding-left: 85px;
    }
    .stake-amount {
      flex-direction: column;

      .amount {
        max-width: 425px;
        /* min-height: 330px; */
      }
    }
    .stake-amount .amount .amount-dropdown label select {
      width: 365px;
    }
    .stake-amount .amount .amount-dropdown label input {
      width: 365px;
    }
    .stake-amount .amount .amount-param .params {
      max-width: 215px;
      padding: 0px 10px;
      gap: 10px;

      span {
        font-size: 14px;
      }
    }
    .stake-amount .amount .amount-param {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 30px;
    }
    .stake-amount .amount .amount-dropdown {
      flex-direction: column;
    }
    .stake-amount .amount .amount-param .params #active {
      width: 129px;
      padding: 20px 0px;
    }
    .stake-amount .amount-percentage {
      flex-direction: row;
      gap: 20px;
    }
  }
  @media screen and (max-width: 420px) {
    margin: 0px 0px 10px;
    padding: 20px 0px 10px;
    max-width: 347px;
    margin: 0 auto 10px;

    .heading {
      padding-bottom: 30px;
      padding-left: 80px;
    }
    .stake-amount {
      flex-direction: column;

      .amount {
        max-width: 350px;
        min-height: 330px;
        margin-bottom: 30px;
      }
    }
    .stake-amount .amount .amount-dropdown label select {
      width: 285px;
    }
    .stake-amount .amount .amount-dropdown label input {
      width: 285px;
    }
    .stake-amount .amount .amount-param .params {
      max-width: 290px;
      padding: 0px 20px;
      gap: 30px;

      span {
        font-size: 13px;
      }
    }
    .stake-amount .amount .amount-param {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 30px;
    }
    .stake-amount .amount .amount-dropdown {
      flex-direction: column;
    }
    .stake-amount .amount .amount-param .params #active {
      width: 185px;
      padding: 24px 0px;
    }
    .stake-amount .amount-percentage {
      flex-direction: row;
      gap: 20px;
    }
  }
  @media screen and (max-width: 375px) {
    margin: 0px 0px 10px;
    align-items: center;
    max-width: 347px;
    margin: 0 auto 10px;

    .heading {
      padding-bottom: 30px;
      padding-left: 0px;
    }
    .stake-amount {
      flex-direction: column;

      .amount {
        max-width: 275px;
        min-height: 310px;
        margin-bottom: 30px;
      }
    }
    .stake-amount .amount .amount-dropdown label select {
      width: 210px;
    }
    .stake-amount .amount .amount-dropdown label input {
      width: 210px;
    }
    .stake-amount .amount .amount-param .params {
      max-width: 215px;
      padding: 0px 18px;
      gap: 11px;

      span {
        font-size: 12px;
      }
    }
    .stake-amount .amount .amount-param {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 30px;
    }
    .stake-amount .amount .amount-dropdown {
      flex-direction: column;
    }
    .stake-amount .amount .amount-param .params #active {
      width: 129px;
      padding: 21px 0px;
    }
    .stake-amount .amount-percentage {
      flex-direction: row;
      gap: 20px;
    }
  }
`;
