import { useState } from "react";
import { MPMobileContainer } from "./MetaPotato.style";
import dragPotato from "../../../assets/images/metapotato/dragPotato.png";
import Mr from "../../../assets/images/metapotato/Mobile/Mr.png";
import clock from "../../../assets/images/metapotato/Mobile/clock.png";
import dd from "../../../assets/images/metapotato/Mobile/dd.png";
import scroll from "../../../assets/images/metapotato/Mobile/scroll.png";
import up from "../../../assets/images/metapotato/Mobile/up.png";
import DD from "./DD";

const MetaPotatoMob = () => {
  const [openDD, setOpenDD] = useState(false);
  return (
    <MPMobileContainer>
      <div className="black-bg">
        <div className="header-section">
          <div className="menu">
            <span onClick={() => setOpenDD(!openDD)}>All</span>
            <div onClick={() => setOpenDD(!openDD)}>
              <img src={dd} />
            </div>
            {openDD && <DD openDD={openDD}/>}
          </div>
          <button className="mint">
            <span>Mint</span>
          </button>
        </div>
        <div className="dragPotato">
          <img src={dragPotato} alt="" />
        </div>
        <div className="airdrop-metapoints">
          <div className="airdrop-sec">
            <img src={Mr} alt="Mr" />
            <div className="airdrop">
              <h5>Airdrop</h5>
              <div>
                <img src={clock} alt="clock" />
                <span>12:00:00</span>
              </div>
            </div>
          </div>
          <div className="metapoints-box">
            <h5>Metapoint</h5>
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="golden-bg">
        <div className="potato-parts">
          <div className="part-card">
            <div className="card-border"></div>
            <div className="two-btn">
              <div className="btn-one">
                <h5>Send</h5>
              </div>
              <div className="btn-two">
                <img src={up} alt="up" />
              </div>
            </div>
            <div className="one-btn">
              <h5>SELL 🔥</h5>
            </div>
          </div>
          <div className="part-card">
            <div className="card-border"></div>
            <div className="two-btn">
              <div className="btn-one">
                <h5>Send</h5>
              </div>
              <div className="btn-two">
                <img src={up} alt="up" />
              </div>
            </div>
            <div className="one-btn">
              <h5>SELL 🔥</h5>
            </div>
          </div>
          <div className="part-card">
            <div className="card-border"></div>
            <div className="two-btn">
              <div className="btn-one">
                <h5>Send</h5>
              </div>
              <div className="btn-two">
                <img src={up} alt="up" />
              </div>
            </div>
            <div className="one-btn">
              <h5>SELL 🔥</h5>
            </div>
          </div>
          <img
            src={scroll}
            alt="scroll"
            style={{ position: "absolute", top: "0px", right: "-15px" }}
          />
        </div>

        <div className="drag-drop-heading">
          <h5>Drag & Drop to Build</h5>
        </div>
      </div>
    </MPMobileContainer>
  );
};

export default MetaPotatoMob;
