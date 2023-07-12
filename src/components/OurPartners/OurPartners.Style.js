import styled from "styled-components";

export const OurPartnerswrapper = styled.div`
  .background {
    width: 100%;
    /* max-width: 934px; */
    background: #1c1f25;
    border-radius: 8px;
    margin: 0 auto 20px;

    @media screen and (max-width: 820px) {
      max-width: 690px;
      margin: 0 auto;

      hr {
        width: 100%;
        max-width: 590px;
        border-top: 3px solid #282c34;
      }
    }

    @media screen and (max-width: 768px) {
      max-width: 620px;
      margin: 0 auto;
    }

    @media screen and (max-width: 620px) {
      max-width: 520px;
      margin: 0 auto;
    }

    @media screen and (max-width: 512px) {
      max-width: 355px;
    }

    @media screen and (max-width: 370px) {
      max-width: 330px;
    }
  }

  .our-wrapper {
    display: flex;
    height: 100%;
    padding: 20px 0px 0px;
    border-bottom: 1px solid #282c34;
  }

  .our-accordian-data {
    padding: 15px 30px;
  }

  @media screen and (max-width: 420px) {
    hr {
      width: 100%;
      max-width: 340px;
      border-top: 3px solid #282c34;
    }
  }

  @media screen and (max-width: 390px) {
    .our-accordian-data {
      padding: 12px;
    }
  }

  @media screen and (max-width: 590px) {
    .our-accordian-data {
      padding: 12px;
    }
  }

  @media screen and (max-width: 1080px) {
    .our-wrapper {
      /* display: none; */
    }
  }
`;

export const OurPartnersRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  padding: 35px 0;
`;
