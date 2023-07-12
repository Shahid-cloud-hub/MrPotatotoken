import React from "react";
import { LiqConatiner } from "./MLiquidity";
import PotatoImg from "../../../images/liquidity/liquidity_5.webp";
import SmallKing from "../../../images/liquidity/liquidity_2.webp";
import FromToImg from "../../../images/liquidity/from-to.webp";

const MobileLiquidity = () => {
  return (
    <LiqConatiner>
      <div className="space-background ">
        <div className="container">
          <div className="bg-grident-up">
            <div className="text-img">
              <span>mr potato token</span>
              <div>
                <img src={PotatoImg} alt="Potato Token" />
              </div>
            </div>
            <div className="info-item">
              <span>Swap From:</span>
              <span>Potato Token (ERC720)</span>
            </div>
            <label>
              <span>Amount:</span>
              <input type="number" placeholder="0" />
            </label>
          </div>
          <div>
            <img src={FromToImg} alt="From to" />
          </div>
          <div className="bg-grident-down">
            <div className="text-img">
              <span>mr potato nft</span>
              <div>
                <img src={SmallKing} alt="Potato Token" />
              </div>
            </div>
            <div className="info-item">
              <span>Swap From:</span>
              <span>Mr Potato NFT (ERC721)</span>
            </div>
            <label>
              <span>Amount:</span>
              <input type="number" placeholder="0" />
            </label>
          </div>
          <button>Connect Wallet</button>
        </div>
      </div>
    </LiqConatiner>
  );
};

export default MobileLiquidity;
