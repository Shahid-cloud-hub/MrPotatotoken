import { PartsContainer } from "./PlayStyle";
import { useState } from "react";
import { useSelector } from "react-redux";
import shoes from "../../assets/images/metapotato/shoes.svg";
import flowers from "../../assets/images/metapotato/flowers.svg";
import gun from "../../assets/images/metapotato/gun.svg";
import gucci from "../../assets/images/metapotato/gucci-cap.svg";
import sword from "../../assets/images/metapotato/sword.svg";
import copyIcon from "../../assets/images/metapotato/copyIcon.svg";
import bscscan from "../../assets/images/metapotato/bscscan.svg";

let statusVal = [
  {
    id: 1,
    title: "Next Airdrop",
    amount: "18:12:19",
    time_img: "imag",
  },
  {
    id: 2,
    title: "Metascore",
    amount: "840",
  },
  {
    id: 3,
    title: "Total Metapoints",
    amount: "340",
  },
  {
    id: 5,
    title: "My NFT Total",
    amount: "12",
  },
  {
    id: 6,
    title: "NFT Circulating Supply",
    amount: "150",
  },
  {
    id: 7,
    title: "Total Burned",
    amount: "3",
  },
];

let productItems = [
  {
    id: 1,
    prod_img: shoes,
    prod_title: "Air Jordan Boots",
    meta_points: "0",
    city: "0",
    total_supply: "0",
    circulating: "0",
    burned: "0🔥",
    available: "0",
    img: copyIcon,
  },
  {
    id: 2,
    prod_img: flowers,
    prod_title: "Roses",
    meta_points: "0",
    city: "0",
    total_supply: "0",
    circulating: "0",
    burned: "0🔥",
    available: "0",

    img: copyIcon,
  },
  {
    id: 3,
    prod_img: gun,
    prod_title: "Blaster",
    meta_points: "0",
    city: "0",
    total_supply: "0",
    circulating: "0",
    burned: "0🔥",
    available: "0",

    img: copyIcon,
  },
  {
    id: 4,
    prod_img: sword,
    prod_title: "Sword",
    meta_points: "0",
    city: "0",
    total_supply: "0",
    circulating: "0",
    burned: "0🔥",
    available: "0",

    img: copyIcon,
  },
  {
    id: 5,
    prod_img: gucci,
    prod_title: "Gucci",
    meta_points: "0",
    city: "0",
    total_supply: "0",
    circulating: "0",
    burned: "0🔥",
    available: "0",

    img: copyIcon,
  },
];

let metaPotatoItem = [
  {
    id: 1,
    prod_img: shoes,
    prod_title: "Air Jordan Boots",
    meta_points: "340",
  },
  {
    id: 2,
    prod_img: flowers,
    prod_title: "Roses",
    meta_points: "50",
  },
  {
    id: 3,
    prod_img: gun,
    prod_title: "Blaster",
    meta_points: "30",
  },
  {
    id: 4,
    prod_img: sword,
    prod_title: "Sword",
    meta_points: "70",
  },
  {
    id: 5,
    prod_img: gucci,
    prod_title: "Gucci",
    meta_points: "60",
  },
];

const Parts = ({
  loaderColor,
  show,
  minWdith,
  pd,
  rd,
  minHeight,
  leaderTitle,
  data,
  assetTitle,
  img,
  dirStyle,
  dirGap,
  partImg,
  WeapansImg,
  boxWidth,
  hideFilter,
  boxHeight,
  hideMenuItems,
  itemTableHei,
  maxWidth,
  hideFilterItems,
}) => {
  const [val, setVal] = useState("");

  const result = productItems.map((index) => index);
  const resultSize = metaPotatoItem.map((index) => index);

  const metaMaskAddress = useSelector((state) => state.wallet);

  return (
    <PartsContainer
      reqiredHeight={
        show && result?.length > 4
          ? "calc(104% - 10px)"
          : "0px" || (hideFilter && resultSize?.length > 4)
          ? "calc(85% - 10px)"
          : "0px"
      }
      loaderColor={loaderColor}
      minWdith={minWdith}
      pd={pd}
      rd={rd}
      minHeight={minHeight}
      dirStyle={dirStyle}
      dirGap={dirGap}
      display="flex"
      flexDir="column"
      flexGap="5px"
      leaderTitle={leaderTitle ? "0px" : "25px 0px"}
      boxWidth={boxWidth}
      boxHeight={boxHeight}
      itemTableHei={itemTableHei}
      maxWidth={maxWidth}
    >
      <div className="filter-btns">
        {img && (
          <img src={img} alt="leaderbord" style={{ maxWidth: "140px" }} />
        )}
        <div style={{ gap: "10px", display: "flex" }}>
          {partImg && <img src={partImg} alt="leaderbord" />}
          {WeapansImg && <img src={WeapansImg} alt="weapans" />}
        </div>
        {hideFilter || !hideFilterItems ? (
          ""
        ) : (
          <div className="filter-btns">
            <button>High</button>
            <button>Low</button>
          </div>
        )}
      </div>
      <div className="parts-container">
        <div className="page">
          <div className="heading-wrapper">
            {(hideFilter || hideFilterItems) && (
              <>
                <span>Erc1155 Asset</span>
                <span>MetaPoints</span>
              </>
            )}
            {show && (
              <>
                <span>Part Name</span>
                <span>
                  MetaPoints <p>High/Low</p>
                </span>
                <span>Quantity</span>
                <span>Total Supply</span>
                <span>Circulating</span>
                <span>Burned</span>
                <span>Available</span>
                <img
                  src={bscscan}
                  alt="bscscan"
                  style={{ paddingRight: "25px" }}
                />
              </>
            )}
            {leaderTitle && (
              <div className="leaderbord-wrapper">
                <div className="span-style" style={{ width: "510px" }}>
                  Rank
                </div>
                <div className="span-style">Wallet</div>
                <div className="span-style" style={{ textAlign: "center" }}>
                  MetaPoints
                </div>
              </div>
            )}
            {assetTitle && (
              <div className="weapans-wrapper">
                <div className="span-style">Erc1155 Assets Marketplace</div>
                <div className="span-style">MetaPoints</div>
              </div>
            )}
          </div>
          <hr />
          <div className="content">
            <div className="wrapper">
              {hideMenuItems &&
                metaPotatoItem?.map((item, index) => (
                  <>
                    <div className="product-items" key={index}>
                      <div className="p-item">
                        <img
                          src={item.prod_img}
                          alt={item.prod_title}
                          style={{ width: "70px" }}
                        />
                        <span>{item.prod_title}</span>
                      </div>
                      <span>{item.meta_points}</span>
                    </div>
                  </>
                ))}
              {show &&
                productItems?.map((item, index) => (
                  <>
                    <div className="product-items" key={index}>
                      {metaMaskAddress?.metaMaskAddress && (
                        <div className="p-item">
                          <img
                            src={item.prod_img}
                            alt={item.prod_title}
                            style={{ width: "70px" }}
                          />
                          <span>{item.prod_title}</span>
                        </div>
                      )}

                      {item.meta_points && (
                        <>
                          {metaMaskAddress?.metaMaskAddress ? (
                            <>
                              <span>{item.meta_points}</span>
                              <span>{item.city}</span>
                              <span>{item.total_supply}</span>
                              <span>{item.circulating}</span>
                              <span>{item.burned}</span>
                              <span>{item.available}</span>
                            </>
                          ) : (
                            <>
                              {item.id ? (
                                <>
                                  <span>{item.meta_points}</span>
                                  <span>{item.city}</span>
                                  <span>{item.total_supply}</span>
                                  <span>{item.circulating}</span>
                                  <span>{item.available}</span>
                                  <span
                                    style={{
                                      textAlign: "center",
                                    }}
                                  >
                                    {item.burned}
                                  </span>
                                  <span>{item.available}</span>
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <span
                                    style={{
                                      textAlign: "center",
                                    }}
                                  >
                                    {item.burned}
                                  </span>
                                  <span style={{ color: "transparent" }}>
                                    {item.available}
                                  </span>
                                </>
                              )}

                              {/* <span>{item.available}</span> */}
                            </>
                          )}

                          <img
                            src={item.img}
                            alt="img"
                            style={{ paddingLeft: "50px" }}
                          />
                        </>
                      )}
                    </div>
                  </>
                ))}
              {(leaderTitle || assetTitle) &&
                data?.map((item, index) => (
                  <>
                    <div className="product-items" key={index}>
                      <div className="p-item">
                        {item?.transaction_id && (
                          <>
                            {metaMaskAddress?.metaMaskAddress && (
                              <>
                                <span
                                  style={{ width: "205px", textAlign: "start" }}
                                >
                                  {item?.id}
                                </span>
                                <div
                                  className="p-item-wrapper"
                                  style={{ width: "470px", textAlign: "start" }}
                                >
                                  <span>{item?.transaction_id}</span>
                                  <img
                                    src={item?.copy_img}
                                    alt={item?.prod_title}
                                  />
                                </div>
                                <span style={{ width: "440px" }}>
                                  {item?.metaPoints}
                                </span>
                              </>
                            )}
                          </>
                        )}
                        {item?.prod_img && (
                          <>
                            <img src={item?.prod_img} alt={item?.prod_title} />
                            <span>{item?.prod_title}</span>
                            <span
                              style={{ color: "#6F6F6F", textAlign: "center" }}
                            >
                              {item.meta_points}
                            </span>
                            <span
                              style={{ color: "#F4CD68", textAlign: "center" }}
                            >
                              {item.btn_title}
                            </span>
                          </>
                        )}
                      </div>
                      {item?.city && (
                        <>
                          <span>{item.city}</span>
                          <span>{item.total_supply}</span>
                          <span>{item.circulating}</span>
                          <span>{item.burned}</span>
                        </>
                      )}
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PartsContainer>
  );
};

export default Parts;
