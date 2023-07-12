import { clearGoogleUser } from "../../redux/GoogleConnect/googleConnectSlice";
import { useDispatch } from "react-redux";

const GoogleLogout = () => {
  const dispatch = useDispatch();

  const googleLogout = () => {
    dispatch(clearGoogleUser());
  };

  return (
    <>
      <button onClick={googleLogout}>Logout</button>
    </>
  );
};

export default GoogleLogout;
