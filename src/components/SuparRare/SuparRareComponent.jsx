import { SuperRareContainer } from "./SuperRare.style";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import ETHImage from "../../assets/images/supar-rare/Eth.png";
import BnbImage from "../../assets/images/supar-rare/Bnb.png";
import searchIcon from "../../assets/images/supar-rare/icon_search.svg";

import AiDropDownFilter from "./AiDropDownFilter";
import MarketFilters from "../MarketFilters/MarketFilters";

const SuparRareComponent = () => {
  const location = useLocation();

  return (
    <SuperRareContainer>
      <div className="market-place-btn">
        <NavLink to="token">TOKEN</NavLink>
        <NavLink to="eth-token" className="hide-styles">
          <img src={ETHImage} alt="ETH" />
        </NavLink>
        <NavLink to="bnb-token" className="hide-styles">
          <img src={BnbImage} alt="BNB" />
        </NavLink>
        <NavLink to="nft">NFT</NavLink>
      </div>
      {/* Here */}
      {location.pathname === "/market/token" && <MarketFilters />}
      {location.pathname === "/market/nft" && (
        <div className="market-place-filter-btn">
          <div className="parent-wrapper">
            <AiDropDownFilter
              options={[
                { name: "Sales High/Low", value: "all", defaultValue: true },
                { name: "High", value: "high" },
                { name: "Low", value: "low" },
              ]}
              onChange={(e) => {
                // console.log(e.target.value);
              }}
            />
          </div>
          <div className="parent-wrapper">
            <AiDropDownFilter
              options={[
                { name: "Price High/Low", value: "all", defaultValue: true },
                { name: "High", value: "high" },
                { name: "Low", value: "low" },
              ]}
              onChange={(e) => {
                // console.log(e.target.value);
              }}
            />
          </div>
          <div className="parent-wrapper">
            <AiDropDownFilter
              options={[
                { name: "Score High/Low", value: "all", defaultValue: true },
                { name: "High", value: "high" },
                { name: "Low", value: "low" },
              ]}
              onChange={(e) => {
                // console.log(e.target.value);
              }}
            />
          </div>
        </div>
      )}
      <div className="scroll-bar">
        <span>Search</span>
        <img src={searchIcon} alt="searchIcon" />
      </div>
      <Outlet />
    </SuperRareContainer>
  );
};

export default SuparRareComponent;
