import { EthCArdContainer } from "../SuperRare.style";
import potato from "../../../assets/images/Super-Rare/potato-mini.svg";
import stick from "../../../assets/images/Super-Rare/stick.png";
import pinksale from "../../../assets/images/Super-Rare/pinksale.svg";
import trading from "../../../assets/images/Super-Rare/trading.png";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Loading/Loading";
// card images
import bnb from "../../../assets/images/Super-Rare/bnb.svg";
import dextools from "../../../assets/images/Super-Rare/dextools.svg";
import CoinMarketCap from "../../../assets/images/Super-Rare/CoinMarketCap.svg";
import pancake from "../../../assets/images/Super-Rare/pancakeswap.svg";
import eth from "../../../assets/images/Super-Rare/eth.svg";
import mex from "../../../assets/images/Super-Rare/mex.svg";
import pinkUnicorn from "../../../assets/images/Super-Rare/pink-unicorn.svg";
import DigiFinex from "../../../assets/images/Super-Rare/DigiFinex.svg";
import etherscan from "../../../assets/images/Super-Rare/etherscan.svg";
import chainlink from "../../../assets/images/Super-Rare/chainlink.png";
// import { useSelector } from "react-redux";
import { convertAddress } from "../../../hooks/convertAddress";

const TokenCards = () => {
  // const { metaMaskAddress } = useSelector((state) => state.wallet);

  const { data, loading } = useFetch(
    "https://dull-puce-wildebeest-belt.cyclic.app/create-token"
  );

  return (
    <EthCArdContainer>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : data?.length > 0 ? (
        <div className="token-card-conainer">
          {loading ? (
            <div className="loading">
              <Loading />
            </div>
          ) : (
            data?.map((item, index) => {
              return (
                <div className="cryptoAi" key={index}>
                  <div className="head">
                    <img src={item?.title_picture} alt="titleimg" />
                    <div className="scoreRank">
                      <div className="score">
                        <img
                          src={item?.token_type === "bnb" ? bnb : eth}
                          alt="bnb"
                        />
                        <img src={potato} alt="potato" />
                        <span id="brown">Score:</span>
                        <span id="white">0</span>
                      </div>
                      <div className="score">
                        <span id="brown">Rank:</span>
                        <span id="white">0</span>
                      </div>
                    </div>
                  </div>
                  <img src={item?.picture_of_token} alt="mainImg" />
                  <div className="stats">
                    <div className="Address">
                      <div className="cryptoId">
                        <span>
                          {convertAddress(item?.smart_contract_address)}
                        </span>
                        <img src={stick} alt="stick" />
                      </div>
                      {item?.token_type === "eth" &&
                        item?.token_name === "mrPotato" && (
                          <div className="scoreRank">
                            <a target="_blank" rel="noreferrer">
                              {" "}
                              <img src={mex} alt="mex" />{" "}
                            </a>

                            <a
                              href={item.uniswap_link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={pinkUnicorn} alt="pinkUnicorn" />{" "}
                            </a>

                            <a
                              href={item.digifinix_link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <img src={DigiFinex} alt="DigiFinex" />
                            </a>

                            <a
                              href={item.etherscan_link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <img src={etherscan} alt="etherscan" />
                            </a>

                            <a
                              href={item.cmc_link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              <img src={CoinMarketCap} alt="CoinMarketCap" />
                            </a>
                          </div>
                        )}
                      {item?.token_type === "bnb" && item?.token_name && (
                        <div className="scoreRank">
                          <a
                            href={item.bsc_scan_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={chainlink} alt="chainlink" />
                          </a>
                          <a
                            href={item.dextools_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={dextools} alt="dextools" />{" "}
                          </a>
                          <a
                            href={item.cmc_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={CoinMarketCap} alt="CoinMarketCap" />{" "}
                          </a>
                          <a
                            href={item.pancakes_swap_link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src={pancake} alt="pancake" />{" "}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="priceButton">
                    {item?.token_name === "mrPotato" ||
                    item?.token_name === "MrPepe" ? (
                      <>
                        <div className="greenbtn">
                          <div className={"sale-price"}>
                            {/* <img src={pinksale} alt="pinksale" />
                          <span>PinkSale</span> */}

                            <div className="turnover">
                              24h Turnover
                              <span>
                                <img src={trading} alt="trading" />
                                0.00
                              </span>
                            </div>
                          </div>
                          <div className={"sale-price"}>
                            <div className="turnover">
                              Market Cap
                              <span>
                                {" "}
                                <img src={trading} alt="trading" />
                                0.00
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="greenbtn">
                          <div className={"sale-price"}>
                            <div className="turnover">
                              Hodlers
                              <span>
                                {" "}
                                <img src={trading} alt="trading" />0
                              </span>
                            </div>
                          </div>
                          <div className={"sale-price"}>
                            <div className="turnover">
                              DEX Trades
                              <span>
                                {" "}
                                <img src={trading} alt="trading" />0
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="greenbtn">
                          <div className={"sale-price"}>
                            <img src={pinksale} alt="pinksale" />
                            <span>
                              {" "}
                              {item?.token_name === "TopG"
                                ? "PinkSale"
                                : "Coming Soon"}
                            </span>
                          </div>
                          <div className={"sale-price"}>
                            <img src={pinksale} alt="pinksale" />
                            <span>
                              {" "}
                              {item?.token_name === "TopG"
                                ? "PinkSale"
                                : "Coming Soon"}
                            </span>{" "}
                          </div>
                        </div>
                        <div className="greenbtn">
                          <div className={"sale-price"}>
                            <img src={pinksale} alt="pinksale" />
                            <span>
                              {" "}
                              {item?.token_name === "TopG"
                                ? "PinkSale"
                                : "Coming Soon"}
                            </span>{" "}
                          </div>
                          <div className={"sale-price"}>
                            <img src={pinksale} alt="pinksale" />
                            <span>
                              {" "}
                              {item?.token_name === "TopG"
                                ? "PinkSale"
                                : "Coming Soon"}
                            </span>{" "}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        <div className="no-card-founded">
          <h2>No Record Founded</h2>
        </div>
      )}
    </EthCArdContainer>
  );
};

export default TokenCards;
