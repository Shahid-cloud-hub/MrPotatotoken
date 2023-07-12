import React, { useContext, useMemo } from "react";
import { Carousel } from "../Carousel";
import useBreakpoint from "hooks/useBreakpoints";
import IdCardV3 from "../idcard-v3";
import LogoKing from "../../images/logoKing.svg";
import ConnectBtn from "../ConnectWalletBtn/ConnectWalletBtn";
import Wheelofprize from "../Wheelofprize";
import IdCardV4Mobile from "../PlayCard/IdcardV4MobileVersion";
import { MyItem } from "../PlayCard/PlayCard";
import { bannerData } from "bannerData";
import { CardV4_data } from "./CarouselData";
import { Item, Items } from "./Carousel.styles";
import { carouselData } from "data/carouselData";
import { Context } from "../../Context";
import Icon_3 from "../../images/sidebar-social-icons/social_3.webp";
import Icon_4 from "../../images/sidebar-social-icons/social_4.webp";
import StylishButton from "components/ConnectWalletBtn/StylishButton";

const MainBanner = () => {
  const { isTablet, isMobile, isDesktop, isSmallMobile } = useBreakpoint();

  const { items } = useContext(Context);

  const slider = useMemo(
    () => (
      <Carousel
        slides={carouselData.map((item, index) => (
          <div key={index}>
            <IdCardV3
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
    <>
      {isDesktop && (
        <Item className="banner">
          <div className="container">
            <div className="banner-content-wrapper">
              <div className="Banner-main-Parent">
                <div className="social-icons">
                  <div>
                    <img src={Icon_3} alt="Telegram" />
                  </div>
                  <div>
                    <img src={Icon_4} alt="Discord" />
                  </div>
                </div>
                <Items>
                  <Wheelofprize />
                </Items>
                <div className="carousel-stuff">
                  {isDesktop && (
                    <>
                      {slider}
                      <MyItem abs="relative">
                        <div className="Win--Harvested">
                          <div className="Win--Onchain">
                            <div className="gInput">
                              <div
                                className="spread"
                                style={{ display: "flex", gap: "7px" }}
                              >
                                <span className="amountFigure">Amount:</span>
                                <span>0</span>
                              </div>
                              <input type="text" />
                            </div>
                            {/* <button className="deadbtn">
                              <span>MINT</span>{" "}
                              <img src={LogoKing} alt="Logo King" />
                            </button> */}
                            <StylishButton />
                          </div>
                        </div>
                      </MyItem>
                    </>
                  )}
                </div>
                <div className="CardV4-Main">
                  {(isMobile || isTablet || isSmallMobile) && (
                    <div className="CardV5Container">
                      {CardV4_data.map((item, index) => (
                        <IdCardV4Mobile
                          key={index}
                          title={item.title}
                          mainimage={item.mainimage}
                          imagebg={item.imagebg}
                          dollerEach={item.dollerEach}
                          selectQuantity={item.selectQuantity}
                          mintNFT={item.mintNFT}
                          taxAmount={item.taxAmount}
                          featureScore={item.featureScore}
                          speedScore={item.speedScore}
                          toolsScore={item.toolsScore}
                          gradeScore={item.gradeScore}
                          nftPowers_features_data={item.nftPowers_features.map(
                            (data) => data
                          )}
                        />
                      ))}
                    </div>
                  )}
                  {(isMobile || isTablet || isSmallMobile) && (
                    <div className="btn-container">
                      <ConnectBtn value="COLLECT NFT" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* {(isMobile || isTablet || isSmallMobile) && (
            <>
              {items?.check ? (
                <div style={{ maxWidth: "570px" }}>
                  {reduced?.map((value) => (
                    <img
                      src={value.mobilePotatotoken}
                      alt="Win1potato"
                      style={{ width: "100%" }}
                    />
                  ))}
                </div>
              ) : null}
            </>
          )} */}
        </Item>
      )}

      {/* Below all code is for Mobile Version */}
      {!isDesktop && (
        <Item className="banner">
          <div className="container">
            <div className="banner-content-wraper">
              {isDesktop && (
                <div className="carousel-holder">
                  <Carousel
                    slides={bannerData.map((item, index) => (
                      <div key={index}>
                        <IdCardV3
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
                          nftPowers_speed_data={item.nftPowers_speed.map(
                            (data) => data
                          )}
                          nftPowers_tools_data={item.nftPowers_tools.map(
                            (data) => data
                          )}
                        />
                      </div>
                    ))}
                    autoplay={true}
                    interval={5000}
                    arrows={false}
                  />
                </div>
              )}
              {/* {isDesktop && (
                <div className="CardV4Container">
                  {CardV4_data.map((item, index) => (
                    <IdCardV4
                      key={index}
                      title={item.title}
                      mainimage={item.mainimage}
                      imagebg={item.imagebg}
                      dollerEach={item.dollerEach}
                      selectQuantity={item.selectQuantity}
                      mintNFT={item.mintNFT}
                      taxAmount={item.taxAmount}
                      featureScore={item.featureScore}
                      speedScore={item.speedScore}
                      toolsScore={item.toolsScore}
                      gradeScore={item.gradeScore}
                      nftPowers_features_data={item.nftPowers_features.map(
                        (data) => data
                      )}
                    />
                  ))}
                </div>
              )} */}
              {/* {!items && (
                <MyItem abs="relative">
                  <div className="Win--Harvested">
                    <div className="Win--Onchain">
                      <>
                        <div className="lucky-btn">
                          <h2>LUCKY</h2>
                          <InfoBox />
                        </div>
                        <h2>WIN SPIN</h2>
                        <div className="ParagraphContainer">
                          <p>ONCHAIN</p> <h3>MINT $1.50</h3>
                        </div>
                      </>
                      {/* ) : (
                <div
                  style={{
                    fontFamily: "Poppins",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      color: "#21CD33",
                      fontSize: "62px",
                      fontWeight: "800",
                    }}
                  >
                    TRY
                  </span>
                  <span
                    style={{
                      color: "#BAA351",
                      fontSize: "62px",
                      fontWeight: "800",
                    }}
                  >
                    AGAIN
                  </span>
                </div>
                )}

                      <button className="deadbtn" onClick={() => setRun(true)}>
                        <span>PLAY</span> <img src={LogoKing} alt="Logo King" />
                      </button>
                    </div>
                  </div>
                </MyItem>
              )} */}
              {/* {items?.check && isDesktop ? (
                <div
                  style={{ maxWidth: "570px", transform: "translateY(40px)" }}
                >
                  {reduced?.map((value) => (
                    <img
                      src={value.PotatoToken}
                      alt="Win1potato"
                      style={{ width: "100%" }}
                    />
                  ))}
                </div>
              ) : null} */}
              <div className="CardV4-Main">
                {(isMobile || isTablet || isSmallMobile) && (
                  <div className="CardV5Container">
                    {CardV4_data.map((item, index) => (
                      <IdCardV4Mobile
                        key={index}
                        title={item.title}
                        mainimage={item.mainimage}
                        imagebg={item.imagebg}
                        dollerEach={item.dollerEach}
                        selectQuantity={item.selectQuantity}
                        mintNFT={item.mintNFT}
                        taxAmount={item.taxAmount}
                        featureScore={item.featureScore}
                        speedScore={item.speedScore}
                        toolsScore={item.toolsScore}
                        gradeScore={item.gradeScore}
                        nftPowers_features_data={item.nftPowers_features.map(
                          (data) => data
                        )}
                      />
                    ))}
                  </div>
                )}
                {(isMobile || isTablet || isSmallMobile) && (
                  <div className="btn-container">
                    <ConnectBtn value="COLLECT NFT" />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* {(isMobile || isTablet || isSmallMobile) && (
            <>
              {items?.check ? (
                <div style={{ maxWidth: "570px" }}>
                  {reduced?.map((value) => (
                    <img
                      src={value.mobilePotatotoken}
                      alt="Win1potato"
                      style={{ width: "100%" }}
                    />
                  ))}
                </div>
              ) : null}
            </>
          )} */}
          <Items>
            <Wheelofprize />
          </Items>
        </Item>
      )}
    </>
  );
};

export default MainBanner;
