import styled from "styled-components";

export const PotatoTokenwrapper = styled.div`
  .background {
    width: 100%;
    /* max-width: 934px; */
    background: #1c1f25;
    border-radius: 8px;
    margin: 0 auto 20px;

    @media screen and (max-width: 512px) {
      max-width: 380px;
    }

    @media screen and (max-width: 390px) {
      max-width: 350px;
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

  @media screen and (max-width: 1080px) {
    .p-token-wrapper {
      max-width: 290px;
      margin: 0 30px;
    }
    hr {
      width: 100%;
      max-width: 340px;
      border-top: 3px solid #282c34;
    }

    .p-t-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0px 30px;
      gap: 25px;

      .p-token-container {
        display: flex;
        flex-direction: column;
        gap: 25px;

        .p-token-mini-wrapper {
          display: flex;
          /* align-items: center; */
          gap: 20px;
        }

        .p-t-title,
        .img-container {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 16px;
          gap: 12px;
        }

        .items-wrapper {
          display: flex;
          gap: 12px;

          span {
            font-weight: 700;
            font-size: 16px;
          }

          .grayTitle {
            font-weight: 700;
            font-size: 16px;
            color: #8f98a8;
          }
        }
      }
    }
  }

  @media screen and (max-width: 590px) {
    .our-accordian-data {
      padding: 12px;
    }
  }

  @media screen and (max-width: 390px) {
    .our-accordian-data {
      padding: 12px;
    }
  }

  @media screen and (max-width: 420px) {
    .p-token-wrapper {
      max-width: 290px;
      margin: 0 30px;
    }
    hr {
      width: 100%;
      max-width: 340px;
      border-top: 3px solid #282c34;
    }

    .p-t-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0px 30px;
      gap: 25px;

      .p-token-container {
        display: flex;
        flex-direction: column;
        gap: 25px;

        .p-t-title,
        .img-container {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 16px;
          gap: 12px;
        }

        .items-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;

          span {
            font-weight: 700;
            font-size: 16px;
          }

          .grayTitle {
            font-weight: 700;
            font-size: 16px;
            color: #8f98a8;
          }
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .p-token-wrapper {
      max-width: 290px;
      margin: 0 30px;
    }
    hr {
      width: 100%;
      max-width: 340px;
      border-top: 3px solid #282c34;
    }

    .p-t-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0px 30px;
      gap: 25px;

      .p-token-container {
        display: flex;
        flex-direction: column;
        gap: 25px;

        .p-token-mini-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .p-t-title,
        .img-container {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 16px;
          gap: 12px;
        }

        .items-wrapper {
          display: flex;
          gap: 12px;

          span {
            font-weight: 700;
            font-size: 16px;
          }

          .grayTitle {
            font-weight: 700;
            font-size: 16px;
            color: #8f98a8;
          }
        }
      }
    }
  }
`;

export const PotatoTokenRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-direction: column;
  padding: 35px 0px;

  @media screen and (max-width: 1024px) {
    gap: 0px;
  }
`;
