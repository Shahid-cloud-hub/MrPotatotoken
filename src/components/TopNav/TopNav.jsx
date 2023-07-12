import { HeaderBar } from "./TopNavStyle";
import Logo from "../../assets/images/TopHeader/logo.svg";
import RightSidebar from "../RightSidebar/RightSidebar";
import { Link } from "react-router-dom";
import TopNavButtons from "./TopNavButtons";
import useBreakpoint from "./../../hooks/useBreakpoints";
import MetaMask from "./MetaMask";
const TopNav = () => {
  const { isDesktop, isSmallDesktop, isTablet } = useBreakpoint();
  return (
    <HeaderBar>
      <div className="main-wrapper">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ transform: "translate(-8px, 4px)", width: "150px" }}
          />
        </Link>
        <div className="main-right-wrapper">
          <TopNavButtons show={true} />
          <div className="menu-nav-bar">
            {(isDesktop || isSmallDesktop || isTablet) && <MetaMask />}
            <RightSidebar />
          </div>
        </div>
      </div>
    </HeaderBar>
  );
};

export default TopNav;
