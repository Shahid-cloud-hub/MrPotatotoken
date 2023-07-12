import styled from "styled-components";
import tickImg from "../../assets/images/contact/tick-icon.webp";

export const ContactContainer = styled("form")`
  @media screen and (max-width: 420px) {
    padding: 15px;
  }
  .background {
    width: 100%;
    /* max-width: 934px; */
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    padding: 45px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .Owner--info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .social--icons {
      display: flex;
      gap: 5px;
    }
  }

  textarea {
    background: #0d0e12;
    border-radius: 8px;
    max-width: 375px;
    max-height: 118px;
    color: #fff;
    width: 100%;
  }

  textarea:focus,
  textarea:focus {
    outline: none;
  }
  .check-box {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .info {
      font-weight: 700;
      font-size: 14px;
      color: #8f98a8;
    }

    .textarea-box {
      width: 26px;
      height: 26px;
      background: #0d0e12;
      border-radius: 8px;
      cursor: pointer;
      position: relative;
    }

    .textarea-box-icon {
      background-image: url(${tickImg});
      width: 15px;
      height: 15px;
      position: absolute;
      background-repeat: no-repeat;
      display: none;
    }

    .show {
      display: flex;
      transform: translate(5px, 5px);
    }
    .submit-btn {
      border: none;
      border-radius: 8px;
      color: #fff;
      background: #282c34;
      box-shadow: 0px 4px 10px rgb(0 0 0 / 50%);
    }

    .disabled-btn {
      background: red;
      border-radius: 8px;
      color: #fff;
    }

    .enabled-btn {
      border: none;
      border-radius: 8px;
      color: #fff;
      background: #0ac630;
      box-shadow: 0px 4px 10px rgb(0 0 0 / 50%);
      border: 1px solid #fff;
    }
  }

  .contact--wrapper {
    display: flex;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    textarea {
      max-width: initial;
      min-height: 100px;
    }
    .contact--wrapper {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 610px) {
    .background {
      padding: 10px;
      max-width: 500px;
      margin: 0 auto;
    }
    .Owner--info {
      img {
        max-width: 95px;
      }
      .social--icons {
        gap: 2px;
        img {
          max-width: 95px;
        }
      }
    }
    textarea {
      min-width: 120px;
    }
  }

  @media screen and (max-width: 420px) {
    .background {
      padding: 10px;
      max-width: 350px;
      margin: 0 auto;
    }
    .Owner--info {
      img {
        max-width: 95px;
      }
      .social--icons {
        gap: 2px;
        img {
          max-width: 95px;
        }
      }
    }
    textarea {
      min-width: 120px;
    }
  }
`;
