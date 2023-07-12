import React, { useEffect } from "react";
import { MainContainer } from "./RoadMapStyle";
import RoadMapImg from "../../assets/images/roadmap/RoadMapLogo.webp";
import SEO from "../SEO/SEO";

const RoadMap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screenSize = window?.screen?.availWidth;

  return (
    <>
      <SEO
        title="Discover the Roadmap for Mr Potato NFT's NFT Marketplace"
        description="Explore the roadmap of Mr Potato NFT. Discover upcoming features and improvements that will help you make the most of digital asset collecting. With Mr Potato NFT, you can access the newest and most innovative NFTs. Unlock the potential of digital asset collecting with Mr Potato NFT."
      />

      <MainContainer>
        <div className="container">
          <div className="roadMap-background">
            <div>
              <img src={RoadMapImg} alt="Road Map Logo" />
            </div>
            <div className="road-map-main-parent">
              <div className="road-map-left">
                <div className="q-section_1">
                  <span className="Q1">Q3 2022</span>
                  <div className="l-box-item-1">
                    <div className="Q-box-1">
                      <ul>
                        <li>Develop Potato Population Metaverse concept</li>
                        <li>
                          Design 728 Unique Potato Population Metaverse
                          Attributes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {screenSize <= 1080 && (
                  <div className="q-section_1">
                    <span className="Q1 title">Q4 2022</span>
                    <div className="l-box-item-1">
                      <div className="Q-box-1">
                        <ul style={{ maxWidth: "480px" }}>
                          <li>Design UX and NFT Liquidity Bridge contract</li>
                          <li>Design UX and Lucky Win Spin contract</li>
                          <li>Design UX and NFT Bridge contract</li>
                          <li>Design Ux and Mr Potato NFT Staking contract</li>
                          <li>
                            Design UX and MetaPotato GameFi Play2Earn Game
                            contract
                          </li>
                          <li>Design Mobile App</li>
                          <li>Design Potato Token Staking contract</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <div className="q-section_1">
                  <span className="Q1">Q1 2023</span>
                  <div className="l-box-item-1">
                    <div className="Q-box-1">
                      <ul style={{ maxWidth: "400px" }}>
                        <li>Mr Potato Token smart contract on ETH</li>
                        <li>NFT smart contract on BSC </li>
                        <li>Develop Liquidity Bridge smart contract</li>
                        <li>
                          Develop MetaPotato GameFi Play2Earn Game P2C smart
                          contract
                        </li>
                        <li>Develop Lucky Win Spin smart contract</li>
                        <li>MrPotatoNFT.com website for PC/Tablet/Mobile</li>
                        <li>Website SEO</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {screenSize <= 1080 && (
                  <div className="q-section_1">
                    <span className="Q1 title">Q2 2023</span>
                    <div className="l-box-item-1">
                      <div className="Q-box-1">
                        <ul style={{ maxWidth: "400px" }}>
                          <li>Launch of the Mr Potato project</li>
                          <li>Mr Potato Token smart contract renounced</li>
                          <li>Telegram community marketing</li>
                          <li>Discord community marketing</li>
                          <li>Twitter community marketing</li>
                          <li>Mr Potato Token DEX liquidity pool</li>
                          <li>Mr Potato Token Tier 1 CEX listing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <div className="q-section_1">
                  <span className="Q1">Q3 2023</span>
                  <div className="l-box-item-1">
                    <div className="Q-box-1">
                      <ul style={{ maxWidth: "400px" }}>
                        <li>Mr Potato Token Tier 1 CEX listing</li>
                        <li>MetaPotato MetaParts ERC1155</li>
                        <li>MetaPotato Marketplace launch</li>
                        <li>NFT Bridge multi chain smart contract</li>
                        <li>Play2 earn Game Design</li>
                        <li>Play2 earn Game Launch</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="road-map-right">
                {screenSize >= 1080 && (
                  <div className="q-section_1 flex-end">
                    <span className="Q1 title">Q4 2022</span>
                    <div className="l-box-item-1">
                      <div className="Q-box-1">
                        <ul style={{ maxWidth: "480px" }}>
                          <li>Design UX and NFT Liquidity Bridge contract</li>
                          <li>Design UX and Lucky Win Spin contract</li>
                          <li>Design UX and NFT Bridge contract</li>
                          <li>Design Ux and Mr Potato NFT Staking contract</li>
                          <li>
                            Design UX and MetaPotato GameFi Play2Earn Game
                            contract
                          </li>
                          <li>Design Mobile App</li>
                          <li>Design Potato Token Staking contract</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {screenSize >= 1080 && (
                  <div className="q-section_1">
                    <span className="Q1 title">Q2 2023</span>
                    <div className="l-box-item-1">
                      <div className="Q-box-1">
                        <ul style={{ maxWidth: "400px" }}>
                          <li>Launch of the Mr Potato project</li>
                          <li>Mr Potato Token smart contract renounced</li>
                          <li>Telegram community marketing</li>
                          <li>Discord community marketing</li>
                          <li>Twitter community marketing</li>
                          <li>Mr Potato Token DEX liquidity pool</li>
                          <li>Mr Potato Token Tier 1 CEX listing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="q-section_1">
              <span className="Q1">Q3 2022</span>
              <div className="l-box-item-1">
                <div className="Q-box-1">
                  <ul>
                    <li>Develop Potato Population Metaverse concept</li>
                    <li>
                      Design 728 Unique Potato Population Metaverse Attributes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="q-section_1 flex-end">
              <span className="Q1 title">Q4 2022</span>
              <div className="l-box-item-1">
                <div className="Q-box-1">
                  <ul style={{ maxWidth: "480px" }}>
                    <li>Design UX and NFT Liquidity Bridge contract</li>
                    <li>Design UX and Lucky Win Spin contract</li>
                    <li>Design UX and NFT Bridge contract</li>
                    <li>Design Ux and Mr Potato NFT Staking contract</li>
                    <li>
                      Design UX and MetaPotato GameFi Play2Earn Game contract
                    </li>
                    <li>Design Mobile App</li>
                    <li>Design Potato Token Staking contract</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="q-section_1">
              <span className="Q1">Q1 2023</span>
              <div className="l-box-item-1">
                <div className="Q-box-1">
                  <ul style={{ maxWidth: "400px" }}>
                    <li>Mr Potato Token smart contract on ETH</li>
                    <li>NFT smart contract on BSC </li>
                    <li>Develop Liquidity Bridge smart contract</li>
                    <li>
                      Develop MetaPotato GameFi Play2Earn Game P2C smart
                      contract
                    </li>
                    <li>Develop Lucky Win Spin smart contract</li>
                    <li>MrPotatoNFT.com website for PC/Tablet/Mobile</li>
                    <li>Website SEO</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="q-section_1 flex-end">
              <span className="Q1 title">Q2 2023</span>
              <div className="l-box-item-1">
                <div className="Q-box-1">
                  <ul style={{ maxWidth: "400px" }}>
                    <li>Launch of the Mr Potato project</li>
                    <li>Mr Potato Token smart contract renounced</li>
                    <li>Telegram community marketing</li>
                    <li>Discord community marketing</li>
                    <li>Twitter community marketing</li>
                    <li>Mr Potato Token DEX liquidity pool</li>
                    <li>Mr Potato Token Tier 1 CEX listing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="q-section_1">
              <span className="Q1">Q3 2023</span>
              <div className="l-box-item-1">
                <div className="Q-box-1">
                  <ul style={{ maxWidth: "400px" }}>
                    <li>Mr Potato Token Tier 1 CEX listing</li>
                    <li>MetaPotato MetaParts ERC1155</li>
                    <li>MetaPotato Marketplace launch</li>
                    <li>NFT Bridge multi chain smart contract</li>
                    <li>Play2 earn Game Design</li>
                    <li>Play2 earn Game Launch</li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default RoadMap;
