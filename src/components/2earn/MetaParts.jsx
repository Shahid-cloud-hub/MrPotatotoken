import React from "react";
import { useState } from "react";
import { Data } from "../../data/FaqsData";
import FilterBtn from "./FilterBtn";
import { MetaPartsContainer } from "./PlayStyle";
import { useSelector } from "react-redux";

import shoes from "../../assets/images/metapotato/shoes.svg";
import flowers from "../../assets/images/metapotato/flowers.svg";
import glasses from "../../assets/images/metapotato/glasses.svg";
import gun from "../../assets/images/metapotato/gun.svg";
import adidas from "../../assets/images/metapotato/adidas-cap.svg";
import gucci from "../../assets/images/metapotato/gucci-cap.svg";
import sneakers from "../../assets/images/metapotato/sneakers.svg";
import sword from "../../assets/images/metapotato/sword.svg";
import uploadIcon from "../../assets/images/metapotato/upload-icon.svg";

const MetaParts = () => {
  const [item, setItem] = useState(Data);
  const [active, setActive] = useState({
    high: "active",
    low: "",
  });
  const metaMaskAddress = useSelector((state) => state.wallet);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItems = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const screenSize = window?.screen?.availWidth;

  return (
    <MetaPartsContainer filterDir={screenSize < 1024 ? "space-between" : "end"}>
      <div className="meta-parts-container">
        <FilterBtn
          filterItem={filterItems}
          setItem={setItem}
          setCategoryId
          menuItems={menuItems}
        />
        <div className="Metapoint">
          {screenSize < 1024 && (
            <button
              className="wallet-connect-btn"
              style={
                screenSize > 400
                  ? { padding: "8px 30px" }
                  : { padding: "5px 12px" }
              }
            >
              {!metaMaskAddress.metaMaskAddress ? "Connect" : "Disconnect"}
            </button>
          )}
          <div className="filter-btns">
            <span>MetaPoints</span>
            <button
              onClick={() =>
                setActive((prev) => ({
                  ...prev,
                  high: "active",
                  low: "",
                }))
              }
              className={`${active.high}`}
            >
              High
            </button>
            <button
              onClick={() =>
                setActive((prev) => ({
                  ...prev,
                  high: "",
                  low: "active",
                }))
              }
              className={`${active.low}`}
            >
              Low
            </button>
          </div>
        </div>
        {metaMaskAddress?.metaMaskAddress && (
          <div className="all-items">
            <div className="item-1">
              <img src={shoes} alt="shoes" />
              <div className="box">
                <button>Buy</button>
                <button id="upload">
                  <img src={uploadIcon} alt="uploadIcon" />
                </button>
              </div>
            </div>
            <div className="item-1">
              <img src={gun} alt="gun" />
              <div className="box">
                <button>Buy</button>
                <button id="upload">
                  <img src={uploadIcon} alt="uploadIcon" />
                </button>
              </div>
            </div>
            <div className="item-1">
              <img src={sneakers} alt="sneakers" />
              <div className="box">
                <button>Buy</button>
                <button id="upload">
                  <img src={uploadIcon} alt="uploadIcon" />
                </button>
              </div>
            </div>
            <div className="item-1">
              <img src={glasses} alt="glasses" />
              <div className="box">
                <button>Buy</button>
                <button id="upload">
                  <img src={uploadIcon} alt="uploadIcon" />
                </button>
              </div>
            </div>
            <div className="item-1">
              <img src={gucci} alt="gucci" />
              <div className="box">
                <button>Buy</button>
                <button id="upload">
                  <img src={uploadIcon} alt="uploadIcon" />
                </button>
              </div>
            </div>
            <div className="item-1">
              <img src={sword} alt="sword" />
              <div className="box">
                <button>Buy</button>
                <button id="upload">
                  <img src={uploadIcon} alt="uploadIcon" />
                </button>
              </div>
            </div>
            <div className="item-1">
              <img src={adidas} alt="adidas" />
              <div className="box">
                <button>Buy</button>
                <button id="upload">
                  <img src={uploadIcon} alt="uploadIcon" />
                </button>
              </div>
            </div>
            <div className="item-1">
              <img src={flowers} alt="flowers" />
              <div className="box">
                <button>Buy</button>
                <button id="upload">
                  <img src={uploadIcon} alt="uploadIcon" />
                </button>
              </div>
            </div>
          </div>
        )}
        {/* {item.map((Val) => {
          return (
            <div
              className="col-md-4 col-sm-6 card my-3 py-3 border-0"
              key={Val.id}
              style={{ background: "black" }}
            >
              <div className="card-img-top text-center">
                <img src={Val.img} alt={Val.title} className="photo w-75" />
              </div>
              <div className="card-body">
                <div className="card-title fw-bold fs-4">
                  {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                  {Val.price}
                </div>
                <div className="card-text">{Val.desc}</div>
              </div>
            </div>
          );
        })} */}
      </div>
    </MetaPartsContainer>
  );
};

export default MetaParts;
