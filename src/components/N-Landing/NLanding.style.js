import styled from "styled-components";

export const NLandingPage = styled("div")`
  .landing-bg {
    height: 653px;
    background-image: url(${(props) => props.url});
    background-size: contain;
    /* background-position: center; */
    background-repeat: no-repeat;
    /* background-size: 950px; */
    position: relative;
  }

  span {
    color: #ffffff;
    text-shadow: 0px 3.76562px 3.76562px rgba(0, 0, 0, 0.25),
      0px 3.76562px 3.76562px rgba(0, 0, 0, 0.25),
      0px 3.76562px 3.76562px rgba(0, 0, 0, 0.25),
      0px 3.76562px 3.76562px rgba(0, 0, 0, 0.25);
  }

  button {
    background: linear-gradient(180deg, #f14841 0%, #f9a592 100%);
    box-shadow: inset 0px 1.29524px 2.59048px rgba(57, 114, 205, 0.2),
      inset 0px -2.59048px 2.59048px rgba(0, 0, 0, 0.25),
      inset 0px 2.59048px 2.59048px rgba(249, 247, 243, 0.25);
    border-radius: 5.18095px;
    border: none;
    color: #ffffff;
  }

  .overlay-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    /* max-width: 788px; */
    gap: 30px;
    /* margin: 0 auto; */
    position: absolute;
    width: 100%;
    bottom: -80px;
    max-width: 722px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0px;
      /* width: 100%; */
    }

    .landing-two-btn-wrapper {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 140px;
      margin-top: 137px;

      .btn-1 {
        display: flex;
        padding: 9px 14px;
        width: 100%;
        justify-content: flex-end;
        span {
          padding: 8px 18px;
          background: linear-gradient(
            114.66deg,
            rgba(52, 52, 52, 0.9) -14.14%,
            rgba(35, 35, 35, 0.6) 74.98%
          );
          backdrop-filter: blur(2.8308px);
          /* Note: backdrop-filter has minimal browser support */
          border-radius: 470.703px;
          width: 100%;
          max-width: 240px;
          text-align: center;
        }
      }

      .btn-2 {
        display: flex;
        padding: 9px 14px;
        justify-content: center;
        width: 100%;

        span {
          padding: 8px 18px;
          background: linear-gradient(
            114.66deg,
            rgba(52, 52, 52, 0.9) -14.14%,
            rgba(35, 35, 35, 0.6) 74.98%
          );
          backdrop-filter: blur(2.8308px);
          /* Note: backdrop-filter has minimal browser support */
          border-radius: 470.703px;
          width: 100%;
          max-width: 240px;
          text-align: center;
        }
      }
    }

    .landing-para-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      align-items: center;

      .lanidng-para {
        background: linear-gradient(
          114.66deg,
          rgba(52, 52, 52, 0.9) -14.14%,
          rgba(35, 35, 35, 0.6) 74.98%
        );
        backdrop-filter: blur(2.8308px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 470.703px;
        max-width: 504px;
        padding: 10px 67px;

        span {
          color: #ffffff;
          text-shadow: 0px 3.76562px 3.76562px rgba(0, 0, 0, 0.25),
            0px 3.76562px 3.76562px rgba(0, 0, 0, 0.25),
            0px 3.76562px 3.76562px rgba(0, 0, 0, 0.25),
            0px 3.76562px 3.76562px rgba(0, 0, 0, 0.25);
        }
      }
      button {
        max-width: 130px;
        margin: 0 auto;
      }
    }

    .links-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      min-height: 80px;
      background: linear-gradient(90.1deg, #f0423d 22.68%, #f89c8b 72.6%);
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 980px) {
    .overlay-wrapper {
      .landing-two-btn-wrapper {
        flex-direction: column;
        gap: 30px;
        .btn-1 {
          justify-content: center;
        }
      }

      .landing-para-wrapper {
        padding: 0px 20px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .overlay-wrapper {
      /* bottom: inherit; */
      /* top: 60px; */
      .landing-two-btn-wrapper {
        flex-direction: row;
        gap: inherit;
        .btn-1 {
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .overlay-wrapper {
      /* bottom: inherit; */
      /* top: 60px; */
      .landing-two-btn-wrapper {
        flex-direction: column;
        margin-top: 100px;
        gap: 20px;
        transform: translate(0px, -230px);

        .btn-1 {
          justify-content: center;
        }
      }

      .landing-para-wrapper {
        transform: translate(0px, -197px);
        .lanidng-para {
          padding: 10px 46px;
        }
      }
    }
    .landing-bg {
      height: 339px;
    }
  }

  @media screen and (max-width: 420px) {
    .links-wrapper {
      a {
        transform: scale(0.9);
      }
    }
  }
`;
