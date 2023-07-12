import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import LeftArrow from "../../../assets/images/tokenomics/leftArrow.webp";
import RightArrow from "../../../assets/images/tokenomics/rightArrow.webp";
import { carouselData } from "../../../assets/data/carouselData";
import OpenSmallNFTCards from "../../SmallNFTCards/OpenSmallNFTCards";

const Item = styled.div`
  .slick-list {
    width: 100%;
    max-width: 440px;
  }
  /* transform: scale(0.8); */

  /* .container-slider {
    padding: 56px 0 0;
    text-align: center;
  }

  .slider-wrapper {
    display: flex;
    flex-direction: row;
  }

  .svg-shape {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
  }

  .sliderV5 {
    transform: scale(0.8);
  }

  .section-title {
    font-family: "IntegralCF-Medium";
    letter-spacing: 5px;
  }
  
  .slick-dots {
    display: flex !important;
    padding: 0;
    gap: 15px;
    justify-content: center;
    margin-top: 60px;
    position: initial;
  }
  .slick-dots li {
    list-style-type: none;
    height: 10px;
    width: 25px;
    background: #53bfb2;
  }
  li.slick-active {
    background: white;
  }
  .slick-dots button {
    display: none;
  }
  .slide-item {
    border: 0;
    border-radius: 20px;
    overflow: hidden;
  }
  .slide-item:focus-visible {
    outline: none;
  }
  .slide-item img {
    width: 100%;
  } */

  .slick-prev {
    left: 5%;
    width: 50px;
    height: 50px;
    z-index: 999;
  }

  .slick-next {
    right: 5%;
    width: 50px;
    height: 50px;
    z-index: 999;
  }
`;

const NFTCardSlider = () => {
  const SuperRareSettings = {
    arrows: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <img src={RightArrow} alt="Right Arrow" />,
    prevArrow: <img src={LeftArrow} alt="Left Arrow" />,
  };

  return (
    <Item>
      <div className="slider-wrapper">
        <Slider {...SuperRareSettings}>
          {carouselData.map((item, index) => (
            <div key={index} className="items-holder">
              <OpenSmallNFTCards
                maxWidth="240px"
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
                nftPowers_speed_data={item.nftPowers_speed.map((data) => data)}
                nftPowers_tools_data={item.nftPowers_tools.map((data) => data)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Item>
  );
};

export default NFTCardSlider;
