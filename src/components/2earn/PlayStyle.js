import styled from "styled-components";
// import PlayGroundImg from "../../assets/images/Play2earn/play-ground.webp";
import PreArrow from "../../assets/images/metapotato/prev.png";
import NextArrow from "../../assets/images/metapotato/next.png";
// import DropDown from "../../assets/images/thumnail.png";

export const PlayContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* padding-bottom: 40px; */
  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
  .play-background {
    /* background: #1c1f25; */
    border-radius: 8px;
    /* padding: 25px; */

    .img-wrapper {
      position: relative;
      /* max-width: 765px; */
      /* margin: 0 auto; */
      img {
        width: 100%;
        max-width: 1125px;
        max-height: 620px;
      }
    }

    .bg-img {
      display: flex;
      flex-direction: column;
      gap: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-62%, -48%);
      width: 100%;
      max-width: 465px;

      .play-earn-text {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
        max-width: 465px;

        /* span:nth-child(1) {
          font-weight: 700;
          font-size: 12px;
          text-shadow: -1px -1px 0 #f89d16, 1px -1px 0 #f89d16,
            -1px 1px 0 #f89d16, 1px 1px 0 #000;
        } */
        span:nth-child(1) {
          font-weight: 900;
          font-size: 20px;
          text-transform: uppercase;
          position: absolute;
          top: -33px;
        }
      }
      .btn-img {
        img {
          width: 560px;
        }
      }

      .play-middle {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .v-logo {
          img {
            width: 100%;
            /* min-width: 80px; */
          }
        }

        .span-container {
          display: flex;
          gap: 25px;

          span {
            font-family: "Germania One";
            font-weight: 400;
            font-size: 30px;
          }
        }

        .un-none-player {
          width: 100%;
          min-width: 750px;
          position: relative;
          .bg-1 {
            position: absolute;
            top: -185px;
            right: 130px;
            width: 440px;
          }
          .bg-2 {
            position: absolute;
            top: -185px;
            right: 130px;
            z-index: -1;
            width: 440px;
          }
        }
      }

      button {
        background: none;
        border: none;
        box-shadow: none;
      }
    }
  }

  .meta-potato-wrapper {
    width: 100%;
  }

  .potato-land-tabs {
    display: flex;
    margin-bottom: 20px;
    gap: 15px;
    align-items: center;
    margin: 0;

    .tabs-btn {
      display: flex;
      /* justify-content: space-between; */
      gap: 15px;
      width: 100%;
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
          min-height: 59px;
          padding: 0px;
        }
      }

      img {
        max-width: 29px;
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

    img {
      max-width: none;
    }
  }

  .wallet-connect-btn {
    border: none;
    background: transparent;
    background: linear-gradient(180deg, #fab263 0%, #5f3a12 80.03%);
    border: 1px solid #ffffff;
    border-radius: 8px;
    color: #fff;
    min-height: 45px;
    padding: 0px 30px;
    /* margin-top: 12px; */
  }

  .meta-potato-land-tabs {
    display: flex;
    /* max-width: 934px; */
    margin: 10px 0px;

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
        min-height: 69px;
        max-width: 178px;
        padding: 0px;
      }
      img {
        max-width: 29px;
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

    img {
      max-width: none;
    }
  }

  .loader-wrapper {
    width: 100%;
    /* max-width: 971px; */
    /* min-height: 623px; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
    border: 1px solid #282c34;
    border-radius: 8px;
    padding: 10px 10px;
    min-height: 630px;
    max-width: 1133px;
    grid-gap: 40px;

    @media screen and (max-width: 1420px) {
      max-width: 985px;
    }

    .filters {
      width: 100%;
      @media screen and (max-width: 961px) {
        display: none;
      }
    }
    .metapotato-tab {
      display: flex;
      justify-content: space-between;
    }

    .body-metapotato {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 1080px) {
        flex-direction: column;
      }
    }

    .drag {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 0px 15px;
      width: 48%;
      /* max-width: 560px; */

      span {
        font-weight: 900;
        font-size: 16px;
        line-height: 109.5%;
        color: #e49764;
      }
      .metascore {
        align-self: flex-end;
        button {
          color: #f4cd68;
          font-weight: 700;
          font-size: 14px;
          background: #22252d;
          border: 1px solid #f4cd68;
          border-radius: 4px;
          padding: 5px 22px;
        }
        .mint {
          display: flex;
          gap: 25px;
          #mint-btn {
            background-color: #29881a;
            border: 1px solid #ffff;
            font-size: 6px 15px;
            color: #fff;
            padding: 10px;
            width: 100px;
            height: 45px;
            border-radius: 8px;
          }
        }
        .score {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 100%;
          min-width: 133px;
          padding: 13px 10px;

          /* max-width: 81px; */
          /* min-height: 68px; */
          background: #171a20;
          border: 1px solid #26e2b3;
          border-radius: 8px;
          span {
            font-family: "mostra-nuova";
            color: #f4cd68;
            font-weight: 700;
            font-size: 14px;
            img {
              margin-bottom: 12px;
            }
          }
          span:nth-child(2) {
            color: #fff;
            text-shadow: 0px 0px 30px #ffffff;
            font-size: 18px;
          }
        }
        #meta-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 20px;
          width: 100%;
          max-width: 86px;
          padding: 13px 20px;
          background: #171a20;
          border: 1px solid #26e2b3;
          border-radius: 8px;
          span {
            font-family: "mostra-nuova";
            color: #f4cd68;
            font-weight: 700;
            font-size: 15px;
          }
          span:nth-child(2) {
            color: #fff;
            text-shadow: 0px 0px 30px #ffffff;
            font-size: 20px;
          }
        }
      }
    }

    /* .potato-container {
      display: flex;

      .parent-img {
        position: relative;
        z-index: 4;
      }

      .child-img {
        content: "";
        position: absolute;
        left: -50%;
        top: -50%;
        transform: translate(-50%, -50%);
      }
    } */

    .metapoints {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 48%;
      .search-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 175px;
        height: 20px;
        border-radius: 4px;
        padding: 0px 4px;
        border: 1px solid #f4cd68;
      }
      input {
        background: transparent;
        border: transparent;
        color: #fff;
        font-size: 14px;
        padding: 0;

        ::placeholder {
          font-size: 14px;
          font-family: "mostra-nuova";

          color: #a9a9a9;
        }
      }
      .metascore {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        button {
          color: #f4cd68;
          font-weight: 700;
          font-size: 14px;
          background: #22252d;
          border: 1px solid #f4cd68;
          border-radius: 4px;
        }
        .score {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 0px 10px;
          width: 100%;
          max-width: 131px;
          min-height: 68px;
          background: #171a20;
          border-radius: 8px;
          img {
            width: 12px;
            margin-bottom: 10px;
          }
          span {
            color: #f4cd68;
            font-weight: 700;
            font-size: 14px;
          }
          span:nth-child(2) {
            font-size: 18px;
            color: #fff;
            text-shadow: 0px 0px 30px #ffffff;
          }
        }
      }
    }
    .filter-btns {
      display: flex;
      /* justify-content: flex-end; */
      justify-content: ${(props) => props.dirStyle};
      gap: ${(props) => props.dirGap};
      gap: 15px;

      button {
        background: #22252d;
        border: 1px solid #f4cd68;
        border-radius: 4px;
        color: #f4cd68;
        padding: 2px 10px;
        font-size: 14px;
      }
    }
    .sell-btns {
      display: flex;
      gap: 5px;
      padding: 10px 0px 5px 0px;

      button {
        background: #22252d;
        border: 1px solid #f4cd68;
        border-radius: 4px;
        color: #f4cd68;
        font-size: 14px;
      }
    }

    .filter-btn-wrapper {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      button {
        border: 1px solid #26e2b3;
        border-radius: 8px;
        font-size: 14px;
        width: 100%;
        padding: 12px 5px;
      }

      .de-active {
        /* Gradientt */
        background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
        /* Yellow Color */
        border-radius: 8px;
        width: 100%;
        /* max-width: 100px; */
        color: #f4cd68;
        max-width: 100px;

        /* padding: 5px 10px; */
      }

      .active {
        border: 1px solid #ffff;
        background: linear-gradient(to right, #f4cd68, #26e2b3);
        border-radius: 8px;
        color: #000000;
        font-weight: 700;
        max-width: 100px;
        /* padding: 0px 10px; */
      }
    }
    .items-container {
      /* width: 349px; */
      width: 100%;
      /* height: 405px; */
      height: 500px;
      background: #0a0a0a;
      border: 1px solid #f4cd68;
      border-radius: 8px;
    }
    .all-items {
      display: flex;
      gap: 10px;
      padding: 10px;
    }
    .item-1 {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 33%;
      grid-gap: 8px;
      align-items: center;
      .part-img {
        border: 1px solid rgba(244, 205, 104, 1);
        min-height: 150px;
        border-radius: 15px;
        width: 100%;
      }
      .hollow-box {
        border: 1.44422px solid #f4cd68;
        filter: blur(1.20352px);
        border-radius: 10px;
        width: 113px;
        height: 108px;
        margin: 3px 0px;
        @media screen and (max-width: 1230px) {
          width: 111px;
          height: 105px;
          margin: 6px 0px;
        }
        @media screen and (max-width: 1140px) {
          width: 102px;
        }
        @media screen and (max-width: 1080px) {
          width: 111px;
          height: 105px;
          margin: 6px 0px;
        }
      }
      img {
        width: 100%;
        margin-bottom: 5px;

        /* max-width: 100px; */
      }
    }
    .box {
      display: flex;
      justify-content: space-evenly;
      gap: 3px;
      width: 100%;
      button {
        width: 45%;
        /* max-width: 40px; */
        min-height: 30px;
        background: #161616;
        color: #26e2b3;
        border: 1px solid #26e2b3;
        border-radius: 8px;
        color: #26e2b3;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
        }
        img {
          width: 15px;
        }
      }
      #upload {
        border: 1px solid #f4cd68;
      }
    }
    .box1 {
      display: flex;
      justify-content: space-evenly;
      gap: 3px;
      margin-bottom: 10px;
      /* max-width: 86px; */
      /* min-height: 87px; */
      background: #161616;
      color: #26e2b3;
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid #26e2b3;
      border-radius: 8px;
      padding: 2px 15px;
      button {
        color: #26e2b3;
        font-size: 16px;
        background: #161616;
        cursor: pointer;
        width: 100%;
        border: none;
        padding: 0;
        box-shadow: none;
        img {
          width: 43px;
        }
      }
      #upload {
        border: 1px solid #f4cd68;
      }

      .dropdown-content {
        display: flex;
        justify-content: center;
        min-height: 50px;
        #dropdown {
          padding: 0;

          img {
            width: 56px;
            height: 42px;
          }
        }
      }
    }
  }

  .loader-mobile-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* padding: 10px; */

    .metapoints {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .metascore {
        display: flex;
        justify-content: inherit;

        button {
          color: #f4cd68;
          font-weight: 700;
          font-size: 14px;
          background: #22252d;
          border: 1px solid #f4cd68;
          border-radius: 4px;
          padding: 5px 22px;
        }
        .mint {
          display: flex;
          gap: 25px;
          #mint-btn {
            background-color: #29881a;
            border: 1px solid #ffff;
            font-size: 6px 15px;
            color: #fff;
            padding: 10px;
            width: 100px;
            height: 45px;
            border-radius: 8px;
          }
        }
        .score {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 100%;
          min-width: 122px;
          padding: 13px 10px;
          background: #171a20;
          border: 1px solid #26e2b3;
          border-radius: 8px;
          span {
            font-family: "mostra-nuova";
            color: #f4cd68;
            font-weight: 700;
            font-size: 14px;
          }
          span:nth-child(2) {
            color: #fff;
            text-shadow: 0px 0px 30px #ffffff;
            font-size: 16px;
          }
        }
        #meta-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 20px;
          width: 100%;
          max-width: 80px;
          padding: 13px 20px;
          background: #171a20;
          border: 1px solid #26e2b3;
          border-radius: 8px;
          span {
            font-family: "mostra-nuova";
            color: #f4cd68;
            font-weight: 700;
            font-size: 14px;
          }
          span:nth-child(2) {
            color: #fff;
            text-shadow: 0px 0px 30px #ffffff;
            font-size: 16px;
          }
        }
      }
    }

    .filter-btn-wrapper {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      button {
        border: 1px solid #26e2b3;
        border-radius: 8px;
        font-size: 14px;
        width: 100%;
        padding: 12px 5px;
      }

      .de-active {
        /* Gradientt */
        background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
        /* Yellow Color */
        border-radius: 8px;
        width: 100%;
        /* max-width: 100px; */
        color: #f4cd68;
        max-width: 100px;

        /* padding: 5px 10px; */
      }

      .active {
        border: 1px solid #ffff;
        background: linear-gradient(to right, #f4cd68, #26e2b3);
        border-radius: 8px;
        color: #000000;
        font-weight: 700;
        max-width: 100px;
        /* padding: 0px 10px; */
      }
    }
    .items-container {
      width: 100%;
      background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
      border: 1px solid #f4cd68;
      border-radius: 8px;
      height: 490px;

      .all-items {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px;
      }
      .item-1 {
        display: flex;
        flex-direction: column;
      }
      .box {
        display: flex;
        justify-content: space-evenly;
        gap: 3px;
        margin-bottom: 10px;
        button {
          width: 100%;
          max-width: 76px;
          min-height: 39px;
          background: #161616;
          color: #26e2b3;
          border: 1px solid #26e2b3;
          border-radius: 8px;
          color: #26e2b3;
          font-size: 16px;
          img {
            width: 15px;
          }
        }
        #upload {
          border: 1px solid #f4cd68;
        }
      }
      .box1 {
        display: flex;
        justify-content: space-evenly;
        gap: 3px;
        margin-bottom: 10px;
        max-width: 165px;
        /* min-height: 87px; */
        background: #161616;
        color: #26e2b3;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #26e2b3;
        border-radius: 8px;
        padding: 10px 10px;

        button {
          color: #26e2b3;
          font-size: 16px;
          background: #161616;
          cursor: pointer;
          width: 100%;
          border: none;
          padding: 0;
          box-shadow: none;

          img {
            width: 43px;
          }
        }
        #upload {
          border: 1px solid #f4cd68;
        }

        .dropdown-content {
          display: flex;
          justify-content: center;
          min-height: 50px;
          #dropdown {
            padding: 0;

            img {
              width: 56px;
              height: 42px;
            }
          }
        }
      }
    }
  }

  .points-sec {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .air-drop {
      display: flex;
      grid-gap: 10px;
      align-items: center;
      .airdrop-time {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-gap: 10px;
        h1 {
          color: #fff;
          text-align: center;
          font-family: "mostra-nuova";
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        .time-wrapper {
          display: flex;
          align-items: center;
          grid-gap: 5px;
          p {
            color: #fff;
            font-family: Junegull;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 143.7%;
          }
        }
      }
    }
    #meta-score {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 20px;
      width: 100%;
      max-width: 86px;
      padding: 13px 20px;
      background: #171a20;
      border: 1px solid #26e2b3;
      border-radius: 8px;
      span {
        font-family: "mostra-nuova";
        color: #f4cd68;
        font-weight: 700;
        font-size: 15px;
      }
      span:nth-child(2) {
        color: #fff;
        text-shadow: 0px 0px 30px #ffffff;
        font-size: 20px;
      }
    }
  }

  .drag-drop-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    h5 {
      color: #e49764;
      font-family: "mostra-nuova";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 109.5%;
    }
  }
  @media screen and (max-width: 1460px) {
    .meta-potato-wrapper {
      /* margin: 0 auto; */
      .potato-land-tabs {
        max-width: 939px;
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 1230px) {
    .loader-wrapper {
      .metapoints {
        .items-container {
          width: 100%;
        }
        /* max-width: 260px; */
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .meta-potato-wrapper {
      /* margin: 0 auto; */
      /* max-width: 839px; */
    }
    .loader-wrapper {
      .drag {
        /* width: 100%; */
        img {
          max-width: 416px;
        }
        .metascore {
          flex-direction: row;
          width: 100%;
          max-width: 235px;
          align-self: center;
          .score {
            flex-direction: row;
          }
        }
      }
      .filters {
        /* display: none;/ */
      }
      .metapoints {
        /* display: none; */

        .items-container {
          width: 100%;

          .all-items {
            .item-1 {
              gap: 5px;
              img {
                max-width: 100px;
              }
              .box {
                gap: 5px;
                button {
                  font-size: 11px;
                  padding: 5px;
                }
              }
            }
          }
        }
        /* max-width: 220px; */
      }
    }
    .meta-potato-wrapper {
      .bg-img {
        gap: 15px;

        .play-middle {
          .v-logo {
            max-width: 80px;
          }
          .un-none-player {
            max-width: 636px;
            /* .bg-1 {
              right: 75px;
            }
            .bg-2 {
              top: -174px;
              right: 93px;
            } */
          }
          .span-container span {
            font-size: 26px;
          }
        }
      }
      /* button {
        max-width: 370px;
        margin: 0 auto 0 0;
      } */
    }
  }
  @media screen and (max-width: 920px) {
    .meta-potato-wrapper {
      margin: 0 auto;
      max-width: 759px;

      .bg-img {
        gap: 10px;

        .play-middle {
          .v-logo {
            img {
              width: 100%;
            }
          }
          .un-none-player {
            max-width: 700px;
            .bg-1 {
              right: 60px;
            }
            .bg-2 {
              top: -200px;
              right: -2px;
            }
          }
        }
      }
      /* button {
        max-width: 370px;
        margin: 0 auto;
      } */
    }
  }
  @media screen and (max-width: 820px) {
    .meta-potato-wrapper {
      margin: 0 auto;
      max-width: 759px;

      .bg-img {
        gap: 10px;

        .play-middle {
          .v-logo {
            img {
              width: 100%;
            }
          }
          .un-none-player {
            max-width: 700px;
            .bg-1 {
              right: 60px;
            }
            .bg-2 {
              top: -200px;
              right: -2px;
            }
          }
        }
      }
      /* button {
        max-width: 370px;
        margin: 0 auto;
      } */
    }
  }
  @media screen and (max-width: 768px) {
    .meta-potato-wrapper {
      max-width: 700px;
      .bg-img {
        gap: 15px;

        .play-middle {
          .v-logo {
            max-width: 80px;
          }
          .un-none-player {
            max-width: 650px;
            .bg-1 {
              right: 60px;
            }
            .bg-2 {
              top: -200px;
              right: -2px;
            }
          }
          .span-container span {
            font-size: 26px;
          }
        }
      }
      /* button {
        max-width: 370px;
        margin: 0 auto;
      } */
    }
  }
  @media screen and (max-width: 610px) {
    .meta-potato-wrapper {
      max-width: 580px;

      .potato-land-tabs {
        .tabs-btn {
          /* max-width: 510px; */
          /* margin: 0 auto; */
          a {
            button {
              /* max-width: 175px; */
              /* margin: 0 auto; */
              font-size: 18px;
            }
          }
        }
      }

      .bg-img {
        gap: 15px;

        .play-earn-text span {
          font-size: 14px !important;
        }

        .play-middle {
          .v-logo {
            max-width: initial;
            width: 40%;
          }
          .un-none-player {
            max-width: 500px;
            .bg-1 {
              right: 18px;
            }
            .bg-2 {
              top: -184px;
              right: 24px;
            }
          }
          .span-container span {
            font-size: 20px;
          }
        }
      }

      /* button {
        max-width: 300px;
        margin: 0 auto;
      } */
    }
    .loader-mobile-wrapper {
      .filter-btn-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        button {
          font-size: 13px;
        }
      }
    }
  }
  @media screen and (max-width: 520px) {
    .meta-parts-container {
      .Metapoint {
        padding: 0px 23px 20px;
        justify-content: flex-end;
      }
    }
    .meta-potato-wrapper {
      max-width: 450px;

      .potato-land-tabs {
        .tabs-btn {
          /* max-width: 484px; */
          /* margin: 0 auto; */
          a {
            button {
              /* max-width: 125px; */
              /* margin: 0 auto; */
              font-size: 13px;
              min-height: 50px;
            }
          }
        }
      }
      .heading-wrapper {
        span:nth-child(1) {
          text-align: center;
          min-width: 131px;
        }
        span:nth-child(2) {
          text-align: center;
        }
        span:nth-child(3) {
          text-align: center;
        }
        span:nth-child(4) {
          text-align: center;
        }
        span:nth-child(5) {
          text-align: center;
        }
        span:nth-child(6) {
          text-align: center;
        }
      }

      .bg-img {
        gap: 10px;

        .play-earn-text span {
          font-size: 10px !important;
        }

        .play-middle {
          .v-logo {
            width: 50%;
          }
          .un-none-player {
            max-width: 420px;
            .bg-1 {
              top: -190px;
              right: -24px;
            }
            .bg-2 {
              top: -190px;
              right: -17px;
            }
          }
          .span-container span {
            font-size: 16px;
          }
        }
      }
      /* button {
        max-width: 230px;
        margin: 0 auto;
      } */
    }
  }

  @media screen and (max-width: 520px) {
    /* max-width: 455px;
    margin: 0 auto; */

    .loader-mobile-wrapper {
      .items-container {
        .all-items {
          .item-1 {
            img {
              max-width: 150px;
            }
          }
        }
      }
    }

    .meta-potato-wrapper {
      max-width: 454px;

      .potato-land-tabs {
        .tabs-btn {
          max-width: 484px;
          margin: 0 auto;
          justify-content: center;
          flex-wrap: wrap;
          a {
            max-width: 202px;

            button {
              font-size: 13px;
              min-height: 45px;
            }
          }
        }
      }

      .meta-potato-land-tabs {
        .tabs-btn {
          flex-wrap: wrap;

          button {
            max-width: 165px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 416px) {
    .loader-mobile-wrapper {
      .items-container {
        .all-items {
          .item-1 {
            img {
              max-width: 150px;
            }
          }
        }
      }
    }

    .meta-potato-wrapper {
      max-width: 354px;

      .potato-land-tabs {
        .tabs-btn {
          max-width: 484px;
          margin: 0 auto;
          justify-content: center;
          flex-wrap: wrap;
          a {
            max-width: 163px;

            button {
              font-size: 13px;
              min-height: 45px;
            }
          }
        }
      }

      .meta-potato-land-tabs {
        .tabs-btn {
          flex-wrap: wrap;

          button {
            max-width: 165px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    .loader-wrapper {
      max-width: 351px;
      margin: 0 auto;
    }

    .meta-potato-wrapper {
      .bg-img {
        gap: 5px;

        .play-earn-text span {
          font-size: 10px !important;
        }

        .play-middle {
          .v-logo {
            /* max-width: 25px; */
          }
          .un-none-player {
            max-width: 300px;
            .bg-1 {
              top: -74px;
              right: 49px;
              max-width: 187px;
            }
            .bg-2 {
              top: -69px;
              right: 55px;
              max-width: 180px;
            }
          }
          .span-container span {
            font-size: 16px;
          }
        }
      }
      /* button {
        max-width: 230px;
        margin: 0 auto;
      } */
    }
  }

  @media screen and (max-width: 500px) {
    .loader-wrapper {
      border-radius: 8px;
      border: 1px solid var(--yellow-color, #f4cd68);
      background: linear-gradient(178deg, #000 0%, #594207 100%);
      margin: 0 auto;
      width: 90%;
      padding: 0px;
      /* max-width: 345px; */
    }
  }

  @media screen and (max-width: 540px) {
    .meta-potato-wrapper {
      .loader-wrapper {
        .metascore {
          align-self: center;
        }
      }
      .loader-wrapper .drag .metascore .score {
        padding: 20px 10px;
        span {
          font-size: 12px;
        }
      }

      .bg-img {
        gap: 5px;

        .play-earn-text span {
          font-size: 10px !important;
        }

        .play-middle {
          .v-logo {
            /* max-width: 25px; */
          }
          .un-none-player {
            max-width: 300px;
            .bg-1 {
              top: -74px;
              right: 49px;
              max-width: 187px;
            }
            .bg-2 {
              top: -69px;
              right: 55px;
              max-width: 180px;
            }
          }
          .span-container span {
            font-size: 16px;
          }
        }
      }
      /* button {
        max-width: 230px;
        margin: 0 auto;
      } */
    }
  }
  /* @media screen and (max-width: 360px) {
    .meta-potato-wrapper {
      .bg-img {
        gap: 2px;

        .play-earn-text span {
          font-size: 9px !important;
        }

        .play-middle {
          .v-logo {
            max-width: 23px;
          }
          .un-none-player {
            max-width: 80px;
          }
          .span-container span {
            font-size: 14px;
          }
        }
      }
     
    }
  } */
`;

export const Play2Container = styled("div")`
  .play-background {
    /* background: #1c1f25; */
    border-radius: 8px;
    /* padding: 25px; */

    .img-wrapper {
      position: relative;
      max-width: 1120px;
      /* margin: 0 auto; */
    }

    img {
      width: 100%;
    }

    .bg-img {
      display: flex;
      flex-direction: column;
      gap: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;

      .play-earn-text {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
        span:nth-child(1) {
          font-weight: 700;
          font-size: 20px;
          text-shadow: -1px -1px 0 #f89d16, 1px -1px 0 #f89d16,
            -1px 1px 0 #f89d16, 1px 1px 0 #000;
        }
        span:nth-child(2) {
          font-weight: 900;
          font-size: 20px;
          text-transform: uppercase;
        }
      }

      .play-middle {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .v-logo {
          img {
            width: 100%;
          }
        }

        .span-container {
          display: flex;
          gap: 25px;

          span {
            font-family: "Germania One";
            font-weight: 400;
            font-size: 35px;
          }
        }

        .un-none-player {
          width: 100%;
          max-width: 700px;
          position: relative;
          .bg-1 {
            position: absolute;
            top: -169px;
            right: 113px;
            width: 440px;
          }
          .bg-2 {
            position: absolute;
            top: -169px;
            right: 124px;
            z-index: -1;
            width: 440px;
          }
        }
      }

      button {
        position: absolute;
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        box-shadow: none;
        top: 60%;
        left: 61%;
        transform: translate(-50%, -50%);
      }
    }
  }

  @media screen and (max-width: 1460px) {
    .play-background {
      .img-wrapper {
        max-width: 940px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .play-background {
      .bg-img {
        gap: 15px;

        .play-middle {
          .v-logo {
            max-width: 80px;
          }
          .un-none-player {
            max-width: 636px;
            min-width: initial;
            .bg-1 {
              right: 75px;
            }
            .bg-2 {
              top: -174px;
              right: 93px;
            }
          }
          .span-container span {
            font-size: 26px;
          }
        }
      }
      button {
        top: 68%;
        max-width: 370px;
        margin: 0 auto;
      }
    }
  }
  @media screen and (max-width: 820px) {
    .play-background {
      .bg-img {
        transform: translate(-50%, -50%) scale(0.9);
        gap: 20px;

        .play-middle {
          .v-logo {
            img {
              width: 100%;
            }
          }
          .un-none-player {
            max-width: 700px;
            .bg-1 {
              right: 113px;
            }
            .bg-2 {
              top: -169px;
              right: 124px;
            }
          }
        }
      }
      button {
        max-width: 370px;
        margin: 0 auto;

        .Text-effect {
          bottom: 12px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .play-background {
      .bg-img {
        gap: 15px;
        /* transform: translate(-50%, -50%) scale(0.8); */

        .play-middle {
          .v-logo {
            max-width: 80px;
          }
          .un-none-player {
            max-width: 650px;
            min-width: initial;
            .bg-1 {
              right: 84px;
            }
            .bg-2 {
              top: -173px;
              right: 99px;
            }
          }
          .span-container span {
            font-size: 26px;
          }
        }
      }
      button {
        max-width: 370px;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 610px) {
    .play-background {
      .bg-img {
        gap: 15px;
        /* transform: translate(-50%, -50%) scale(0.7); */

        .play-earn-text span {
          font-size: 14px !important;
        }

        .play-middle {
          .v-logo {
            max-width: initial;
            width: 10%;
          }
          .un-none-player {
            max-width: 500px;
            .bg-1 {
              right: 18px;
            }
            .bg-2 {
              top: -184px;
              right: 24px;
            }
          }
          .span-container span {
            font-size: 20px;
          }
        }
      }
      button {
        max-width: 300px;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 510px) {
    .play-background {
      padding: 0px 15px 20px;
      .bg-img {
        gap: 10px;

        .play-earn-text span {
          font-size: 10px !important;
        }

        .play-middle {
          .v-logo {
            /* max-width: 25px; */
          }
          .un-none-player {
            max-width: 420px;
            .bg-1 {
              top: -190px;
              right: -24px;
            }
            .bg-2 {
              top: -190px;
              right: -17px;
            }
          }
          .span-container span {
            font-size: 16px;
          }
        }
      }
      button {
        max-width: 230px;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 420px) {
    .play-background {
      .bg-img {
        gap: 5px;

        .play-earn-text span {
          font-size: 10px !important;
        }

        .play-middle {
          .v-logo {
            /* max-width: 25px; */
          }
          .un-none-player {
            max-width: 300px;
            .bg-1 {
              top: -74px;
              right: 49px;
              max-width: 187px;
            }
            .bg-2 {
              top: -69px;
              right: 55px;
              max-width: 180px;
            }
          }
          .span-container span {
            font-size: 16px;
          }
        }
      }
      button {
        max-width: 230px;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .play-background {
      .bg-img {
        gap: 5px;

        .play-earn-text span {
          font-size: 10px !important;
        }

        .play-middle {
          .v-logo {
            /* max-width: 25px; */
          }
          .un-none-player {
            max-width: 300px;
            .bg-1 {
              top: -74px;
              right: 49px;
              max-width: 187px;
            }
            .bg-2 {
              top: -69px;
              right: 55px;
              max-width: 180px;
            }
          }
          .span-container span {
            font-size: 16px;
          }
        }
      }
      button {
        max-width: 230px;
        margin: 0 auto;
      }
    }
  }

  /* @media screen and (max-width: 360px) {
    .play-background {
      .bg-img {
        gap: 2px;

        .play-earn-text span {
          font-size: 9px !important;
        }

        .play-middle {
          .v-logo {
            max-width: 23px;
          }
          .un-none-player {
            max-width: 80px;
          }
          .span-container span {
            font-size: 14px;
          }
        }
      }
      button {
        max-width: 210px;
        margin: 0 auto;
      }
    }
  } */
`;

export const ConnectWallet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  right: 118px;
  align-items: center;
  padding: 13px 30px;
  gap: 10px;
  background: linear-gradient(#3dac21 -8.82%, #022e1b);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 100px;
  max-width: 313px;
  margin: 0 auto;

  .Text-effect {
    position: absolute;
    bottom: 5px;
    right: 0px;
  }

  .token {
    width: 37px;
  }
  .Shadow {
    position: absolute;
    bottom: -30px;
  }

  @media screen and (max-width: 1024px) {
    padding: 12px 10px;
    bottom: 10px;
  }

  @media screen and (max-width: 610px) {
    padding: 12px 20px;
    right: 105px;
    .Shadow {
      display: none;
    }
  }
  @media screen and (max-width: 510px) {
    right: 90px;
    max-width: 268px;
    .Text-effect {
      bottom: 4px;
      right: 1px;
    }
  }
  @media screen and (max-width: 420px) {
    padding: 5px 12px;
    bottom: -9px;
    right: 70px;
    max-width: 200px;
  }
  @media screen and (max-width: 375px) {
    padding: 5px 12px;
    bottom: -9px;
    right: 70px;
    max-width: 200px;
  }
`;

export const MetaPartsContainer = styled("div")`
  max-width: 1110px;
  @media screen and (max-width: 1420px) {
    max-width: 985px;
  }

  .filter-parent-container {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    width: 100%;
  }

  .filter-btns {
    display: flex;
    justify-content: flex-end;
    gap: 5px;

    span {
      color: #f4cd68;
      font-weight: 700;
      font-size: 18px;
    }

    button {
      background: #22252d;
      border: 1px solid #f4cd68;
      border-radius: 4px;
      color: #f4cd68;
      padding: 2px 10px;
      font-size: 14px;
    }
  }

  .meta-parts-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .meta-potato-card-wrapper {
    display: flex;
    gap: 45px;
    margin: 0 auto;

    .custom-next-arrow,
    .custom-prev-arrow {
      position: relative;
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

      /* max-width: 670px; */
    }
    .slick-slide > div {
      outline: none;
    }
    .slick-list {
      width: 476px;
      max-height: 565px;
    }

    /* .card-main-wrapper {
      width: 100%;
      outline: none;
    } */
    .card-main-wrapper-container {
      width: 100%;
      outline: none;

      .rectangle {
        width: 100%;
        max-width: 380px;
        min-height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #1c1f25 43.07%, #000000 104.33%);
        border: 5px solid #f4cd68;
        box-shadow: 0px 0px 20px #f4cd68, inset 0px 0px 20px #f4cd68;
        border-radius: 25px;
        gap: 5px;

        button {
          width: 100%;
          max-width: 75px;
          min-height: 35px;
          background: #181818;
          border: 1px solid #f4cd68;
          border-radius: 8px;
          font-weight: 700;
          font-size: 12px;
          color: #f4cd68;
        }
        span {
          font-size: 9px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #ffffff;
          text-align: center;
          max-width: 250px;
        }
      }
    }

    .card-main-wrapper {
      background: linear-gradient(rgb(28, 31, 37) 43.07%, rgb(0, 0, 0) 104.33%);
      border: 5px solid rgb(244, 205, 104);
      box-shadow: rgb(244, 205, 104) 0px 0px 20px,
        rgb(244, 205, 104) 0px 0px 20px inset;
      border-radius: 30px;
      width: 100%;
      max-width: 380px;
      padding: 10px 20px;
      margin-top: 24px;
      margin-bottom: 12px;
    }

    .card-img-item {
      display: flex;
      gap: 15px;
      width: 100%;

      .card-frame {
        width: 85%;
        border: 5px solid #f4cd68;
        border-radius: 26px;
        box-shadow: 0px 0px 20px #f4cd68, inset 0px 0px 20px #f4cd68;
        max-height: 149px;

        img {
          width: 140px;
        }
      }

      .card-details-item {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        justify-content: center;

        .card-title {
          display: flex;
          flex-direction: column;

          width: 100%;

          span {
            font-size: 16px;
            font-weight: 600;
          }
          span:nth-child(2) {
            font-size: 14px;
            color: #7a7a7a;
          }
        }

        .card-rarity {
          display: flex;
          flex-direction: column;

          background: #22252d;
          border: 1px solid #f4cd68;
          border-radius: 8px;
          align-items: center;
          padding: 5px 20px;
          justify-content: space-between;

          span {
            font-size: 14px;
            font-weight: 600;
          }

          span:nth-child(2) {
            color: #f4cd68;
            text-shadow: 0px 0px 20px #f4cd68;
          }
        }
      }
    }

    .card-btns {
      display: flex;
      justify-content: space-around;
      gap: 5px;
      margin-top: 10px;
      width: 100%;

      .share {
        border: 1px solid #f4cd68;
      }

      .send,
      .sell,
      .burn {
        color: #26e2b3;
        border: 1px solid #26e2b3;
      }

      .sell {
      }

      .Tab-active {
        border: 1px solid #f4cd68;
        color: #f4cd68;
      }
      .Tab-deactive {
      }

      button {
        background: #181818;
        border-radius: 8px;
        color: #fff;
        border: none;
        font-size: 14px;
        padding: 5px 10px;
        max-width: 117px;
        margin: 10px 0px;
      }
    }
  }

  .Metapoint {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    justify-content: ${(props) => props.filterDir};
    gap: 20px;

    @media screen and (max-width: 600px) {
      padding: 0px 10px;
      justify-content: center;
    }
    span {
      font-weight: 700;
      font-size: 14px;
      color: #f4cd68;
    }

    .filter-item-title {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .rarity {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .all-items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: ${(props) => props.cardDir};
  }
  .item-1 {
    display: flex;
    flex-direction: column;
  }
  .box {
    display: flex;
    justify-content: space-evenly;
    gap: 5px;
    button {
      width: 100%;
      max-width: 76px;
      min-height: 39px;
      background: #161616;
      color: #26e2b3;
      border: 1px solid #26e2b3;
      border-radius: 8px;
      color: #26e2b3;
      font-size: 16px;
      img {
        width: 20px;
      }
    }
    #upload {
      border: 1px solid #f4cd68;
    }
  }
  .filter-btns {
    display: flex;
    /* justify-content: flex-end; */
    justify-content: ${(props) => props.dirStyle};
    gap: ${(props) => props.dirGap};
    gap: 12px;
    align-items: center;

    button {
      background: #22252d;
      border-radius: 4px;
      color: #fff;
      padding: 2px 10px;
      font-size: 14px;
    }

    .active {
      border: 1px solid #f4cd68;
      color: #f4cd68;
    }
  }
  .filters {
    width: 100%;
    max-width: 1125px;
  }

  .filter-btn-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    width: 100%;

    button {
      border: 1px solid #26e2b3;
      border-radius: 8px;
      font-size: 14px;
      width: 100%;
      padding: 12px 5px;
    }

    .de-active {
      /* Gradientt */
      background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
      /* Yellow Color */
      border-radius: 8px;
      width: 100%;
      /* max-width: 100px; */
      color: #f4cd68;
      max-width: 100px;

      /* padding: 5px 10px; */
    }

    .active {
      border: 1px solid #ffff;
      background: linear-gradient(to right, #f4cd68, #26e2b3);
      border-radius: 8px;
      color: #000000;
      font-weight: 700;
      max-width: 100px;
      /* padding: 0px 10px; */
    }
  }

  @media screen and (max-width: 1470px) {
    .filter-btn-wrapper {
      gap: 6px;
    }
  }

  @media screen and (max-width: 1024px) {
    .filter-btn-wrapper {
      button {
        font-size: 13px;
      }
    }
    .meta-parts-container {
      .all-items {
        .item-1 {
          max-width: 170px;
        }
      }
    }

    .meta-potato-card-wrapper {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media screen and (max-width: 820px) {
    .meta-parts-container {
      .all-items {
        justify-content: space-around;
        .item-1 {
          max-width: 170px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .filter-btn-wrapper {
      /* max-width: 400px; */
      /* flex-wrap: wrap; */
      /* margin: 0 auto; */
      button {
        font-size: 13px;
      }
    }
    .meta-parts-container {
      .all-items {
        justify-content: start;
        .item-1 {
          max-width: 160px;
        }
      }
    }
  }

  @media screen and (max-width: 620px) {
    .filter-btn-wrapper {
      flex-wrap: wrap;
      justify-content: center;
      gap: 6px;

      button {
        font-size: 13px;
      }
    }
    .meta-parts-container {
      .Metapoint {
      }
    }

    .meta-potato-card-wrapper {
      .card-main-wrapper {
        max-width: 350px;

        .card-img-item {
          .card-frame {
            max-height: 172px;
            border-radius: 29px;
            img {
              max-width: 160px;
            }
          }
          .card-details-item {
            .card-title span {
              font-size: 14px;
            }
            .card-rarity span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 540px) {
    .filter-parent-container {
      transform: scale(0.9);

      .filter-btns {
        gap: 5px;
        span {
          font-size: 12px;
        }
      }
    }

    .Metapoint {
      /* padding: 0px 312px; */
    }
    .filter-item-title {
      flex-direction: column;
    }

    .meta-potato-card-wrapper {
      padding-top: 70px;

      .slick-list {
        width: 320px;
        max-height: 770px;
      }
      .slider-wrapper {
        display: flex;
        flex-direction: column;
      }

      .slick-slide {
        width: 325px !important;
      }

      .custom-next-arrow,
      .custom-prev-arrow {
        transform: translate(20px, 3px);
      }
      .card-main-wrapper {
        max-width: 310px;
        padding: 10px 5px;

        .card-img-item {
          .card-frame {
            max-height: 150px;
            border-radius: 29px;
            img {
              max-width: 160px;
            }
          }
          .card-details-item {
            .card-title span {
              font-size: 14px;
            }
            .card-rarity span {
              font-size: 14px;
            }
          }
        }
      }
      .card-btns {
        gap: 2px;
        button {
          font-size: 10px;
        }
      }
    }

    .meta-potato-card-wrapper .card-main-wrapper-container .rectangle button {
      font-size: 9px;
      max-width: 55px;
    }
    .meta-potato-card-wrapper .card-main-wrapper-container .rectangle {
      max-width: 310px;
    }

    .meta-parts-container {
      .all-items {
        justify-content: space-around;
        .item-1 {
          max-width: 160px;
        }
      }
    }
  }

  @media screen and (max-width: 416px) {
    .filter-item-title {
      flex-direction: column;
    }

    .meta-potato-card-wrapper {
      .card-btns {
        gap: 2px;
        button {
          font-size: 10px;
        }
      }
    }

    .meta-parts-container {
      .all-items {
        justify-content: space-around;
        .item-1 {
          max-width: 160px;
        }
      }
    }
  }
`;

export const PartsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #282c34;
  border: ${(props) => props.loaderColor};
  border-radius: 8px;
  background: ${(props) => props.loaderColor};
  min-width: ${(props) => props.minWdith};
  padding: ${(props) => props.pd};
  border-radius: ${(props) => props.rd};
  min-height: ${(props) => props.minHeight};
  max-width: ${(props) => props.maxWidth};

  .parts-container {
    display: flex;
  }

  .status-container {
    display: flex;
    margin-top: 30px;
    gap: 20px;
    justify-content: center;
    /* box-shadow: 1px 1px 13px 20px #0f131c; */

    .item-box {
      display: flex;
      flex-direction: column;
      background: #171a20;
      border-radius: 8px;
      padding: 5px 15px;
      align-items: center;
      box-shadow: 1px 1px 13px 2px #171a20;

      span:nth-child(1) {
        color: #f4cd68;
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
      }
      span:nth-child(2) {
        color: #ffffff;
        text-shadow: 0px 0px 30px #ffffff;
      }
    }
  }

  .img-part {
    min-width: 330px;
    padding: 10px;

    .img {
      /* border: 5px solid #f4cd68; */
      /* box-shadow: inset 0px 0px 15px #f4cd68; */
      /* filter: drop-shadow(0px 0px 15px #f4cd68); */
      /* border-radius: 8px; */
      margin: 0 auto;
    }

    .wrapper {
      display: flex !important;
      flex-direction: column;
      gap: 30px;

      span {
        text-align: center;
        font-style: italic;
        text-shadow: 0px 1px 10px #fff;
      }
    }

    .slide_img {
      box-shadow: inset 0px 0px 15px #f4cd68;
      border: 5px solid #f4cd68;
      border-radius: 8px;
    }

    .slick-list {
      /* box-shadow: inset 0px 0px 15px #f4cd68; */
      max-width: 283px;
      min-height: 283px;
    }

    .slick-prev {
      transform: translate(46px, 10.6rem);
      display: none !important;
    }

    .slick-next {
      transform: translate(-46px, 10.6rem);
      display: none !important;
    }

    .slick-next:before {
      content: "";
      background-image: url(${NextArrow});
      width: 36px;
      height: 36px;
      position: absolute;
    }
    .slick-prev:before {
      content: "";
      background-image: url(${PreArrow});
      width: 36px;
      height: 36px;
      position: absolute;
    }
  }

  .filter-btns {
    display: flex;
    /* justify-content: flex-end; */
    justify-content: ${(props) => props.dirStyle};
    gap: ${(props) => props.dirGap};
    gap: 5px;

    button {
      background: #22252d;
      border: 1px solid #f4cd68;
      border-radius: 4px;
      color: #f4cd68;
      padding: 2px 10px;
      font-size: 14px;
    }
  }

  .page {
    position: relative;
    width: 100%;
    height: 180px;
    /* background: #081d2a; */
  }

  .heading-wrapper {
    display: flex;
    width: 100%;

    span {
      font-size: 12px;
      color: #f4cd68;
      font-weight: 600;
      width: 100%;
    }
    span:nth-child(1) {
      text-align: center;
      min-width: 131px;
    }
    span:nth-child(2) {
      text-align: end;
      display: flex;
      justify-content: center;
      gap: 5px;
      min-width: 140px;

      p {
        color: #ffffff;
      }
    }
    span:nth-child(3) {
      text-align: center;
    }
    span:nth-child(4) {
      text-align: center;
    }
    span:nth-child(5) {
      text-align: center;
    }
    span:nth-child(6) {
      text-align: left;
      padding-left: 50px;
    }
  }

  .span-style {
    font-size: 12px;
    color: #f4cd68;
    font-weight: 600;
    width: 100%;
  }

  .leaderbord-wrapper {
    display: flex;
    /* justify-content: space-evenly; */
    width: 100%;
  }

  .weapans-wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  hr {
    border-radius: 5px;
    height: 3px;
    background-color: #f4cd68;
    border: none;
    opacity: 1;
    margin: 10px;
  }

  .content {
    width: 100%;
    /* height: 300px; */
    height: ${(props) => props.boxHeight};
  }

  .wrapper {
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDir};
    gap: ${(props) => props.flexGap};
    position: relative;
    width: 100%;
    height: 100%;
    /* max-height: 345px; */
    max-height: ${(props) => props.itemTableHei};
    padding: 0;
    overflow-y: scroll;
    z-index: 99;

    img {
      width: initial;
    }

    .product-items {
      display: flex;
      width: 100%;
      border-bottom: 2px solid #282c34;
      /* padding-right: 15px; */
      justify-content: flex-end;
      gap: 15px;

      span {
        max-width: 145px;
      }
      .p-item {
        display: flex;
        gap: 5px;
        width: ${(props) => props.boxWidth};
        /* justify-content: ${(props) => props.dirStyle}; */

        span {
          width: 115px;
        }
      }

      .p-item-wrapper {
        display: flex;
        gap: 40px;

        span {
          padding: 0;
        }
      }

      span {
        font-size: 14px;
        color: #fff;
        font-weight: 600;
        width: 100%;
        /* padding: 25px 0px; */
        padding: ${(props) => props.leaderTitle};
        text-align: center;
      }
      span:nth-child(5) {
        text-align: center;
      }
      span:nth-child(6) {
        text-align: center;
      }

      span:nth-child(7) {
        text-align: center;
        /* padding-left: 18px; */
      }
    }
  }

  /* .page::after {
    content: "";
    position: absolute;
    z-index: 1;
    height: ${(props) => props.reqiredHeight};
    top: 51px;
    right: 0px;
    width: 13px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  } */

  .wrapper::-webkit-scrollbar {
    display: block;
    width: 13px;
  }
  .wrapper::-webkit-scrollbar-track {
    background: transparent;
  }

  .wrapper::-webkit-scrollbar-thumb {
    background-color: #f4cd68;
    border-right: none;
    border-left: none;
    border-radius: 10px;
  }

  .wrapper::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 0px;
  }

  .wrapper::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 0px;
  }

  .wrapper::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }

  @media screen and (max-width: 1124px) {
    /* max-width: 599px; */
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    /* max-width: 720px; */
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .parts-container {
      .page {
        width: 300px;
        height: 250px;
        overflow: scroll;

        .heading-wrapper {
          width: 370px;
        }

        hr {
          width: 390px;
        }

        .content {
          width: 300px;

          .wrapper {
            width: 360px;
          }
        }

        .wrapper {
          max-height: none;
          .product-items {
            .p-item-wrapper {
              max-width: 210px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 540px) {
    min-height: 220px;
    /* .wrapper {
      .product-items {
        justify-content: space-around;
      }
    }
    .parts-container .page .heading-wrapper {
      width: 295px;
    }
    .parts-container .page .content .wrapper {
      width: 280px;
    } */
  }
`;

export const MetaContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .filter-btn-wrapper {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column;
    justify-content: space-between; */
    gap: 28px;
    /* padding: 20px 10px 0px 25px; */

    @media screen and (max-width: 520px) {
      justify-content: center;
      gap: 6px;
    }
    .de-active {
      /* Gradientt */
      background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
      /* Yellow Color */
      border-radius: 8px;
      width: 100%;
      max-width: 100px;
      color: #fff;
    }

    .active {
      border: 1px solid #f4cd68;
      background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
      border-radius: 8px;
      color: #f4cd68;
      font-weight: 700;
      max-width: 100px;
      width: 100%;
    }
  }
`;
