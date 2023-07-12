import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  /* width: 60%; */
  /* transform: translateY(-131px); */

  @media screen and (max-width: 768px) {
    transform: none;
  }

  /* transform: translateY(-113px); */
`;
export const Item = styled.div`
  min-height: 200px;
  padding: 50px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: inherit;
  z-index: 1;

  .CardV4Container {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // position: inherit;
    // position: relative;
    z-index: 999999;
  }
  .carousel-stuff {
    display: flex;
    /* border-radius: 42px; */
    width: 100%;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    /* padding: 45px; */
    /* position: relative; */
  }
  .carousel-background {
    border-radius: 42px;
    width: 300px;
    height: 212px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 45px;
    position: relative;
  }

  .container {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 35px 20px 0px 20px;
    height: 1100px;
  }

  .banner-content-wrapper {
    display: flex;
    flex-direction: column;
  }

  .banner-content-wraper {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    gap: 29px;
  }
  .banner-content {
    max-width: 490px;
    display: grid;
    grid-gap: 40px;
    grid-auto-rows: max-content;
    text-align: center;
    align-self: center;
    width: 33.3%;

    .FisText,
    .SecText {
      width: 550px;
    }
  }
  .banner--title {
    font-size: 50px;
    font-family: "IntegralCF-Medium";
    letter-spacing: 4px;
  }
  .banner--description {
    font-size: 20px;
    line-height: 32px;
    margin: 0;
  }

  .carousel-holder {
    display: grid;
    max-width: 585px;
    z-index: 9999999999;
    /* transform: scale(0.8); */
    width: 100%;
    padding: 50px 85px 0px;
    height: 380px;
  }

  .react-3d-carousel {
    min-height: 412px;
    z-index: 99;

    .slider-container .slider-content {
      width: 100%;
    }
    .slider-container .slider-content .slider-single .slider-single-content {
      box-shadow: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .slider-container
      .slider-content
      .slider-single.preactive
      .slider-single-content {
      opacity: 1;
      transform: translateX(-33%) scale(1);
    }
    .slider-container
      .slider-content
      .slider-single.proactive
      .slider-single-content {
      opacity: 1;
      transform: translateX(33%) scale(1);
    }
    .slider-container
      .slider-content
      .slider-single.active
      .slider-single-content {
      transform: translate(0, 60px);
    }
    .slider-container
      .slider-content
      .slider-single
      .slider-single-content
      img {
      height: min-content;
    }
  }

  .button-secondary {
    min-height: 60px;
    margin: auto;
    width: fit-content;
    gap: 30px;
    padding-right: 20px;
  }

  @media (max-width: 1080px) {
    .banner-content {
      .FisText,
      .SecText {
        width: 100%;
      }
    }

    .banner-content-wraper {
      flex-direction: column;
      gap: 5px;
    }
    .banner-content {
      transform: initial;
      margin-top: 50px;
    }
    .carousel-holder {
      padding-left: 0;
      padding-right: 0;
      margin: 0;
    }
    .btn-container {
      padding: 10px 10px;
    }
  }
  @media (max-width: 768px) {
    .carousel-holder {
      max-width: 300px;
      overflow-x: initial;
      padding-top: 0;
      margin: 0 auto;
    }
    .id-card-v3 {
      transform: scale(0.6);
    }
    .react-3d-carousel {
      min-height: initial;
    }
  }
  @media (max-width: 500px) {
    // .banner-content-wraper {
    //   overflow-x: hidden;
    // }
    .banner--title {
      font-size: 25px;
    }
    .banner--description {
      font-size: 15px;
    }
    .banner-content > .font-size-25 {
      font-size: 15px;
    }

    .id-card-v3 {
      transform: scale(0.5);
    }
    .react-3d-carousel
      .slider-container
      .slider-content
      .slider-single.preactive
      .slider-single-content {
      transform: translateX(-28%) scale(1);
    }
    .react-3d-carousel
      .slider-container
      .slider-content
      .slider-single.proactive
      .slider-single-content {
      transform: translateX(28%) scale(1);
    }
    .react-3d-carousel
      .slider-container
      .slider-content
      .slider-single.active
      .slider-single-content {
      transform: translate(0, 50px);
    }
  }

  @media screen and (max-width: 1200px) {
    .banner-content {
      transform: scale(0.8);
    }
    .carousel-holder {
      transform: scale(0.7);
    }
  }
`;
