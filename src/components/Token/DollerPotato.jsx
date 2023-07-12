import { useEffect, useRef, useState } from "react";
// import Swap from "../../assets/images/tokenomics/pepeTokens/Swap.png";
import Chart from "../../assets/images/tokenomics/pepeTokens/Chart.png";
import stake from "../../assets/images/tokenomics/pepeTokens/Stake.png";
import potato from "../../assets/images/tokenomics/pepeTokens/dollerPotato.svg";
import stickies from "../../assets/images/tokenomics/pepeTokens/stickies.png";
import chainlink from "../../assets/images/tokenomics/pepeTokens/chainlink.png";
// import pinkswap from "../../assets/images/tokenomics/pepeTokens/pinkswap.png";
import check from "../../assets/images/tokenomics/pepeTokens/check.png";
import verified from "../../assets/images/tokenomics/pepeTokens/verified-logo.svg";
import auditIcon from "../../assets/images/tokenomics/pepeTokens/audit-icon.png";
import walletIcon from "../../assets/images/tokenomics/pepeTokens/wallet-icon.png";
import pinkLock from "../../assets/images/tokenomics/pepeTokens/pink-lock.png";
import KYC from "../../assets/images/tokenomics/pepeTokens/KYC.png";
import unicorn from "../../assets/images/tokenomics/pepeTokens/unicorn.png";
import digifinex from "../../assets/images/tokenomics/pepeTokens/digifinex.png";
import BitMart from "../../assets/images/tokenomics/pepeTokens/BitMart.png";
import global from "../../assets/images/tokenomics/pepeTokens/global.png";
import SmallBuyLogo from "../../assets/images/tokenomics/pepeTokens/small-buy.png";
import ComingSoonBtn from "../../assets/images/tokenomics/pepeTokens/coming-soon-btn.svg";
// import lookImage from "../../assets/images/tokenomics/pepeTokens/🔒.png";
import EthImg from "../../assets/images/tokenomics/Ethereumlogo.svg";
import SmallPotatoImg from "../../assets/images/tokenomics/pepeTokens/small-doller-potato.svg";
import icon1 from "../../assets/images/tokenomics/pepeTokens/top-icon1.png";
import dextools from "../../assets/images/tokenomics/pepeTokens/dextools.png";
import CoinMarketCap from "../../assets/images/tokenomics/pepeTokens/CoinMarketCap.png";
import CoinGeckoCap from "../../assets/images/tokenomics/pepeTokens/CoinGecko.png";
import pinkswapMini from "../../assets/images/tokenomics/pepeTokens/pinkswap-mini.png";
import KingPotatoImg from "../../assets/images/tokenomics/pepeTokens/bigKingPotato.png";

import { NavLink, Outlet } from "react-router-dom";
import { DollerPotatoContainer } from "./DollerPotato.style";
import useFetch from "../../hooks/useFetch";
import {
  customFormatDigits,
  customFormatNumber,
} from "../../hooks/CustomerFormatNumber";
import useFetchCMCData from "../../hooks/useFetchCMCData";

const DollerPotato = () => {
  const [text, setText] = useState("");
  const cellRef = useRef(null);

  const { data } = useFetch(
    "https://api.geckoterminal.com/api/v2/networks/eth/pools/0xa5e3790141fe3052a21e559b3ee6205de0858e39?include=base_token"
  );
  const { getData } = useFetchCMCData(
    "https://naughty-bear-lapel.cyclic.app/fetchCMCData?symbol=$MRPOTATO"
  );
  const coinData = getData?.$MRPOTATO[0];

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
    <DollerPotatoContainer>
      <div className="potato-stats-wrapper">
        <div className="affiliate-links">
          <div className="affiliate-btn">
            <img src={pinkswapMini} alt="pinkswapMini" />
            <a
              href="https://www.pinksale.finance/launchpad/0xd569869e0a010F92c3Fa4eCc90a58c9159fa4657?chain=ETH&refId=0x192788523F05884A01FD34Fc3143fC9b3909F3f4"
              target="_blank"
              rel="noreferrer"
            >
              <span>Affiliate</span>
            </a>
            <img src={stickies} alt="stickies" style={{ cursor: "pointer" }} />
          </div>
          <a
            href="https://coinmarketcap.com/currencies/mr-potato-token"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CoinMarketCap} alt="CoinMarketCap" />
          </a>
          <a
            href="https://www.coingecko.com/en/coins/mr-potato"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CoinGeckoCap} alt="CoinMarketCap" />
          </a>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x17Bb9F3572d0C69E017dcd048eC7304EEcC981c8"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dextools} alt="dextools" />
          </a>
          <a
            href="https://www.dexview.com/eth/0x17Bb9F3572d0C69E017dcd048eC7304EEcC981c8"
            target="_blank"
            rel="noreferrer"
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
                <img src={potato} alt="potato" />
              </div>
              <a
                href="https://etherscan.io/tx/0x6ffa5923d22a7e4f74ecc3b5df86d4299adcffab047d19eeab7bfd184ba88bad"
                target="_blank"
                rel="noreferrer"
              >
                Contract Renounced <img src={check} alt="check" />
              </a>
            </div>
            <div className="address">
              <a
                href="https://etherscan.io/token/0x17Bb9F3572d0C69E017dcd048eC7304EEcC981c8"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={chainlink}
                  style={{ transform: "translate(10px, -2px)" }}
                  alt="chainlink"
                />
              </a>
              <span ref={cellRef}>
                <a
                  href="https://etherscan.io/token/0x17Bb9F3572d0C69E017dcd048eC7304EEcC981c8"
                  target="_blank"
                  rel="noreferrer"
                >
                  0x17Bb9F3572d0C69E017dcd048eC7304EEcC981c8
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
          {/* <div className="pink-swap">
            <a
              href="https://www.pinksale.finance/launchpad/0xd569869e0a010F92c3Fa4eCc90a58c9159fa4657?chain=ETH&refId=0x192788523F05884A01FD34Fc3143fC9b3909F3f4"
              target="_blank"
              
              rel="noreferrer"
            >
              <img src={pinkswap} alt="pinkswap" />
            </a>
            <button>
              <a
                href="https://www.pinksale.finance/launchpad/0xd569869e0a010F92c3Fa4eCc90a58c9159fa4657?chain=ETH&refId=0x192788523F05884A01FD34Fc3143fC9b3909F3f4"
                target="_blank"
                
                rel="noreferrer"
              >
                <img src={SmallBuyLogo} alt="" />
              </a>
            </button>
          </div> */}
        </div>
        <div className="contract-audit-wrapper">
          <img src={KingPotatoImg} className="king-potato-img" alt="global" />
          <div className="coming-wrapper">
            <div className="coming-soon">
              <a
                href="https://www.mexc.com/exchange/MRPOTATO_USDT?_from=search_spot_trade"
                target="_blank"
                rel="noreferrer"
              >
                <img src={global} alt="global" width={90} />
              </a>
              <button>
                <a
                  href="https://www.mexc.com/exchange/MRPOTATO_USDT?_from=search_spot_trade"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={SmallBuyLogo} alt="ComingSoonBtn" />
                </a>
              </button>
            </div>

            <div className="coming-soon">
              <a
                href="https://digifinex.com/en-ww/trade/USDT/MRPOTATO"
                target="_blank"
                rel="noreferrer"
              >
                <img src={digifinex} alt="digifinex" width={85} />
              </a>
              <button>
                <a
                  href="https://digifinex.com/en-ww/trade/USDT/MRPOTATO"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={SmallBuyLogo} alt="ComingSoonBtn" />
                </a>
              </button>
            </div>
            <div className="coming-soon">
              <a
                href="https://app.uniswap.org/#/swap?outputCurrency=0x17bb9f3572d0c69e017dcd048ec7304eecc981c8"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={unicorn}
                  alt="unicorn"
                  className="uniSwap"
                  width={42}
                />
              </a>
              <button>
                <a
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x17bb9f3572d0c69e017dcd048ec7304eecc981c8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={SmallBuyLogo} alt="ComingSoonBtn" />
                </a>
              </button>
            </div>
            <div className="coming-soon">
              <img src={BitMart} alt="BitMart" width={85} />
              <button>
                <img src={ComingSoonBtn} alt="ComingSoonBtn" />
              </button>
            </div>
          </div>
          <div className="audit-btns">
            <a
              href="https://github.com/SpyWolfNetwork/Smart_Contract_Audits/blob/main/May_2023/MrPotato_0x17Bb9F3572d0C69E017dcd048eC7304EEcC981c8.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img src={auditIcon} alt="auditIcon" />
              Contract Audit
              <img src={verified} alt="verified" />
            </a>
            <a
              href="https://etherscan.io/tx/0x702f3d7da08b188e6812202dffe8a5d3b13de082462fffb61557802ec4e69c42"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pinkLock} alt="pinkLock" />
              Pink Lock
              <img src={verified} alt="verified" />
            </a>
            <a
              href="https://etherscan.io/tx/0x6049d52a98278ca0d2a13db775217e103985b2f172d6412cf936f1cfa08123d7"
              target="_blank"
              rel="noreferrer"
            >
              <img src={walletIcon} alt="walletIcon" />
              Team Wallet
              <img src={verified} alt="verified" />
            </a>

            <a
              href="https://www.notion.so/Mr-Potato-Token-KYC-Verification-51d6bb30eead46a393ef033f9c227fb4"
              target="_blank"
              rel="noreferrer"
            >
              <img src={KYC} alt="KYC" />
              KYC
              <img src={verified} alt="verified" />
            </a>
          </div>
        </div>
        <div className="mint-table-wrapper">
          <div className="mint-table">
            <div className="bianceImg">
              <img src={EthImg} alt="binance" />
              <span style={{ color: "#F4CD68" }}>
                Ticker:
                <img src={SmallPotatoImg} alt="binance" />
              </span>
              {screenSize <= 1280 && (
                <div className="tax-box">
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
                    <a
                      href="https://etherscan.io/tx/0xce7eab002a8540b4f12ff97258b3e4d85e6be34fcfec43df8aee6fd292209d3e"
                      target="_blank"
                      rel="noreferrer"
                    >
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
                      {customFormatDigits(coinData?.max_supply)}
                    </div>
                    <div className="td-text-color">$133.89K</div>
                    <div className="td-text-color">
                      ${customFormatDigits(coinData?.self_reported_market_cap)}
                    </div>
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
                      ${customFormatDigits(coinData?.quote?.USD?.volume_24h)}
                    </div>
                    <div id="market-price-td" className="td-text-color">
                      385
                    </div>
                    <div id="market-cap-td" className="td-text-color">
                      4.31K
                    </div>
                    <div id="market-cap-td" className="td-text-color">
                      {customFormatNumber(
                        data?.data?.attributes?.base_token_price_usd
                      )}
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
                      {customFormatDigits(coinData?.max_supply)}
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      $133.89K
                    </div>
                    <div id="market-cap-td" className="td-text-color">
                      ${customFormatDigits(coinData?.self_reported_market_cap)}
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
                        Market Price
                      </div>
                    </a>
                  </div>
                  <hr style={{ transform: "translate(-0px, -3px)" }} />
                  <div className="mint-table-td">
                    <div id="market-price-td" className="td-text-color">
                      ${customFormatDigits(coinData?.quote?.USD?.volume_24h)}
                    </div>
                    <div id="team-wallet-td" className="td-text-color">
                      385
                    </div>
                    <div id="cex-wallet-td" className="td-text-color">
                      4.31K
                    </div>
                    <div id="cex-wallet-td" className="td-text-color">
                      {customFormatNumber(
                        data?.data?.attributes?.base_token_price_usd
                      )}
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
                      {customFormatDigits(coinData?.max_supply)}
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      $133.89K
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
                      ${customFormatDigits(coinData?.self_reported_market_cap)}
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      ${customFormatDigits(coinData?.quote?.USD?.volume_24h)}
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      {customFormatNumber(
                        data?.data?.attributes?.base_token_price_usd
                      )}
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
                      385
                    </div>
                    <div id="circulating-supply-td" className="td-text-color">
                      4.31K
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
          {/* <NavLink to="swap">
            <button
              className={change1.Swap ? "myland-active" : "myland-de-active"}
              onClick={() =>
                setChange1((prev) => ({
                  ...prev,
                  Swap: true,
                  Chart: false,
                  Stake: false,
                }))
              }
            >
              <img
                src={Swap}
                alt="Swap"
                style={{ transform: "translate(0px, 4px)" }}
              />
            </button>
          </NavLink> */}

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
    </DollerPotatoContainer>
  );
};

export default DollerPotato;
