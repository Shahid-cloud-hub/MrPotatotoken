import React, { useState } from "react";
import styled from "styled-components";
import { MarketPlaceContainer } from "../SuperRare.style";
import { useSelector } from "react-redux";

// Images //
import stick from "../../../assets/images/Super-Rare/stick.png";
import chainlink from "../../../assets/images/Super-Rare/chainlink.png";
import upload from "../../../assets/images/Super-Rare/upload-icon.png";
import Star from "../../../assets/images/Super-Rare/Star.png";
import StarWithoutColor from "../../../assets/images/Super-Rare/Star-2.png";
import instagram from "../../../assets/images/Super-Rare/Instagram.png";
import twitter from "../../../assets/images/Super-Rare/twitter.png";
import facebook from "../../../assets/images/Super-Rare/facebook.png";
import forbes from "../../../assets/images/Super-Rare/forbes.png";
import trading from "../../../assets/images/Super-Rare/trading.png";
import pencil from "../../../assets/images/Super-Rare/pencil.png";
import dollarYellow from "../../../assets/images/Super-Rare/dollar-yellow.png";
import ReactPopUpModel from "../../ReactPopUpModel/ReactPopUpModel";
import { NftData } from "../AiNFTData";

const MyNFTComponent = () => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleImageClick = (src) => {
    setModalOpen(true);
    setImageSrc(src);
  };

  const closeModal = () => {
    setModalOpen(false);
    setImageSrc("");
  };

  return (
    <>
      {metaMaskAddress?.metaMaskAddress && (
        <MarketPlaceContainer>
          {NftData?.slice(0, 1)?.map((item, index) => (
            <div className="cryptoAi" key={index}>
              <div className="head">
                <span id="brown">{item.heading}</span>
                <ImageContainer>
                  <img
                    src={item.main_img}
                    onClick={() => handleImageClick(item?.main_img)}
                    alt="mainImg1"
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
                    <span>👍 Votes</span>
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
                      <span id="wallet">Wallet</span>
                      {/* <span id="buy">BUY</span> */}
                      <span>
                        {item.wallet_id1} <img src={stick} alt="icon" />
                      </span>
                      <span>
                        {item.wallet_id1} <img src={stick} alt="icon" />
                      </span>
                      <span>
                        {item.wallet_id1} <img src={stick} alt="icon" />
                      </span>
                    </div>
                    <div className="price-list">
                      <span id="buy">Last Price</span>
                      <span>
                        <img src={dollarYellow} alt="icon" /> {item.price_2}
                      </span>
                      <span>
                        <img src={dollarYellow} alt="icon" /> {item.price_3}
                      </span>
                      <span>
                        <img src={dollarYellow} alt="icon" /> {item.price_3}
                      </span>
                    </div>
                    <div className="price-list">
                      <span id="buy">Buy Price</span>
                      <span>
                        <img src={dollarYellow} alt="icon" /> {item.price_3}
                      </span>
                      <span>
                        <img src={dollarYellow} alt="icon" /> {item.price_2}
                      </span>
                      <span>
                        <img src={dollarYellow} alt="icon" /> {item.price_2}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {modalOpen && (
            <ReactPopUpModel src={imageSrc} closeModal={closeModal} />
          )}
        </MarketPlaceContainer>
      )}
    </>
  );
};

const ImageContainer = styled.div`
  position: relative;
  /* width: 200px; */
  /* height: 200px; */
  &:hover {
    cursor: pointer;
  }
  img {
    /* width: 100%; */
    /* height: 100%; */
    /* object-fit: cover; */
    transition: transform 0.3s ease-out;
  }
  img:hover {
    transform: scale(1.05);
  }
  ${({ isModalOpen }) =>
    isModalOpen &&
    `
      position: fixed;
      top: 40%;
    left: 50%;
    width: 50%;
    height: 50%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      transform: translate(-50%, -50%);
    `}
`;

export default MyNFTComponent;
