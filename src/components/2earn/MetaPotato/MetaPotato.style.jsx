import { styled } from "styled-components";

export const MPMobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .black-bg {
    background: #000;
    padding: 10px;
    margin-top: 10px;
  }

  .golden-bg {
    background: linear-gradient(178deg, #000 0%, #594207 100%);
    padding: 10px;
    margin-bottom: 10px;
  }
  .header-section {
    display: flex;
    justify-content: space-between;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    width: 40%;
    border-radius: 8px;
    border: 1px solid #fff;
    background: linear-gradient(
      180deg,
      #f4cd68 0%,
      rgba(38, 226, 179, 0.76) 100%
    );
    height: 35px;
    position: relative;
    span {
      color: #000;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
    }
  }
  .mint {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28%;
    border-radius: 8px;
    border: 1px solid #fff;
    background: #29881a;
    span {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 109.5%;
    }
  }

  .dragPotato {
    display: flex;
    justify-content: center;
    img {
      width: 98%;
    }
  }

  .airdrop-metapoints {
    display: flex;
    justify-content: space-between;
  }

  .airdrop-sec {
    display: flex;
    justify-content: space-between;
  }

  .airdrop {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 5px;
    grid-gap: 5px;
    div {
      display: flex;
      align-items: center;
      grid-gap: 5px;
    }
    h5 {
      color: #fff;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      margin: 0;
    }
    span {
      color: #fff;
      font-size: 10px;
      font-weight: 400;
      line-height: 143.7%;
    }
  }

  .metapoints-box {
    border-radius: 8px;
    background: #171a20;
    display: flex;
    border: 1px solid #26e2b3;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    h5 {
      color: #f4cd68;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
    }
    span {
      color: #fff;
      text-shadow: 0px 0px 30px 0px #fff;
      font-size: 15px;
      font-weight: 700;
      line-height: 143.7%;
    }
  }

  .potato-parts {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    position: relative;
  }

  .part-card {
    width: 32%;
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
  }

  .card-border {
    border: 1px solid rgba(244, 205, 104, 1);
    border-radius: 5px;
    height: 95px;
  }

  .one-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #161616;
    text-align: center;
    border: 1px solid rgba(38, 226, 179, 1);
    padding: 8px 5px;
    border-radius: 6.271px;
    h5 {
      color: #26e2b3;
      text-align: center;
      font-family: Mostra Nuova;
      font-size: 13.857px;
      font-weight: 500;
      line-height: normal;
      margin: 0;
    }
  }

  .two-btn {
    display: flex;
    align-items: center;
    grid-gap: 5px;
    width: 100%;
  }

  .btn-one {
    border: 1px solid rgba(38, 226, 179, 1);
    padding: 8px 5px;
    width: 49%;
    border-radius: 6.271px;
    background: #161616;
    h5 {
      color: #26e2b3;
      text-align: center;
      text-shadow: 0px -0.783847987651825px 25.86698341369629px 0px rgba(26, 190, 255, 0.5);
      font-size: 10.974px;
      font-weight: 500;
      line-height: normal;
      margin: auto;
    }
  }

  .btn-two {
    width: 49%;
    border: 1px solid yellow;
    padding: 8px 5px;
    border-radius: 6.271px;
    background: #161616;
    display: flex;
    justify-content: center;
    h5 {
      color: #26e2b3;
      text-align: center;
      text-shadow: 0px -0.783847987651825px 25.86698341369629px 0px rgba(26, 190, 255, 0.5);
      font-size: 10.974px;
      font-weight: 500;
      margin: auto;
      line-height: normal;
    }
  }

  .drag-drop-heading {
    margin-top: 70px;
    h5 {
      color: #e49764;
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: 109.5%;
      text-align: center;
    }
  }
`;
