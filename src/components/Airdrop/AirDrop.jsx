import React, { useEffect } from "react";
import { AirdropWrapper } from "./Airdrop.styles";
import { Helmet } from "react-helmet";
import SEO from "../SEO/SEO";

const AirDrop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Get Free NFTs on Mr Potato NFT Marketplace"
        description="Join the Mr Potato NFT Marketplace and get free NFTs by registering for our free airdrop. Access a wide range of exclusive digital collectibles and benefit from the growing NFT ecosystem. Unlock exclusive rewards, unlock achievements and find hidden treasures with Mr Potato NFT."
      />
      <AirdropWrapper>
        <div className="container">
          <div className="page">
            <div className="wrapper">
              <div className="content">
                <div id="62588-zm8beipd" className="sw_container"></div>
                <Helmet>
                  <script
                    type="text/javascript"
                    src="https://sweepwidget.com/w/j/w_init.js"
                  ></script>
                </Helmet>
              </div>
            </div>
          </div>
        </div>
      </AirdropWrapper>
    </>
  );
};

export default AirDrop;
