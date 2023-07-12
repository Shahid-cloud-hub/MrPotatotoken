import styled from "styled-components";

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .auto-selected-prod-img-wrapper {
    display: flex;
    flex-direction: column;
    gap: 17px;
    background: #19180e;
    border-radius: 12px;
    width: 100%;
    max-width: max-content;
    padding: 17px;

    .selected-image-wrapper {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .active {
      border: 3px solid #1eff27;
      border-radius: 16px;
    }

    .de-active {
      border: none;
    }

    span {
      color: #fff;
      font-weight: 700;
      font-size: 20px;
    }

    img {
      cursor: pointer;
    }
  }

  .backgroundMerchandise {
    display: flex;
    width: 100%;
    background: #19180e;
    border-radius: 12px;
  }

  /* .meta-potato-card-wrapper {
    display: flex;
    gap: 45px;
    width: 100%;
    background: #19180e;

    margin: 0 auto;

    .custom-next-arrow,
    .custom-prev-arrow {
      position: relative;
      border: none;
      box-shadow: none;
      background: transparent;
      margin: 0px;
      img {
        position: absolute;
        transform: translate(-50px, -62px);
      }
    }

    .slick-slide {
      width: 500px !important;
    }
    .slider-wrapper {
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
    }
    .slick-track {
      width: 100%;
      height: 450px;

      max-width: 670px;
    }
    .slick-slide > div {
      outline: none;
    }
    .slick-list {
      width: 499px;
      max-height: 565px;
    }
  } */

  .hide {
    display: none;
  }
  .background {
    width: 100%;
  }

  @media screen and (max-width: 1080px) {
    hr {
      display: none;
    }

    .auto-selected-prod-img-wrapper {
      .selected-image-wrapper {
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }

    .backgroundMerchandise {
      .prod-item {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .prod-img-wrapper {
          width: 92%;
        }

        .prod-description {
          width: 42%;

          .sizes-container {
            gap: 0px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .bannerImage {
      background-size: contain;
      height: 240px !important;
    }
    hr {
      display: block;
    }
  }

  @media screen and (max-width: 820px) {
    .background {
      max-width: 690px;
      margin: 0 auto 30px;
    }
    .horizontal-row {
      hr {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 540px) {
    .background {
      max-width: 490px;
      margin: 0 auto 30px;
    }
    .horizontal-row {
      hr {
        display: flex;
      }
    }
    .backgroundMerchandise {
      .prod-item {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .prod-img-wrapper {
          width: 92%;
        }

        .prod-description {
          width: 80%;

          .sizes-container {
            gap: 20px;
          }
        }
      }
    }
  }

  .bannerImage {
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 303px;
    max-width: 1291px;
    margin: 0px auto 20px;

    h2 {
      font-weight: 700;
      letter-spacing: 2px;
    }
  }

  @media screen and (max-width: 820px) {
    .bannerImage {
      background-size: contain;
      min-height: 360px;
      height: 100%;
      width: 100%;

      margin-top: 0;
    }
    .productContainer {
      gap: 0 !important;

      .prod-section {
        gap: 35px;
        max-width: 550px;
        margin: 0 auto;

        .prod-item {
          max-width: 242px;
          min-height: 292px;

          img {
            max-width: 215px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .bannerImage {
      background-size: contain;
      min-height: 360px;
      height: 100%;
      width: 100%;

      margin-top: 0;
    }
    .productContainer {
      gap: 0 !important;

      .prod-section {
        gap: 35px;
        max-width: 550px;
        margin: 0 auto;

        .prod-item {
          max-width: 242px;
          min-height: 292px;

          img {
            max-width: 215px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 540px) {
    .bannerImage {
      background-size: contain;
      min-height: 255px;
      height: 100%;
      width: 100%;

      margin-top: 0;

      h2 {
        font-size: 18px;
      }
    }
    .productContainer {
      gap: 0 !important;

      .prod-section {
        gap: 10px;
        max-width: 500px;
        margin: 0 auto;

        .prod-item {
          max-width: 242px;
          min-height: 292px;

          img {
            max-width: 215px;
          }

          .prod-description span:nth-child(1) {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 514px) {
    .bannerImage {
      background-size: contain;
      min-height: 182px;
      height: 100%;
      width: 100%;

      margin-top: 0;

      h2 {
        font-size: 15px;
      }
    }
    .productContainer {
      gap: 0 !important;

      .prod-section {
        gap: 0px;
        max-width: 500px;
        margin: 0 auto;
        padding: 5px 5px 30px;

        .prod-item {
          max-width: 170px;
          min-height: 170px;
          margin-bottom: 20px;

          img {
            max-width: 144px;
          }

          .prod-title {
            span:nth-child(1) {
              font-weight: 700;
              font-size: 10px;
            }

            span:nth-child(2) {
              font-weight: 700;
              font-size: 10px;
            }
          }

          .prod-description {
            span:nth-child(1) {
              font-weight: 700;
              font-size: 10px;
            }

            span:nth-child(2) {
              font-weight: 700;
              font-size: 10px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    .bannerImage {
      background-size: contain;
      min-height: 194px;
      height: 100%;
      width: 100%;

      margin-top: 0;

      h2 {
        font-size: 18px;
      }
    }
    .productContainer {
      gap: 0 !important;

      .prod-section {
        gap: 10px;
        max-width: 500px;
        margin: 0 auto;

        .prod-item {
          max-width: 242px;
          min-height: 292px;

          img {
            max-width: 215px;
          }

          .prod-description span:nth-child(1) {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 412px) {
    .background {
      max-width: 375px;
      margin: 0 auto 30px;
    }
    .horizontal-row {
      hr {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 390px) {
    .bannerImage {
      background-size: contain;
      min-height: 182px;
      height: 100%;
      width: 100%;

      margin-top: 0;

      h2 {
        font-size: 15px;
      }
    }

    .productContainer {
      gap: 0 !important;
      padding: 0px 5px;

      .prod-section {
        gap: 10px;
        max-width: 500px;
        margin: 0 auto;

        .prod-item {
          max-width: 242px;
          min-height: 292px;

          img {
            max-width: 215px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .bannerImage {
      background-size: contain;
      min-height: 182px;
      height: 100%;
      width: 100%;

      margin-top: 0;

      h2 {
        font-size: 15px;
      }
    }
    .background {
      .product-wrapper {
        .checkout-btn {
          button {
            width: 100%;
          }
        }
      }
      .productContainer {
        /* gap: 0 !important; */
        padding: 0px 5px;
        flex-direction: row;
        flex-wrap: wrap;

        .prod-item {
          max-width: 167px;
          min-height: 170px;
          margin-bottom: 0px;

          img {
            max-width: 144px;
          }

          .prod-title {
            span:nth-child(1) {
              font-weight: 700;
              font-size: 10px;
            }

            span:nth-child(2) {
              font-weight: 700;
              font-size: 10px;
            }
          }

          .prod-description {
            span:nth-child(1) {
              font-weight: 700;
              font-size: 10px;
            }

            span:nth-child(2) {
              font-weight: 700;
              font-size: 10px;
            }
          }
        }
      }
    }
  }

  .horizontal-row {
    width: 100%;
    max-width: 1150px;
    margin: 0px auto 20px;

    hr {
      border-top: 2px solid #282c34;
      opacity: 1;
    }
  }

  button {
    padding: 10px 20px;
    width: 100%;
    max-width: 192px;
    min-height: 42px;
    background: linear-gradient(180deg, #0f120f 39.58%, #225321 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px #50ff6c;
    border-radius: 12px;
    color: #89ffa3;
    font-size: 14px;
    text-shadow: 0px 0px 30px #000000;
    font-family: "mostra-nuova";
    border: none;
    margin-bottom: 20px;
  }

  .prod-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0px;
    gap: 24px;
    width: 100%;
    max-width: 830px;
    min-height: 371px;
    margin: 0 auto;

    .prod-img-wrapper {
      display: flex;
      justify-content: center;
      width: 50%;

      .image-bg {
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
          180deg,
          rgba(218, 134, 56, 0.25) 0%,
          rgba(203, 189, 63, 0.25) 100%
        );
        border-radius: 12px;
        min-height: 311px;
        width: 100%;
        max-width: 305px;
        min-height: 311px;
      }
    }

    a img {
      max-width: 275px;
    }
  }

  .prod-title {
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
    /* justify-content: space-between; */
    /* padding: 10px; */

    span:nth-child(1) {
      background: linear-gradient(90deg, #997b60 -8.82%, #ffeb33 111.76%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      font-size: 20px;
      font-family: "mostra-nuova";
    }
    span:nth-child(2) {
      color: #f8b26a;
      font-weight: 700;
      font-size: 20px;
      font-family: "mostra-nuova";
    }
  }

  .prod-description {
    display: flex;
    flex-direction: column;
    padding: 0px 12px;
    width: 50%;

    .name {
      color: #ffffff;
      font-weight: 700;
      font-size: 29px;
      font-family: "mostra-nuova";
      margin-bottom: 35px;
    }

    .sizes {
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
      font-family: "mostra-nuova";
      margin-bottom: 15px;
    }

    span {
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
      font-family: "mostra-nuova";
    }

    .shipping,
    .shipping_desc {
      font-weight: 300;
      font-size: 14px;
      color: #ffffff;
    }

    .sizes-container {
      display: flex;
      border-radius: 6px;
      background: #f6f8f9;
      gap: 20px;
      max-width: 223px;
      margin-bottom: 20px;

      .size-box {
        padding: 10px 15px;
        border-radius: 6px;
        background: #f6f8f9;
        color: #000;
        font-family: "mostra-nuova";
        cursor: pointer;
      }

      .active {
        background: #e5e9eb;
        font-weight: 700;
      }
    }
  }

  // Product Page Styling //

  .product-wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 10px 0px;
    width: 100%;

    .img-wrapper {
      width: 100%;
      max-width: 412px;

      img {
        max-width: 411px;
      }
    }

    .checkout-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 450px;
      position: relative;
      span {
        font-family: "mostra-nuova";

        font-weight: 300;
        font-size: 14px;
        color: #9c9c9c;
      }
      .nftHoodie {
        display: flex;
        justify-content: space-between;
        span {
          font-family: "mostra-nuova";
          font-weight: 700;
          font-size: 36px;
          color: #f8b26a;
        }
      }

      .gift-img {
        display: flex;
        /* justify-content: flex-end; */
        width: 100%;
        /* position: absolute; */
        top: 70px;
        span {
          font-family: "mostra-nuova";

          font-weight: 500;
          font-size: 14px;
          color: #fff;
        }
      }

      .product_title {
        font-weight: 700;
        color: #ffffff;
        font-size: 34px;
        margin-bottom: 10px;
      }

      span {
        font-family: "DM Sans";
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 0.035em;
      }

      hr {
        border: 1px solid #fff;
        width: 100%;
        max-width: 540px;
        margin: 0;
      }

      .colorBoxes--wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 0.06em;
        }

        .colorBoxes {
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: flex-start;

          .whitebox {
            width: 42px;
            min-height: 42px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            border-radius: 8px;
          }

          .blackbox {
            width: 42px;
            min-height: 42px;
            background-color: #000;
            border: 1px solid #fff;
            cursor: pointer;
            position: relative;
            border-radius: 8px;
          }
          .active::after {
            content: "";
            position: absolute;
            width: 42px;
            border: 1px solid #fff;
            bottom: 0;
            transform: translate(-1px, 9px);
          }
        }
      }

      .checkout-btn {
        button {
          /* background: #f4cd68; */
          border-radius: 8px;
          border: none;
          color: #fff;
          /* width: 100%; */
          padding: 20px;
          font-weight: 500;
          font-size: 18px;
          letter-spacing: 0.035em;
          background: linear-gradient(180deg, #fab263 0%, #5f3a12 80.03%);
          border-radius: 8px;
        }
      }
      .prod-text {
        display: flex;
        flex-direction: column;
        font-size: 12px;

        span {
          font-weight: 700;
          font-size: 14px;
          color: #ffffff;
          letter-spacing: 0.06em;
        }
        span:nth-child(2) {
          font-weight: 300;
        }
      }
    }
  }

  .m-active::after {
    content: "";
    position: absolute;
    width: 42px;
    border: 1px solid #fff;
    bottom: 0;
    transform: translate(0px, 7px);
  }

  .css-1s2u09g-control {
    background-color: #000;
    color: #fff;
  }

  .css-qc6sy-singleValue {
    color: #fff;
  }

  .select__control--is-focused {
    background-color: #000;
  }

  @media screen and (max-width: 1024px) {
    .product-wrapper {
      flex-direction: column;
      max-width: 402px;
      margin: 0 auto 30px;
    }
  }

  @media screen and (max-width: 912px) {
    .product-wrapper {
      flex-direction: column;
      max-width: 402px;
      margin: 0 auto 30px;
    }
  }

  @media screen and (max-width: 820px) {
    .product-wrapper {
      flex-direction: column;
      max-width: 402px;
      margin: 0 auto 30px;
    }
    .checkout-btn {
      button {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 540px) {
    .product-wrapper {
      padding: 0;
      gap: 30px;
      max-width: 340px;

      .img-wrapper {
        max-width: 339px;
        margin: 0 auto;

        img {
          max-width: 425px;
          width: 100%;
        }
      }

      .checkout-wrapper {
        max-width: 342px;

        .product_title {
          font-size: 33px;
        }
        .prod-text span:nth-child(2) {
          font-weight: 400;
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    .product-wrapper {
      padding: 0;
      gap: 30px;

      .img-wrapper {
        max-width: 339px;
        margin: 0 auto;

        img {
          max-width: 425px;
          width: 100%;
        }
      }

      .checkout-wrapper {
        max-width: 342px;
        margin: 0 auto;

        .product_title {
          font-size: 33px;
        }

        .prod-text span:nth-child(2) {
          font-weight: 400;
        }
      }
    }
  }

  @media screen and (max-width: 514px) {
    .product-wrapper {
      flex-direction: column;
      padding: 15px;
      gap: 15px;

      .img-wrapper {
        max-width: 339px;
        margin: 0 auto;

        img {
          max-width: 425px;
          width: 100%;
        }
      }

      .checkout-wrapper {
        max-width: 342px;
        .checkout-btn {
          button {
            width: 100%;
          }
        }
        .product_title {
          font-size: 28px;
        }

        .prod-text span:nth-child(2) {
          font-weight: 400;
        }
      }
    }
  }

  // Add To Cart //

  .add-to-cart-wrapper {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    gap: 30px;
    padding: 40px 0px 20px;
    width: 100%;

    .personal--information {
      max-width: 472px;
      background: #ffffff;
      box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
      padding: 60px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
        margin: 0;
      }

      .info--item-1 {
        display: flex;
        gap: 10px;

        input {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
          padding: 12px;
          max-width: 171px;
          min-height: 44px;
          width: 100%;
        }
      }

      .location--item-2 {
        width: 100%;
        input {
          padding: 12px;
          width: 100%;
          max-width: 352px;
          min-height: 44px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
        }
      }

      .info--item-3 {
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #000000;
          margin: 0;
        }

        input {
          padding: 12px;
          width: 100%;
          max-width: 352px;
          min-height: 44px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
        }

        textarea {
          max-width: 352px;
          height: 128px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
          width: 100%;

          &::placeholder {
            padding: 12px;
          }
        }
      }

      .info--item-4 {
        display: flex;
        gap: 6px;

        span {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #000000;
        }
        .asterisk {
          color: red;
          font-size: 14px;
        }
      }

      .info-item-5 {
        display: flex;
        flex-direction: column;

        .react-tel-input .flag-dropdown {
          position: initial;
          transform: translate(10px, -23px);
          background: none;
          border: none;

          &:hover {
            background: initial;
          }
        }

        .react-tel-input .selected-flag {
          width: 78px;
          padding: 0 0 0 12px;
        }

        .react-tel-input .country-list .country-name {
          color: #000;
        }

        .react-tel-input .country-list {
          transform: translate(7px, 20px);
        }
      }
    }

    .validate {
      color: red;
      padding: 5px 12px;
    }

    .product-info-wrapper {
      max-width: 372px;
      background: #ffffff;
      box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
      padding: 60px;
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
        margin: 0;
      }

      .info-section {
        padding-top: 25px;
        label {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: #000000;
          margin: 0;
        }

        .info--item-1 {
          display: flex;
          gap: 10px;

          .color-section,
          .size-section {
            img {
              margin-right: 5px;
            }
          }

          input {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            padding: 12px;
            max-width: 171px;
            min-height: 44px;
            width: 100%;
          }
        }

        .price-box {
          display: flex;
          flex-direction: column;

          .price-label {
            img {
              margin-right: 5px;
            }
          }

          input {
            padding: 12px;
            width: 100%;
            max-width: 352px;
            min-height: 44px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
          }
        }
      }

      .edit-btn {
        padding-top: 50px;
        button {
          background: #2b2b2b;
          border-radius: 5px;
          border: none;
          width: 100%;
          color: #fff;
          padding: 12px;
        }
      }
    }
  }

  .product-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    .closeImg {
      display: flex;
      gap: 10px;
      font-size: 22px;
      /* transform: translate(-15px, 30px); */
    }
  }

  .accetp-btn {
    width: 100%;
    max-width: 875px;
    margin: 0 auto;
    padding-bottom: 50px;

    button {
      background: #5e6ebf;
      border-radius: 15px;
      border: none;
      width: 100%;
      padding: 20px;
      color: #fff;
    }
  }

  .congrats-banner {
    transform: translate(25px, -82%);
    position: absolute;
  }

  @media screen and (max-width: 1280px) {
    .congrats-banner {
      transform: translate(13px, -82%);
    }
  }

  @media screen and (max-width: 1080px) {
    .product-title {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      gap: 40px;
      align-items: center;

      .closeImg {
        transform: translate(231px, 0px);
      }
    }

    .add-to-cart-wrapper {
      padding-top: 24px;
      flex-direction: column;
      max-width: 550px;
      margin: 0 auto;

      .personal--information {
        max-width: 555px;
        padding: 60px;

        .info--item-1 {
          input {
            max-width: 222px;
          }
        }

        .location--item-2 {
          input {
            max-width: 435px;
          }
        }

        .info--item-3 {
          input {
            max-width: 435px;
          }
          textarea {
            max-width: 435px;
          }
        }
      }

      .product-info-wrapper {
        max-width: 555px;
        padding: 60px;

        .info-section {
          .info--item-1 {
            input {
              max-width: 215px;
              width: 100%;
            }
          }

          .price-box {
            input {
              max-width: 435px;
            }
          }
        }
      }
    }

    .accetp-btn {
      padding: 30px 127px;
    }

    .congrats-banner {
      transform: translate(-4px, -101%);

      img {
        max-width: 730px;
      }
    }
  }

  @media screen and (max-width: 920px) {
    .congrats-banner {
      transform: translate(26px, -82%);

      img {
        max-width: 557px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .product-title {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      gap: 40px;
      align-items: center;

      .closeImg {
        transform: translate(179px, 0px);
      }
    }

    .add-to-cart-wrapper {
      padding-top: 24px;
      max-width: 480px;

      .personal--information {
        max-width: 480px;
        padding: 60px;

        .info--item-1 {
          input {
            max-width: 175px;
          }
        }

        .location--item-2 {
          input {
            max-width: 380px;
          }
        }

        .info--item-3 {
          input {
            max-width: 380px;
          }
          textarea {
            max-width: 389px;
          }
        }
      }

      .product-info-wrapper {
        max-width: 480px;
        padding: 60px;

        .info-section {
          .info--item-1 {
            input {
              max-width: 170px;
              width: 100%;
            }
          }
        }
      }
    }

    .accetp-btn {
      padding: 30px 140px;
    }

    .congrats-banner {
      transform: translate(101px, -82%);

      img {
        max-width: 485px;
      }
    }
  }

  @media screen and (max-width: 540px) {
    .product-title {
      display: flex;
      flex-direction: column-reverse;
      padding: 0px 52px 0px;
      align-items: flex-end;
      gap: 40px;

      .closeImg {
        transform: translate(0px, 0px);
      }
    }

    .product-title h2 {
      font-size: 24px;
    }

    .add-to-cart-wrapper {
      padding: 24px 10px;
      max-width: 490px;
    }

    .accetp-btn {
      padding: 30px 28px;
    }

    .congrats-banner {
      transform: translate(31px, -101%);

      img {
        max-width: 476px;
      }
    }
  }

  @media screen and (max-width: 514px) {
    .product-title {
      display: flex;
      flex-direction: column-reverse;
      padding: 0px 25px 0px;
      align-items: flex-end;
      gap: 40px;

      h2 {
        font-size: 21px;
      }

      .closeImg {
        transform: translate(0px, 0px);
      }
    }

    .add-to-cart-wrapper {
      padding: 24px 10px;
      flex-direction: column;

      .personal--information {
        max-width: 380px;
        padding: 45px;

        .info--item-1 {
          input {
            max-width: 140px;
          }
        }

        .info--item-3 {
          textarea {
            max-width: 289px;
            width: 100%;
          }
        }
      }

      .product-info-wrapper {
        max-width: 380px;
        padding: 45px;

        .info-section {
          .info--item-1 {
            input {
              max-width: 140px;
            }
          }
        }
      }
    }

    .accetp-btn {
      padding: 30px 10px;
    }

    .congrats-banner {
      transform: translate(0px, -101%);

      img {
        max-width: 394px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .product-title {
      display: flex;
      flex-direction: column-reverse;
      padding: 0px 25px 0px;
      align-items: flex-end;
      gap: 40px;

      h2 {
        font-size: 21px;
      }

      .closeImg {
        transform: translate(0px, 0px);

        img {
          max-width: 77px;
        }
      }
    }

    .product-title h2 {
      font-size: 17px;
    }

    .add-to-cart-wrapper {
      padding: 24px 10px;
      max-width: 380px;

      .personal--information {
        max-width: 380px;
        padding: 45px;

        .info--item-1 {
          input {
            max-width: 140px;
          }
        }

        .info--item-3 {
          textarea {
            max-width: 289px;
            width: 100%;
          }
        }
      }

      .product-info-wrapper {
        max-width: 380px;
        padding: 45px;

        .info-section {
          .info--item-1 {
            input {
              max-width: 140px;
            }
          }
        }
      }
    }

    .accetp-btn {
      padding: 30px 10px;
    }
  }

  @media screen and (max-width: 414px) {
    .congrats-banner {
      transform: translate(22px, -101%);

      img {
        max-width: 367px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .congrats-banner {
      transform: translate(8px, -101%);

      img {
        max-width: 357px;
      }
    }
  }
`;

export const MerFooterBanner = styled("div")`
  .footer-banner-mer {
    img {
      width: 100%;
      height: 160px;
    }
  }
`;
