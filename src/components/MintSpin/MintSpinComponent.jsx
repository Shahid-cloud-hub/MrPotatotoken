import { useContext, useEffect, useState } from "react";
import { MintSpinContainer } from "./MintStyle";
import { Context } from "../../utils/Context";
import Confetti from "react-confetti";

import useWindowSize from "react-use/lib/useWindowSize";
import SEO from "../SEO/SEO";

import { NavLink, Outlet, useLocation } from "react-router-dom";

const MintSpinComponent = () => {
  const location = useLocation();
  const { items } = useContext(Context);
  const [celebRemove] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageUrl =
    "https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684585272/leaderboear/Group_484441_ovsaqz.png";
  const tabletImageUrl =
    "https://res.cloudinary.com/dfjmnwwan/image/upload/v1684960234/Winspin_Backgrounds_icae9r.png";
  // const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();

  const screenSize = window?.screen?.availWidth;

  return (
    <>
      <SEO
        title="Spin & Win | NFTs Marketplace | Mr Potato NFT"
        description="Get the chance to spin and win with Mr Potato NFT Marketplace! Buy, sell, and trade unique digital collectibles from a variety of creators. Join the revolution and experience the thrill of NFTs today!"
      />
      {(items?.nftVal || items?.metaPartVal) !== "330deg" &&
        items?.nftVal !== "0deg" &&
        items?.nftVal !== "90deg" &&
        items?.nftVal !== "270deg" &&
        items?.nftVal !== "360deg" &&
        items?.checkNft &&
        celebRemove && (
          <Confetti
            colors={["#FFD700", "#FFA500"]}
            width={width}
            height={750}
            gravity={0.17}
          />
        )}

      {(items?.potatoTokenVal || items?.metaPartVal) !== "330deg" &&
        items?.potatoTokenVal !== "0deg" &&
        items?.potatoTokenVal !== "90deg" &&
        items?.potatoTokenVal !== "270deg" &&
        items?.potatoTokenVal !== "360deg" &&
        items?.checkPotatoToken &&
        celebRemove && (
          <Confetti
            colors={["#FFD700", "#FFA500"]}
            width={width}
            height={750}
            gravity={0.17}
          />
        )}

      {location.pathname === "/MintSpin/MetaPotato" &&
        items?.metaPartVal !== "330deg" &&
        items?.metaPartVal !== "90deg" &&
        items?.metaPartVal !== "270deg" &&
        items?.checkMetaParts &&
        celebRemove && (
          <Confetti
            colors={["#FFD700", "#FFA500"]}
            width={width}
            height={750}
            gravity={0.17}
          />
        )}
      <MintSpinContainer url={screenSize <= 768 ? tabletImageUrl : imageUrl}>
        <div className="background">
          <div className="WinSpin">
            <div className="wins-tabs">
              <div className="tabs-btn">
                <NavLink to="MrPotatoNFT">MrPotatoNFT</NavLink>
                <NavLink to="MetaPotato">MetaPotato</NavLink>
                <NavLink to="MrPotatoToken">MrPotato Token</NavLink>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </MintSpinContainer>
    </>
  );
};

export default MintSpinComponent;
