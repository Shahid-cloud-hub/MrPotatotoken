import { useState, useContext, useEffect } from "react";
import Wheelofprizeimg from "../../assets/images/NewHomePage/metaParts.png";
import StopSection from "../../assets/images/NewHomePage/stopSection.png";
import ArroundSection from "../../assets/images/NewHomePage/mrPotatoTokenAround.png";
import SpinnerSections from "../../assets/images/NewHomePage/section.png";
import SmallSpinner from "../../assets/images/NewHomePage/spinner-btn.png";
import SmallPotato from "../../assets/images/NewHomePage/potato-mini.png";
import SmallKing from "../../assets/images/NewHomePage/smallKing.png";
import SmallGun from "../../assets/images/NewHomePage/blaster.png";
import audio from "../../assets/images/WinSpin/wheel-of-prize-audio.mp3";
import { Context } from "../../utils/Context";
import styled, { keyframes } from "styled-components";
import Button from "./ConnectWalletBtn/Button";
import CarouselMetaParts from "./CarouselHome/CarouselMetaParts";

const rotateAnimation = keyframes`
/* 0%{
  transform: rotate(0deg);
} */
 100% {
    transform: rotate(360deg);
  }
`;
const slowRotate = (y) => keyframes`
  100%{
    transform: rotate(${y})
  }
`;

const RotateWheel = styled.div`
  width: 33em;
  height: 33em;
  position: relative;
  padding: 0;
  border-radius: 60%;
  list-style: none;
  overflow: hidden;
  animation-iteration-count: ${(props) => props.animationIterationCount};
  animation-timing-function: ${(props) => props.animationTimingFunction};
  animation-fill-mode: ${(props) => props.animationFillMode};
  animation-delay: ${(props) => props.animationDelay};
  animation-name: ${(props) => props.animationName};
  animation-duration: ${(props) => props.animationDuration};

  @media screen and (max-width: 1380px) {
    width: 29em;
    height: 29em;
  }

  @media screen and (max-width: 1080px) {
    width: 26em;
    height: 26em;
  }

  @media screen and (max-width: 768px) {
    width: 26em;
    height: 26em;
  }

  @media screen and (max-width: 480px) {
    width: 24em;
    height: 24em;
  }

  @media screen and (max-width: 395px) {
    width: 24em;
    height: 24em;
  }
`;

const array = [
  "0deg", // Lose // JackPot exact on the 0 deg
  "30deg", // Lose
  "60deg", // 10x Potato Token // not exact should be 2x Potato
  "90deg", // You Lose
  "120deg", // 1x Potato Token // should be 20x Potato
  "150deg", // 5x Potato token
  "180deg", // 2x Potato token
  "210deg", // 5x Potato Token
  "240deg", // 20x Potato Token
  "270deg", // You Lose // Exact getting the Lose
  "300deg", // 2x Potato Token
  "330deg", // 10x Potato Token
  "360deg", // Lose
];

const MetaPartsWinSpinner = () => {
  const [show, setShow] = useState(false);

  const [rotate, setRotate] = useState({
    runSpin: false,
    slowSpin: false,
  });
  const [showBtn, setShowbtn] = useState(true);
  const [flicker, setFlicker] = useState("Arrow");

  const { items, setItems } = useContext(Context);

  let TickerAudio = new Audio(audio);

  const rotationDuration = 5300; // in milliseconds

  const startRotaion = () => {
    setShowbtn(false);
    getRandomItem(array);

    TickerAudio.play();
    setRotate((prevState) => ({
      ...prevState,
      runSpin: true,
      slowSpin: false,
    }));
    setFlicker("Arrow start-flicker");
    setItems((prevState) => ({
      ...prevState,
      checkMetaParts: false,
    }));
    setTimeout(() => {
      setRotate((prevState) => ({
        ...prevState,
        slowSpin: true,
        runSpin: false,
      }));
    }, rotationDuration);

    setTimeout(() => {
      setFlicker("Arrow start-flicker stop-rotate");
    }, 7900);
    setTimeout(() => {
      setItems((prevState) => ({
        ...prevState,
        checkMetaParts: true,
      }));
      setShowbtn(true);
    }, 8000);
  };

  function getRandomItem(arr) {
    // Filter out "0deg"
    const filteredArray = arr.filter((item) => item !== "150deg");

    const randomIndex = Math.floor(Math.random() * filteredArray.length);
    const item = filteredArray[randomIndex];

    setItems((prevState) => ({
      ...prevState,
      metaPartVal: item,
    }));
  }

  useEffect(() => {
    if (items?.runAgain) {
      startRotaion();
      setItems((prevState) => ({
        ...prevState,
        checkMetaParts: false,
        metaPartVal: null,
      }));
      getRandomItem(array);
    }
  }, [items?.runAgain]);

  return (
    <>
      <div className="spinner-holder">
        <img src={ArroundSection} className="frame-1" alt="" />
        <div className="frame-2-main-wrapper">
          <img src={SpinnerSections} className="frame-2" alt="" />
          <div className="items-main-wrapper">
            <div className="total-spins-wrapper-token">
              <span>1</span>
              <div className="spins-item">
                <div onClick={() => setShow(true)}>
                  <img src={SmallSpinner} alt="" />
                </div>
              </div>
            </div>
            <div className="buy-spins-wrapper">
              <span>
                0<span className="small-m"></span>
              </span>
              <div className="spins-item">
                <div>
                  <img src={SmallGun} alt="" />
                </div>
                <span>MetaParts</span>
              </div>
            </div>
            <div className="nfts-wrapper-token">
              <span>
                0<span className="small-m"></span>
              </span>
              <div className="spins-item">
                <div>
                  <img src={SmallPotato} alt="" />
                </div>
                <span>MrPotatoNFT</span>
              </div>
            </div>
            <div className="tokens-wrapper-token">
              <span>
                0<span className="small-m"></span>
              </span>
              <div className="spins-item">
                <div>
                  <img src={SmallKing} alt="" />
                </div>
                <span>$MrPotato</span>
              </div>
            </div>
          </div>
        </div>
        <div className={flicker}>
          <img src={StopSection} className="frame-3" alt="" />
        </div>
        <RotateWheel
          animationName={
            rotate.runSpin
              ? rotateAnimation
              : rotate.slowSpin
              ? slowRotate(items?.metaPartVal)
              : null
          }
          animationDuration={rotate.slowSpin ? `${rotationDuration}ms` : "2s"}
          animationIterationCount={rotate.slowSpin ? "1" : "infinite"}
          animationTimingFunction={rotate.slowSpin ? "easeOut" : "linear"}
          animationFillMode={rotate.slowSpin ? "forwards" : null}
          animationDelay={rotate.slowSpin ? "-1s" : null}
        >
          <img
            src={Wheelofprizeimg}
            alt="wheelofprize"
            style={{ width: "100%" }}
          />
        </RotateWheel>
        {items?.checkMetaParts ? (
          <div
            className="showAfterPlay"
            style={{
              position: "absolute",
              zIndex: 999,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <CarouselMetaParts />
          </div>
        ) : (
          <div className="RoundPlay" onClick={!show && showBtn && startRotaion}>
            <Button show={show} setShow={setShow} />
          </div>
        )}
      </div>
    </>
  );
};

export default MetaPartsWinSpinner;
