import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../../utils/Context";
import {
  metaMaskConnection,
  metaMaskDisconnect,
} from "../../redux/walletConnect/walletConnectSlice";
import GoogleLogout from "./GoogleLogout";
import GoogleLogin from "./GoogleLogin";

const MetaMask = () => {
  const dispatch = useDispatch();
  const metaMaskAddress = useSelector((state) => state.wallet);
  const googleUser = useSelector((state) => state.googleConnect);
  const { setItems } = useContext(Context);

  const handleConnect = () => {
    dispatch(metaMaskConnection());
    setItems((prevState) => ({
      ...prevState,
      getRender: true,
    }));
  };

  const handleDisconnect = () => {
    dispatch(metaMaskDisconnect());
    setItems((prevState) => ({
      ...prevState,
      getRender: true,
    }));
    window.location.reload(true);
  };

  return (
    <>
      <div className="nav-center">
        {!metaMaskAddress.metaMaskAddress ? (
          <button className="de-activated-btn" onClick={handleConnect}>
            Connect
          </button>
        ) : (
          <button className="activated-btn" onClick={handleDisconnect}>
            Disconnect
          </button>
        )}
        {googleUser?.userConnect ? <GoogleLogout /> : <GoogleLogin />}
      </div>
    </>
  );
};

export default MetaMask;
