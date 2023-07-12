import { PotatoContainer } from "./StyleSheet";
import kingImg from "../../assets/images/tokenomics/pepeTokens/tokenKing.svg";
import pepeImg from "../../assets/images/tokenomics/pepeTokens/tokenPepe.svg";
import topGImg from "../../assets/images/tokenomics/pepeTokens/tokenTopG.svg";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const PotatoToken = () => {
  const location = useLocation();

  return (
    <PotatoContainer>
      <div className="background">
        <div className="potato-land-tabs">
          <div className="tabs-btn">
            <NavLink to="dollar-potato">
              <button
                className={
                  location.pathname === "/token/dollar-potato"
                    ? "myland-active"
                    : "myland-de-active"
                }
                style={{ backgroundColor: "transparent" }}
              >
                <img src={kingImg} alt="" />
              </button>
            </NavLink>
            <NavLink to="pepe-potato">
              <button
                className={
                  location.pathname === "/token/pepe-potato"
                    ? "myland-active"
                    : "myland-de-active"
                }
                style={{ backgroundColor: "transparent" }}
              >
                <img src={pepeImg} alt="" />
              </button>
            </NavLink>
            <NavLink to="topG-potato">
              <button
                className={
                  location.pathname === "/token/topG-potato"
                    ? "myland-active"
                    : "myland-de-active"
                }
                style={{ backgroundColor: "transparent" }}
              >
                <img src={topGImg} alt="" />
              </button>
            </NavLink>
          </div>
        </div>
        {/* {(change.dollerPotato && <DollerPotato />) ||
          (change.pepePotato && <PepePotato />)} */}

        {/* <TableComponent_3
          img={EthImg}
          coin_img={coinMarket}
          imgWid="initial"
          // verify={VerifiedLogo}
          // img_1={BianceImg}
          th={ThData_4}
          td={TdData_4}
          widthStyle={"0px"}
          textCenter="center"
          textAlign="left"
        /> */}
        {/* <div className="withdraw-input-wrapper-up">
          <div className="input-box">
            <div className="uniSwap-wrapper">
              <img src={UniSwapBigLogo} alt="uniswap" width={60} />
              <input type="number" placeholder="0" />
              <button>
                <img src={SmallBuyLogo} alt="" />
              </button>
            </div>
            <div className="uniSwap-wrapper">
              <img
                src={DiLogo}
                alt=""
                width={120}
                style={{ margin: "29px 0px 11px" }}
              />
              <button>
                <img src={SmallBuyLogo} alt="" />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                width: "68%",
                justifyContent: "center",
              }}
            >
              <img src={VerifiedLogo} alt="" />
            </div>
          </div>
        </div> */}
        {/* <LiquidityNFT maxWid="800px" /> */}
        {/* <div className="mint-table-wrapper">
          <div className="mint-table">
            <div className="bianceImg">
              <img src={binance} alt="binance" />
            </div>
            <div className="mint-table-th">
              <div className="th-text-color">Total Staked</div>
              <div className="th-text-color">My Stake</div>
              <div className="th-text-color">APR 5%</div>
              <div className="th-text-color">My Available</div>
            </div>
            <hr />
            <div className="mint-table-td">
              <div className="td-text-color">0bn</div>
              <div className="td-text-color">0</div>
              <div className="td-text-color">0</div>
              <div className="td-text-color">0bn</div>
            </div>
          </div>
        </div> */}
        {/* <TableComponent_3
          img={SmallBSCImg}
          th={ThData2}
          td={TdData2}
          maxWid="600px"
          marg="0px auto"
          textAlign="center"
        /> */}

        {/* <div className="withdraw-input-wrapper-down">
          <div className="input-box">
            <input type="number" placeholder="0" />
            <button>
              <img src={claimBtn} alt="claim" />
            </button>
          </div>

          <div className="input-box">
            <input type="number" placeholder="0" />
            <button>
              <img src={stakeBtn} alt="stake" />
            </button>
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="0"
              style={{ maxWidth: "113px" }}
            />
            <button>
              <img src={burnBtn} alt="burn" />
            </button>
          </div>
        </div> */}
      </div>
      <Outlet />
    </PotatoContainer>
  );
};

export default PotatoToken;
