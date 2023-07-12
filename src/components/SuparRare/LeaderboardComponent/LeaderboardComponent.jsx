import React, { useState } from "react";
import { LeaderboardContainer } from "../SuperRare.style";
import { Christiano, Leaderboard, Taylor, kim } from "../AiNFTData";
import ReactPopUpModel from "../../ReactPopUpModel/ReactPopUpModel";
import MarketPlaceComponent from "../MarketPlaceComponent/MarketPlaceComponent";
import ReactPopUpModelLeaderboard from "../../ReactPopUpModel/ReactPopUpModelLeaderboard";

const LeaderboardComponent = () => {
  const screenSize = window?.screen?.availWidth;

  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleImageClick = (data) => {
    setModalOpen(true);
    setImageSrc(data);
  };

  const closeModal = () => {
    setModalOpen(false);
    setImageSrc("");
  };

  return (
    <LeaderboardContainer>
      <div className="head">
        <div className="reverse">
          <div className="box">
            <div className="crown">
              <img
                src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432814/leaderboear/silver_qjvybn.svg"
                alt="crown"
              />
              <span>2</span>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dfjmnwwan/image/upload/v1686644458/MrPotatoNFT/Mask_group_1_bvoo0g.svg"
                alt="MrMessi Potato"
              />
              <div className="title">
                <span>MrMessi Potato</span>
                <button onClick={() => handleImageClick(Taylor)}>Buy</button>
                <span id="brown">Score: 561</span>
              </div>
              <div className="id">
                <span>
                  3BV2...76D723623
                  <img
                    src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/stickies_1_hpcpjk.svg"
                    alt="stick"
                  />
                </span>
                <img
                  src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/Frame_1000004009_q4nade.svg"
                  alt="chainlink"
                />
              </div>
              <div className="score">
                <img
                  src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/price-1.1s-200px_1_t4jkiw.svg"
                  alt="icon"
                />
                <span>12.00</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="crown">
              <img
                src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432281/leaderboear/gold_1_ygqfgd.svg"
                alt="crown"
              />
              <span>1</span>
            </div>
            <div className="card1">
              <img
                src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684843954/leaderboear/cris_vjklaz.svg"
                alt="cristiano"
              />
              <div className="title">
                <span>MrCristiano Potato</span>
                <button onClick={() => handleImageClick(Christiano)}>
                  Buy
                </button>
                <span id="brown">Score: 834</span>
              </div>
              <div className="id">
                <span>
                  cee32...76D723623
                  <img
                    src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/stickies_1_hpcpjk.svg"
                    alt="stick"
                  />
                </span>
                <img
                  src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/Frame_1000004009_q4nade.svg"
                  alt="chainlink"
                />
              </div>
              <div className="score">
                <img
                  src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/price-1.1s-200px_1_t4jkiw.svg"
                  alt="icon"
                />
                <span>12.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="crown">
            <img
              src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432281/leaderboear/bronze_soyx5i.svg"
              alt="crown"
            />
            <span>3</span>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684843954/leaderboear/kim_rfiyig.svg"
              alt="Kim Potato"
            />
            <div className="title">
              <span>MrsKim Potato</span>
              <button onClick={() => handleImageClick(kim)}>Buy</button>
              <span id="brown">Score: 462</span>
            </div>
            <div className="id">
              <span>
                3BV2...76D723623
                <img
                  src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/stickies_1_hpcpjk.svg"
                  alt="stick"
                />
              </span>
              <img
                src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/Frame_1000004009_q4nade.svg"
                alt="chainlink"
              />
            </div>
            <div className="score">
              <img
                src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/price-1.1s-200px_1_t4jkiw.svg"
                alt="icon"
              />
              <span>12.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-body">
        {Leaderboard?.map((item, index) => (
          <div
            className="rectangle"
            key={index}
            // onClick={() => handleImageClick(item?.main_img)}
          >
            <div className="icon">
              <img src={item?.img} alt="img" />
              <div className="buy-btn">
                <span>{item?.number}</span>
                <button onClick={() => handleImageClick(item?.innerData)}>
                  Buy
                </button>
              </div>
            </div>
            {screenSize > 420 && screenSize != 912 && (
              <>
                <div className="title">
                  <span>{item?.name}</span>
                  <span id="brown">Score: {item?.score}</span>
                  <div className="score">
                    <img
                      src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/price-1.1s-200px_1_t4jkiw.svg"
                      alt="icon"
                    />
                    <span>{item?.dollar_price}</span>
                  </div>
                </div>
                <div className="id">
                  <span>
                    {item?.address}
                    <img
                      src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/stickies_1_hpcpjk.svg"
                      alt="stick"
                    />
                  </span>
                  <img
                    src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/Frame_1000004009_q4nade.svg"
                    alt="chainlink"
                  />
                </div>
              </>
            )}
            {(screenSize < 420 || screenSize === 912) && (
              <div className="title-id-wrapper">
                <div className="title">
                  <span>{item?.name}</span>
                  <span id="brown">Score: {item?.score}</span>
                  <div className="id">
                    <span>
                      {item?.address}
                      <img
                        src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/stickies_1_hpcpjk.svg"
                        alt="stick"
                      />
                    </span>
                    <img
                      src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/Frame_1000004009_q4nade.svg"
                      alt="chainlink"
                    />
                  </div>
                  <div className="score">
                    <img
                      src="https://res.cloudinary.com/dvyhwv1ux/image/upload/v1684432482/leaderboear/price-1.1s-200px_1_t4jkiw.svg"
                      alt="icon"
                    />
                    <span>{item?.dollar_price}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {modalOpen && (
          <ReactPopUpModelLeaderboard data={imageSrc} closeModal={closeModal} />
        )}
      </div>
    </LeaderboardContainer>
  );
};

export default LeaderboardComponent;
