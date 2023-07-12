import { PlayContainer } from "./PlayStyle";
import SEO from "../SEO/SEO";

import cart from "../../assets/images/metapotato/cart-icon.png";
import cartActive from "../../assets/images/metapotato/cart-icon-active.png";
import potato from "../../assets/images/metapotato/potato-mini.svg";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Play2Earn = () => {
  const [change, setChange] = useState({
    Factory: true,
    Minted: false,
    Market: false,
    Swap: false,
    PLAY: false,
  });

  return (
    <>
      <SEO
        title="Earn, Trade and Collect NFTs on Mr Potato NFT Marketplace"
        description="Collect, trade and earn NFTs on Mr Potato NFT marketplace. Enjoy a secure, user-friendly NFT trading experience and discover rare digital assets to add to your collection. Join us today and unlock the world of NFTs!"
      />
      <PlayContainer>
        <div className="meta-potato-wrapper">
          <div className="potato-land-tabs">
            <div className="tabs-btn">
              <NavLink to="nft">
                <button
                  className={
                    change.Factory ? "myland-active" : "myland-de-active"
                  }
                  onClick={() =>
                    setChange((prev) => ({
                      ...prev,
                      Factory: true,
                      Minted: false,
                      Metapart: false,
                      Market: false,
                      Swap: false,
                      PLAY: false,
                    }))
                  }
                >
                  <img src={potato} alt="potato" /> NFT
                </button>
              </NavLink>

              <NavLink to="minted">
                <button
                  className={
                    change.Minted ? "myland-active" : "myland-de-active"
                  }
                  onClick={() =>
                    setChange((prev) => ({
                      ...prev,
                      Factory: false,
                      Minted: true,
                      Metapart: false,
                      Market: false,
                      Swap: false,
                      PLAY: false,
                    }))
                  }
                >
                  <img src={potato} alt="potato" /> Minted
                </button>
              </NavLink>
              <NavLink to="market">
                <button
                  className={
                    change.Market ? "myland-active" : "myland-de-active"
                  }
                  onClick={() =>
                    setChange((prev) => ({
                      ...prev,
                      Factory: false,
                      Minted: false,
                      Metapart: false,
                      Market: true,
                      Swap: false,
                      PLAY: false,
                    }))
                  }
                >
                  {change.Market ? (
                    <>
                      <img src={cartActive} alt="cartActive" /> Market
                    </>
                  ) : (
                    <>
                      <img src={cart} alt="cart" /> Market
                    </>
                  )}
                </button>
              </NavLink>
              <NavLink to="swap">
                <button
                  className={change.Swap ? "myland-active" : "myland-de-active"}
                  onClick={() =>
                    setChange((prev) => ({
                      ...prev,
                      Factory: false,
                      Minted: false,
                      Metapart: false,
                      Market: false,
                      Swap: true,
                      PLAY: false,
                    }))
                  }
                >
                  Swap
                </button>
              </NavLink>
              <a>
                <button
                  className={change.PLAY ? "myland-active" : "myland-de-active"}
                  onClick={() =>
                    setChange((prev) => ({
                      ...prev,
                      Factory: false,
                      Minted: false,
                      Metapart: false,
                      Market: false,
                      Swap: false,
                      PLAY: true,
                    }))
                  }
                >
                  PLAY
                </button>
              </a>
            </div>
          </div>
        </div>
        <Outlet />
      </PlayContainer>
    </>
  );
};

export default Play2Earn;
