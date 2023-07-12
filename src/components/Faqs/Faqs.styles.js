import styled from "styled-components";

export const Faqswrapper = styled.div`
  .background {
    width: 100%;
    /* max-width: 934px; */
    background: #1c1f25;
    border-radius: 8px;
    padding-bottom: 21px;
    /* margin-bottom: 20px; */

    @media screen and (max-width: 820px) {
      max-width: 750px;
      margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
      max-width: 680px;
      margin: 0 auto;
    }

    @media screen and (max-width: 620px) {
      max-width: 500px;
      margin: 0 auto;
    }

    @media screen and (max-width: 512px) {
      max-width: 380px;
    }

    @media screen and (max-width: 390px) {
      max-width: 340px;
    }
  }

  /* width: 100%;
  height: 100%;
  display: flex; */
  /* .container {
    position: relative;
    max-width: 934px;
    border: 1px solid #282c34;
    padding: 19px 13px;
  } */

  .faq-wrapper {
    display: flex;
    height: 100%;
    padding: 20px 0px 0px;
    border-bottom: 1px solid #282c34;
  }

  .faq-accordian-data {
    padding: 15px 30px;
    width: 100%;
  }

  @media screen and (max-width: 390px) {
    .faq-accordian-data {
      padding: 12px;
    }
  }

  @media screen and (max-width: 590px) {
    .faq-accordian-data {
      padding: 12px;
    }
  }

  @media screen and (max-width: 1080px) {
    .faq-wrapper {
      /* display: none; */
      width: 100%;
      max-width: 350px;
    }
  }
`;

export const FaqFooterBanner = styled("div")`
  .FooterBannerImg-2 {
    img {
      width: 100%;
      height: 140px;
    }
  }
`;

export const FaqsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  flex-direction: column;
`;
