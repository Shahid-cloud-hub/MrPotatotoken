import styled from "styled-components";

export const PepeContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 32px;
  @media screen and (max-width: 1280px) {
    .padding-to-top {
      padding-top: 30px;
    }
  }
`;

export const PepeWrapper = styled.div`
  background: linear-gradient(180deg, #000000 0%, #594207 100%);
  border: 1px solid #f4cd68;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 0px;
  width: 100%;

  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    @media screen and (max-width: 1280px) {
      flex-direction: row-reverse;
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column-reverse;
      width: 100%;
    }
    .pepeImg-tab {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48%;
      @media screen and (max-width: 1080px) {
        width: 100%;
        justify-content: center;
      }
      @media screen and (max-width: 620px) {
        justify-content: flex-end;
      }
      @media screen and (max-width: 600px) {
        justify-content: center;
        width: 70%;
        margin: 15px 0px;
      }
    }

    .pepeImg-mob {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      margin: 15px 0px;
    }
    .pepeImg-mob > div:nth-child(2) {
      display: flex;
      align-items: center;
    }
    .pepeImg-wrapper {
      width: 14%;
      img {
        width: 100%;
      }
    }
    .mid-section-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 84%;
      @media screen and (max-width: 1280px) {
        flex-direction: column;
        align-items: flex-start;
        width: 60%;
        grid-gap: 25px;
      }
      @media screen and (max-width: 600px) {
        width: 98%;
      }
    }
    .mid-section {
      display: flex;
      flex-direction: column;
      grid-gap: 10px;
      width: 45%;
      @media screen and (max-width: 1280px) {
        width: 100%;
        align-items: flex-start;
      }
    }
    .mid-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      @media screen and (max-width: 1280px) {
        width: 100%;
      }
    }
    .mid-heading > h1 {
      font-weight: 700;
      font-size: 12px;
      line-height: 109.5%;
      color: #00b800;
    }
    .points-sec {
      display: flex;
      align-items: center;
      justify-content: space-between;
      grid-gap: 5px;
      @media screen and (max-width: 1280px) {
        width: 100%;
      }
    }
    .points-sec > p {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      color: #a5a5a5;
      @media screen and (max-width: 540px) {
        font-size: 10px;
      }
    }
    .buy-section {
      align-self: center;
      cursor: pointer;
      @media screen and (max-width: 1280px) {
        display: none;
      }
    }
  }

  .button-sec {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 48%;
    row-gap: 40px;

    @media screen and (max-width: 1280px) {
      width: 100%;
      row-gap: 15px;
    }
    @media screen and (max-width: 1080px) {
      width: 98%;
    }
    @media screen and (max-width: 600px) {
      width: 95%;
    }
    @media screen and (max-width: 420px) {
      width: 100%;
      transform: scale(0.89);
    }
  }
  .button-sec > a {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 8px;
    background: linear-gradient(180.07deg, #473223 -1.92%, #1c0e02 98.15%);
    border-radius: 8px;
    font-weight: 700;
    font-size: 12px;
    line-height: 109.5%;
    color: #f4ab68;
    padding: 10px 15px 10px 15px;
    width: 48%;
    border: 2px solid;
    border-image: linear-gradient(180.07deg, #473223 -1.92%, #1c0e02 98.15%),
      linear-gradient(90deg, #997860 -8.82%, #ffa133 111.76%);
    border-image-slice: 1;
    cursor: pointer;

    @media screen and (max-width: 1080px) {
      width: 24%;
      padding: 10px 5px;
    }
    @media screen and (max-width: 600px) {
      width: 49%;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 420px) {
      padding: 0px 5px;
      min-height: 44px;
    }
  }

  .button-sec > a:hover {
    background: linear-gradient(180.07deg, #473223 -1.92%, #1c0e02 98.15%);
    color: #f4ab68;
    border-image: linear-gradient(180.07deg, #473223 -1.92%, #1c0e02 98.15%),
      linear-gradient(90deg, #997860 -8.82%, #ffa133 111.76%);
    border-image-slice: 1;
  }

  .bottom-section {
    background: linear-gradient(180deg, #000000 0%, #594207 100%);
    border: 0.7px solid #f4cd68;
    border-radius: 8px;
    width: 99.5%;
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
    padding: 20px;

    .prices {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-gap: 5px;
    }
    .price-container {
      width: 15%;
      p {
        font-weight: 700;
        font-size: 12px;
        line-height: 109.5%;
        color: #f4cd68;
      }
    }
    .line {
      border-bottom: 2px solid #f4cd68;
      width: 90%;
    }
  }
  @media screen and (max-width: 540px) {
    max-width: 345px;
    margin: 0 auto;

    .mint-table-wrapper {
      .mint-table {
        #market-price-style {
          transform: translate(-11px, 0px);
        }
        .mint-table-td {
          .td-text-color {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const PepeBtns = styled.div`
  display: flex;
  grid-gap: 20px;

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

  .myland-active {
    border: 1px solid #f4cd68;
    color: #f4cd68;
    transition: all 0.3s ease-in-out;
  }

  .myland-de-active {
    border: none;
    color: #fff;
  }

  @media screen and (max-width: 1280px) {
    justify-content: center;
  }

  .btn-style {
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 22px;
  }
`;

export const ChartContainer = styled.div`
  h5 {
    padding-left: 20px;
  }
`;
