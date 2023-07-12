import styled from "styled-components";

export const DollerPotatoContainer = styled("div")`
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
      background: linear-gradient(
        180.07deg,
        rgb(71, 50, 35) -1.92%,
        rgb(28, 14, 2) 98.15%
      );
      border-radius: 8px;
      gap: 5px;
      padding: 1px 10px;
      position: absolute;
      border: 1px solid rgb(244, 205, 104);
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
      padding: 0px 30px;
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
      display: -webkit-box;
      display: -ms-flexbox;
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
    padding: 0px 35px;

    .audit-btns {
      width: 100%;
      flex-direction: column;
      display: flex;
      max-width: 200px;
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
      align-items: flex-end;
      gap: 20px;
      /* padding: 0px 50px 60px 0px; */
      width: 100%;
      justify-content: center;
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
        /* background: #1c1f25; */
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

      .mint-item-1 {
        width: 100%;
        transform: translate(0px, 35px);
      }

      .mint-item-2 {
        width: 100%;
        transform: translate(0px, 35px);
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

    .mint-table-wrapper {
      .mint-table {
        padding: 20px 10px;
      }
    }
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
            transform: translate(-48px, 0px);
          }
          #circulating-supply-th {
            transform: translate(-18px, 0px);
          }

          #max-supply-td {
            transform: translate(-23px, 0px);
          }
          #circulating-supply-td {
            transform: translate(-37px, 0px);
          }
        }

        .mint-item-2 {
          transform: translate(0px, 38px);

          #market-price-th {
            transform: translate(-62px, 0px);
          }
          #team-wallet-th {
            display: flex;
            align-items: center;
            gap: 5px;
            transform: translate(-48px, 0px);
          }
          #cex-wallet-th {
            display: flex;
            align-items: center;
            gap: 5px;
            transform: translate(37px, 0px);
          }
          #market-cap-th {
            transform: translate(-35px, 0px);
          }
          #market-price-td {
            transform: translate(-42px, 0px);
          }
          #team-wallet-td {
            transform: translate(-40px, 0px);
          }
          #cex-wallet-td {
            transform: translate(39px, 0px);
          }
          #market-cap-td {
            transform: translate(-58px, 0px);
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
        /* flex-direction: column; */
        .audit-btns {
          display: flex;
          max-width: 200px;
        }
        .coming-wrapper {
          padding: 0px;
          gap: 10px;
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

    .potato-stats-wrapper {
      .tax-box {
        transform: translate(0px, 0px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      max-width: 620px;
    }

    .potato-stats-wrapper {
      max-width: 652px;
      margin: 0 auto;

      .tax-box {
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
            max-width: 245px;
          }
        }
        .coming-wrapper {
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
        top: 9px;
        padding: 3px 11px;
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
        transform: scale(0.8) translate(18px, 10px);
        /* right: -23px; */
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
              transform: translate(-15px, 0px);
            }
            #team-wallet-th {
              display: flex;
              align-items: center;
              gap: 5px;
              transform: translate(-7px, 0px);
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
              transform: translate(-24px, 0px);
            }
            #team-wallet-td {
              transform: translate(-26px, 0px);
            }
            #market-price-td {
              transform: translate(-46px, 0px);
            }
            #market-cap-td {
              transform: translate(-53px, 0px);
            }
            #max-supply-td {
              transform: translate(-17px, 0px);
            }
            #circulating-supply-td {
              transform: translate(-12px, 0px);
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

        .king-potato-img {
          width: 120px;
        }

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
      max-width: 375px;
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
        /* right: -23px; */
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
              transform: translate(-15px, 0px);
            }
            #team-wallet-th {
              display: flex;
              align-items: center;
              gap: 5px;
              transform: translate(-7px, 0px);
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
              transform: translate(-24px, 0px);
            }
            #team-wallet-td {
              transform: translate(-26px, 0px);
            }
            #market-price-td {
              transform: translate(-46px, 0px);
            }
            #market-cap-td {
              transform: translate(-53px, 0px);
            }
            #max-supply-td {
              transform: translate(-17px, 0px);
            }
            #circulating-supply-td {
              transform: translate(-12px, 0px);
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
            max-width: 172px;
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
        transform: scale(0.8) translate(20px, 5px);
        /* right: -23px; */
        padding: 0px;
      }
    }

    .mint-table-wrapper {
      .mint-table {
        .td-text-color {
          font-size: 10px;
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
