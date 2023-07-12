import React from "react";
import { MintSpinContainer } from "../components/MintSpin/MintStyle";
import Wheelofprize from "../components/MintSpin/Wheelofprize";

const MetaPotatoToken = () => {
  const screenSize = window?.screen?.availWidth;

  return (
    <MintSpinContainer>
      <div className="mrPotato-win-spinner">
        <Wheelofprize className="spinerStyle" />
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

export default MetaPotatoToken;
