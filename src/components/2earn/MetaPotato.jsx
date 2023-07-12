import { MetaPartsContainer } from "./PlayStyle";
import cardKingImg from "../../assets/images/metapotato/card-king-img.svg";
import shareImg from "../../assets/images/metapotato/share.png";
import { useSelector } from "react-redux";
import Parts from "./Parts";

// import copyIcon from "../../assets/images/metapotato/copyIcon.svg";

const MetaPotato = () => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const screenSize = window?.screen?.availWidth;

  return (
    <MetaPartsContainer
      cardDir={
        screenSize < 1024 || screenSize < 768 ? "space-between" : "start"
      }
      filterDir={
        screenSize < 1024 || screenSize < 768 ? "space-between" : "end"
      }
      // filterDir="end"
    >
      <div className="filter-parent-container">
        <div className="filter-btns">
          <span>Rarity Rank</span>
          <button>High</button>
          <button>Low</button>
        </div>
        <div className="filter-btns">
          <span>MetaScore</span>
          <button>High</button>
          <button>Low</button>
        </div>
      </div>
      <div className="meta-parts-container" style={{ gap: "10px" }}>
        <div className="meta-potato-card-wrapper">
          <div className="card-main-wrapper-container">
            <div className="card-main-wrapper">
              <div className="card-img-item">
                <div className="card-frame">
                  {!metaMaskAddress?.metaMaskAddress ? (
                    ""
                  ) : (
                    <img src={cardKingImg} alt="card" />
                  )}
                </div>

                <div className="card-details-item">
                  <div className="card-title">
                    <span>MetaPotato</span>
                    <span>
                      {!metaMaskAddress?.metaMaskAddress ? "#0" : "#0000001"}
                    </span>
                  </div>
                  <div className="card-rarity">
                    <span>Rarity Rank</span>
                    <span>
                      {!metaMaskAddress?.metaMaskAddress ? "#" : "#00000001"}
                    </span>
                  </div>
                  <div className="card-rarity">
                    <span>MetaScore</span>
                    <span>
                      {!metaMaskAddress?.metaMaskAddress ? "0" : "420"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-btns">
                <button className="share">
                  <img src={shareImg} alt="share" />
                </button>
                <button className="send">Send</button>
                <button className="sell">Sell</button>
                <button className="burn">Burn 🔥</button>
              </div>
              <Parts
                loaderColor="none"
                hideFilter={true}
                hideMenuItems={!metaMaskAddress?.metaMaskAddress ? false : true}
                boxHeight="160px"
                itemTableHei="145px"
              />
            </div>
            {/* {(change.Bridge && (
                <div className="rectangle">
                  <span></span>
                  <button>Bridge</button>
                </div>
              )) ||
                (change.Share && (
                  <div className="rectangle">
                    <span></span>
                    <button>Share</button>
                  </div>
                )) || */}
            {/* {(change.Sell && (
              <div className="rectangle">
                <span>
                  Your NFT will be transfered to your wallet and you will be
                  redirected to Opensea <img src={copyIcon} alt="copyIcon" />
                </span>
                <button>Sell</button>
              </div>
            )) ||
              (change.Transfer && (
                <div className="rectangle">
                  <span>
                    0xdfe5e1064cEcDFeC111c3bDe9FD0A645f980e562{" "}
                    <img src={copyIcon} alt="copyIcon" />
                  </span>
                  <button>Transfer</button>
                </div>
              )) ||
              (change.Burn && (
                <div className="rectangle">
                  <span>
                    Click Confirm To Continue Your NFT Will Be Burned!🔥{" "}
                    <img src={copyIcon} alt="copyIcon" />
                  </span>
                  <button>Burn</button>
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </MetaPartsContainer>
  );
};

export default MetaPotato;
