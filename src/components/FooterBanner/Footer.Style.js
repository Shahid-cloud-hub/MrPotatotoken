import styled from "styled-components";
import BGKingPotatoTransparent from "../../assets/images/footerBanner/footer_1.webp";

export const FooterBannerSection = styled("div")`
  .bg-king {
    background: url(${BGKingPotatoTransparent});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    min-height: 135px;
    width: 100%;
    margin: 0 auto;
    z-index: 999999;
  }

  .parent-wrapper {
    display: flex;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .left-items-1 {
    display: flex;
    width: 100%;
    transform: translate(-161%, 10px);

    .lef-item-1 img {
      position: absolute;
      max-width: 140px;
      transform: translate(0px, 10px);
      top: -85px;
    }

    .lef-item-2 img {
      position: absolute;
      max-width: 90px;
      transform: translate(120px, -48px);
    }

    .lef-item-3 img {
      position: absolute;
      max-width: 95px;
      transform: translate(214px, 10px);
      top: -64px;
    }

    .lef-item-4 img {
      position: absolute;
      max-width: 90px;
      transform: translate(323px, -45px);
    }
  }

  .banner-title {
    position: relative;

    .bn-title img {
      max-width: 500px;
      position: absolute;
      transform: translate(-50%, -50%);
      top: -35px;
      z-index: 9;
    }

    .bn-btn img {
      max-width: 250px;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 15px;
      z-index: 9;
    }
  }

  .right-items-2 {
    display: flex;
    position: relative;
    width: 100%;

    .lef-item-1 img {
      position: absolute;
      max-width: 140px;
      transform: translate(206px, -49px);
      z-index: 9;
    }

    .lef-item-2 img {
      position: absolute;
      max-width: 90px;
      transform: translate(299px, -37px);
      z-index: 9;
    }

    .lef-item-3 img {
      position: absolute;
      max-width: 95px;
      transform: translate(399px, -37px);
      z-index: 9;
    }

    .lef-item-4 img {
      position: absolute;
      max-width: 140px;
      transform: translate(480px, -63px);
      z-index: 9;
    }
  }
`;
