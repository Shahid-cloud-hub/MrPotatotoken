import React, { useState, useRef } from "react";
import {
  PepeContainer,
  PepeWrapper,
  PepeBtns,
  // PepeCal,
} from "./PepePotato.style";
import Pepe from "../../../../assets/images/tokenomics/pepeTokens/Pepe.png";
import Heading from "../../../../assets/images/tokenomics/pepeTokens/Heading.png";
import Copy from "../../../../assets/images/tokenomics/pepeTokens/Copy.png";
import Points from "../../../../assets/images/tokenomics/pepeTokens/Points.png";
import Pancake from "../../../../assets/images/tokenomics/pepeTokens/Pancake.png";
import Buy from "../../../../assets/images/tokenomics/pepeTokens/Buy.png";
import one from "../../../../assets/images/tokenomics/pepeTokens/one.png";
import two from "../../../../assets/images/tokenomics/pepeTokens/two.png";
import three from "../../../../assets/images/tokenomics/pepeTokens/three.png";
import four from "../../../../assets/images/tokenomics/pepeTokens/four.png";
import StakeBtn from "../../../../assets/images/tokenomics/pepeTokens/StakeBtn.png";
import ChartBtn from "../../../../assets/images/tokenomics/pepeTokens/ChartBtn.png";
import lookImage from "../../../../assets/images/tokenomics/pepeTokens/🔒.png";
import Binance from "../../../../assets/images/tokenomics/pepeTokens/Binance.svg";
import useBreakpoint from "../../../../hooks/useBreakpoints";
import Stake from "./Stake";
import Chart from "./Chart";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const PepePotato = () => {
  const { isDesktop, isSmallDesktop, isTablet, isMobile, isSmallMobile } =
    useBreakpoint();

  const location = useLocation();

  const [showStake, setShowStake] = useState(false);

  const title = [
    "Max Supply",
    "Circulating Supply",
    "CEX Wallet",
    "Team Wallet",
    "CEX Wallet",
    "Market Cap",
  ];

  const data = [
    "000,000,000,000,000",
    "000,000,000,000,000",
    "000,000,000,000,000",
    "00,000,000,000",
    "$0.000000000000",
    "00000",
  ];
  const screenSize = window?.screen?.availWidth;
  const cellRef = useRef(null);

  const copyText = () => {
    const cellText = cellRef.current.textContent;
    navigator.clipboard.writeText(cellText);
    setText(cellText);
  };

  return (
    <PepeContainer>
      <PepeWrapper>
        <div className="top-section">
          {isDesktop && (
            <div className="pepeImg-wrapper">
              <img src={Pepe} alt="pepe" />
            </div>
          )}
          {isSmallDesktop && (
            <div className="pepeImg-tab">
              <div className="pepeImg-wrapper" style={{ width: "18%" }}>
                <img src={Pancake} alt="Pancake" />
              </div>
              <div className="pepeImg-wrapper" style={{ width: "30%" }}>
                <img src={Buy} alt="Buy" />
              </div>
              <div className="pepeImg-wrapper" style={{ width: "35%" }}>
                <img src={Pepe} alt="pepe" />
              </div>
            </div>
          )}
          {isTablet && (
            <div className="pepeImg-tab">
              <div className="pepeImg-wrapper" style={{ width: "28%" }}>
                <img src={Pepe} alt="pepe" />
              </div>
              <div className="pepeImg-wrapper" style={{ width: "18%" }}>
                <img src={Pancake} alt="Pancake" />
              </div>
              <div className="pepeImg-wrapper" style={{ width: "32%" }}>
                <img src={Buy} alt="Buy" />
              </div>
            </div>
          )}
          {(isMobile || isSmallMobile) && (
            <div
              className="pepeImg-mob"
              style={{
                width: "100%",
                justifyContent: "space-around",
                transform: "translate(15px, 0px)",
              }}
            >
              <div className="pepeImg-wrapper" style={{ width: "35%" }}>
                <img src={Pepe} alt="pepe" />
              </div>
              <div style={{ transform: "scale(0.99)" }}>
                <div className="pepeImg-wrapper" style={{ width: "58%" }}>
                  <img src={Pancake} alt="Pancake" />
                </div>
                <div className="pepeImg-wrapper" style={{ width: "85%" }}>
                  <img src={Buy} alt="Buy" />
                </div>
              </div>
            </div>
          )}
          <div className="mid-section-wrapper">
            <div className="mid-section">
              <div className="mid-heading">
                <img src={Heading} alt="pepe" />
                <h1>Contract Renounced ✅</h1>
              </div>
              <div className="points-sec">
                <a>
                  <img src={Points} alt="points" />
                </a>
                <p ref={cellRef}>
                  0000000000000000000000000000000000000{" "}
                  <img
                    src={Copy}
                    alt="copy"
                    onClick={copyText}
                    style={{ cursor: "pointer" }}
                  />
                </p>
              </div>
              <div className="buy-section">
                <img src={Pancake} alt="pencake" />
                <img src={Buy} alt="Buy" />
              </div>
            </div>
            {(isDesktop || isSmallDesktop) && (
              <div className="button-sec">
                <a>
                  <img src={one} alt="one" />
                  <p> Contract Audit ✅</p>
                </a>
                <a>
                  <img src={two} alt="two" />
                  <p> Team Wallet ✅</p>
                </a>
                <a>
                  <img src={three} alt="three" />
                  <p> Pink Lock ✅</p>
                </a>
                <a>
                  <img src={four} alt="four" />
                  <p> KYC ✅</p>
                </a>
              </div>
            )}
          </div>
        </div>
        {(isTablet || isMobile || isSmallMobile) && (
          <div className="button-sec">
            <a>
              <img src={one} alt="one" />
              <p> Contract Audit ✅</p>
            </a>
            <a>
              <img src={two} alt="two" />
              <p> Team Wallet ✅</p>
            </a>
            <a>
              <img src={three} alt="three" />
              <p> Pink Lock ✅</p>
            </a>
            <a>
              <img src={four} alt="four" />
              <p> KYC ✅</p>
            </a>
          </div>
        )}
        <div className="mint-table-wrapper">
          <div className="mint-table" style={{ padding: "30px 10px" }}>
            <div className="bianceImg">
              <img src={Binance} alt="binance" />
            </div>
            {screenSize >= 620 && (
              <>
                <div className="mint-item-1">
                  <div className="mint-table-th">
                    <div className="th-text-color">Max Supply</div>
                    <div className="th-text-color">Circulating Supply</div>
                    <a>
                      <div
                        className="th-text-color"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        CEX Wallet <img src={lookImage} alt="" />{" "}
                      </div>
                    </a>
                  </div>
                  <hr style={{ transform: "translate(0px, -1px)" }} />
                  <div className="mint-table-td">
                    <div className="td-text-color">000,000,000,000,000</div>
                    <div className="td-text-color">000,000,000,000,000</div>
                    <div className="td-text-color">000,000,000,000,000</div>
                  </div>
                </div>
                <div className="mint-item-2 padding-to-top">
                  <div className="mint-table-th">
                    <a>
                      <div
                        className="th-text-color"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        Team Wallet <img src={Points} alt="" />
                      </div>
                    </a>
                    <div id="market-price-style" className="th-text-color ">
                      Market Price
                    </div>
                    <div id="market-price-style" className="th-text-color">
                      Market Cap
                    </div>
                  </div>
                  <hr />
                  <div className="mint-table-td">
                    <div className="td-text-color">00,000,000,000</div>
                    <div id="market-place" className="td-text-color">
                      $0.000000000000
                    </div>
                    <div id="market-place" className="td-text-color">
                      00000
                    </div>
                  </div>
                </div>
              </>
            )}

            {screenSize <= 620 && (
              <>
                <div>
                  <div className="mint-table-th">
                    <div className="th-text-color">Max Supply</div>
                    <div className="th-text-color">Circulating Supply</div>
                  </div>
                  <hr />
                  <div className="mint-table-td">
                    <div className="td-text-color">000,000,000,000,000</div>
                    <div className="td-text-color">000,000,000,000,000</div>
                  </div>
                </div>
                <div style={{ paddingTop: "40px" }}>
                  <div className="mint-table-th">
                    <div className="th-text-color">
                      CEX Wallet <img src={lookImage} alt="" />{" "}
                    </div>
                    <div className="th-text-color">
                      Team Wallet <img src={Points} alt="" />
                    </div>
                  </div>
                  <hr style={{ transform: "translate(0px, -1px)" }} />
                  <div className="mint-table-td">
                    <div
                      className="td-text-color"
                      style={{ transform: "translate(-10px, 0px)" }}
                    >
                      000,000,000,000,000
                    </div>
                    <div
                      className="td-text-color"
                      style={{ transform: "translate(-10px, 0px)" }}
                    >
                      00,000,000,000
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: "40px" }}>
                  <div className="mint-table-th">
                    <div id="market-price-style" className="th-text-color ">
                      Market Price
                    </div>
                    <div id="market-price-style" className="th-text-color">
                      Market Cap
                    </div>
                  </div>
                  <hr />
                  <div className="mint-table-td">
                    <div
                      id="market-place"
                      className="td-text-color"
                      style={{ transform: "translate(-27px, 0px)" }}
                    >
                      $0.000000000000
                    </div>
                    <div
                      id="market-place"
                      className="td-text-color"
                      style={{ transform: "translate(-27px, 0px)" }}
                    >
                      00000
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </PepeWrapper>
      <PepeBtns>
        <NavLink to="chart">
          <button
            className={
              location.pathname === "/token/pepe-potato/chart"
                ? "myland-active"
                : "myland-de-active"
            }
          >
            <img
              src={ChartBtn}
              alt="Chart"
              style={{ transform: "translate(0px, 3px)" }}
            />
          </button>
        </NavLink>
        <NavLink to="stake">
          <button
            className={
              location.pathname === "/token/pepe-potato/stake"
                ? "myland-active"
                : "myland-de-active"
            }
          >
            <img
              src={StakeBtn}
              alt="Stake"
              style={{ transform: "translate(0px, 3px)" }}
            />
          </button>
        </NavLink>
      </PepeBtns>
      <Outlet />
    </PepeContainer>
  );
};

export default PepePotato;
