import { useContext, useState, useEffect } from "react";
import { TopContainer } from "./TopNavStyle";
// import king from "../../assets/images/sidebar-social-icons/king.svg";
import potato from "../../assets/images/sidebar-social-icons/potato.png";
import gun from "../../assets/images/sidebar-social-icons/gun.png";
import spinnerImg from "../../assets/images/sidebar-social-icons/spin.png";
import Utils from "../../utils/utilities";
import { useSelector } from "react-redux";
import { Context } from "../../utils/Context";

// eslint-disable-next-line react/prop-types
const TopNavButtons = ({ show }) => {
  const metaMaskAddress = useSelector((state) => state.wallet);
  const screenSize = window?.screen?.availWidth;
  const [NFTbalance, setNFTBalance] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [TokenBalance, setTokenBalance] = useState(0);
  const { items } = useContext(Context);

  useEffect(() => {
    if (metaMaskAddress.metaMaskAddress) {
      Utils.getNFTBalance(metaMaskAddress.metaMaskAddress.toString()).then(
        function (data) {
          //data === 0 ? setBalance(null) : setBalance(data);
          setNFTBalance(Number(data));
        }
      );

      Utils.getTokenBalance(metaMaskAddress.metaMaskAddress.toString()).then(
        function (data) {
          //data === 0 ? setTruBalance(null) : setTruBalance(data);
          setTokenBalance(Number(data) / 1e18);
        }
      );
    }
  }, [metaMaskAddress, items?.getRender]);

  return (
    <TopContainer flexStart={show == false ? "flex-start" : "flex-end"}>
      <div className={screenSize < 1080 ? "hide" : "menu-nav-bar-center"}>
        {/* <div className="metapoints" id="subscript">
          <span>{TokenBalance === 0 ? "0" : TokenBalance.toFixed(2)}</span>
          <div className="box-wrapper">
            <img src={king} alt="King" />
            <span>$MrPotato</span>
          </div>
        </div> */}
        <div className="metapoints">
          <span>{NFTbalance}</span>
          <div className="box-wrapper">
            <img src={potato} alt="potato" />
            <span>MetaPotato</span>
          </div>
        </div>
        <div className="metapoints">
          <span>0</span>
          <div className="box-wrapper">
            <img src={gun} alt="gun" />
            <span>MetaParts</span>
          </div>
        </div>
        <div className="metapoints">
          <span>0</span>
          <div className="box-wrapper">
            <img src={gun} alt="gun" />
            <span>Metapoints</span>
          </div>
        </div>
        <div className="metapoints">
          <span>0</span>
          <div className="box-wrapper">
            <img src={spinnerImg} alt="gun" />
            <span>Spins</span>
          </div>
        </div>
      </div>
    </TopContainer>
  );
};

export default TopNavButtons;
