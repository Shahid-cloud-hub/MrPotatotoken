import styled from "styled-components";

export const SmallPotatoContainer = styled("div")`
  padding: 10px;
  .main-wrapper {
    display: flex;
    flex-direction: ${(props) => props.flDirection};
    align-items: ${(props) => props.flDirection};
    justify-content: space-between;

    .fire-video {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: end;

      video {
        max-width: 100px;
        border-radius: 8px;
        position: absolute;
        transform: translate(-82px, 11px);
      }
    }

    .harvestedbtn {
      display: flex;
      justify-content: space-between;
      background: #0d0e12;
      border-radius: 8px;
      width: 100%;

      input {
        background: #0d0e12;
        border-radius: 8px 0px 0px 8px;
        padding: 11px;
        border: none;
        color: #fff;
      }
      button {
        background: #f4cd68;
        box-shadow: 0px 4px 6px #5a4100;
        /* border-radius: 8px; */
        border: none;
        color: #000;
        padding: 12px 25px;
        border-radius: 0px 8px 8px 0px;
        font-weight: 700;
        font-size: 16px;
      }
    }

    .mint-page-title {
      display: flex;
      flex-direction: column;
      span {
        font-weight: 700;
        font-size: 12px;
        color: #f4cd68;
        text-align: center;
      }

      hr {
        background: #f4cd68;
        border-radius: 5px;
        height: 3px;
        border: none;
        opacity: 1;
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
    gap: 20px;
    flex-direction: column;

    div {
      color: #8f98a8;
      font-weight: 700;
      font-size: 16px;
      /* padding: 10px; */
      span {
        color: #fff;
        font-weight: 700;
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .harvested-wrapper {
      display: flex;
      gap: 10px;

      video {
        width: 75px;
        border-radius: 8px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    .potato-token-item div {
      padding: 0px;
    }

    .harvested-wrapper {
      display: flex;
      gap: 10px;

      video {
        width: 75px;
        border-radius: 8px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .potato-token-item {
      div {
        padding: 0px;
      }
      span {
        padding: 10px;
      }
    }

    .harvested-wrapper {
      display: flex;
      gap: 10px;

      video {
        width: 65px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .main-wrapper {
      flex-direction: column;

      .potato-token-item {
        width: 100%;
      }

      .harvestcol {
        .harvestedbtn {
          input {
            padding: 15px;
          }

          button {
            max-width: 100px;
            font-size: 12px;
            padding: 13px 8px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 360px) {
    .main-wrapper {
      flex-direction: column;

      .potato-token-item {
        width: 100%;
      }

      .harvestcol {
        .harvestedbtn {
          input {
            padding: 12px;
            max-width: 145px;
          }

          button {
            max-width: 100px;
            font-size: 12px;
            padding: 13px 8px;
          }
        }
      }
    }
  }
`;

export const SmartContractSec = styled("div")`
  .our-partners-container {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .our-partners-main {
      display: flex;
      padding: 10px;

      .mini-wrpper {
        max-width: 420px;
        padding: 10px;
      }
    }

    .item-wrapper {
      display: flex;
      padding: 10px;

      .title-name {
        width: 300px;
        font-weight: 700;
        font-size: 16px;
      }
      .small-icons {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 145px;
      }
      .img-container {
        display: flex;
        justify-content: flex-start;
        width: 35%;
        height: 100%;
      }
    }
  }

  .vl {
    border-left: 2px solid #282c34;
    height: 385px;
  }
`;

export const LandHarvestedContainer = styled("div")`
  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    font-size: 30px;
    padding: 30px 0px 20px;
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
      span:nth-child(2) {
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

export const BuyLandContainer = styled("div")`
  padding: 0 !important;
  .container-land {
    background: #1c1f25;
    border-radius: 8px;
    width: 100%;
    max-width: 934px;
    padding: 10px;
  }

  .buy-title {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #f4cd68;
    padding: 10px;

    span {
      font-weight: 700;
      font-size: 12px;
      color: #f4cd68;
    }
  }

  .buy-land-input {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 12px;
    padding: 10px;

    label {
      display: flex;
      padding: 15px 8px;
      background-color: #000;
      align-items: center;
      justify-content: space-between;
      background: #0d0e12;
      border-radius: 12px;
      margin: 0;

      input {
        border: none;
        background-color: transparent;
        text-align: left;
        color: #fff;

        &::placeholder {
          color: #fff;
          font-weight: 500;
          font-size: 17px;
        }
      }

      span {
        font-weight: 700;
        font-size: 16px;
        color: #f4cd68;
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

    button {
      background: #f4cd68;
      box-shadow: 0px 4px 6px #5a4100;
      border-radius: 8px;
      border: none;
      color: #1f1f1f;
      padding: 14px 45px;
    }
  }
`;

export const OurPartnersContainerSection = styled("div")`
  /* .our-partners-container {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .our-partners-main {
      display: flex;
      padding: 10px;
      position: relative;

      .mini-wrpper {
        max-width: 420px;
        padding: 10px;

        span {
          color: #f4cd68;
          font-weight: 700;
          font-size: 18px;
          position: absolute;
          left: 0;
        }
      }
    }

    .item-wrapper {
      display: flex;
      padding: 10px;

      .title-name {
        width: 300px;
      }

      .img-container {
        display: flex;
        justify-content: flex-start;
        width: 100%;
      }
    }
  }

  .vl {
    border-left: 2px solid #282c34;
    height: 385px;
  } */
`;

export const MrPotatoNFTCardContainer = styled("div")`
  .NftWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 12px;
  }

  .linewrap {
    display: flex;
    align-items: center;
    gap: 12px;

    .filters-btn {
      display: flex;
      gap: 12px;
    }
  }

  .market-place-filters {
    display: flex;
    flex-direction: column;

    .filter-item {
      display: flex;
    }
  }

  .filters {
    display: flex;
    gap: 12px;

    .filter-item-1 {
      display: flex;
      gap: 12px;

      .sm-filter {
        display: flex;
        gap: 12px;
      }
    }
  }

  .titlewrap {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  .addedColor {
    /* background: #f4cd68; */
    /* box-shadow: 0px 4px 6px #5a4100; */
    /* border-radius: 8px; */
    cursor: pointer;
  }

  .removeColor {
    background: transparent;
    box-shadow: none;
    cursor: pointer;
  }

  .nft-card-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;

    .slider-wrapper {
      display: flex;
      gap: 20px;
      transform: scale(0.7) translate(-22%, -14%);
    }
  }

  .potato-learn {
    display: flex;
    align-items: center;
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

  @media screen and (max-width: 1024px) {
    .titlewrap {
      /* justify-content: center; */
    }
    .linewrap {
      /* justify-content: center; */
      .filters {
        .filter-item-1 {
          flex-direction: column;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .titlewrap {
      justify-content: center;
    }
    .linewrap {
      justify-content: center;
      .filters {
        .filter-item-1 {
          flex-direction: column;
        }
      }
    }
  }

  @media screen and (max-width: 667px) {
    .NftWrapper {
      align-items: center;
      margin-top: 15px;
    }
    .titlewrap {
      flex-direction: column;
    }
    .linewrap {
      flex-direction: column;
    }
    .filters {
      display: flex;
      gap: 12px;

      .filter-item-1 {
        display: flex;
        flex-direction: column;
        gap: 12px;

        div {
          display: flex;
          gap: 12px;
        }
      }
    }

    .filters-btn {
      display: flex;
      gap: 12px;
    }

    .potato-learn {
      flex-direction: column-reverse;
      max-width: 340px;
      margin: 0 auto 20px;

      .play-btn {
        padding: 12px 50px;
      }

      img {
        width: 100%;
      }
    }

    .Nft-cards {
      display: none;
    }

    .nft-card-wrapper {
      .slider-wrapper {
        transform: scale(0.9) translate(-24px, 0px);
      }
    }
  }

  @media screen and (max-width: 420px) {
    .NftWrapper {
      align-items: center;
      margin-top: 15px;
    }
    .titlewrap {
      flex-direction: column;
    }
    .linewrap {
      flex-direction: column;
    }
    .filters {
      display: flex;
      gap: 12px;

      .filter-item-1 {
        display: flex;
        flex-direction: column;
        gap: 12px;

        div {
          display: flex;
          gap: 12px;
        }
      }
    }

    .filters-btn {
      display: flex;
      gap: 12px;
    }

    .potato-learn {
      flex-direction: column-reverse;
      max-width: 340px;
      margin: 0 auto 20px;

      .play-btn {
        padding: 12px 50px;
      }

      img {
        width: 100%;
      }
    }

    .Nft-cards {
      display: none;
    }

    .nft-card-wrapper {
      .slider-wrapper {
        transform: scale(0.9) translate(-24px, 0px);
      }
    }
  }

  @media screen and (max-width: 375px) {
    .NftWrapper {
      align-items: center;
      margin-top: 15px;
    }
    .titlewrap {
      flex-direction: column;
    }
    .linewrap {
      flex-direction: column;
    }
    .filters {
      display: flex;
      gap: 12px;

      .filter-item-1 {
        display: flex;
        flex-direction: column;
        gap: 12px;

        div {
          display: flex;
          gap: 12px;
        }
      }
    }

    .filters-btn {
      display: flex;
      gap: 12px;
    }

    .potato-learn {
      flex-direction: column-reverse;
      max-width: 340px;
      margin: 0 auto 20px;

      .play-btn {
        padding: 12px 50px;
      }

      img {
        width: 100%;
      }
    }

    .Nft-cards {
      display: none;
    }

    .nft-card-wrapper {
      .slider-wrapper {
        transform: scale(0.9) translate(-24px, 0px);
      }
    }
  }
`;
