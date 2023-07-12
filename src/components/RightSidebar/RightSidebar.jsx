import React from "react";
import { ContainerSidebar } from "./RightSidebarStyle";

import MenuIcon from "../../assets/images/humburger/menu.svg";
import CloseMenuIcon from "../../assets/images/humburger/close-menu.svg";

// import Icon_1 from "../../assets/images/sidebar-social-icons/social_1.webp";
// import Icon_2 from "../../assets/images/sidebar-social-icons/social_2.webp";
import Icon_3 from "../../assets/images/sidebar-social-icons/social_3.webp";
import Icon_4 from "../../assets/images/sidebar-social-icons/social_4.webp";
import Icon_5 from "../../assets/images/sidebar-social-icons/social_5.webp";
import Icon_6 from "../../assets/images/sidebar-social-icons/social_6.webp";
import Icon_7 from "../../assets/images/sidebar-social-icons/social_7.webp";
import Icon_8 from "../../assets/images/sidebar-social-icons/social_8.svg";
import Youtube from "../../assets/images/sidebar-social-icons/Youtube.png";
import Github from "../../assets/images/sidebar-social-icons/Github.png";
import LinkedIn from "../../assets/images/sidebar-social-icons/linkedIn.png";
import Instagram from "../../assets/images/sidebar-social-icons/Instagram.png";
import Tiktok from "../../assets/images/sidebar-social-icons/Tiktok.png";
import Medium from "../../assets/images/sidebar-social-icons/medium.png";
import BitcoinTalk from "../../assets/images/sidebar-social-icons/bitcoin-talk.png";

import { NavLink } from "react-router-dom";

const RightSidebar = () => {
  const OpenNav = () => {
    let element = document.getElementById("mySidenav");
    // setActivated(true);
    element.classList.add("activated");
  };

  const CloseNav = () => {
    let element = document.getElementById("mySidenav");
    // setActivated(false);
    element.classList.remove("activated");
  };

  return (
    <ContainerSidebar>
      <div className="OpenNavBar" onClick={OpenNav}>
        <img src={MenuIcon} alt="Menu" />
      </div>

      <div id="mySidenav" className="sidenav">
        <div href="/" className="closebtn" onClick={CloseNav}>
          <img src={CloseMenuIcon} alt="Close Menu" />
        </div>
        <div className="menu">
          {/* <div className="menu-item">
            <div>
              {!metaMaskAddress.metaMaskAddress ? (
                <button
                  className="de-activated-btn"
                  onClick={() => dispatch(metaMaskConnection())}
                >
                  Connect Wallet
                </button>
              ) : (
                <button
                  className="activated-btn"
                  onClick={() => dispatch(metaMaskDisconnect())}
                >
                  Disconnect Wallet
                </button>
              )}
            </div>

            <div className="dropDown-Menu">
              <Dropdown className="select-language">
                <Dropdown.Toggle variant="select-language" id="dropdown-basic">
                  <img src={ukflagIcon} alt="" />
                  <img src={DownArrow} alt="" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <img src={russiaflagIcon} alt="" />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <img src={southkoreaflagIcon} alt="" />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <img src={chinaflagIcon} alt="" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div> */}
          {/* <hr /> */}
          <div className="NavLink-item">
            <NavLink to="/white-paper">
              <li>WhitePaper</li>
            </NavLink>
            {/* <NavLink to="/HowItWorks">
              <li>How it works</li>
            </NavLink> */}
            <NavLink to="/bug-bounty">
              <li>Bug Bounty</li>
            </NavLink>
            <NavLink to="/privacy-policy">
              <li>Privacy Policy</li>
            </NavLink>
            <NavLink to="/terms-conditions">
              <li>Terms and Conditions</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
            <NavLink to="/investor-deck">
              <li>Investor Deck</li>
            </NavLink>
          </div>
          <hr />
          <div className="social-icons">
            {/* <a>
              <img src={Icon_1} alt="FaceBook" />
            </a>
            <a>
              <img src={Icon_2} alt="Instagram" />
            </a> */}

            <a
              href="https://reddit.com/r/MrPotatoToken"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Icon_6} alt="Reddit" width={45} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC0CRfA620eeYmGsXCmdNBIw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Youtube} alt="Youtube" width={45} />
            </a>

            <a href="https://t.me/MrPotatoFam" target="_blank" rel="noreferrer">
              <img src={Icon_3} alt="Telegram" width={45} />
            </a>
            <a
              href="https://discord.gg/mrpotatotoken"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Icon_4} alt="Discord" width={45} />
            </a>

            <a
              href="https://twitter.com/Mrpotatotoken"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Icon_5} alt="Twitter" width={45} />
            </a>

            <a
              href="https://medium.com/@mrpotatotoken"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Icon_7}
                alt="Medium"
                width={32}
                className="medium-icon"
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@mrpotatotoken.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Icon_8}
                alt="Medium"
                width={32}
                className="medium-icon"
              />
            </a>
            <a
              href="https://github.com/MrPotatoToken/MrPotatotoken"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Github}
                alt="Github"
                width={35}
                className="medium-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/mr-potato-nft/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                width={35}
                className="medium-icon"
              />
            </a>
            <a
              href="https://bitcointalk.org/index.php?topic=5454710.0"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={BitcoinTalk}
                alt="BitcoinTalk"
                width={35}
                className="BitcoinTalk-icon"
                style={{ transform: "translate(4px, -2px)" }}
              />
            </a>
            <a
              href="https://www.instagram.com/mrpotatonfts/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
                width={35}
                className="medium-icon"
                style={{ transform: "translate(-1px, -2px)" }}
              />
            </a>
            <a
              href="https://www.tiktok.com/@mrpotatotoken"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Tiktok}
                alt="Tiktok"
                width={35}
                className="medium-icon"
                style={{ transform: "translate(-3px, -2px)" }}
              />
            </a>
            <a>
              <img
                src={Medium}
                alt="Medium"
                width={32}
                className="medium-icon"
                style={{ transform: "translate(-4px, -3px)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </ContainerSidebar>
  );
};

export default RightSidebar;
