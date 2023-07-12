import styled from "styled-components";
// import DownArrow from "../../images/down-arrow.svg";

export const HeaderBar = styled("header")`
  display: flex;
  padding: 0px 22px;
  align-items: center;
  color: white;
  /* background-color: #000; */
  z-index: 999;

  @media screen and (max-width: 824px) {
    display: none;
  }

  /* a:nth-child(2) {
    color: #0996fa;
  } */
  a {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    width: 100%;
    max-width: 328px;
  }

  .header-logo img {
    width: 40px;
  }

  .main-wrapper {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    width: 100%;
    padding: 10px 0px;
  }

  .main-right-wrapper {
    display: flex;
    /* gap: 60px; */
    width: 100%;
    justify-content: space-between;
    /* width: 100%; */
  }

  #rfs-btn {
    span {
      display: hidden;
    }
  }
  .css-3iigni-container {
    width: 100%;
  }
  .css-16xfy0z-control {
    background-color: transparent;
    border-color: transparent;
  }
  .css-894a34-indicatorSeparator {
    display: none;
  }
  .css-1xc3v61-indicatorContainer {
    padding: 8px 0px;
  }
  .css-ar2ul-ValueContainer2 {
    padding: 2px 0px;
  }

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 60%;

    button {
      font-family: "mostra-nuova";
      font-weight: 500;
      font-size: 14px;
      color: #f4cd68;
      width: 100%;
      padding: 12px 0px;
      max-width: 140px;
      background: #1c1f25;
      border-radius: 4px;
      border: none;
    }
    .activated-btn {
      border: 1px solid #f4cd68;
    }
  }

  .ReactFlagsSelect-module_label__27pw9 {
    display: hidden;
  }

  .menu-nav-bar {
    display: flex;
    align-items: center;
    gap: 95px;
    justify-content: flex-end;
    width: 100%;
    max-width: 365px;
  }

  .nav-bar a {
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
  }
  .nav-bar a::before {
    content: "";
    position: absolute;
    height: 2px;
    background: white;
    width: 0;
    left: 0;
    bottom: -5px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
  }
  //   .nav-bar a:hover::before {
  //     width: 100%;
  //   }

  .active {
    -webkit-text-stroke-width: 0.001px;
    -webkit-text-stroke-color: #f1b61c;
  }

  .nav-bar .select-language {
    margin-right: 20px;
  }
  .btn-select-language {
    padding: 0;
  }
  .dropdown-menu {
    margin-top: 10px;
  }
  .select-language option {
    display: flex;
    gap: 5px;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .dropdown-toggle::before {
    content: "";
    height: 8px;
    width: 14px;
    position: absolute;
    right: -30px;
    top: 40%;
    transform: translateX(-50%);
  }
  .dropdown-menu {
    min-width: fit-content;
  }
  .meta-mask-login {
    --size: 40px;
    background: linear-gradient(270deg, #16a145 -6.89%, #20d810 112.86%);
    box-shadow: 0px 6px 10px #083714;
    border-radius: 50px;
  }
  .meta-mask-logout {
    --size: 50px;
    background: linear-gradient(270deg, #16a145 -6.89%, #20d810 112.86%);
    box-shadow: 0px 6px 10px #083714;
    border-radius: 50px;
    display: none;
  }
  .meta-mask-login.active {
    background: linear-gradient(
      270deg,
      #a11616 -6.89%,
      #d81010 112.86%,
      #d81010 118.1%,
      #d81010 118.11%
    );
  }

  @media screen and (max-width: 1380px) {
  }

  /* @media screen and (max-width: 1280px) {
    .menu-nav-bar {
      max-width: 224px;
    }
  } */

  @media screen and (max-width: 1080px) {
    .menu-nav-bar {
      max-width: 924px;
    }
    .nav-center {
      width: 100%;
      justify-content: flex-end;

      .de-activated-btn,
      .activated-btn {
        border: 1px solid #f1b61c;
      }
    }
    a {
      max-width: 239px;
    }
  }

  @media screen and (max-width: 468px) {
    padding: 10px 20px;
  }
`;

export const TopContainer = styled("div")`
  width: 100%;
  max-width: 800px;

  .hide {
    display: none;
  }
  .menu-nav-bar-down {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: ${(props) => props.paddTop};
  }
  .menu-nav-bar-center {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    /* max-width: 874px; */
    /* padding-left: 85px; */
  }
  .metapoints {
    background: #1c1f25;
    border-radius: 4px;
    /* border: 1px solid #f1b61c; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    /* max-width: 170px; */
    gap: 20px;
    min-height: 45px;

    .box-wrapper {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    span:nth-child(1) {
      font-family: "Junegull";
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
      position: relative;
    }

    span:nth-child(2) {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      font-family: "mostra-nuova";
      color: #999999;
      display: flex;
      gap: 5px;
      align-items: center;
    }
    span:nth-child(3) {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      font-family: "mostra-nuova";
      color: #999999;
      display: flex;
      gap: 5px;
      align-items: center;
    }
  }
  #subscript {
    span:nth-child(1) {
      position: relative;

      &::after {
        content: "BM";
        position: absolute;
        font-size: 11px;
        bottom: 0px;
      }
    }
  }

  @media screen and (max-width: 1380px) {
    max-width: 640px;

    .menu-nav-bar {
    }
  }

  @media screen and (max-width: 1280px) {
    max-width: 632px;

    .menu-nav-bar-center {
      gap: 5px;
    }

    /* .metapoints {
      max-width: 115px;
    } */
  }

  @media screen and (max-width: 1080px) {
    min-width: inherit;
    max-width: 178px;

    /* padding: 0px; */
    padding: ${(props) => props.removePadd};
    .menu-nav-bar-down {
      justify-content: ${(props) => props.flexStart};

      .metapoints {
        max-width: 130px;
        border: 1px solid #f1b61c;
        span:nth-child(1) {
          font-family: "Junegull";
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
          position: relative;
        }

        span:nth-child(2) {
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
        span:nth-child(3) {
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
      #subscript {
        span:nth-child(1) {
          position: relative;

          &::after {
            content: "M";
            position: absolute;
            font-size: 9px;
            bottom: 0px;
          }
        }
      }
    }
  }
`;
