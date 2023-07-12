import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setGoogleUser } from "../../redux/GoogleConnect/googleConnectSlice";

const GoogleLogin = () => {
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;

      try {
        const response = await axios.post(
          "https://naughty-bear-lapel.cyclic.app/auth/google/callback",
          { access_token }
        );
        const user = response.data;
        dispatch(setGoogleUser(user));
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  });

  return (
    <>
      <button onClick={() => login()}>Login</button>
    </>
  );
};

export default GoogleLogin;
