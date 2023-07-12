import React from "react";
import { TopContainer } from "./TopNavStyle";
import king from "../../assets/images/sidebar-social-icons/king.svg";
import potato from "../../assets/images/sidebar-social-icons/potato.png";
import gun from "../../assets/images/sidebar-social-icons/gun.png";
import Token from "../../assets/images/sidebar-social-icons/potato-token.svg";
import useBreakpoint from "../../hooks/useBreakpoints";

const TopNavButtons = ({ show }) => {
  const { isDesktop, isTablet } = useBreakpoint();
  const availableWidth = window?.screen?.availWidth;

  return (
    <TopContainer paddTop="20px" removePadd={show ? "none" : "0px"}>
      <div
        className="menu-nav-bar-down"
        style={
          availableWidth > 1080 ? { display: "none" } : { display: "flex" }
        }
      >
        <div className="menu-nav-bar-center">
          {" "}
          <div className="metapoints" id="subscript">
            <span>0</span>
            <img src={potato} alt="potato" />
            <span>MrPotatoNFT</span>
          </div>
          <div className="metapoints" id="subscript">
            <span>0</span>
            <img src={king} alt="King" />
            <span>POTATO</span>
          </div>
          <div className="metapoints">
            <span>0</span>
            <img src={gun} alt="gun" />
            <span>MetaParts</span>
          </div>
          <div className="metapoints ">
            <span>0</span>
            <span>Metapoints</span>
          </div>
        </div>
      </div>
    </TopContainer>
  );
};

export default TopNavButtons;
