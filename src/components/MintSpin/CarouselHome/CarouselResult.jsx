import { useContext } from "react";
import { Context } from "../../../utils/Context";
import useBreakpoint from "../../../hooks/useBreakpoints";
import { useEffect } from "react";
import { resultImagesPotatoToken } from "./CarouselData";
import { useState } from "react";
import styled from "styled-components";
import Close from "../../../assets/images/WinSpin/x.png";
import Qking from "../../../assets/images/WinSpin/Q_NFT.svg";
import PotatoKing from "../../../assets/images/WinSpin/SmallKing.svg";
import PolygonImg from "../../../assets/images/WinSpin/Polygon.svg";
import ResultBg from "../../../assets/images/NewHomePage/result-bg.png";

const MyItems = styled.div`
  /* width: 100%; */
  max-width: 300px;
  font-family: "Press Start 2P";
  position: ${(props) => props.abs};
  /* left: 45px; */
  z-index: 9999999;
  /* top: -50px; */
  bottom: 12px;
  /* left: 45px; */

  /* top: 5px; */
  /* margin-bottom: 21px; */
  text-align: center;
  */ .Win--Harvested {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .Win--Onchain {
    .gInput {
      background: #716a92;
      border-radius: 20px;
      padding: 8px 15px;
      width: 258px;
      display: flex;
      align-items: center;

      .spread > .amountFigure {
        color: "background: rgba(21, 19, 32, 1)";
      }

      span {
        font-size: 14px;
        font-family: "Poppins";
      }

      input {
        background: transparent;
        outline: none;
        border: none;
        font-size: 14px;
        width: 100%;
        font-family: "Poppins";
        color: #fff;
      }
      input::placeholder {
        font-size: 14px;
      }
    }

    .deadbtn {
      max-width: 149px;
      max-height: 40px;

      span {
        font-size: 16px;
      }
    }

    .lucky-btn {
      display: flex;
      width: 100%;
      justify-content: center;

      button {
        border: none;
        background: none;
      }

      button img {
        width: 45px;
      }
    }
  }

  .ParagraphContainer {
    display: flex;
    gap: 20px;
    color: #52ff36;
    align-items: baseline;

    p {
      font-size: 12px;
    }
    h3 {
      font-size: 16px;
    }
  }

  button span {
    text-align: center;
    color: #effbf0;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 160%;
    -webkit-text-stroke: 1px #000000;
    /* margin-left: 8px; */
  }

  button img {
    width: 60px;
  }

  .HarvestedContainer {
    display: flex;
    flex-direction: column;

    .pink {
      display: flex;
      justify-content: center;
      width: 179.83px;
      height: 56.68px;
      background: linear-gradient(0deg, #e27aeb, #e27aeb),
        linear-gradient(0deg, #545f7c, #545f7c), #c7b7cc;
      border: 1px solid rgba(235, 177, 27, 0.89);
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      position: relative;

      span {
        text-transform: capitalize;
        -webkit-text-stroke: 1px #000000;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 160%;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    .pink::after {
      content: "$0.50";
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${Qking});
      width: 147px;
      height: 143px;
      position: absolute;
      background-repeat: no-repeat;
      top: 26px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 160%;
      text-align: center;
      -webkit-text-stroke: 1px #39473e;
      color: #52ff36;
    }
    .yellow {
      width: 179.83px;
      height: 102.27px;
      background: linear-gradient(0deg, #f5f879, #f5f879),
        linear-gradient(0deg, #545f7c, #545f7c), #deb6ec;
      border: 1px solid rgba(23, 97, 31, 0.89);
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .green {
      width: 179px;
      height: 150.45px;
      background: #4cb563;
      border: 1px solid #80a381;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;

      .MintSpanBack {
        margin: 20px 0px 3px 6px;
        background: radial-gradient(
          99.13% 2030.89% at 0.87% 55.26%,
          #3973e3 0%,
          #e256e4 100%
        );
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 100px;
        width: 164px;
        min-height: 77px;
        text-align: center;
        display: flex;
        justify-content: center;
        padding: 0 4px 5px 4px;

        .MintSpanBacK_inner {
          border-radius: 100px;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            99.13% 2030.89% at 0.87% 55.26%,
            #e256e4 0%,
            #3973e3 100%
          );
          border: 1px solid #1d1d1d;
          display: grid;
        }

        h4 {
          margin-right: 20px;
          margin-top: -50px;
          color: #4cb563;
          -webkit-text-stroke: 1px #000000;
        }
      }

      .MintSpan {
        font-size: 35px;
        padding: 0 25px;
        letter-spacing: 4px;
      }
      .MintSpan::after {
        content: attr(mint-rate);
        color: #21cd33;
        -webkit-text-stroke: 1px #000000;
        font-size: 16px;
        display: grid;
        justify-items: flex-end;
        right: 0;
        letter-spacing: initial;
      }

      .MintSpanBack > .MintSpan {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      .MintSpan > span:nth-child(1) {
        color: #4cb563;
        -webkit-text-stroke: 1px #fff;
      }
      .MintSpan > span:nth-child(2) {
        color: #a88045;
        -webkit-text-stroke: 1px #fff;
      }
      .MintSpan > span:nth-child(3) {
        color: #4cb563;
        -webkit-text-stroke: 1px #fff;
      }
      .MintSpan > span:nth-child(4) {
        color: #a88045;
        -webkit-text-stroke: 1px #fff;
      }
    }
  }
  .MainContainer > div > h2 {
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .TaxBulk {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .TaxBulk > div {
    line-height: 4px;
  }

  .TaxBulk > img::after {
    content: "";
    position: absolute;
    background-image: url("../images/logoKing.svg");
    width: 50px;
    height: 50px;
  }

  .TaxBulk > div > h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
    -webkit-text-stroke: 1px #000;
  }

  .TaxBulk > div > span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin-left: 44px;
    color: rgba(255, 255, 255, 0.5);
    border: 0px solid rgba(182, 180, 220, 0.5);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .smallPolygon {
    background-image: url(${PolygonImg});
    width: 35px;
    background-repeat: no-repeat;
    position: relative;
  }

  .smallPolygon::after {
    content: "";
    position: absolute;
    background-image: url(${PotatoKing});
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    right: 6px;
    top: 2px;
  }

  .MainContainer::after {
    content: "WinSpin TAX 6.7% 50% ERC20 Potato Staked Holders 25% AUTOBUY ERC20 BSC DEX 25% + LIQUIDTY ERC20 BSC DEX";
    max-width: 150px;
    min-height: 30px;
    position: absolute;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 160%;
    -webkit-text-stroke: 1px #000000;
    font-family: "Poppins";
    top: 301px;
    left: -30px;
    font-size: 9px;
  }

  @media screen and (max-width: 1080px) {
    .Win--Harvested {
      max-width: 180px;
      margin: 0 auto;
    }

    .Win--Onchain {
      /* display: none; */
    }
  }
`;

const CarouselResult = () => {
  const { isDesktop } = useBreakpoint();
  const { items, setItems } = useContext(Context);
  const [checkRender, setCheckRender] = useState(false);

  useEffect(() => {
    if (checkRender) {
      setItems((prevState) => ({
        ...prevState,
        runAgain: true,
      }));
      setCheckRender(false);
    } else {
      setItems((prevState) => ({
        ...prevState,
        runAgain: false,
      }));
    }
  }, [checkRender]);

  //   useEffect(() => {
  //     if (items?.check && run) {
  //       setRun(false);
  //     }
  //   }, [items, run]);

  var reduced = resultImagesPotatoToken.reduce(function (filtered, option) {
    if (option.deg === items?.potatoTokenVal) {
      var someNewValue = {
        name: option.name,
        PotatoToken: option.Potatotoken1,
        deg: option.deg,
        mobilePotatotoken: option.mobilePotatotoken,
      };
      filtered.push(someNewValue);
    }
    return filtered;
  }, []);

  const style = {
    backgroundImage: `url(${ResultBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "249px",
    width: "380px",
    boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div className="carousel-background" style={style}>
      {isDesktop && !items.checkPotatoToken ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "44px",
            }}
          >
            <div
              style={{
                maxWidth: "570px",
                transform: "translate(40px, 20px)",
              }}
            >
              {reduced?.map((value) => (
                // eslint-disable-next-line react/jsx-key
                <img
                  src={value.PotatoToken}
                  alt="Win1potato"
                  style={{ width: "75%" }}
                />
              ))}
            </div>
            <MyItems abs="relative">
              <div className="Win--Harvested">
                <div className="Win--Onchain">
                  <button
                    className="deadbtn"
                    style={{
                      borderRadius: "8px 8px 8px 8px",
                    }}
                    onClick={() => setCheckRender(true)}
                  >
                    <span>Try Again</span>
                  </button>
                </div>
              </div>
            </MyItems>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "44px",
          }}
        >
          <div
            style={{
              maxWidth: "570px",
              transform: "translate(40px, 20px)",
            }}
          >
            {reduced?.map((value) => (
              // eslint-disable-next-line react/jsx-key
              <img
                src={value.PotatoToken}
                alt="Win1potato"
                style={{ width: "75%" }}
              />
            ))}
          </div>
          <MyItems abs="relative">
            <div className="Win--Harvested">
              <div className="Win--Onchain">
                <button
                  className="deadbtn"
                  style={{
                    borderRadius: "8px 8px 8px 8px",
                  }}
                  onClick={() => setCheckRender(true)}
                >
                  <span>Try Again</span>
                </button>
              </div>
            </div>
          </MyItems>
        </div>
      )}
      <div
        className="close"
        onClick={() => setItems(false)}
        style={{
          position: "absolute",
          top: "22px",
          right: "36px",
          cursor: "pointer",
        }}
      >
        <img src={Close} width={20} alt="close" />
      </div>
    </div>
  );
};

export default CarouselResult;
