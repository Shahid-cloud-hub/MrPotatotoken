import React from "react";
import { useEffect } from "react";
import Select from "react-select";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MainContainer } from "./MerchandiseStyle";

const Product = () => {
  const { state } = useLocation();
  const [active, setActive] = useState(state?.bigImg ? "whitebox" : "blackbox");
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactIntialValues = {
    productTitle: state.productTitle,
    productAmount: state.productCheckoutAmount,
    productImg: state.addToCartImg_1,
    productSize: selectedOption,
  };

  const [data, setData] = useState(contactIntialValues);

  useEffect(() => {
    setData({
      ...data,
      selectedOption,
    });
  }, [selectedOption]);

  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      background: "black",
      borderRadius: "8px",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      border: "1px solid #fff",
      background: isFocused ? "gray" : isSelected ? "black" : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  return (
    <>
      <MainContainer>
        <div className="background">
          <div className="bannerImage">
            {/* <h2>MR POTATO MERCHANDISE SHOP</h2> */}
          </div>
          <div className="horizontal-row">
            <hr />
          </div>
          <div className="product-wrapper">
            <div className="img-wrapper">
              <img
                src={active === "whitebox" ? state.bigImg : state.bigSecImg}
                alt={state.title}
              />
            </div>
            <div className="checkout-wrapper">
              <div>
                <h1 className="product_title">{state.productTitle}</h1>
                <span>{state.productCheckoutAmount}</span>
              </div>
              <div className="gift-img">
                <img src={state?.gift_img} alt="" />
              </div>
              <div className="colorBoxes--wrapper">
                <span>COLOR</span>
                <div className="colorBoxes">
                  {state?.bigImg && (
                    <div
                      className={`whitebox ${
                        active === "whitebox" && "m-active"
                      }`}
                      onClick={() => setActive("whitebox")}
                    />
                  )}
                  <div
                    className={`blackbox ${active === "blackbox" && "active"}`}
                    onClick={() => setActive("blackbox")}
                  />
                </div>
              </div>
              <div>
                {state.sizes && (
                  <Select
                    defaultValue={{
                      value: "Pick your size",
                      label: "Pick your size",
                    }}
                    name="colors"
                    options={state.sizes}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    styles={colourStyles}
                    onChange={setSelectedOption}
                  />
                )}
              </div>
              <div className="checkout-btn">
                <NavLink to={{ pathname: "/cart", state: data }}>
                  <button>ADD TO CART</button>
                </NavLink>
              </div>
              <hr />
              <div className="prod-text">
                <span>PRODUCT INFO</span>
                <span>{state.productInfo}</span>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Product;
