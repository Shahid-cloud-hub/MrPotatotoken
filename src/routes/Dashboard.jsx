import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import NavMobile from "../components/MobileComponents/NavMobile/NavMobile";
import NotFound from "../components/404/NotFound";
import TopNav from "../components/TopNav/TopNav";
import useBreakpoint from "../hooks/useBreakpoints";
import MobileMenu from "../components/MobileComponents/MobileMenu/MobileMenu";
// import footer from "../assets/images/footer-banner-updated.png";
// import FooterBanner from "../components/Merchandise/FooterBanner";
// import FooterBanner from "../FooterBanner/FooterBanner";
// import NLanding from "../N-Landing/NLanding";
// import Routes from "../Routes";
// import NFT from "../NFTCard/NFTCard";
// import UpdatedFooter from "../FooterBanner/UpdatedFooter";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainContent = document.getElementById("detail");
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

const ContainerWrapper = styled("div")`
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) =>
      props.homePageGap ? "space-between" : "none"};
    min-height: ${(props) => (props.homePageGap ? "0px" : "0px")};
    height: 100vh;
  }

  @media screen and (max-width: 1080px) {
    .layout-wrapper {
      min-height: inherit;
    }
  }

  .wrapper-main {
    display: flex;
    flex-direction: column;
    z-index: 9;
    gap: ${(props) => (props.homePageGap ? "0px" : "0px")};
  }

  .main {
    display: flex;
    justify-content: center;
    width: 100%;
    /* padding-top: 10px; */
  }

  .left-sidebar {
    width: 100%;
    padding: 0px 40px 0px 20px;
    max-width: 350px;
  }

  .main-body {
    /* display: flex;
    justify-content: center; */
    /* padding: 0px 20px 0px 0px; */
    /* padding: ${(props) => props.removedPad}; */
    /* max-width: 1100px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 45px;
    .footer-main {
      width: 100%;
      margin-top: 20px;

      img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .left-sidebar {
      padding: 0px 20px 25px;
      max-width: 260px;
    }
  }

  @media screen and (max-width: 820px) {
    .main-body {
      padding: 0px;
    }

    .left-sidebar {
      display: none;
    }
  }

  @media screen and (max-width: 375px) {
    .main-body {
      padding: 0px;
    }
  }
`;

const Dashboard = () => {
  const { isDesktop, isTablet, isSmallDesktop, isSmallMobile, isMobile } =
    useBreakpoint();
  const location = useLocation();

  return (
    <ContainerWrapper
      homePageGap={
        location?.pathname === "/" || location?.pathname === "/404"
          ? false
          : true
      }
      removedPad={
        location.pathname === "/win-spin" ? "0px" : "0px 20px 0px 0px"
      }
    >
      <div className="layout-wrapper">
        <div className="wrapper-main">
          {location.pathname !== "/404" &&
            (isDesktop || isSmallDesktop || isTablet) && <TopNav />}
          {(isTablet || isMobile || isSmallMobile) && <NavMobile />}
          {location.pathname === "/404" ? (
            <NotFound />
          ) : (
            <div className="main">
              {(isDesktop || isSmallDesktop || isTablet) && (
                <div className="left-sidebar">
                  <LeftSidebar />
                </div>
              )}
              <div className="main-body">
                {(isTablet || isMobile || isSmallMobile) && <MobileMenu />}
                <Outlet />
                <ScrollToTop />
                {/* {location?.pathname === "/token" && (
                  <div className="footer-main">
                    <img src={footer} alt="footer" />
                  </div>
                )} */}
              </div>
            </div>
          )}
          {/* <NFT /> */}
        </div>

        {/* {isDesktop && <FooterBanner />} */}

        {/* {location.pathname !== "/404" &&
                  location.pathname !== "/WhitePaper" && (
                    <UpdatedFooter />
                  )} */}
      </div>
    </ContainerWrapper>
  );
};

export default Dashboard;
