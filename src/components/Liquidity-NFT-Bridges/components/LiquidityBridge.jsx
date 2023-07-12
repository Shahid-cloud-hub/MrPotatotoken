import React, { useState } from "react";
import { LiquidityBridContainer } from "./LiqNFTStyle";
import BSCImg from "../../../assets/images/tokenomics/smallIcons/PotatoToken_1.webp";
import PolygonImg from "../../../assets/images/tokenomics/smallIcons/mrPotato_1.webp";
import ShipImg from "../../../assets/images/tokenomics/smallIcons/ship.webp";
import MrPotatoNFTCards from "../MrPotatoNFTCards";
import useBreakpoint from "../../../hooks/useBreakpoints";

const LiquidityBridge = () => {
    const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();

    const [showField, setShowField] = useState({
        showFirWithLast: true,
        showSecWithSecLast: true,
        showThirWithSec: true,
        showForwithFirst: true,
        original: false,
    });

    const [show, setShow] = useState(false);

    return (
        <LiquidityBridContainer>
            <div className="main-wrapper">
                <div className="select-payment-wrapper">
                    {/* {showField.showFirWithLast && (
                        <div
                            className={
                                showField.original ? "addWrap" : "select-item-1"
                            }
                        >
                            {(isMobile || isSmallMobile) && (
                                <>
                                    <span>Swap From Potato Token:</span>
                                    <button
                                        onClick={() =>
                                            setShowField((prevState) => ({
                                                ...prevState,
                                                showFirWithLast: true,
                                                showSecWithSecLast: false,
                                                showThirWithSec: false,
                                                showForwithFirst: true,
                                                original: true,
                                            }))
                                        }
                                        className={
                                            showField.original
                                                ? "active-color"
                                                : ""
                                        }
                                    >
                                        <img src={BSCImg} alt="BSC" />
                                        <span>BSC</span>
                                    </button>
                                    <label
                                        className={
                                            showField.original ? "show" : ""
                                        }
                                    >
                                        <input
                                            type="number"
                                            className={
                                                showField.original ? "show" : ""
                                            }
                                            placeholder="10"
                                        />
                                        <span>You will Give</span>
                                    </label>
                                </>
                            )}
                            {(isDesktop || isTablet) && (
                                <>
                                    <span>Swap From Potato Token:</span>
                                    <div className="tablet--view">
                                        <button
                                            onClick={() =>
                                                setShowField((prevState) => ({
                                                    ...prevState,
                                                    showFirWithLast: true,
                                                    showSecWithSecLast: false,
                                                    showThirWithSec: false,
                                                    showForwithFirst: true,
                                                    original: true,
                                                }))
                                            }
                                            className={
                                                showField.original
                                                    ? "active-color"
                                                    : ""
                                            }
                                        >
                                            <img src={BSCImg} alt="BSC" />
                                            <span>BSC</span>
                                        </button>
                                        <label
                                            className={
                                                showField.original ? "show" : ""
                                            }
                                        >
                                            <input
                                                type="number"
                                                className={
                                                    showField.original
                                                        ? "show"
                                                        : ""
                                                }
                                                placeholder="10"
                                            />
                                            <span>You will Give</span>
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>
                    )} */}

                    {showField.showSecWithSecLast && (
                        <div
                            className={
                                showField.original ? "addWrap" : "select-item-1"
                            }
                        >
                            {(isMobile || isSmallMobile) && (
                                <>
                                    <span>Swap From Mr Potato NFT:</span>
                                    <button
                                        onClick={() =>
                                            setShowField((prevState) => ({
                                                ...prevState,
                                                showFirWithLast: false,
                                                showSecWithSecLast: true,
                                                showThirWithSec: true,
                                                showForwithFirst: false,
                                                original: true,
                                            }))
                                        }
                                        className={
                                            showField.original
                                                ? "active-color"
                                                : ""
                                        }
                                    >
                                        <img src={PolygonImg} alt="Polygon" />
                                        <span>Polygon</span>
                                    </button>
                                    <label
                                        className={
                                            showField.original ? "show" : ""
                                        }
                                    >
                                        <input
                                            type="number"
                                            className={
                                                showField.original ? "show" : ""
                                            }
                                            placeholder="10"
                                        />
                                        <span>You will Give</span>
                                    </label>
                                </>
                            )}
                            {(isDesktop || isTablet) && (
                                <>
                                    <span>Swap From Mr Potato NFT:</span>
                                    <div className="tablet--view">
                                        <button
                                            onClick={() =>
                                                setShowField((prevState) => ({
                                                    ...prevState,
                                                    showFirWithLast: false,
                                                    showSecWithSecLast: true,
                                                    showThirWithSec: true,
                                                    showForwithFirst: false,
                                                    original: true,
                                                }))
                                            }
                                            className={
                                                showField.original
                                                    ? "active-color"
                                                    : ""
                                            }
                                        >
                                            <img
                                                src={PolygonImg}
                                                alt="Polygon"
                                            />
                                            <span>Polygon</span>
                                        </button>
                                        <label
                                            className={
                                                showField.original ? "show" : ""
                                            }
                                        >
                                            <input
                                                type="number"
                                                className={
                                                    showField.original
                                                        ? "show"
                                                        : ""
                                                }
                                                placeholder="10"
                                            />
                                            <span>You will Give</span>
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {showField.showSecWithSecLast && (
                        <div
                            className={
                                showField.original ? "addWrap" : "select-item-1"
                            }
                        >
                            {(isMobile || isSmallMobile) && (
                                <>
                                    <span>Swap To Potato Token:</span>
                                    <button
                                        onClick={() =>
                                            setShowField((prevState) => ({
                                                ...prevState,
                                                showFirWithLast: false,
                                                showSecWithSecLast: true,
                                                showThirWithSec: true,
                                                showForwithFirst: false,
                                                original: true,
                                            }))
                                        }
                                        className={
                                            showField.original
                                                ? "active-color"
                                                : ""
                                        }
                                    >
                                        <img src={BSCImg} alt="BSC" />
                                        <span>BSC</span>
                                    </button>
                                    <label
                                        className={
                                            showField.original ? "show" : ""
                                        }
                                    >
                                        <input
                                            type="number"
                                            className={
                                                showField.original ? "show" : ""
                                            }
                                            placeholder="10"
                                        />
                                        <span>You will Get</span>
                                    </label>
                                </>
                            )}
                            {(isDesktop || isTablet) && (
                                <>
                                    <span>Swap To Potato Token:</span>
                                    <div className="tablet--view">
                                        <button
                                            onClick={() =>
                                                setShowField((prevState) => ({
                                                    ...prevState,
                                                    showFirWithLast: false,
                                                    showSecWithSecLast: true,
                                                    showThirWithSec: true,
                                                    showForwithFirst: false,
                                                    original: true,
                                                }))
                                            }
                                            className={
                                                showField.original
                                                    ? "active-color"
                                                    : ""
                                            }
                                        >
                                            <img src={BSCImg} alt="BSC" />
                                            <span>BSC</span>
                                        </button>
                                        <label
                                            className={
                                                showField.original ? "show" : ""
                                            }
                                        >
                                            <input
                                                type="number"
                                                className={
                                                    showField.original
                                                        ? "show"
                                                        : ""
                                                }
                                                placeholder="10"
                                            />
                                            <span>You will Get</span>
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* {showField.showForwithFirst && (
                        <div
                            className={
                                showField.original ? "addWrap" : "select-item-1"
                            }
                        >
                            {(isMobile || isSmallMobile) && (
                                <>
                                    <span>Swap To Potato Token:</span>
                                    <button
                                        onClick={() =>
                                            setShowField((prevState) => ({
                                                ...prevState,
                                                showFirWithLast: true,
                                                showSecWithSecLast: false,
                                                showThirWithSec: false,
                                                showForwithFirst: true,
                                                original: true,
                                            }))
                                        }
                                        className={
                                            showField.original
                                                ? "active-color"
                                                : ""
                                        }
                                    >
                                        <img src={PolygonImg} alt="Polygon" />
                                        <span>Polygon</span>
                                    </button>
                                    <label
                                        className={
                                            showField.original ? "show" : ""
                                        }
                                    >
                                        <input
                                            type="number"
                                            className={
                                                showField.original ? "show" : ""
                                            }
                                            placeholder="10"
                                        />
                                        <span>You will Get</span>
                                    </label>
                                </>
                            )}
                            {(isDesktop || isTablet) && (
                                <>
                                    <span>Swap To Mr Potato NFT:</span>
                                    <div className="tablet--view">
                                        <button
                                            onClick={() =>
                                                setShowField((prevState) => ({
                                                    ...prevState,
                                                    showFirWithLast: true,
                                                    showSecWithSecLast: false,
                                                    showThirWithSec: false,
                                                    showForwithFirst: true,
                                                    original: true,
                                                }))
                                            }
                                            className={
                                                showField.original
                                                    ? "active-color"
                                                    : ""
                                            }
                                        >
                                            <img
                                                src={PolygonImg}
                                                alt="Polygon"
                                            />
                                            <span>Polygon</span>
                                        </button>
                                        <label
                                            className={
                                                showField.original ? "show" : ""
                                            }
                                        >
                                            <input
                                                type="number"
                                                className={
                                                    showField.original
                                                        ? "show"
                                                        : ""
                                                }
                                                placeholder="10"
                                            />
                                            <span>You will Get</span>
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>
                    )} */}
                </div>
                <div className="opensea">
                    <div className="opensea-item">
                        <img src={ShipImg} alt="OpenSea" />
                        <span>
                            50% Mr POTATO NFT OpenSea Marketplace Commissions
                            PAID TO ERC20 POTATO HOLDERS IN MATIC
                        </span>
                    </div>
                    {showField.original && (
                        <div className="enter-amount-btn">
                            <button onClick={() => setShow((prev) => !prev)}>
                                {show ? "Select NFT's" : "Connect Wallet"}
                            </button>
                            <span>Swap Tax $0.01</span>
                        </div>
                    )}
                </div>
                <div className="select-NFT-Cards">
                    {show && <MrPotatoNFTCards />}
                </div>
            </div>
        </LiquidityBridContainer>
    );
};

export default LiquidityBridge;
