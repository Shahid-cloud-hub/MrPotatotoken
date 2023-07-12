import { useRef, useState } from "react";
import Chart from "../../assets/images/tokenomics/pepeTokens/Chart.png";
import stake from "../../assets/images/tokenomics/pepeTokens/Stake.png";
import topGLogo from "../../assets/images/tokenomics/pepeTokens/TopGLogo.svg";
import stickies from "../../assets/images/tokenomics/pepeTokens/stickies.png";
// import chainlink from "../../assets/images/tokenomics/pepeTokens/Points.png";
import check from "../../assets/images/tokenomics/pepeTokens/check.png";
import verified from "../../assets/images/tokenomics/pepeTokens/verified-logo.svg";
import auditIcon from "../../assets/images/tokenomics/pepeTokens/audit-icon.png";
import walletIcon from "../../assets/images/tokenomics/pepeTokens/wallet-icon.png";
// import pinkLock from "../../assets/images/tokenomics/pepeTokens/pink-lock.png";
import KYC from "../../assets/images/tokenomics/pepeTokens/KYC.png";
import topG from "../../assets/images/tokenomics/pepeTokens/TopG.svg";
import PinksaleSwapImg from "../../assets/images/tokenomics/pepeTokens/pinkswap-topg.svg";
// import lookImage from "../../assets/images/tokenomics/pepeTokens/🔒.png";
import SmallTopGImg from "../../assets/images/tokenomics/topG/TopG.svg";
// import Binance from "../../assets/images/tokenomics/pepeTokens/Binance.svg";
import icon1 from "../../assets/images/tokenomics/pepeTokens/top-icon1.png";
import dextools from "../../assets/images/tokenomics/pepeTokens/dextools.png";
import CoinMarketCap from "../../assets/images/tokenomics/pepeTokens/CoinMarketCap.png";
import CoinGeckoCap from "../../assets/images/tokenomics/pepeTokens/CoinGecko.png";
import SmallBuyLogo from "../../assets/images/tokenomics/pepeTokens/pinkswapbtn.svg";
import pinkswapMini from "../../assets/images/tokenomics/pepeTokens/pinkswap-mini.png";
import chainlink from "../../assets/images/tokenomics/pepeTokens/chainlink.png";
import EthImg from "../../assets/images/tokenomics/Ethereumlogo.svg";

// import Swap from "../../../../assets/images/tokenomics/pepeTokens/Swap.png";
// import unicorn from "../../../../assets/images/tokenomics/pepeTokens/unicorn.png";
// import Buy from "../../../../assets/images/tokenomics/pepeTokens/Buy.png";
// import digifinex from "../../../../assets/images/tokenomics/pepeTokens/digifinex.png";
// import BitMart from "../../../../assets/images/tokenomics/pepeTokens/BitMart.png";
// import global from "../../../../assets/images/tokenomics/pepeTokens/global.png";
// import SmallBuyLogo from "../../../../assets/images/tokenomics/Small-buy.svg";
// import ComingSoonBtn from "../../../../assets/images/tokenomics/pepeTokens/coming-soon-btn.svg";
// import pinkswap from "../../../../assets/images/tokenomics/pepeTokens/pinkswap.png";
// import EthImg from "../../../../assets/images/tokenomics/Ethereumlogo.svg";

import { NavLink, Outlet } from "react-router-dom";
import { TopGContainer } from "./TopG.style";

const TopG = () => {
  const [text, setText] = useState("");
  const cellRef = useRef(null);

  const copyText = () => {
    const cellText = cellRef.current.textContent;
    navigator.clipboard
      .writeText(cellText)
      .then(() => {
        setText(cellText);
        alert("Address copied: " + cellText);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
    setText(cellText);
  };

  const [change1, setChange1] = useState({
    Swap: true,
    Chart: false,
    Stake: false,
  });

  const screenSize = window?.screen?.availWidth;
  return (
    <TopGContainer>
      <div className="potato-stats-wrapper">
        <div className="affiliate-links">
          <div className="affiliate-btn">
            <img src={pinkswapMini} alt="pinkswapMini" />
            <a
            // href="https://www.pinksale.finance/launchpad/0xd569869e0a010F92c3Fa4eCc90a58c9159fa4657?chain=ETH&refId=0x192788523F05884A01FD34Fc3143fC9b3909F3f4"
            // target="_blank"
            // rel="noreferrer"
            >
              <span>Affiliate</span>
            </a>
            <img src={stickies} alt="stickies" style={{ cursor: "pointer" }} />
          </div>
          <a
          // href="https://coinmarketcap.com/currencies/pepe-potato/"
          // target="_blank"
          // rel="noreferrer"
          >
            <img src={CoinMarketCap} alt="CoinMarketCap" />
          </a>
          <a>
            <img src={CoinGeckoCap} alt="CoinMarketCap" />
          </a>
          <a
          // href="https://www.dextools.io/app/en/bnb/pair-explorer/0xfff6900dc67358b82be822658d624699ee00ce5a"
          // target="_blank"
          // rel="noreferrer"
          >
            <img src={dextools} alt="dextools" />
          </a>
          <a
          // href="https://www.dexview.com/bsc/0xEc649e8752c67f34C3C4E4Cf4bB2Ca42618c0906"
          // target="_blank"
          // rel="noreferrer"
          >
            <img src={icon1} alt="icon1" />
          </a>
        </div>
        {screenSize > 1280 && (
          <div className="tax-box">
            <span style={{ color: "#3AF036" }}>Buy Tax - 0%</span>
            <span style={{ color: "#FF3434" }}>Sell Tax - 0%</span>
          </div>
        )}
        <div className="contract-wrapper">
          <div className="contract-renounced">
            <div className="contract">
              <div>
                <img src={topGLogo} alt="topGLogo" />
              </div>
              <a
              // href="https://bscscan.com/tx/0x6f74e2278d03bebca7aa81b04debdf140dcf500203facc0180335d16d1713f12"
              // target="_blank"
              // rel="noreferrer"
              >
                Contract Renounced <img src={check} alt="check" />
              </a>
            </div>
            <div className="address">
              <a
              // href="https://bscscan.com/address/0xec649e8752c67f34c3c4e4cf4bb2ca42618c0906"
              // target="_blank"
              // rel="noreferrer"
              >
                <img
                  src={chainlink}
                  alt="chainlink"
                  style={{ transform: "translate(9px, -2px)" }}
                />
              </a>
              <span ref={cellRef}>
                <a
                // href="https://bscscan.com/address/0xec649e8752c67f34c3c4e4cf4bb2ca42618c0906"
                // target="_blank"
                // rel="noreferrer"
                >
                  000000000000000000000000000000000000
                </a>
                <img
                  src={stickies}
                  alt="stickies"
                  onClick={copyText}
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="contract-audit-wrapper">
          <div className="coming-wrapper">
            <a>
              <img src={topG} alt="TopG" />
            </a>
            <div className="pancake-item">
              <div className="coming-soon">
                <a
                // href="https://pancakeswap.finance/info/pairs/0xfff6900dc67358b82be822658d624699ee00ce5a"
                // target="_blank"
                // rel="noreferrer"
                >
                  <img
                    src={PinksaleSwapImg}
                    alt="PinksaleSwapImg"
                    style={{ transform: "translate(0px, 10px)" }}
                  />
                </a>
                <button>
                  <a
                  // href="https://pancakeswap.finance/info/pairs/0xfff6900dc67358b82be822658d624699ee00ce5a"
                  // target="_blank"
                  // rel="noreferrer"
                  >
                    <img src={SmallBuyLogo} alt="ComingSoonBtn" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="audit-btns">
            <a
            // href="https://bscscan.com/token/0xec649e8752c67f34c3c4e4cf4bb2ca42618c0906?a=0x407993575c91ce7643a4d4ccacc9a98c36ee1bbe"
            // target="_blank"
            // rel="noreferrer"
            >
              <img src={walletIcon} alt="walletIcon" />
              Team Wallet
              <img src={verified} alt="verified" />
            </a>
            {/* <a>
              <img src={pinkLock} alt="pinkLock" />
              Pink Lock
              <img src={verified} alt="verified" />
            </a> */}
            <a
            // href="https://www.notion.so/Mr-Potato-Token-KYC-Verification-51d6bb30eead46a393ef033f9c227fb4"
            // target="_blank"
            // rel="noreferrer"
            >
              <img src={KYC} alt="KYC" />
              KYC
              <img src={verified} alt="verified" />
            </a>
            <a
            // href="https://github.com/SpyWolfNetwork/Smart_Contract_Audits/blob/main/June_2023/Pepe_Potato_0xEc649e8752c67f34C3C4E4Cf4bB2Ca42618c0906.pdf"
            // target="_blank"
            // rel="noreferrer"
            >
              <img src={auditIcon} alt="auditIcon" />
              Contract Audit
              <img src={verified} alt="verified" />
            </a>
          </div>
        </div>

        <div className="mint-table-wrapper">
          <div className="mint-table">
            <div className="bianceImg" style={{ gap: "10px" }}>
              <img src={EthImg} alt="EthImg" />
              <span style={{ color: "#F4CD68" }}>
                Ticker:
                <img
                  src={SmallTopGImg}
                  style={{ transform: "translate(1px, 5px)" }}
                  alt="pepe"
                />
              </span>
              {screenSize <= 1280 && (
                <div
                  className="tax-box"
                  style={{ padding: "1px 10px", maxWidth: "300px" }}
                >
                  <span style={{ color: "#3AF036" }}>Buy Tax - 0%</span>
                  <span style={{ color: "#FF3434" }}>Sell Tax - 0%</span>
                </div>
              )}
            </div>
            {screenSize >= 1280 && (
              <>
                <div className="mint-item-1">
                  <div className="mint-table-th">
                    <div id="max-supply-th" className="th-text-color">
                      Max Supply
                    </div>
                    <div className="th-text-color">Total Liquidity</div>
                    <a>
                      <div
                        className="th-text-color"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Market Cap
                      </div>
                    </a>
                  </div>
                  <hr style={{ transform: "translate(0px, 0px)" }} />
                  <div className="mint-table-td">
                    <div id="max-supply-td" className="td-text-color">
                      555,555,555,555,555
                    </div>
                    <div className="td-text-color">$6.61K</div>
                    <div className="td-text-color">$9.50K</div>
                  </div>
                </div>
                <div className="mint-item-2">
                  <div className="mint-table-th">
                    <div
                      className="th-text-color"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      24h Volume
                    </div>
                    <div
                      className="th-text-color"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Holders
                    </div>
                    <div
                      className="th-text-color"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Dex Trades
                    </div>
                    <div
                      className="th-text-color"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Market Pice
                    </div>
                  </div>
                  <hr />
                  <div className="mint-table-td">
                    <div id="team-wallet-td" className="td-text-color">
                      $1.13K
                    </div>
                    <div id="market-price-td" className="td-text-color">
                      178
                    </div>
                    <div id="market-cap-td" className="td-text-color">
                      4.56K
                    </div>
                    <div id="market-cap-td" className="td-text-color">
                      $0.0₇1708
                    </div>
                  </div>
                </div>
              </>
            )}
            {screenSize >= 620 && screenSize <= 1280 && (
              <>
                <div className="mint-item-1">
                  <div className="mint-table-th">
                    <div id="max-supply-th" className="th-text-color">
                      Max Supply
                    </div>
                    <div id="circulating-supply-th" className="th-text-color">
                      Total Liquidity
                    </div>
                    <div id="market-cap-th" className="th-text-color">
                      Market Cap
                    </div>
                  </div>
                  <hr style={{ transform: "translate(0px, 0px)" }} />
                  <div className="mint-table-td">
                    <div id="max-supply-td" className="td-text-color">
                      555,555,555,555,555
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      $6.61K
                    </div>
                    <div id="market-cap-td" className="td-text-color">
                      $9.50K
                    </div>
                  </div>
                </div>
                <div className="mint-item-2">
                  <div className="mint-table-th">
                    <div id="market-price-th" className="th-text-color">
                      24h Volume
                    </div>
                    <a>
                      <div id="team-wallet-th" className="th-text-color">
                        Holders
                      </div>
                    </a>
                    <a>
                      <div id="cex-wallet-th" className="th-text-color">
                        DEX Trades
                      </div>
                    </a>
                    <a>
                      <div id="cex-wallet-th" className="th-text-color">
                        Market Price{" "}
                      </div>
                    </a>
                  </div>
                  <hr style={{ transform: "translate(-0px, -3px)" }} />
                  <div className="mint-table-td">
                    <div id="market-price-td" className="td-text-color">
                      $1.13K
                    </div>
                    <div id="team-wallet-td" className="td-text-color">
                      390
                    </div>
                    <div id="cex-wallet-td" className="td-text-color">
                      4.23K
                    </div>
                    <div id="cex-wallet-td" className="td-text-color">
                      $0.0₉4004
                    </div>
                  </div>
                </div>
              </>
            )}
            {screenSize <= 620 && (
              <>
                <div>
                  <div className="mint-table-th">
                    <div id="max-supply-th" className="th-text-color">
                      Max Supply
                    </div>
                    <div id="circulating-supply-th" className="th-text-color">
                      Total Liquidity
                    </div>
                  </div>
                  <hr />
                  <div className="mint-table-td">
                    <div id="max-supply-td" className="td-text-color">
                      555,555,555,555,555
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      $6.61K
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: "40px" }}>
                  <div className="mint-table-th">
                    <div id="max-supply-th" className="th-text-color">
                      Market Cap
                    </div>
                    <div id="circulating-supply-th" className="th-text-color">
                      24h Volume
                    </div>
                    <div id="circulating-supply-th" className="th-text-color">
                      Market Price
                    </div>
                  </div>
                  <hr style={{ transform: "translate(0px, -1px)" }} />
                  <div className="mint-table-td">
                    <div id="max-supply-td" className="td-text-color">
                      $9.50K
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      $1.13K
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      $0.0₉4004{" "}
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: "40px" }}>
                  <div className="mint-table-th">
                    <div id="max-supply-th" className="th-text-color">
                      Holders
                    </div>
                    <div id="circulating-supply-th" className="th-text-color">
                      DEX Trades
                    </div>
                  </div>
                  <hr />
                  <div className="mint-table-td">
                    <div id="max-supply-td" className="td-text-color">
                      390
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      4.23K
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="potato-land-tabs" style={{ margin: "0px" }}>
        <div className="tabs-btn1">
          <NavLink to="chart">
            <button
              className={change1.Chart ? "myland-active" : "myland-de-active"}
              onClick={() =>
                setChange1((prev) => ({
                  ...prev,
                  Swap: false,
                  Chart: true,
                  Stake: false,
                }))
              }
            >
              <img
                src={Chart}
                alt="Chart"
                style={{ transform: "translate(0px, 3px)" }}
              />
            </button>
          </NavLink>
          <NavLink to="stake">
            <button
              className={change1.Stake ? "myland-active" : "myland-de-active"}
              onClick={() =>
                setChange1((prev) => ({
                  ...prev,
                  Swap: false,
                  Chart: false,
                  Stake: true,
                }))
              }
            >
              <img
                src={stake}
                alt="Stake"
                style={{ transform: "translate(0px, 3px)" }}
              />
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </TopGContainer>
  );
};

export default TopG;
