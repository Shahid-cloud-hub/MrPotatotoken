import React from "react";
import { MintSpinContainer } from "../components/MintSpin/MintStyle";
import MetaPartsWinSpinner from "../components/MintSpin/MetaPartsWinSpinner";
import question from "../assets/images/NewHomePage/questionMark.png";

const MetaParts = () => {
  const screenSize = window?.screen?.availWidth;

  return (
    <MintSpinContainer>
      <div className="mrPotato-win-spinner">
        <MetaPartsWinSpinner className="spinerStyle" />
        {screenSize > 510 && (
          <div className="jackpot-status-potato">
            <img src={question} alt="question" />
          </div>
        )}
      </div>
    </MintSpinContainer>
  );
};

export default MetaParts;
