import styled from "styled-components";

export const MintSpinContainer = styled("div")`
  position: relative;
  .background {
    /* background-color: #282c34; */
    border-radius: 8px;
    width: 100%;
    /* padding: 25px; */
    /* margin-bottom: 50px; */
    /* max-width: 990px; */
    /* width: 1100px; */
    min-height: 710px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center;
  }

  .inner-wrapper {
    display: flex;
    flex-direction: row;
    background: #1c1f25;
    border-radius: 8px;
    padding: 15px;
  }

  .Slider_3d {
    min-width: 500px;
    position: relative;
    transform: translate(0px, 10px);
    z-index: 3;
  }

  .mint-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;

    span {
      max-width: 379px;
    }
  }

  .mint-info span {
    font-weight: 700;
    font-size: 16px;
    color: #8f98a8;
    padding: 0px 40px;
    text-align: center;
  }

  input {
    background: #0d0e12;
    border-radius: 8px 0px 0px 8px;
    padding: 15px 30px;
    border: none;
    color: #fff;
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

  /* button {
    background: #f4cd68;
    box-shadow: 0px 4px 6px #5a4100;
    border: none;
    color: #000;
    padding: 12px 25px;
    border-radius: 0px 8px 8px 0px;
    padding: 15px 30px;
    font-weight: 700;
    font-size: 16px;
  }

  button:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  } */

  .WinSpin {
    display: flex;
    flex-direction: column;
    position: absolute;

    .WinSpinner {
      display: flex;
      justify-content: center;
    }

    .wins-tabs {
      display: flex;
      margin: 10px 0px;
      padding: 0px 8px;
      /* z-index: 99999; */

      .tabs-btn {
        display: flex;
        gap: 15px;
        width: 100%;
        max-width: 345px;
        flex-wrap: wrap;

        a {
          border: none;
          /* Y gradient */
          background: linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px;
          color: #ffffff;
          width: 100%;
          /* min-height: 42px; */
          max-width: 150px;
          padding: 0px;
          text-align: center;
          padding: 8px 0px;
        }
        img {
          max-width: 29px;
        }

        .active {
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
  }
  .mrPotato-win-spinner {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    height: 0;

    .jackpot-status {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* position: absolute; */
      /* right: 19%;
      top: 71%; */
      transform: translate(27%, -130%);

      span {
        font-family: "mostra-nuova", sans-serif;
        font-size: 36px;
        font-weight: 800;
        background: linear-gradient(45deg, #a66c04, #fffb3d, #a96f05, #9c6202);
        /* text-shadow: 0px 3.76562px 3.76562px rgba(0, 0, 0, 0.1),
          0px 3.76562px 3.76562px rgba(0, 0, 0, 0.1),
          0px 3.76562px 3.76562px rgba(0, 0, 0, 0.1),
          0px 3.76562px 3.76562px rgba(0, 0, 0, 0.1); */
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }

    .jackpot-status-potato {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* position: absolute; */
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.55)
      );
      border-radius: 16px;
      /* right: 19%;
      top: 71%; */
      border: 3px solid #b17808;
      padding: 17px 40px;
      transform: translate(4%, -118%);
      max-width: 143px;
      margin: 0 205px 0 auto;
    }

    .treasure-box-potato {
      transform: translate(261%, -157%) scale(0.89);
      width: 196px;
      position: absolute;
    }
  }

  /* @media screen and (max-width: 1280px) {
    .WinSpin > .buy_credits > .Buy-btn {
      transform: translate(55px, 198px);
    }
  } */

  @media screen and (max-width: 1080px) {
    .WinSpin > .wins-tabs > .tabs-btn {
      max-width: 153px;
    }

    .mrPotato-win-spinner {
      .jackpot-status-potato {
        transform: translate(75%, -143%);
      }
    }
  }

  @media screen and (max-width: 820px) {
    .WinSpin > .WinSpinner {
      max-width: 532px;
      margin: 150px auto 0px;
    }

    .Buy-btn {
      display: none;
    }

    .WinSpin {
      display: flex;
      justify-content: center;
      flex-direction: row;

      .buy_credits {
        /* transform: translate(-188px, 25px); */
        min-width: 415px !important;
        z-index: 99;

        .m-buy-btn {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-width: 160px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .WinSpin {
      width: 100%;
      .wins-tabs {
        width: 100%;
        .tabs-btn {
          max-width: inherit;
          justify-content: center;
        }
      }
    }

    .mrPotato-win-spinner {
      .jackpot-status-potato {
        transform: translate(50%, -117%);
      }
    }
  }

  @media screen and (max-width: 620px) {
    .mrPotato-win-spinner {
      .jackpot-status-potato {
        transform: translate(50%, -117%);
      }
      .treasure-box-potato {
        transform: translate(261%, -157%) scale(0.89);
        width: 196px;
        position: absolute;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .WinSpin {
      max-width: 489px;
    }

    .WinSpin {
      width: 100%;
      .wins-tabs {
        width: 100%;
        .tabs-btn {
          max-width: inherit;
          justify-content: center;

          a {
            max-width: 117px;
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    .inner-wrapper {
      flex-direction: column;
    }

    .Slider_3d {
      transform: translate(0px, 10px) scale(0.7);
    }
  }

  @media screen and (max-width: 395px) {
    .WinSpin {
      width: 100%;
      .wins-tabs {
        width: 100%;
        .tabs-btn {
          max-width: inherit;
          justify-content: center;

          a {
            max-width: 100px;
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .WinSpin {
      width: 100%;
      .wins-tabs {
        width: 100%;
        .tabs-btn {
          max-width: inherit;
          justify-content: center;

          a {
            max-width: 92px;
            font-size: 10px;
          }
        }
      }
    }
  }
`;
