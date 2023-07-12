import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLocation } from "react-router-dom";

import { MainContainer } from "../MerchandiseStyle";
import InfoIcon from "../../../../assets/images/Info/code.svg";
import InfoClose from "../../../../assets/images/Info/close.webp";

const AddToCart = () => {
  const { state } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainContainer>
        <div className="background" style={{ paddingBottom: "100px" }}>
          <div className="bannerImage">
            <h2>MR POTATO MERCHANDISE SHOP</h2>
          </div>
          <div className="horizontal-row">
            <hr />
          </div>
          <div className="product-title">
            <h2>Customer details delivery order form</h2>
            <div className="closeImg">
              <div>
                <img src={InfoClose} className="InfoBoxImg" alt="Close Icon" />
              </div>
            </div>
          </div>
          <div className="add-to-cart-wrapper">
            <form>
              <div className="personal--information">
                <label>Personal Information</label>
                <div className="info--item-1">
                  <div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="location--item-2">
                  <input type="text" placeholder="New York, United States" />
                </div>
                <div className="info--item-3">
                  <label>Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                  <div className="info--item-4">
                    <img src={InfoIcon} alt="" width={12} />
                    <span>
                      Any special requirements{" "}
                      <span className="asterisk">*</span>
                    </span>
                  </div>
                  <textarea className="textarea-section" placeholder="Text" />
                  <div className="info-item-5">
                    <label>Phone Number</label>
                    <PhoneInput
                      id="phone"
                      name="phone"
                      type="number"
                      country="ca"
                      countryCodeEditable={true}
                      placeholder="Phone number"
                      required
                      inputStyle={{
                        height: "45px",
                        padding: "12px 80px",
                        color: "eceaea",
                        background: "#fff",
                        transition: "0.8s",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="product-info-wrapper">
              <label>Product Details</label>
              <div className="img-section">
                <img src={state?.productImg} alt="" />
              </div>
              <div className="info-section">
                <div className="info--item-1">
                  <div className="color-section">
                    <img src={InfoIcon} alt="" width={12} />
                    <label>Color</label>
                    <input placeholder="White Color" />
                  </div>
                  <div className="size-section">
                    <img src={InfoIcon} alt="" width={12} />
                    <label>Size</label>
                    <input placeholder={state?.selectedOption?.label} />
                  </div>
                </div>
                <div className="price-box">
                  <div className="price-label">
                    <img src={InfoIcon} alt="" width={12} />
                    <label>Price ($)</label>
                  </div>
                  <input placeholder={state?.productAmount} />
                </div>
              </div>
              <div className="edit-btn">
                <button>Edit</button>
              </div>
            </div>
          </div>
          {!show && (
            <div className="accetp-btn">
              <button onClick={() => setShow((prev) => !prev)}>Accept</button>
            </div>
          )}
          {show && (
            <div className="congrats-banner">
              {/* <img src={CongratsBanner} alt="Congrats Banner" /> */}
            </div>
          )}
        </div>
      </MainContainer>
    </>
  );
};

export default AddToCart;
