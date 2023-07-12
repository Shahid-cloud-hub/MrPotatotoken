import React from "react";
import WeapansImg from "../../assets/images/metapotato/weapans.png";
import VLogo from "../../assets/images/Play2earn/v_logo.webp";
import footBtn from "../../assets/images/Play2earn/footBtn.png";
import KingLogo from "../../assets/images/Play2earn/king.webp";
import Wallet from "../../assets/images/Wallet.png";
import Shadow from "../../assets/images/Btn-shadow.png";
import color from "../../assets/images/Btn-effect.png";
import MobileTextImg from "../../assets/images/Play2earn/text-mobile.webp";
import FoxImg from "../../assets/images/Play2earn/fox.webp";
import PlayGroundImg from "../../assets/images/Play2earn/play-ground.webp";
import Potato from "../../assets/images/Potato.png";
import Efect from "../../assets/images/bg-1.png";
import Effect from "../../assets/images/bg-2.png";
import { ConnectWallet, Play2Container } from "./PlayStyle";
import useBreakpoint from "../../hooks/useBreakpoints";

const Play = () => {
  const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();

  return (
    <Play2Container>
      <div className="play-background">
        <div className="img-wrapper">
          <img src={PlayGroundImg} alt="Playground" />

          <div className="bg-img">
            <div className="play-earn-text">
              <span>Play 2 Earn Potatos</span>
              <span>highest rarity rank WINS</span>
            </div>
            <div className="play-middle">
              <div className="v-logo">
                <img src={VLogo} alt="V" />
              </div>
              <div className="span-container">
                <span>Randomly Minted</span>
                <span> Mr Potato NFT</span>
              </div>
              <div className="un-none-player">
                <img src={Potato} alt="NFT" />

                <img className="bg-2" src={Effect} alt="bg-2" />
                <img className="bg-1" src={Efect} alt="bg-1" />
              </div>
            </div>
            <button className="connect-main-wrapper">
              <ConnectWallet>
                <div className="token">
                  <img src={KingLogo} alt="King" />
                </div>
                <div>
                  {(isDesktop || isTablet) && (
                    <img className="Text-effect" src={color} alt="Text" />
                  )}
                  <img src={Wallet} alt="Text" />

                  {/* <span>PLAY2EARN CONNECT WALLET</span> */}
                </div>
                <div className="token">
                  <img src={FoxImg} alt="Text" />
                </div>
                <div className="Shadow">
                  <img src={Shadow} />
                </div>
              </ConnectWallet>
            </button>
          </div>
        </div>
      </div>
    </Play2Container>
  );
};

export default Play;
