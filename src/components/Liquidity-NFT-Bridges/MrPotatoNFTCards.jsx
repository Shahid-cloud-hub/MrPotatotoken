import React from "react";
import { MrPotatoNFTCardsContainer } from "./LiquiStyle";
import MrComp from "../NFT/MrComp";

const MrPotatoNFTCards = () => {
  return (
    <div className="background">
      <MrPotatoNFTCardsContainer>
        <div className="NftWrapper">
          <MrComp />
        </div>
      </MrPotatoNFTCardsContainer>
    </div>
  );
};

export default MrPotatoNFTCards;
