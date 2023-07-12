import React from "react";
import { RarityContainer } from "./MRarityStyle";
import { carouselData } from "data/carouselData";
import { useState } from "react";
import MobileSearchCard from "./MobileSearchCard";
import MobileSuperRareSlider from "components/Super-Rare-Slider/MobileSuperRareSlider";

const MobileRarity = () => {
  const [searched, setSearched] = useState("");
  const [searchData, setSearchData] = useState([]);
  const handle = (e) => {
    setSearched(e.target.value);
    setSearchData(carouselData.filter((item) => item.title.includes(searched)));
  };

  return (
    <RarityContainer>
      <div className="space-background">
        <div className="container">
          <div className="text-input-field">
            <span>Enter Mr Potato NFT number to check Rarity Rank</span>
            <input onChange={handle} type="number" placeholder="0" />
          </div>
          <div className="rarity_scroll">
            {searched.length > 0 && searchData
              ? searchData.map((item, index) => (
                  <div key={index}>
                    <MobileSearchCard
                      title={item.title}
                      mainimage={item.mainimage}
                      imagebg={item.imagebg}
                      rarityRank={item.rarityRank}
                      metaScore={item.metaScore}
                      featureScore={item.featureScore}
                      speedScore={item.speedScore}
                      toolsScore={item.toolsScore}
                      gradeScore={item.gradeScore}
                      nftPowers_features_data={item.nftPowers_features.map(
                        (data) => data
                      )}
                      nftPowers_speed_data={item.nftPowers_speed.map(
                        (data) => data
                      )}
                      nftPowers_tools_data={item.nftPowers_tools.map(
                        (data) => data
                      )}
                    />
                  </div>
                ))
              : null}
          </div>
          <div className="rarity-slider">
            <span className="font-size">Super Rare</span>
            <MobileSuperRareSlider />
          </div>
        </div>
      </div>
    </RarityContainer>
  );
};

export default MobileRarity;
