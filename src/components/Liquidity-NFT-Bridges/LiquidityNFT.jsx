import React, { useState } from "react";
import { LiquidityNFTContainer } from "./LiquiStyle";
import SEO from "../SEO/SEO";

import token from "../../assets/images/nft-bridge/nft-icon.svg";
import nft from "../../assets/images/nft-bridge/nft-icon.svg";
import king from "../../assets/images/nft-bridge/King2-icon.svg";
import convert from "../../assets/images/nft-bridge/convert-icon.svg";
import swapButton from "../../assets/images/nft-bridge/swapButton.svg";
import swapButtonGreen from "../../assets/images/nft-bridge/swapButtonGreen.svg";
// import swapicon from "../../assets/images/nft-bridge/swap-icon.svg";
import mintSwap from "../../assets/images/nft-bridge/mint.svg";
import { useSelector } from "react-redux";

const LiquidityNFT = ({
  maxWid,
  minHei,
  tabMaxWid,
  marginVal,
  potatoImg,
  kingImg,
}) => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const [fromCurrency, setFromCurrency] = useState("NFT");
  const [fromValue, setFromValue] = useState("");
  const [toCurrency, setToCurrency] = useState("TOKEN");
  const [toimg, setToImg] = useState(nft);
  const [fromimg, setFromImg] = useState(token);
  const [toValue, setToValue] = useState("");
  const [show, setShow] = useState(false);

  function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
  }

  function handleFromImgChange(event) {
    setFromImg(event.target.value);
  }

  function handleFromValueChange(event) {
    setFromValue(event.target.value);
    setToValue(event.target.value * 2); // Assume 1 NFT = 0.2 TOKEN
  }

  function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
  }
  function handleToImgChange(event) {
    setToImg(event.target.value);
  }

  function handleToValueChange(event) {
    setToValue(event.target.value);
    setFromValue(event.target.value / 2);
  }

  function handleSwap() {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setFromValue(toValue);
    setToValue(fromValue);
    setFromImg(toimg);
    setToImg(fromimg);
    setShow((prev) => !prev);
  }

  return (
    <>
      <SEO
        title="Buy and Sell Unique NFTs | Bridge | Mr Potato NFT"
        description="Get your hands on unique NFTs from the Mr Potato NFT Bridge! Browse our marketplace for a wide selection of digital collectables and enjoy a secure NFT trading experience. Buy, sell, and trade NFTs today!"
      />
      <LiquidityNFTContainer
        maxWid={maxWid}
        minHei={minHei}
        tabMaxWid={tabMaxWid}
        marginVal={marginVal}
      >
        <div className="background">
          <div className="tabs">
            {/* <div className="heading1">
              <img src={swapicon} alt="icon" />
              <span>Swap</span>
              <hr />
            </div> */}
            <div className="convert">
              <div className="truai">
                <label>
                  From:
                  <img
                    onChange={handleFromImgChange}
                    src={show ? token : king}
                    alt="nft"
                  />
                  <select
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                  >
                    <option value="NFT">$MrPotato token</option>
                    <option value="TOKEN">MrPotatoNFT</option>
                  </select>
                </label>
                <div class="input-container1">
                  <input
                    type="number"
                    placeholder="0"
                    value={toValue}
                    onChange={handleToValueChange}
                  />
                </div>
                <div className="text">
                  <span id="grey">Balance: 0</span>
                  <span id="blue">MAX</span>
                </div>
              </div>

              <img
                id="icon"
                src={convert}
                alt="Convert icon"
                onClick={handleSwap}
              />

              <div className="truai">
                <div className="dropdown">
                  <label>
                    To:{" "}
                    <img
                      onChange={handleToImgChange}
                      src={show ? king : token}
                      alt="token"
                    />
                    <select
                      value={toCurrency}
                      onChange={handleToCurrencyChange}
                    >
                      <option value="NFT">$MrPotato token</option>
                      <option value="TOKEN">MrPotatoNFT</option>
                    </select>
                  </label>
                </div>
                <div class="input-container">
                  <input
                    type="number"
                    placeholder="0"
                    value={toValue}
                    onChange={handleToValueChange}
                  />
                </div>
                <div className="text">
                  <span id="grey">Balance: 0</span>
                  <span id="blue">MAX</span>
                </div>
              </div>
            </div>
            {!metaMaskAddress.metaMaskAddress ? (
              <button onClick={handleSwap}>
                <img src={swapButton} width="190px" alt="swapButton" />
              </button>
            ) : (
              <button onClick={handleSwap}>
                <img src={mintSwap} alt="swapButton" />
              </button>
            )}
            <img src={potatoImg} className="left-side" alt="" />
            <img src={kingImg} className="right-side" alt="" />
          </div>
        </div>
      </LiquidityNFTContainer>
    </>
  );
};

export default LiquidityNFT;
