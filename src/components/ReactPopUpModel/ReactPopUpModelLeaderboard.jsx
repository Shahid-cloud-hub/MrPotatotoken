import React, { useState } from "react";
import styled from "styled-components";
import CloseImg from "../../assets/images/Super-Rare/close-icon.svg";
import MarketPlaceComponent from "../SuparRare/MarketPlaceComponent/MarketPlaceComponent";
import { MarketPlaceContainer } from "../SuparRare/SuperRare.style";
import { Leaderboard } from "../SuparRare/AiNFTData";

import stick from "../../assets/images/Super-Rare/stick.png";
import chainlink from "../../assets/images/Super-Rare/chainlink.png";
import upload from "../../assets/images/Super-Rare/upload-icon.png";
import Star from "../../assets/images/Super-Rare/Star.png";
import StarWithoutColor from "../../assets/images/Super-Rare/Star-2.png";
import instagram from "../../assets/images/Super-Rare/Instagram.png";
import twitter from "../../assets/images/Super-Rare/twitter.png";
import facebook from "../../assets/images/Super-Rare/facebook.png";
import forbes from "../../assets/images/Super-Rare/forbes.png";
import trading from "../../assets/images/Super-Rare/trading.png";
import pencil from "../../assets/images/Super-Rare/pencil.png";
import dollarYellow from "../../assets/images/Super-Rare/dollar-yellow.png";
import { useSelector } from "react-redux";
import ReactPopUpModel from "./ReactPopUpModel";
import ReactPopUpModelLeader from "./ReactPopUpModelLeader";

const ReactPopUpModelLeaderboard = ({ data, closeModal }) => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleImageClick = (src) => {
    setModalOpen(true);
    setImageSrc(src);
  };

  const closeModalLeader = () => {
    setModalOpen(false);
    setImageSrc("");
  };
  return (
    <ModalContainer>
      <ImageContainer>
        <MarketPlaceContainer
          displayCard="1fr"
          trans="translate(-86%, 2%) scale(0.73)"
          img="translate(10px, 10px)"
          img2="translate(-5px, 10px)"
        >
          {data?.map((item, index) => (
            <div className="cryptoAi" key={index}>
              <div className="head">
                <span id="brown">{item.heading}</span>
                <ImageContainer>
                  <img
                    src={item.main_img}
                    onClick={() => handleImageClick(item?.main_img)}
                    alt="mainImg1"
                    style={{ cursor: "pointer" }}
                  />
                </ImageContainer>
                <span id="white">{item.name}</span>
              </div>
              <div className="stats">
                <div className="cryptoScore">
                  <div className="score">
                    <span id="brown">Rank:</span>
                    <span id="white">{item.rank}</span>
                  </div>
                  <div className="score">
                    <span id="brown">MrPotatoNFT Score:</span>
                    <span id="white">{item.score}</span>
                  </div>
                </div>
                <div className="Address">
                  <div className="cryptoId">
                    <span>{item.id}</span>
                    <img src={stick} alt="stick" />
                  </div>
                  <img src={chainlink} alt="chainlink" />
                  <img src={upload} alt="upload" />
                  <img src={StarWithoutColor} alt="Star" />
                </div>
              </div>
              <div className="Social">
                <div className="list">
                  <div className="item">
                    <img src={instagram} alt="instagram" />
                    <span>Instagram Followers</span>
                  </div>
                  <div className="item">
                    <img src={twitter} alt="twitter" />
                    <span>Twitter Followers</span>
                  </div>
                  <div className="item">
                    <img src={facebook} alt="facebook" />
                    <span>Facebook Followers</span>
                  </div>
                  <div className="item">
                    <img src={forbes} alt="forbes" />
                    <span>Rich List Billions</span>
                  </div>
                  <div className="item">
                    <img
                      src={trading}
                      alt="trading"
                      style={{ paddingLeft: "5px" }}
                    />
                    <span>Trading Volume</span>
                  </div>
                  <div className="item">
                    <span>⭐ Votes</span>
                  </div>
                </div>
                <div className="list1">
                  <span>{item.instagram_followers}</span>
                  <span>{item.twitter_followers}</span>
                  <span>{item.facebook_followers}</span>
                  <span style={{ color: item?.color && item?.color }}>
                    {item.forbes}
                  </span>
                  <span>{item.trading_volume}</span>
                  <span>{item.vote}</span>
                </div>
              </div>
              <div className="priceButton">
                <div
                  className={
                    !metaMaskAddress.metaMaskAddress
                      ? "wallet-not-connected"
                      : "last-price"
                  }
                >
                  {!metaMaskAddress.metaMaskAddress ? (
                    <span> Connect wallet</span>
                  ) : (
                    <span> Last Price</span>
                  )}
                  <div>
                    {!metaMaskAddress.metaMaskAddress ? (
                      ""
                    ) : (
                      <img src={dollarYellow} alt="dollarYellow" />
                    )}
                    <span>
                      {!metaMaskAddress.metaMaskAddress ? "" : item.last_price}
                    </span>
                  </div>
                </div>
                <div
                  className={
                    !metaMaskAddress.metaMaskAddress
                      ? "wallet-not-connected"
                      : "sale-price"
                  }
                >
                  {!metaMaskAddress.metaMaskAddress ? (
                    <span> Connect wallet</span>
                  ) : (
                    <span>Sale Price</span>
                  )}
                  <div>
                    {!metaMaskAddress.metaMaskAddress ? (
                      ""
                    ) : (
                      <img src={dollarYellow} alt="dollarYellow" />
                    )}{" "}
                    <span>
                      {!metaMaskAddress.metaMaskAddress ? "" : item.sale_price}
                    </span>
                    {!metaMaskAddress.metaMaskAddress ? (
                      ""
                    ) : (
                      <img src={pencil} alt="pencil" />
                    )}
                  </div>
                </div>
                <div
                  className={
                    !metaMaskAddress.metaMaskAddress
                      ? "wallet-not-connected"
                      : "next-price"
                  }
                >
                  {!metaMaskAddress.metaMaskAddress ? (
                    <span> Connect wallet</span>
                  ) : (
                    <span>Next Price</span>
                  )}
                  <div>
                    {!metaMaskAddress.metaMaskAddress ? (
                      ""
                    ) : (
                      <img src={dollarYellow} alt="dollarYellow" />
                    )}
                    <span>
                      {!metaMaskAddress.metaMaskAddress ? "" : item.next_price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="wallet">
                <div className="wrapper-main-nft">
                  <div>
                    <div className="wallet-list">
                      <span id="wallet">Wallets</span>
                      {/* <span id="buy">BUY</span> */}
                      <span>
                        {item.wallet_id1} <img src={stick} alt="icon" />
                      </span>
                      {/* <span>
                    {item.wallet_id1} <img src={stick} alt="icon" />
                  </span>
                  <span>
                    {item.wallet_id1} <img src={stick} alt="icon" />
                  </span> */}
                    </div>
                    <div className="price-list">
                      <span id="buy">Last Price</span>
                      <span>
                        <img src={dollarYellow} alt="icon" /> {item.price_2}
                      </span>
                      {/* <span>
                    <img src={dollarYellow} alt="icon" /> {item.price_3}
                  </span>
                  <span>
                    <img src={dollarYellow} alt="icon" /> {item.price_3}
                  </span> */}
                    </div>
                    <div className="price-list">
                      <span id="buy">Buy Price</span>
                      <span>
                        <img src={dollarYellow} alt="icon" /> {item.price_3}
                      </span>
                      {/* <span>
                    <img src={dollarYellow} alt="icon" /> {item.price_2}
                  </span>
                  <span>
                    <img src={dollarYellow} alt="icon" /> {item.price_2}
                  </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {modalOpen && (
            <ReactPopUpModelLeader
              src={imageSrc}
              closeModalLeader={closeModalLeader}
            />
          )}
        </MarketPlaceContainer>
        <CloseButton onClick={closeModal}>
          <img src={CloseImg} alt="close" />
        </CloseButton>
      </ImageContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 51%;
  left: 50%;
  width: 166%;
  height: 500%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  z-index: 999;
  transform: translate(-37%, -50%);

  @media screen and (max-width: 912px) {
    transform: translate(-42%, -53%);
  }
  @media screen and (max-width: 880px) {
    transform: translate(-37%, -50%);
  }
  @media screen and (max-width: 620px) {
    transform: translate(-49%, -50%);
  }
  @media screen and (max-width: 520px) {
    transform: translate(-49%, -50%);
  }
  @media screen and (max-width: 390px) {
    transform: translate(-50%, -50%);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 400px;
  height: 400px; */
  /* transform: translate(25%, 88px); */

  img {
    /* width: 80%; */
    /* height: 50%; */
    /* object-fit: cover; */
  }

  @media screen and (max-width: 980px) {
    transform: translate(2%, 0px);
  }

  @media screen and (max-width: 880px) {
    transform: translate(0, 0);
  }
  @media screen and (max-width: 620px) {
    transform: translate(-2px, 0px);
  }

  @media screen and (max-width: 420px) {
    transform: translate(-2%, 0px);
    /* width: 380px; */
    max-height: 380px;

    img {
      /* width: 60%; */
      /* height: 50%; */
      /* object-fit: cover; */
    }
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  left: 330px;
  margin: 10px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  cursor: pointer;

  img {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 1385px) {
    top: 121px;
    right: -58px;
    left: 19px;
    width: 30px;
  }

  @media screen and (max-width: 912px) {
    top: 4px;
    right: -53px;
  }

  @media screen and (max-width: 420px) {
    left: 323px;
    top: -179px;
  }

  @media screen and (max-width: 880px) {
    img {
      width: 10%;
      height: 10%;
    }
  }
  @media screen and (max-width: 620px) {
    img {
      width: 80%;
      height: 80%;
    }
  }
  @media screen and (max-width: 520px) {
    top: -3px;
    right: 0;
    left: 336px;

    img {
      width: 80%;
      height: 80%;
    }
  }
  @media screen and (max-width: 390px) {
    left: 302px;
    top: -156px;
    img {
      width: 60%;
      height: 60%;
    }
  }

  @media screen and (max-width: 380px) {
    img {
      width: 60%;
      height: 60%;
    }
  }
`;

export default ReactPopUpModelLeaderboard;
