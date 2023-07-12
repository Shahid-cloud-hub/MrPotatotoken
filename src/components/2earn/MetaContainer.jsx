import React from "react";
import { MetaContainer } from "./PlayStyle";
import FilterBtn from "./FilterBtn";
import Parts from "./Parts";
import { useSelector } from "react-redux";
import { Data } from "../../data/FaqsData";

const Meta = () => {
  // const metaMaskAddress = useSelector((state) => state.wallet);

  // const menuItems = [...new Set(Data.map((Val) => Val.category))];

  // const filterItems = (curcat) => {
  //   const newItem = Data.filter((newVal) => {
  //     return newVal.category === curcat;
  //   });
  // };
  return (
    <MetaContainer>
      {/* <div className="meta-parts-container">
        <FilterBtn filterItem={filterItems} menuItems={menuItems} />
      </div> */}
      <Parts
        show={true}
        maxWidth="1120px"
        minHeight="566px"
        dirStyle="flex-end"
        dirGap="10px"
        pd="25px"
        itemTableHei="566px"
        loaderColor="linear-gradient(1.09deg, #000000 1%, #594207 219.03%);"
        hideFilterItems={false}
        filterHide={true}
      />
    </MetaContainer>
  );
};

export default Meta;
