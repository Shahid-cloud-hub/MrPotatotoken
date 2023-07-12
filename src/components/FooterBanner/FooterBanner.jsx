import React from "react";
import { NavLink } from "react-router-dom";
import { FooterBannerSection } from "./Footer.Style";
import FooterImg_2 from "../../assets/images/footerBanner/footer_2.webp";
import FooterImg_3 from "../../assets/images/footerBanner/footer_3.webp";
import FooterImg_4 from "../../assets/images/footerBanner/footer_4.webp";
import FooterImg_5 from "../../assets/images/footerBanner/footer_5.webp";
import FooterImg_6 from "../../assets/images/footerBanner/footer_6.webp";
import FooterImg_7 from "../../assets/images/footerBanner/footer_7.webp";
import FooterImg_8 from "../../assets/images/footerBanner/footer_8.webp";
import FooterImg_9 from "../../assets/images/footerBanner/footer_9.webp";
import FooterImg_10 from "../../assets/images/footerBanner/footer_10.webp";
import FooterImg_11 from "../../assets/images/footerBanner/footer_11.webp";

const FooterBanner = () => {
  return (
    <FooterBannerSection>
      <NavLink to="/airdrop" className="FooterBannerImg">
        <div className="bg-king">
          <div className="parent-wrapper">
            <div className="left-items-1">
              <div className="lef-item-1">
                <img src={FooterImg_4} alt="Sky Potato" />
              </div>
              <div className="lef-item-2">
                <img src={FooterImg_5} alt="Sky Potato" />
              </div>
              <div className="lef-item-3">
                <img src={FooterImg_6} alt="Sky Potato" />
              </div>
              <div className="lef-item-4">
                <img src={FooterImg_7} alt="Sky Potato" />
              </div>
            </div>
            <div className="banner-title">
              <div className="bn-title">
                <img src={FooterImg_2} alt="Title" />
              </div>
              <div className="bn-btn">
                <img src={FooterImg_3} alt="Title" />
              </div>
            </div>
            <div className="right-items-2">
              <div className="lef-item-1">
                <img src={FooterImg_8} alt="Sky Potato" />
              </div>
              <div className="lef-item-2">
                <img src={FooterImg_9} alt="Sky Potato" />
              </div>
              <div className="lef-item-3">
                <img src={FooterImg_10} alt="Sky Potato" />
              </div>
              <div className="lef-item-4">
                <img src={FooterImg_11} alt="Sky Potato" />
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </FooterBannerSection>
  );
};

export default FooterBanner;
