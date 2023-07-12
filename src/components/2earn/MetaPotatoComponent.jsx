import { useState } from "react";
import { Data } from "../../data/FaqsData";
import dragPotato from "../../assets/images/metapotato/dragPotato.png";
// import clock from "../../assets/images/metapotato/clock.svg";
import FilterBtn from "./FilterBtn";
import uploadIcon from "../../assets/images/metapotato/upload-icon.svg";
import spins from "../../assets/images/metapotato/spins.png";
import points from "../../assets/images/metapotato/points.png";
import SELL from "../../assets/images/metapotato/SELL.png";
// import redNose from "../../assets/images/metapotato/redNose.svg";
// import Nose1 from "../../assets/images/metapotato/Nose1.svg";
// import Nose2 from "../../assets/images/metapotato/Nose2.svg";
// import Scroll from "../../assets/images/metapotato/Scroll.svg";
import airdrop from "../../assets/images/metapotato/airdrop.png";
import timer from "../../assets/images/metapotato/timer.png";
import { useSelector } from "react-redux";
import { PlayContainer } from "./PlayStyle";
import useBreakpoint from "../../hooks/useBreakpoints";
import MetaPotatoMob from "./MetaPotato/MetaPotatoMob";
// import MobileFilterBtn from "./MobileFilterBtn";

const MetaPotatoComponent = () => {
  const [setItem] = useState(Data);
  const { isDesktop, isSmallDesktop, isMobile, isSmallMobile } =
    useBreakpoint();
  const menuItems = [...new Set(Data?.map((Val) => Val.category))];

  const filterItems = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const [activeBox, setActiveBox] = useState(null);

  const handleClick = (boxNumber) => {
    setActiveBox(activeBox === boxNumber ? null : boxNumber);
  };

  const metaMaskAddress = useSelector((state) => state.wallet);

  return (
    <PlayContainer>
      <div className="loader-wrapper">
        <div className="filters">
          {(isDesktop || isSmallDesktop) && (
            <FilterBtn
              filterItem={filterItems}
              setItem={setItem}
              setCategoryId
              menuItems={menuItems}
            />
          )}
        </div>
        {isMobile || isSmallMobile ? (
          <MetaPotatoMob />
        ) : (
          <div className="body-metapotato">
            <div className="drag">
              <div className="metascore">
                <div className="mint">
                  <button id="mint-btn">Mint</button>
                </div>
              </div>
              <div className="potato-container">
                <img className="parent-img" src={dragPotato} alt="" />
              </div>
              <div className="points-sec">
                <div className="air-drop">
                  <div>
                    <img src={airdrop} alt="airdrop" />
                  </div>
                  <div className="airdrop-time">
                    <h1>Airdrop</h1>
                    <div className="time-wrapper">
                      <img src={timer} alt="timer" />
                      <p>12:00:00</p>
                    </div>
                  </div>
                </div>
                <div id="meta-score">
                  <span>Metapoints</span>
                  {metaMaskAddress?.metaMaskAddress ? (
                    <span>0</span>
                  ) : (
                    <span>0</span>
                  )}
                </div>
              </div>
            </div>
            <div className="metapoints">
              <div className="items-container">
                <div className="all-items">
                  <div className="item-1">
                    <div className="part-img"></div>
                    <div className="box">
                      <button>Swap</button>
                      <button id="upload">
                        <img src={uploadIcon} alt="uploadIcon" />
                      </button>
                    </div>
                    <div className="box1">
                      <button onClick={() => handleClick(1)}>
                        <div>
                          <img src={SELL} alt="SELL" />
                        </div>
                      </button>
                      {activeBox === 1 && (
                        <div className="dropdown-content">
                          <button id="dropdown">
                            <img src={points} alt="points" />
                          </button>
                          <button id="dropdown">
                            <img src={spins} alt="spins" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="item-1">
                    <div className="part-img"></div>
                    <div className="box">
                      <button>Swap</button>
                      <button id="upload">
                        <img src={uploadIcon} alt="uploadIcon" />
                      </button>
                    </div>
                    <div className="box1">
                      <button onClick={() => handleClick(2)}>
                        <div>
                          <img src={SELL} alt="SELL" />
                        </div>
                      </button>
                      {activeBox === 2 && (
                        <div className="dropdown-content">
                          <button id="dropdown">
                            <img src={points} alt="points" />
                          </button>
                          <button id="dropdown">
                            <img src={spins} alt="spins" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="item-1">
                    <div className="part-img"></div>
                    <div className="box">
                      <button>Swap</button>
                      <button id="upload">
                        <img src={uploadIcon} alt="uploadIcon" />
                      </button>
                    </div>
                    <div className="box1">
                      <button onClick={() => handleClick(3)}>
                        <div>
                          <img src={SELL} alt="SELL" />
                        </div>
                      </button>
                      {activeBox === 3 && (
                        <div className="dropdown-content">
                          <button id="dropdown">
                            <img src={points} alt="points" />
                          </button>
                          <button id="dropdown">
                            <img src={spins} alt="spins" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="drag-drop-heading">
                <h5>Drag & Drop to Build </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </PlayContainer>
  );
};

export default MetaPotatoComponent;
