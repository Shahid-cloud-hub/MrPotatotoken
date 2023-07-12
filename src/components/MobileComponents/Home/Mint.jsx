import React, { useMemo } from "react";
import { carouselData } from "../../../assets/data/carouselData";
import CarsouelCardSlider from "./CarsouelCardSlider";
import { MobileContainer } from "./LandingStyle";
import Social_3 from "../../../assets/images/sidebar-social-icons/social_3.webp";
import Social_4 from "../../../assets/images/sidebar-social-icons/social_4.webp";
import LogoKing from "../../../assets/images/logoKing.svg";
import { Carousel } from "../../MintSpin/Carousel";

const Mint = () => {
  const slider = useMemo(
    () => (
      <Carousel
        slides={carouselData.map((item, index) => (
          <div key={index}>
            <CarsouelCardSlider
              title={item.title}
              mainimage={item.mainimage}
              imagebg={item.imagebg}
              rarityRank={item.rarityRank}
              metaScore={item.metaScore}
              featureScore={item.featureScore}
              speedScore={item.speedScore}
              toolsScore={item.toolsScore}
              gradeScore={item.gradeScore}
              nftPowers_features_data={item.nftPowers_features.map(
                (data) => data
              )}
              nftPowers_speed_data={item.nftPowers_speed.map((data) => data)}
              nftPowers_tools_data={item.nftPowers_tools.map((data) => data)}
            />
          </div>
        ))}
        interval={2000}
        arrows={false}
        autoplay={true}
      />
    ),
    []
  );
  return (
    <MobileContainer>
      <div className="mint-wrapper">
        <div>{slider}</div>
        <div className="MintAmountBtn">
          <>
            <div className="inputAmount">
              <input placeholder="0" />
            </div>
            <div>
              <button className="deadbtn">
                <span>MINT</span>{" "}
                <img src={LogoKing} alt="Logo King" width={50} />
              </button>
            </div>
          </>
          <div>
            <a href="/">
              <img src={Social_4} alt="" />
            </a>
            <a href="/">
              <img src={Social_3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
};

export default Mint;
