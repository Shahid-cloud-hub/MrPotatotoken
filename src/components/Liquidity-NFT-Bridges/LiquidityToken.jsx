import React, { useState, useContext, useEffect } from "react";
import { LiquidityNFTContainer, LiquidityTokenContainer } from "./LiquiStyle";
import SEO from "../SEO/SEO";
import { ethers } from "ethers";
import token from "../../assets/images/nft-bridge/nft-icon.svg";
import nft from "../../assets/images/nft-bridge/nft-icon.svg";
import king from "../../assets/images/nft-bridge/King2-icon.svg";
import convert from "../../assets/images/nft-bridge/convert-icon.svg";
import swapButton from "../../assets/images/nft-bridge/swapButton.svg";
import swapButtonGreen from "../../assets/images/nft-bridge/swapButtonGreen.svg";
// import swapicon from "../../assets/images/nft-bridge/swap-icon.svg";
import WalletConnectGreen from "../../assets/images/nft-bridge/greenConnectWallet.svg";
import { useSelector } from "react-redux";
// import Utils from "../../utilities.js";
import Utils from "../../utils/utilities";
import ERC20 from "../../abis/ERC20.json";
import BRIDGE from "../../abis/Bridge.json";
import { Token, Nft, Bridge } from "../../utils/constants";
import { Context } from "../../utils/Context";

const LiquidityToken = ({ maxWid, minHei, tabMaxWid, marginVal }) => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const [fromCurrency, setFromCurrency] = useState("TOKEN");
  const [fromValue, setFromValue] = useState("");
  const [toCurrency, setToCurrency] = useState("NFT");
  const [toimg, setToImg] = useState(nft);
  const [fromimg, setFromImg] = useState(token);
  const [toValue, setToValue] = useState("");
  const [show, setShow] = useState(false);
  const [NFTbalance, setNFTBalance] = useState(0);
  const [TokenBalance, setTokenBalance] = useState(0);
  const { items, setItems } = useContext(Context);

  useEffect(() => {
    if (metaMaskAddress.metaMaskAddress) {
      Utils.getNFTBalance(metaMaskAddress.metaMaskAddress.toString()).then(
        function (data) {
          //data === 0 ? setBalance(null) : setBalance(data);
          setNFTBalance(Number(data));
        }
      );

      Utils.getTokenBalance(metaMaskAddress.metaMaskAddress.toString()).then(
        function (data) {
          //data === 0 ? setTruBalance(null) : setTruBalance(data);
          setTokenBalance(Number(data) / 1e18);
        }
      );
    }
  }, [metaMaskAddress, items?.getRender]);

  const bridge = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        let chainId = await ethereum.request({ method: "eth_chainId" });
        const provider = new ethers.providers.Web3Provider(ethereum);
        const _signer = provider.getSigner();
        const tokenContract = new ethers.Contract(Token, ERC20.abi, _signer);
        const connectedContract = new ethers.Contract(
          Bridge,
          BRIDGE.abi,
          _signer
        );

        let Txn;

        console.log(Number(toValue) / 100000);
        const fees = Number(toValue) / 100000;
        if (fromCurrency == "NFT") {
          Txn = await connectedContract.swapNFTtoToken(
            ethers.BigNumber.from(Number(toValue)),
            {
              from: _signer.address,
              value: ethers.utils.parseUnits(String(fees)),
            }
          );
          await Txn.wait();
          setItems((prevState) => ({
            ...prevState,
            getRender: true,
          }));
        } else {
          Txn = await tokenContract.approve(
            Bridge,
            ethers.utils.parseUnits(String(toValue))
          );
          await Txn.wait();
          Txn = await connectedContract.swapTokentoNFT(
            ethers.BigNumber.from(Number(toValue)),
            {
              from: _signer.address,
              value: ethers.utils.parseUnits(String(fees)),
            }
          );
          await Txn.wait();
          setItems((prevState) => ({
            ...prevState,
            getRender: true,
          }));
        }

        // console.log("Tokens Bridged successfully!");
      }
    } catch (error) {
      console.error("Error Bridging Token:", error);
    }
  };

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
    setFromValue(0);
    setToValue(0);
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
      <LiquidityTokenContainer
        maxWid={maxWid}
        minHei={minHei}
        tabMaxWid={tabMaxWid}
        marginVal={marginVal}
      >
        <div className="background">
          <div className="tabs">
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
                    <option value="TOKEN">$MrPotato token</option>
                    <option value="NFT">MrPotatoNFT</option>
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
                  <span id="grey">
                    Balance: {fromCurrency == "NFT" ? NFTbalance : TokenBalance}
                  </span>
                  <span
                    id="blue"
                    onClick={() =>
                      setToValue(
                        fromCurrency == "NFT" ? NFTbalance : TokenBalance
                      )
                    }
                  >
                    MAX
                  </span>
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
                      <option value="TOKEN">$MrPotato token</option>
                      <option value="NFT">MrPotatoNFT</option>
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
                  <span id="grey">
                    Balance: {toCurrency == "NFT" ? NFTbalance : TokenBalance}
                  </span>
                  <span
                    id="blue"
                    onClick={() =>
                      setToValue(
                        toCurrency == "NFT" ? NFTbalance : TokenBalance
                      )
                    }
                  >
                    MAX
                  </span>
                </div>
              </div>
            </div>
            {!metaMaskAddress.metaMaskAddress ? (
              <button onClick={handleSwap}>
                <img
                  src={WalletConnectGreen}
                  style={{ transform: "translate(-16px, -4px)" }}
                  alt=""
                />
              </button>
            ) : (
              <button onClick={() => bridge()}>
                <img src={swapButtonGreen} width="190px" alt="" />
              </button>
            )}
          </div>
        </div>
      </LiquidityTokenContainer>
    </>
  );
};

export default LiquidityToken;
