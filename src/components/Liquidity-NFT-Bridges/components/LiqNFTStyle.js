import styled from "styled-components";

export const LiquidityBridContainer = styled("div")`
  .main-wrapper {
    padding: 20px 38px;
  }

  .select-payment-wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .select-item-1 {
      display: flex;
      align-items: center;
      gap: 30px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
        min-width: 219px;
      }

      button {
        display: flex;
        align-items: center;
        border: none;
        color: #515151;
        background: #000000;
        border-radius: 8px;
        max-width: 150px;

        span {
          min-width: 90px;
        }

        img {
          opacity: 0.6;
        }
      }

      .active-color {
        border: 1px solid #f4cd68;

        span {
          color: #f4cd68;
        }

        img {
          opacity: 1;
        }
      }
      .de-active-color {
        border: none;
        span {
          color: #8f98a8;
        }

        img {
          opacity: 0.6;
        }
      }
      input {
        border: none;
        background-color: #0d0e12;
        color: #fff;
        display: none;
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
      .show {
        display: flex;
      }
      .not-show {
        display: none;
      }
      label {
        display: flex;
        align-items: center;
        background: #0d0e12;
        border-radius: 8px;
        max-width: 215px;
        padding: 5px;
        display: none;

        input {
          max-width: 100px;
          border: none;
          color: #fff;
          background: none;
          box-shadow: none;

          &::placeholder {
            font-weight: 700;
            font-size: 16px;
            color: #fff;
          }
        }

        span {
          color: #676767;
        }
      }
    }

    .addWrap {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      align-items: center;

      .tablet--view {
        display: flex;
        gap: 30px;
      }

      span {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
        min-width: 219px;
      }

      button {
        display: flex;
        align-items: center;
        border: none;
        color: #515151;
        background: #000000;
        border-radius: 8px;
        max-width: 150px;

        span {
          min-width: 90px;
        }

        img {
          opacity: 0.6;
        }
      }

      .active-color {
        border: 1px solid #f4cd68;

        span {
          color: #f4cd68;
        }

        img {
          opacity: 1;
        }
      }
      .de-active-color {
        border: none;
        span {
          color: #8f98a8;
        }

        img {
          opacity: 0.6;
        }
      }
      input {
        border: none;
        background-color: #0d0e12;
        color: #fff;
        display: none;
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
      .show {
        display: flex;
      }
      .not-show {
        display: none;
      }
      label {
        display: flex;
        align-items: center;
        background: #0d0e12;
        border-radius: 8px;
        max-width: 215px;
        padding: 5px;
        display: none;

        input {
          max-width: 100px;
          border: none;
          color: #fff;
          background: none;
          box-shadow: none;

          &::placeholder {
            font-weight: 700;
            font-size: 16px;
            color: #fff;
          }
        }

        span {
          color: #676767;
        }
      }
    }
  }

  .opensea {
    display: flex;
    align-items: center;
    margin: 55px 0px 0px;
    gap: 10px;
    justify-content: space-between;

    .opensea-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    span {
      font-weight: 700;
      font-size: 11px;
      color: #8f98a8;
    }

    .enter-amount-btn {
      display: flex;
      flex-direction: column;
      gap: 10px;

      button {
        background: #f4cd68;
        box-shadow: 0px 1px 6px #5a4100;
        border-radius: 8px;
        border: none;
        color: #000000;
        font-weight: 700;
        font-size: 16px;
        padding: 10px 40px;
      }
    }
  }

  .select-NFT-Cards {
    position: absolute;
    -webkit-transform: translate(-3rem, 5rem);
    -ms-transform: translate(-3rem, 5rem);
    transform: translate(-3.8rem, 5rem);
    width: 100%;
    /* max-width: 934px; */
  }

  @media screen and (max-width: 1024px) {
    .select-NFT-Cards {
      max-width: 725px;
    }

    .opensea {
      span {
        max-width: 360px;
      }
    }
  }

  @media screen and (max-width: 1020px) {
    .main-wrapper {
      padding: 20px 0px;
    }

    .select-payment-wrapper {
      .select-item-1 {
        .tablet--view {
          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          gap: 10px;
        }

        span {
          min-width: 200px;
        }

        button {
          padding: 5px 20px;
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }

      .addWrap {
        .tablet--view {
          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          gap: 10px;
        }

        span {
          min-width: 90px;
        }

        button {
          padding: 0px 20px;
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }
    }
    .opensea {
      flex-direction: column;
      gap: 20px;

      .enter-amount-btn {
        span {
          text-align: center;
          max-width: 350px;
        }
      }
    }

    .select-NFT-Cards {
      transform: translate(-1.8rem, 5rem);
    }
  }

  @media screen and (max-width: 768px) {
    .select-NFT-Cards {
      transform: translate(-4.8rem, 5rem);
    }
  }

  @media screen and (max-width: 920px) {
    .select-NFT-Cards {
      transform: translate(-4.8rem, 5rem);
    }
  }

  @media screen and (max-width: 540px) {
    .select-NFT-Cards {
      max-width: 300px;
      margin: 0 auto;
      transform: translate(77px, 76px);
    }
  }

  @media screen and (max-width: 490px) {
    .main-wrapper {
      padding: 20px 0px;
    }

    .select-payment-wrapper {
      .addWrap {
        justify-content: center;
        span {
          min-width: 265px;
        }
      }

      .select-item-1 {
        gap: 10px;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;

        span {
          min-width: 90px;
        }

        button {
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }
    }
    .opensea {
      flex-direction: column;

      .enter-amount-btn {
        span {
          text-align: center;
        }
      }
    }

    .select-NFT-Cards {
      transform: translate(-1.8rem, 5rem);
    }
  }

  @media screen and (max-width: 414px) {
    .main-wrapper {
      padding: 20px 0px;
    }

    .select-payment-wrapper {
      .addWrap {
        justify-content: center;
        span {
          min-width: 195px;
        }
      }

      .select-item-1 {
        gap: 10px;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;

        span {
          min-width: 90px;
          font-size: 14px;
        }

        button {
          padding: 5px;
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }
    }
    .opensea {
      flex-direction: column;

      .enter-amount-btn {
        span {
          text-align: center;
        }
      }
    }

    .select-NFT-Cards {
      transform: translate(-1.8rem, 5rem);
    }
  }

  @media screen and (max-width: 375px) {
    .main-wrapper {
      padding: 20px 0px;
    }

    .select-payment-wrapper {
      .addWrap {
        justify-content: center;
        span {
          min-width: 195px;
        }
      }

      .select-item-1 {
        gap: 10px;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;

        span {
          min-width: 90px;
          font-size: 14px;
        }

        button {
          padding: 5px;
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }
    }
    .opensea {
      flex-direction: column;

      .enter-amount-btn {
        span {
          text-align: center;
        }
      }
    }

    .select-NFT-Cards {
      transform: translate(-1.8rem, 5rem);
    }
  }
`;

export const NFTBridContainer = styled("div")`
  .main-wrapper {
    padding: 20px 38px;
  }

  .select-payment-wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .select-item-1 {
      display: flex;
      align-items: center;
      gap: 30px;

      span {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
        min-width: 219px;
      }

      button {
        display: flex;
        align-items: center;
        border: none;
        color: #515151;
        background: #000000;
        border-radius: 8px;
        max-width: 150px;

        span {
          min-width: 90px;
        }

        img {
          opacity: 0.6;
        }
      }

      .active-color {
        border: 1px solid #f4cd68;

        span {
          color: #f4cd68;
        }

        img {
          opacity: 1;
        }
      }
      .de-active-color {
        border: none;
        span {
          color: #8f98a8;
        }

        img {
          opacity: 0.6;
        }
      }
      input {
        border: none;
        background-color: #0d0e12;
        color: #fff;
        display: none;
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
      .show {
        display: flex;
      }
      .not-show {
        display: none;
      }
      label {
        display: flex;
        align-items: center;
        background: #0d0e12;
        border-radius: 8px;
        max-width: 215px;
        padding: 5px;
        display: none;

        input {
          max-width: 100px;
          border: none;
          color: #fff;
          background: none;
          box-shadow: none;

          &::placeholder {
            font-weight: 700;
            font-size: 16px;
            color: #fff;
          }
        }

        span {
          color: #676767;
        }
      }
    }

    .addWrap {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      align-items: center;

      .tablet--view {
        display: flex;
        gap: 30px;
      }

      span {
        font-weight: 700;
        font-size: 16px;
        color: #8f98a8;
        min-width: 219px;
      }

      button {
        display: flex;
        align-items: center;
        border: none;
        color: #515151;
        background: #000000;
        border-radius: 8px;
        max-width: 150px;

        span {
          min-width: 90px;
        }

        img {
          opacity: 0.6;
        }
      }

      .active-color {
        border: 1px solid #f4cd68;

        span {
          color: #f4cd68;
        }

        img {
          opacity: 1;
        }
      }
      .de-active-color {
        border: none;
        span {
          color: #8f98a8;
        }

        img {
          opacity: 0.6;
        }
      }
      input {
        border: none;
        background-color: #0d0e12;
        color: #fff;
        display: none;
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
      .show {
        display: flex;
      }
      .not-show {
        display: none;
      }
      label {
        display: flex;
        align-items: center;
        background: #0d0e12;
        border-radius: 8px;
        max-width: 215px;
        padding: 5px;
        display: none;

        input {
          max-width: 100px;
          border: none;
          color: #fff;
          background: none;
          box-shadow: none;

          &::placeholder {
            font-weight: 700;
            font-size: 16px;
            color: #fff;
          }
        }

        span {
          color: #676767;
        }
      }
    }
  }

  .opensea {
    display: flex;
    align-items: center;
    margin: 55px 0px 0px;
    gap: 10px;
    justify-content: space-between;

    .opensea-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    span {
      font-weight: 700;
      font-size: 11px;
      color: #8f98a8;
    }

    .enter-amount-btn {
      display: flex;
      flex-direction: column;
      gap: 10px;

      button {
        background: #f4cd68;
        box-shadow: 0px 1px 6px #5a4100;
        border-radius: 8px;
        border: none;
        color: #000000;
        font-weight: 700;
        font-size: 16px;
        padding: 10px 40px;
      }
    }
  }

  .select-NFT-Cards {
    position: absolute;
    -webkit-transform: translate(-3rem, 5rem);
    -ms-transform: translate(-3rem, 5rem);
    transform: translate(-3.8rem, 5rem);
    width: 100%;
    /* max-width: 934px; */
  }

  @media screen and (max-width: 1024px) {
    .select-NFT-Cards {
      max-width: 725px;
    }

    .opensea {
      span {
        max-width: 360px;
      }
    }
  }

  @media screen and (max-width: 1020px) {
    .main-wrapper {
      padding: 20px 0px;
    }

    .select-payment-wrapper {
      .select-item-1 {
        .tablet--view {
          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          gap: 10px;
        }

        span {
          min-width: 200px;
        }

        button {
          padding: 5px 20px;
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }

      .addWrap {
        .tablet--view {
          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          gap: 10px;
        }

        span {
          min-width: 90px;
        }

        button {
          padding: 0px 20px;
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }
    }
    .opensea {
      flex-direction: column;
      gap: 20px;

      .enter-amount-btn {
        span {
          text-align: center;
          max-width: 350px;
        }
      }
    }

    .select-NFT-Cards {
      transform: translate(-1.8rem, 5rem);
    }
  }

  @media screen and (max-width: 768px) {
    .select-NFT-Cards {
      transform: translate(-4.8rem, 5rem);
    }
  }

  @media screen and (max-width: 920px) {
    .select-NFT-Cards {
      transform: translate(-4.8rem, 5rem);
    }
  }

  @media screen and (max-width: 540px) {
    .select-NFT-Cards {
      max-width: 300px;
      margin: 0 auto;
      transform: translate(77px, 76px);
    }
  }

  @media screen and (max-width: 490px) {
    .main-wrapper {
      padding: 20px 0px;
    }

    .select-payment-wrapper {
      .addWrap {
        justify-content: center;
        span {
          min-width: 265px;
        }
      }

      .select-item-1 {
        gap: 10px;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;

        span {
          min-width: 90px;
        }

        button {
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }
    }
    .opensea {
      flex-direction: column;

      .enter-amount-btn {
        span {
          text-align: center;
        }
      }
    }

    .select-NFT-Cards {
      transform: translate(-1.8rem, 5rem);
    }
  }

  @media screen and (max-width: 414px) {
    .main-wrapper {
      padding: 20px 0px;
    }

    .select-payment-wrapper {
      .addWrap {
        justify-content: center;
        span {
          min-width: 195px;
        }
      }

      .select-item-1 {
        gap: 10px;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;

        span {
          min-width: 90px;
          font-size: 14px;
        }

        button {
          padding: 5px;
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }
    }
    .opensea {
      flex-direction: column;

      .enter-amount-btn {
        span {
          text-align: center;
        }
      }
    }

    .select-NFT-Cards {
      transform: translate(-1.8rem, 5rem);
    }
  }

  @media screen and (max-width: 375px) {
    .main-wrapper {
      padding: 20px 0px;
    }

    .select-payment-wrapper {
      .addWrap {
        justify-content: center;
        span {
          min-width: 195px;
        }
      }

      .select-item-1 {
        gap: 10px;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;

        span {
          min-width: 90px;
          font-size: 14px;
        }

        button {
          padding: 5px;
          img {
            max-width: 40px;
          }
          span {
            min-width: 51px;
            font-size: 14px;
          }
        }

        .active-color {
          padding: 5px;
        }

        .show {
          display: flex;
          width: 100%;
          max-width: 430px;

          span {
            min-width: 109px;
          }
        }
      }
    }
    .opensea {
      flex-direction: column;

      .enter-amount-btn {
        span {
          text-align: center;
        }
      }
    }

    .select-NFT-Cards {
      transform: translate(-1.8rem, 5rem);
    }
  }
`;
