import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SEO from "../SEO/SEO";
import { MainContainer } from "./MerchandiseStyle";
import { productInfo_1 } from "./productInfo";
import Maintenance from "../Maintenance/Maintenance";

const MerchBanner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Shop for Unique NFT Merchandise at Mr Potato NFT"
        description="Find the perfect piece for your collection at Mr Potato NFT! Shop our exclusive range of Non-Fungible Tokens, including art, music and gaming assets. Shop now and start collecting unique digital assets today!"
      />

      <MainContainer>
        <div className="background">
          <div className="bannerImage">
            {/* <h2>MR POTATO MERCHANDISE SHOP</h2> */}
          </div>
          <div className="horizontal-row">
            <hr />
          </div>
          <div className="productContainer">
            <div className="prod-section">
              {productInfo_1.map((item, index) => (
                <div key={index} className="prod-item">
                  <NavLink to={{ pathname: "/product", state: item }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img src={item.img} alt="product" />
                    </div>
                  </NavLink>
                  <div className="prod-title">
                    <span>{item.title}</span>
                    <span>{item.product}</span>
                  </div>
                  <div className="prod-description">
                    <span>{item.gender}</span>
                    <span>{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default MerchBanner;
