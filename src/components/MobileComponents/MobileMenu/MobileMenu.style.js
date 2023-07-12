import styled from "styled-components";

export const MobileMenuContainer = styled("div")`
  .menu-nav-bar-center {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    /* margin-bottom: 30px; */
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
    max-width: 170px;

    .box-wrapper {
      display: flex;
      align-items: center;
      gap: 5px;

      span {
        font-weight: 700;
      }
    }

    span:nth-child(1) {
      font-family: "Junegull";
      font-size: 16px;
      color: #ffffff;
      position: relative;
    }

    span:nth-child(2) {
      font-size: 12px;

      font-family: "mostra-nuova";
      color: #999999;
      display: flex;
      gap: 5px;
      align-items: center;
    }
    span:nth-child(3) {
      font-size: 12px;

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

  @media screen and (max-width: 990px) {
    /* min-width: 532px; */

    /* padding: 0px; */
    padding: ${(props) => props.removePadd};
    .menu-nav-bar-center {
      /* padding-top: 20px; */
      /* justify-content: center; */

      .metapoints {
        max-width: 173px;
        gap: 19px;
        min-height: 45px;

        span:nth-child(1) {
          font-family: "Junegull";
          font-size: 13px;
          color: #ffffff;
          position: relative;
        }

        span:nth-child(2) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
        span:nth-child(3) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    /* min-width: 532px; */

    /* padding: 0px; */
    padding: ${(props) => props.removePadd};
    .menu-nav-bar-center {
      padding-top: 20px;
      justify-content: center;

      .metapoints {
        max-width: 173px;
        gap: 19px;
        min-height: 45px;

        span:nth-child(1) {
          font-family: "Junegull";

          font-size: 14px;
          color: #ffffff;
          position: relative;
        }

        span:nth-child(2) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
        span:nth-child(3) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
    }
  }

  @media screen and (max-width: 610px) {
    .menu-nav-bar-center {
      padding: 20px 15px;
      justify-content: center;
      margin: 0;

      .metapoints {
        max-width: 130px;
        gap: 19px;
        min-height: 45px;
        span:nth-child(1) {
          font-family: "Junegull";

          font-size: 14px;
          color: #ffffff;
          position: relative;
        }

        span:nth-child(2) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
        span:nth-child(3) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
    }
  }

  @media screen and (max-width: 510px) {
    .menu-nav-bar-center {
      padding: 20px 15px;
      flex-wrap: wrap;
      justify-content: center;

      .metapoints {
        max-width: 200px;
        padding: 12px 10px;

        span:nth-child(1) {
          font-family: "Junegull";

          font-size: 16px;
          color: #ffffff;
          position: relative;
        }

        span:nth-child(2) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
        span:nth-child(3) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .menu-nav-bar-center {
      padding: 20px 15px 0px;
      flex-wrap: wrap;
      justify-content: center;

      .metapoints {
        max-width: 180px;

        span:nth-child(1) {
          font-family: "Junegull";

          font-size: 16px;
          color: #ffffff;
          position: relative;
        }

        span:nth-child(2) {
          font-size: 12px;
          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
        span:nth-child(3) {
          font-size: 12px;
          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
    }
  }

  @media screen and (max-width: 390px) {
    .menu-nav-bar-center {
      flex-wrap: wrap;
      justify-content: center;

      .metapoints {
        max-width: 150px;

        span:nth-child(1) {
          font-family: "Junegull";

          font-size: 16px;
          color: #ffffff;
          position: relative;
        }

        span:nth-child(2) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
        span:nth-child(3) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .menu-nav-bar-center {
      flex-wrap: wrap;
      justify-content: center;

      .metapoints {
        max-width: 140px;

        span:nth-child(1) {
          font-family: "Junegull";

          font-size: 11px;
          color: #ffffff;
          position: relative;
        }

        span:nth-child(2) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
        span:nth-child(3) {
          font-size: 12px;

          font-family: "mostra-nuova";
          color: #999999;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }
    }
  }
`;
