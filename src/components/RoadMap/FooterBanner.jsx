import React from "react";
import FooterBanner_1 from "../../images/roadmap/FooterBanner.webp";
import { MainContainer } from "./RoadMapStyle";

const FooterBanner = () => {
  return (
    <MainContainer>
      <div className="FooterBannerImg">
        <img src={FooterBanner_1} alt="Footer Banner" />
      </div>
    </MainContainer>
  );
};

export default FooterBanner;
