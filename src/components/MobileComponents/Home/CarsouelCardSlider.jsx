import React, { useState, useContext } from "react";
import { ReactSVG } from "react-svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NftPowers from "../../MintSpin/nft-powers";
import { Tab, Nav } from "react-bootstrap";
import SwipButton from "../../MintSpin/swip-button";
// images
import bridgeIcon from "../../../assets/images/nft-bridge/bridge-icon.svg";
import mintIcon from "../../../assets/images/nft-bridge/mint-icon.svg";
import sellIcon from "../../../assets/images/nft-bridge/sell-icon.svg";
import transferIcon from "../../../assets/images/nft-bridge/transfer-icon.svg";
import styled from "styled-components";
import { Context } from "../../../utils/Context";

const CloseBtn = styled.div`
  padding: 0px 0px 12px 0px;

  .Closebtn {
    padding: 6px;
    background: #251841;
    color: #fff;
    text-transform: uppercase;
  }
`;

const CarsouelCardSlider = ({
  idCardPro,
  swipBtnPro,
  title,
  checkBoxStatus,
  mainimage,
  imagebg,
  transform,
  rarityRank,
  metaScore,
  featureScore,
  speedScore,
  toolsScore,
  gradeScore,
  nftPowers_features_data,
  nftPowers_speed_data,
  nftPowers_tools_data,
}) => {
  const [nftPowers, setNftPower] = useState(idCardPro);
  const [swipBtn, setswipBtn] = useState(!swipBtnPro);

  const [randomdata, setRandomdata] = useState([]);

  const { items, setItems } = useContext(Context);

  const handleToggle = () => {
    if (items?.stopCarousel) {
      setItems((prevState) => ({
        ...prevState,
        stopCarousel: false,
      }));
    } else {
      setItems((prevState) => ({
        ...prevState,
        stopCarousel: true,
      }));
    }

    setNftPower(!nftPowers);
    if (nftPowers) {
      setswipBtn(true);
    }
    if (!nftPowers) {
      setswipBtn(false);
    }
  };

  return (
    /*back-shadow*/
    <div
      className="id-card-v3"
      style={transform && { transform: "scale(0.8)" }}
    >
      {checkBoxStatus && (
        <div className="checkbox-holder">
          <div className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </div>
        </div>
      )}
      <div className="nft-chrac-detail">
        <div className="card--title">
          MrPotato NFT #<span>{title}</span>
          <div className={nftPowers ? "GreenColor" : "RedColor"}></div>
        </div>
        <figure className="main-image" style={{ background: `${imagebg}` }}>
          <LazyLoadImage src={mainimage} width="100%" alt="" />
        </figure>
      </div>
      <div className="attributes">
        <div className="attributes--items">
          <div className="item" attribute-data={"#" + rarityRank}>
            Rarity Rank
          </div>
          <div className="item" attribute-data={metaScore}>
            Meta Score
          </div>
        </div>
      </div>
      <div className={`nft-info-tabs ${nftPowers ? "active" : ""}`}>
        <Tab.Container defaultActiveKey="mint">
          <Tab.Content>
            <Tab.Pane eventKey="bridge">
              <div>bridge</div>
            </Tab.Pane>
            <Tab.Pane eventKey="mint">
              <div className="nft-powers-holder">
                <NftPowers
                  featureScore={featureScore}
                  speedScore={speedScore}
                  toolsScore={toolsScore}
                  nftPowers_features_data={nftPowers_features_data}
                  nftPowers_speed_data={nftPowers_speed_data}
                  nftPowers_tools_data={nftPowers_tools_data}
                  gradeScore={gradeScore}
                  type={randomdata?.type}
                  icon={randomdata?.icon}
                  cardNum={randomdata?.cardNum}
                  partbg={randomdata?.partbg}
                  part={randomdata?.part}
                  link={randomdata?.link}
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="sell">
              <div>sell</div>
            </Tab.Pane>
            <Tab.Pane eventKey="transfer">
              <div>transfer</div>
            </Tab.Pane>
          </Tab.Content>
          <CloseBtn onClick={handleToggle}>
            <SwipButton
              className="Closebtn"
              type="tab-content"
              childData="click to close card"
              style={{ borderRadius: "10px" }}
            />
          </CloseBtn>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="bridge">
                <ReactSVG alt="bridge icon" src={bridgeIcon} />
                <div>Bridge</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mint">
                <ReactSVG alt="mint icon" src={mintIcon} />
                <div>Mint</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sell">
                <ReactSVG alt="sell icon" src={sellIcon} />
                <div>Sell</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="transfer">
                <ReactSVG alt="transfer icon" src={transferIcon} />
                <div>Transfer</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Container>
      </div>
      {swipBtn && (
        <div onClick={handleToggle}>
          <SwipButton type="white" childData="Click for more information" />
        </div>
      )}
    </div>
  );
};

export default CarsouelCardSlider;
