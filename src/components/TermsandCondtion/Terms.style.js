import styled from "styled-components";
import Arrow from "../../assets/images/Arrow.png";

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 934px; */
  background: #1c1f25;
  border-radius: 8px;
  padding: 50px 0px;

  .paragraph {
    position: relative;
    /* max-width: 834px; */
    h6 {
      font-family: "Poppins";
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0.2px;
      color: #f4cd68;
      line-height: 40px;
    }
    &::after {
      content: "";
      position: absolute;
      overflow: hidden;
      right: -18px;
      width: 50px;
      height: 50px;
      top: 68px;
      background: url(${Arrow}) no-repeat;
    }
    &::before {
      content: "";
      position: absolute;
      right: -14px;
      width: 50px;
      height: 50px;
      bottom: -48px;
      transform: rotate(180deg);
      background: url(${Arrow}) no-repeat;
    }

    pre {
      position: relative;
      font-family: "Poppins";
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.2px;
      white-space: break-spaces;
      overflow-x: hidden;
      color: #ffffff;
      height: 1000px;
      overflow-y: scroll;
      overflow-x: hidden;
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #1c1f25;
      }
      &::-webkit-scrollbar {
        width: 17px;
        height: 140px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #a0a0a0;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .paragraph h6 {
      font-size: 12px;
      line-height: 35px;
    }
    .paragraph pre {
      font-size: 12px;
    }
  }
`;
