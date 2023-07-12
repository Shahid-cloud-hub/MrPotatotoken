import React from "react";
import { ContextProvider } from "./utils/Context";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import "./sass/main.scss";

// Routes //
import Dashboard from "./routes/Dashboard";

// Components //
import NLanding from "./components/N-Landing/NLanding";
// import NFT from "./components/NFT/NFT";
import Token from "./components/Token/Token";
import MintSpinComponent from "./components/MintSpin/MintSpinComponent";
import Play2Earn from "./components/2earn/Play2Earn";
import AirDrop from "./components/Airdrop/AirDrop";
import OurMrPartners from "./components/OurPartners/OurPartners";
import FAQ from "./components/Faqs/Faqs";
import RoadMap from "./components/RoadMap/RoadMap";
import WhitePaper from "./components/WhitePaper/WhitePaper";
import BugBounty from "./components/BugBounty/BugBounty";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./components/TermsConditions/TermsCondition";
import Contact from "./components/Contact/Contact";
import InvestorDeck from "./components/InvestorDeck/InvestorDeck";
import NotFound from "./components/404/NotFound";

// Supar Rare & Merchandise //
import SuparRareComponent from "./components/SuparRare/SuparRareComponent";
// import LeaderboardComponent from "./components/SuparRare/LeaderboardComponent/LeaderboardComponent";
import MarketPlaceComponent from "./components/SuparRare/MarketPlaceComponent/MarketPlaceComponent";
// import MyNFTComponent from "./components/SuparRare/MyNFTComponent/MyNFTComponent";
import MerchBanner from "./components/SuparRare/Merchandise/MerchBanner";
import CartListComponent from "./components/SuparRare/CartComponent/CartListComponent";

import MrPotatoNFT from "./pages/MrPotatoNFT";
import MetaParts from "./pages/MetaParts";
import MetaPotatoToken from "./pages/MetaPotatoToken";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaContainer from "./components/2earn/MetaContainer";
import MetaPotatoComponent from "./components/2earn/MetaPotatoComponent";
// import MetaPotato from "./components/2earn/MetaPotato";
// import MetaPotatoBridge from "./components/Liquidity-NFT-Bridges/MetaPotatoBridge";

//images
import potatoTokenImg from "./assets/images/metapotato/potatoToken.png";
import kingPotatoImg from "./assets/images/metapotato/King2.png";
import Play from "./components/2earn/Play";
import MetaPartsTab from "./components/2earn/MetaPartsTab";
// import LiquidityToken from "./components/Liquidity-NFT-Bridges/LiquidityToken";
import PriceChart from "./components/Token/PriceChart";
import Stake from "./components/Token/Stake";
import DollerPotato from "./components/Token/DollerPotato";
import Quick from "./components/Token/Quick";
import Checkout from "./components/SuparRare/Merchandise/Checkout/Checkout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import TopG from "./components/Token/TopG";
import TokenCards from "./components/SuparRare/TokenCards/TokenCards";
import ETHTokenCard from "./components/SuparRare/ETHTokenCard/ETHTokenCard";
import BNBTokenCard from "./components/SuparRare/BNBTokenCard/BNBTokenCard";
import MetaPotatoBridge from "./components/Liquidity-NFT-Bridges/MetaPotatoBridge";
import MetaPotato from "./components/2earn/MetaPotato";

let persistor = persistStore(store);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <NLanding />,
      },
      {
        path: "/MintSpin/*",
        element: <MintSpinComponent />,
        children: [
          {
            path: "MrPotatoNFT",
            element: <MrPotatoNFT />,
          },
          {
            path: "MetaPotato",
            element: <MetaParts />,
          },
          {
            path: "MrPotatoToken",
            element: <MetaPotatoToken />,
          },
        ],
      },
      {
        path: "/token/*",
        element: <Token />,
        children: [
          {
            index: true,
            element: <DollerPotato />,
          },
          {
            path: "dollar-potato/*",
            element: <DollerPotato />,
            children: [
              // { index: true, element: <LiquidityToken maxWid="800px" /> },
              // { path: "swap", element: <LiquidityToken maxWid="800px" /> },
              {
                index: true,
                element: (
                  <PriceChart link="https://www.geckoterminal.com/eth/pools/0xa5e3790141fe3052a21e559b3ee6205de0858e39?embed=1&info=0&swaps=0" />
                ),
              },
              {
                path: "chart",
                element: (
                  <PriceChart link="https://www.geckoterminal.com/eth/pools/0xa5e3790141fe3052a21e559b3ee6205de0858e39?embed=1&info=0&swaps=0" />
                ),
              },
              {
                path: "stake",
                element: <Stake stakeTitle="$MrPotato STAKE" />,
              },
            ],
          },
          {
            path: "pepe-potato/*",
            element: <Quick />,
            children: [
              {
                index: true,
                element: (
                  <PriceChart link="https://www.geckoterminal.com/bsc/pools/0xfff6900dc67358b82be822658d624699ee00ce5a?embed=1&info=0&swaps=0" />
                ),
              },
              {
                path: "stake",
                element: <Stake stakeTitle="PEPEPOTATO STAKE" />,
              },
              {
                path: "chart",
                element: (
                  <PriceChart link="https://www.geckoterminal.com/bsc/pools/0xfff6900dc67358b82be822658d624699ee00ce5a?embed=1&info=0&swaps=0" />
                ),
              },
            ],
          },
          {
            path: "topG-potato/*",
            element: <TopG />,
            children: [
              {
                index: true,
                element: <Stake stakeTitle="TOPGPOTATO STAKE" />,
              },
              {
                path: "stake",
                element: <Stake stakeTitle="TOPGPOTATO STAKE" />,
              },
              {
                path: "chart",
                element: <PriceChart link="" />,
              },
            ],
          },
        ],
      },
      // {
      //   path: "/mrpotato-nft",
      //   element: <NFT />,
      // },
      {
        path: "/mrpotato-nft/*",
        element: <Play2Earn />,
        children: [
          { index: true, element: <MetaPotatoComponent /> },
          { path: "nft", element: <MetaPotatoComponent /> },
          { path: "minted", element: <MetaPotato /> },
          { path: "Metapart", element: <MetaContainer /> },
          { path: "market", element: <MetaPartsTab /> },
          {
            path: "swap",
            element: (
              <MetaPotatoBridge
                maxWid="942"
                minHei="348px"
                tabMaxWid="746px"
                marginVal="68px 31px"
                potatoImg={potatoTokenImg}
                kingImg={kingPotatoImg}
                oneWaySwap={false}
              />
            ),
          },
          { path: "play", element: <Play /> },
        ],
      },
      {
        path: "/market/*",
        element: <SuparRareComponent />,
        children: [
          { index: true, element: <TokenCards /> },
          { path: "token", element: <TokenCards /> },
          { path: "eth-token", element: <ETHTokenCard type="eth" /> },
          { path: "bnb-token", element: <BNBTokenCard type="bnb" /> },
          { path: "nft", element: <MarketPlaceComponent /> },
        ],
      },
      {
        path: "merchandise/*",
        element: <MerchBanner />,
        children: [
          {
            path: "cart",
            element: <CartListComponent />,
            children: [{ path: "checkout", element: <Checkout /> }],
          },
        ],
      },
      {
        path: "/airdrop",
        element: <AirDrop />,
      },
      {
        path: "/partners",
        element: <OurMrPartners />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/roadmap",
        element: <RoadMap />,
      },
      {
        path: "/white-paper",
        element: <WhitePaper />,
      },
      {
        path: "/bug-bounty",
        element: <BugBounty />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsCondition />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/investor-deck",
        element: <InvestorDeck />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ContextProvider>
          <GoogleOAuthProvider clientId="726997426596-ijn2hj1mgju3g0ju9d0voej29vprutms.apps.googleusercontent.com">
            <RouterProvider router={router} />
          </GoogleOAuthProvider>
          <ToastContainer />
        </ContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
