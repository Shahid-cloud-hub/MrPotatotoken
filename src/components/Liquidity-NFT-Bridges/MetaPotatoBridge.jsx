import { useState } from "react";
import { LiquidityNFTContainer } from "./LiquiStyle";
import SEO from "../SEO/SEO";

import token from "../../assets/images/nft-bridge/nft-icon.svg";
import nft from "../../assets/images/nft-bridge/nft-icon.svg";
import king from "../../assets/images/nft-bridge/King2-icon.svg";
// import convert from "../../assets/images/nft-bridge/convert-icon.svg";
import swapButton from "../../assets/images/nft-bridge/Swap.png";
import GunImage from "../../assets/images/nft-bridge/blaster.png";
import SpinnerImage from "../../assets/images/nft-bridge/Spinner.png";
import FrameImage from "../../assets/images/nft-bridge/Frame.png";
// import swapicon from "../../assets/images/nft-bridge/swap-icon.svg";
// import mintSwap from "../../assets/images/nft-bridge/mint.svg";
import { useSelector } from "react-redux";

import uploadIcon from "../../assets/images/metapotato/upload-icon.svg";
import spins from "../../assets/images/metapotato/spins.png";
import points from "../../assets/images/metapotato/points.png";
import SELL from "../../assets/images/metapotato/SELL.png";

const MetaPotatoBridge = ({
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

  const [activeBox, setActiveBox] = useState(null);

  const handleClick = (boxNumber) => {
    setActiveBox(activeBox === boxNumber ? null : boxNumber);
  };

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
            <img src={GunImage} className="left-top-side" alt="" />
            <img src={SpinnerImage} className="right-top-side" alt="" />
            <div className="convert-container">
              <img src={FrameImage} alt="" width={80} />
              <div className="convert">
                <div className="truai">
                  <label>
                    From:
                    {/* <img onChange={handleFromImgChange} src={token} alt="nft" /> */}
                    <select
                      value={fromCurrency}
                      onChange={handleFromCurrencyChange}
                    >
                      <option value="MrPotatoNFT">Part</option>
                    </select>
                  </label>
                  <div className="input-container1">
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

                <div className="truai">
                  <div className="dropdown">
                    <label>
                      To:{" "}
                      {/* <img
                        onChange={handleToImgChange}
                        src={king}
                        alt="token"
                      /> */}
                      <select
                        value={toCurrency}
                        onChange={handleToCurrencyChange}
                      >
                        <option value="TOKEN">Spin</option>
                      </select>
                    </label>
                  </div>
                  <div className="input-container">
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
            </div>
            {!metaMaskAddress.metaMaskAddress ? (
              <button onClick={handleSwap}>
                <img src={swapButton} width="190px" alt="swapButton" />
              </button>
            ) : (
              <button onClick={handleSwap}>
                <img src={swapButton} alt="swapButton" />
              </button>
            )}

            <img src={potatoImg} className="left-side" alt="" />
            <img src={kingImg} className="right-side" alt="" />
          </div>
          <div className="metapoints">
            <div className="items-container">
              <div className="all-items">
                <div className="item-1">
                  <div className="part-img"></div>
                  <div className="box">
                    <button>Swap</button>
                    <button id="upload">
                      <img src={uploadIcon} alt="uploadIcon" />
                    </button>
                  </div>
                  <div className="box1">
                    <button onClick={() => handleClick(1)}>
                      <div>
                        <img src={SELL} alt="SELL" />
                      </div>
                    </button>
                    {activeBox === 1 && (
                      <div className="dropdown-content">
                        <button id="dropdown">
                          <img src={points} alt="points" />
                        </button>
                        <button id="dropdown">
                          <img src={spins} alt="spins" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="item-1">
                  <div className="part-img"></div>
                  <div className="box">
                    <button>Swap</button>
                    <button id="upload">
                      <img src={uploadIcon} alt="uploadIcon" />
                    </button>
                  </div>
                  <div className="box1">
                    <button onClick={() => handleClick(2)}>
                      <div>
                        <img src={SELL} alt="SELL" />
                      </div>
                    </button>
                    {activeBox === 2 && (
                      <div className="dropdown-content">
                        <button id="dropdown">
                          <img src={points} alt="points" />
                        </button>
                        <button id="dropdown">
                          <img src={spins} alt="spins" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="item-1">
                  <div className="part-img"></div>
                  <div className="box">
                    <button>Swap</button>
                    <button id="upload">
                      <img src={uploadIcon} alt="uploadIcon" />
                    </button>
                  </div>
                  <div className="box1">
                    <button onClick={() => handleClick(3)}>
                      <div>
                        <img src={SELL} alt="SELL" />
                      </div>
                    </button>
                    {activeBox === 3 && (
                      <div className="dropdown-content">
                        <button id="dropdown">
                          <img src={points} alt="points" />
                        </button>
                        <button id="dropdown">
                          <img src={spins} alt="spins" />
                        </button>
                      </div>
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </LiquidityNFTContainer>
    </>
  );
};

export default MetaPotatoBridge;
