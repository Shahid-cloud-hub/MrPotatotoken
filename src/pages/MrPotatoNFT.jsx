import React from "react";
import MrPotatoNFTWinSpinner from "../components/MintSpin/MrPotatoNFTWinSpinner";
import { MintSpinContainer } from "../components/MintSpin/MintStyle";

const MrPotatoNFT = () => {
  const screenSize = window?.screen?.availWidth;
  return (
    <MintSpinContainer>
      <div className="mrPotato-win-spinner">
        <MrPotatoNFTWinSpinner className="spinerStyle" />
        {screenSize > 510 && (
          <div className="jackpot-status">
            <span>JACKPOT</span>
            <span style={{ fontSize: "72px", lineHeight: "82%" }}>$1578</span>
          </div>
        )}
      </div>
    </MintSpinContainer>
  );
};

export default MrPotatoNFT;
