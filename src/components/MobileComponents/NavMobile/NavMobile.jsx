import { useEffect, useState } from "react";
import PotatoKing from "../../../assets/images/liquidity/liquidity_2.webp";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink, useLocation } from "react-router-dom";
import { MobileContainer } from "../Home/LandingStyle";
import RightSidebar from "../../RightSidebar/RightSidebar";
import MetaMask from "../../TopNav/MetaMask";

const NavMobile = () => {
  const location = useLocation(); // Get the current location
  const [activePage, setActivePage] = useState("Home");

  const options = [
    { value: "NLanding", label: "Home", route: "/" },
    { value: "potatoNft", label: "MrPotatoNFT", route: "/mrpotato-nft" },
    { value: "potatoToken", label: "Token", route: "/token/dollar-potato" },
    // { value: "potatoNft", label: "NFT", route: "/nft" },
    // { value: "MetaPotato", label: "MetaPotato", route: "/meta-potato/nft" },
    {
      value: "Market",
      label: "Market",
      route: "/market/token",
    },
    { value: "mintspin", label: "MintSpin", route: "/MintSpin/MrPotatoNFT" },
    { value: "airdrop", label: "Airdrop", route: "/airdrop" },
    { value: "partners", label: "Partners", route: "/partners" },
    {
      value: "merchandise",
      label: "Merchandise",
      route: "/super-rare/merchandise",
    },
    { value: "faq", label: "FAQ", route: "/faq" },
    { value: "roadmap", label: "Roadmap", route: "/roadmap" },
    // { value: "mint", label: "Mint", route: "/mint" },
    // { value: "bridge", label: "Bridge", route: "/bridge" },
    // { value: "whitelist", label: "Whitelist", route: "/whitelist" },
  ];

  useEffect(() => {
    // Set the active page based on the current route
    const activeOption = options.find(
      (option) => option.route === location.pathname
    );
    if (activeOption) {
      setActivePage(activeOption.label);
    }
  }, [location.pathname, options]);

  return (
    <MobileContainer>
      <div className="backgroundImg">
        <div className="container">
          <div className="navbar-wrapper">
            <NavLink to="/">
              <img src={PotatoKing} alt="King" />
            </NavLink>
            <div className="mr">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {activePage}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {options.map((item, index) => (
                    <Dropdown.Item
                      onClick={() => setActivePage(item.label)}
                      key={index}
                    >
                      <NavLink to={item.route}>{item.label}</NavLink>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <>
                <MetaMask />
              </>
            </div>
            <div className="leftSidebar">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
};

export default NavMobile;
