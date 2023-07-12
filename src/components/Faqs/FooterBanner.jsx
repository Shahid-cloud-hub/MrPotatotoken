import React from "react";
import FooterBanner_1 from "../../images/FAQ/FooterBanner.webp";
import { FaqFooterBanner } from "./Faqs.styles";

const FooterBanner = () => {
  return (
    <FaqFooterBanner>
      <div className="FooterBannerImg-2">
        <img src={FooterBanner_1} alt="Footer Banner" />
      </div>
    </FaqFooterBanner>
  );
};

export default FooterBanner;
