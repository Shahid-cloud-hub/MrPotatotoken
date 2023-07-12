import AiDropDownFilter from "../SuparRare/AiDropDownFilter";
import { MarketFilter } from "./MarketFilters.style";
import PinkSale from "../../assets/images/supar-rare/pinkswap.svg";
import { useState } from "react";

const MarketFilters = () => {
  const [active, setActive] = useState({
    all: true,
    lp: false,
    pinkSale: false,
  });

  return (
    <MarketFilter>
      <div className="market-flter-wrapper">
        <button
          className={active.all ? "active-button" : "de-active-botton"}
          onClick={() =>
            setActive((prev) => ({
              ...prev,
              all: true,
              lp: false,
              pinkSale: false,
            }))
          }
        >
          All
        </button>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "Rank", value: "all", defaultValue: true },
              { name: "High", value: "high" },
              { name: "Low", value: "low" },
            ]}
            onChange={() => {
              // console.log(e.target.value);
            }}
          />
        </div>
        <button
          className={active.lp ? "active-button" : "de-active-botton"}
          onClick={() =>
            setActive((prev) => ({
              ...prev,
              all: false,
              lp: true,
              pinkSale: false,
            }))
          }
        >
          Lp
        </button>
        <button
          className={active.pinkSale ? "active-button" : "de-active-botton"}
          onClick={() =>
            setActive((prev) => ({
              ...prev,
              all: false,
              lp: false,
              pinkSale: true,
            }))
          }
        >
          <span>Pinksales</span>
          <img src={PinkSale} alt="Pinksales" />
        </button>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "24h", value: "all", defaultValue: true },
              { name: "High", value: "high" },
              { name: "Low", value: "low" },
            ]}
            onChange={() => {
              // console.log(e.target.value);
            }}
          />
        </div>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "Holders", value: "all", defaultValue: true },
              { name: "High", value: "high" },
              { name: "Low", value: "low" },
            ]}
            onChange={() => {
              // console.log(e.target.value);
            }}
          />
        </div>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "MCap", value: "all", defaultValue: true },
              { name: "High", value: "high" },
              { name: "Low", value: "low" },
            ]}
            onChange={() => {
              // console.log(e.target.value);
            }}
          />
        </div>
        <div className="parent-wrapper">
          <AiDropDownFilter
            options={[
              { name: "DEX Trades", value: "all", defaultValue: true },
              { name: "High", value: "high" },
              { name: "Low", value: "low" },
            ]}
            onChange={() => {
              // console.log(e.target.value);
            }}
          />
        </div>
      </div>
    </MarketFilter>
  );
};

export default MarketFilters;
