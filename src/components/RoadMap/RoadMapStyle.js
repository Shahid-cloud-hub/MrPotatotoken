import styled from "styled-components";

export const MainContainer = styled("div")`
  .container {
    width: 100%;
    padding: 0px;
  }

  .roadMap-background {
    /* background-color: #282c34; */
    /* padding-top: 43px; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 20px;
    border-radius: 8px;
    /* margin-bottom: 50px; */

    .flex-end {
      padding-top: 35px;

      /* .title {
        min-width: 677px;
      } */
    }

    .road-map-main-parent {
      display: flex;
      gap: 15px;
      padding: 0 10px;

      .road-map-left,
      .road-map-right {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        gap: 18px;
        width: 50%;
      }
    }

    .q-section_1 {
      display: flex;
      flex-direction: column;
      /* width: 100%; */
      /* max-width: 910px; */
      /* margin: 0 auto; */

      .Q1 {
        font-weight: 700;
        font-size: 14px;
        color: #f4cd68;
        /* text-align: center; */
        /* Yellow Gradient */
        background: linear-gradient(180deg, #000000 0%, #594207 100%);
        /* Yellow Color */
        border: 1px solid #f4cd68;
        border-radius: 8px;
        padding: 10px 14px;
        max-width: 266px;
      }

      .l-box-item-1 {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 44px;
        /* margin-bottom: 150px; */
        max-width: 600px;
        /* margin: auto; */
        /* margin: 15px auto; */

        .Q-box-1 {
          background: linear-gradient(
            350.06deg,
            #000000 52.41%,
            #594207 141.67%
          );
          border: 1px solid #f4cd68;
          border-radius: 8px;
          padding: 15px;
          margin-top: 12px;

          ul {
            margin: 0;
            max-width: 436px;
            li {
              font-weight: 700;
              font-size: 14px;
            }
          }
        }
      }
    }

    .land--section {
      display: flex;
      background: linear-gradient(
        306.99deg,
        rgba(244, 205, 104, 0.69) -38.55%,
        rgba(0, 0, 0, 0.82) 84.54%
      );
      border-radius: 8px;
      border: 1px solid #f4cd68;
      gap: 30px;
      width: 100%;
      max-width: 885px;
      padding: 15px 20px;
      margin-bottom: 50px;

      .land-item-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        span:nth-child(1) {
          font-weight: 700;
          font-size: 12px;
          color: #f4cd68;
        }

        hr {
          width: 100%;
          max-width: 200px;
        }

        span {
          font-weight: 700;
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) {
    hr {
      display: none;
    }
    .roadMap-background {
      background-color: transparent;

      .road-map-main-parent {
        flex-direction: column;
        width: 100%;
        padding: 0px;

        .road-map-left,
        .road-map-right {
          width: 100%;
        }
      }

      .land--section {
        display: flex;
        gap: 15px;
      }

      .q-section_1 {
        .Q1 {
          font-size: 16px;
          width: 100%;
          max-width: initial;
        }
        .l-box-item-1 {
          width: 100%;
          max-width: initial;
        }
      }
    }
  }

  @media screen and (max-width: 920px) {
    .container {
      padding: 10px;
      max-width: 600px;
    }
    .none {
      display: none;
    }

    .roadMap-background {
      .flex-end {
        align-items: center;

        .title {
          min-width: -webkit-fill-available;
        }
      }
      .q-section_1 {
        .l-box-item-1 {
          .Q-box-1 {
            border: none;

            ul {
              li {
                font-size: 12px;
              }
            }
          }
        }
      }

      .land--section {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
        background: transparent;
        border: none;
        padding: 0;
        max-width: 787px;
        margin: 0;
        justify-content: center;

        .land-item-1 {
          background: linear-gradient(
            306.99deg,
            rgba(244, 205, 104, 0.69) -38.55%,
            rgba(0, 0, 0, 0.82) 84.54%
          );
          border-radius: 8px;
          max-width: 158px;
          padding: 24px;

          hr {
            display: block;
          }

          span {
            font-size: 11px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding: 25px;
      max-width: 720px;
    }

    .roadMap-background {
      padding-top: 0px;

      .q-section_1 {
        .l-box-item-1 {
          .Q-box-1 {
            border: none;

            ul {
              li {
                font-size: 16px;
              }
            }
          }
        }
      }

      .land--section {
        display: flex;
        gap: 33px;
        max-width: 695px;

        .land-item-1 {
          max-width: 258px;
          span:nth-child(1) {
            font-size: 22px;
          }

          span {
            font-size: 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 610px) {
    .container {
      padding: 0px 25px 10px;
      max-width: 390px;
    }
    .none {
      display: none;
    }

    .roadMap-background {
      align-items: center;
      img {
        width: 140px;
      }
      .q-section_1 {
        .l-box-item-1 {
          .Q-box-1 {
            border: none;

            ul {
              li {
                font-size: 12px;
              }
            }
          }
        }
      }

      .land--section {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
        background: transparent;
        border: none;
        padding: 0;
        max-width: 787px;
        margin: 0;
        justify-content: center;

        .land-item-1 {
          background: linear-gradient(
            306.99deg,
            rgba(244, 205, 104, 0.69) -38.55%,
            rgba(0, 0, 0, 0.82) 84.54%
          );
          border-radius: 8px;
          max-width: 158px;
          padding: 24px;

          span:nth-child(1) {
            font-size: 14px;
          }

          hr {
            display: block;
          }

          span {
            font-size: 11px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .container {
      padding: 10px 25px;
    }
    .none {
      display: none;
    }

    .roadMap-background {
      .q-section_1 {
        .l-box-item-1 {
          .Q-box-1 {
            border: none;

            ul {
              li {
                font-size: 12px;
              }
            }
          }
        }
      }
      .land--section {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
        background: transparent;
        border: none;
        padding: 0;
        max-width: 787px;
        margin: 0;
        justify-content: center;

        .land-item-1 {
          background: linear-gradient(
            306.99deg,
            rgba(244, 205, 104, 0.69) -38.55%,
            rgba(0, 0, 0, 0.82) 84.54%
          );
          border-radius: 8px;
          max-width: 128px;
          padding: 14px;
          width: 100%;

          hr {
            display: block;
          }

          span {
            font-size: 11px;
          }
        }
      }
    }
  }
  /* 
  @media screen and (max-width: 540px) {
    .container {
      padding: 70px 25px;
    }
    .box-wrapper {
      flex-direction: column;
      margin-top: 0px;

      .vl {
        display: none;
      }
      .left-side-box {
        max-width: 500px;

        .l-box-item-1 {
          margin-bottom: 40px;
          span {
            text-align: center !important;
          }
        }

        .l-box-item-2 {
          span {
            text-align: center !important;
          }
        }
      }

      .right-side-box {
        max-width: 500px;

        .r-box-item-1 {
          margin-top: 50px;
          span {
            text-align: center !important;
          }
        }

        .r-box-item-2 {
          margin-top: 50px;
          margin-bottom: 50px;
          span {
            text-align: center !important;
          }
        }
      }
    }
  }

  @media screen and (max-width: 412px) {
    .container {
      padding: 70px 25px;
    }
    .box-wrapper {
      flex-direction: column;
      margin-top: 0px;

      .vl {
        display: none;
      }
      .left-side-box {
        max-width: 350px;

        .l-box-item-1 {
          margin-bottom: 40px;
          span {
            text-align: center !important;
          }

          .Q-box-1 ul {
            li {
              font-size: 14px;
            }
          }
        }

        .l-box-item-2 {
          span {
            text-align: center !important;
          }

          .Q-box-3 ul {
            li {
              font-size: 14px;
            }
          }
        }
      }

      .right-side-box {
        max-width: 350px;

        .r-box-item-1 {
          margin-top: 50px;
          span {
            text-align: center !important;
          }

          .Q-box-2 ul {
            li {
              font-size: 14px;
            }
          }
        }

        .r-box-item-2 {
          margin-top: 50px;
          margin-bottom: 50px;
          span {
            text-align: center !important;
          }

          .Q-box-4 ul {
            li {
              font-size: 14px;
            }
          }
        }
      }
    }
  } */

  .FooterBannerImg {
    img {
      width: 100%;
      height: 140px;
    }
  }
`;
