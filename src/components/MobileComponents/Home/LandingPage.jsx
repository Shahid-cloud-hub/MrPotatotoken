import React from "react";
import { MobileContainer } from "./LandingStyle";
import { Items } from "../../MintSpin/CarouselHome/Carousel.styles";
import Wheelofprize from "../../MintSpin/Wheelofprize";
import { useContext } from "react";
import { Context } from "../../../utils/Context";
import { useWindowSize } from "react-use";
import { useState } from "react";
import Confetti from "react-confetti";

// import useBreakpoint from "../../../hooks/useBreakpoints";
// import Social_3 from "../../../assets/images/sidebar-social-icons/social_3.webp";
// import Social_4 from "../../../assets/images/sidebar-social-icons/social_4.webp";

const LandingPage = () => {
  const { items } = useContext(Context);
  const [celebRemove] = useState(true);
  const { width } = useWindowSize();
  // const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();

  return (
    <>
      {items?.check && celebRemove && (
        <Confetti width={width} height={1200} gravity={0.77} />
      )}
      <MobileContainer>
        <div className="background-win-spin">
          {/* <div className="buy_credits">
            <div className="credit_title">
              <span>Spin Credits:</span>
              <span>NFT Won:</span>
              <span>Potato Token Won:</span>
              <span>Meta Parts Won:</span>
            </div>

            <div className="credit_score">
              <span>0</span>
              <span>0</span>
              <span>0</span>
              <span>0</span>
            </div>
            <div className="m-buy-btn">
              <button>Buy Spins Credits</button>
            </div>
          </div> */}
          <div className="main-wrapper">
            <Items>
              <Wheelofprize />
            </Items>
          </div>
          {/* {(isMobile || isSmallMobile) && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={Social_4} alt="discord" />
              <img src={Social_3} alt="telegram" />
            </div>
          )} */}
        </div>
      </MobileContainer>
    </>
  );
};

export default LandingPage;
