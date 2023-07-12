import React from "react";
import { CheckoutContainer } from "../../SuperRare.style";
import WhiteArrow from "../../../../assets/images/cart/WhiteArrow.png";
import BlackArrow from "../../../../assets/images/cart/BlackArrow.png";
import Copy from "../../../../assets/images/merchandiseImages/Checkout/Copy.png";
import RightArrow from "../../../../assets/images/merchandiseImages/Checkout/RightArrow.png";
import Location from "../../../../assets/images/merchandiseImages/Checkout/Location.png";
import Tick from "../../../../assets/images/merchandiseImages/Checkout/Tick.png";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <CheckoutContainer>
      <div onClick={() => navigate("/merchandise/cart")}>
        <img src={BlackArrow} alt="black-arrow" />
        <img src={WhiteArrow} alt="white-arrow" />
      </div>
      <h1>Checkout</h1>
      <p>3 items</p>
      <div className="sec-wrapper">
        <div className="left-sec-wrapper">
          {/* left-first-section */}
          <div className="shipping-info">
            <div className="info">
              <span>Shiping Information</span>
              <div className="name-address">
                <h5>Gustavo Septimus</h5>
                <div className="address">
                  <span style={{ alignSelf: "flex-start" }}>
                    <img src={Location} alt="Location" />
                  </span>
                  <span>608 Rodney Street, Harvester MO Missouri 63301</span>
                </div>
              </div>
            </div>
            <img src={Copy} alt="Copy" style={{ alignSelf: "flex-start" }} />
          </div>
          {/* left-second-section */}
          <div className="payment-method-wrapper">
            <div className="shipping-info">
              <div className="info">
                <span>Select Payment Method</span>
                <div className="name-address">
                  <h5>Gustavo Septimus</h5>
                  <div className="address">
                    <span style={{ alignSelf: "flex-start" }}>
                      <img src={Location} alt="Location" />
                    </span>
                    <span>608 Rodney Street, Harvester MO Missouri 63301</span>
                  </div>
                </div>
              </div>
              <img src={Copy} alt="Copy" style={{ alignSelf: "flex-start" }} />
            </div>
            <div className="pay-method">
              <div className="card">
                <div style={{ alignSelf: "flex-end" }}>
                  <img src={Tick} alt="Tick" />
                </div>
                <div className="card-Info">
                  <p>5135 2159 3169 1231</p>
                  <p>Gustavo Septimus</p>
                </div>
              </div>
              <div className="crypto">
                <h5>Cryptocurrency</h5>
                <div className="crypto-Info">
                  <p>Wallet address</p>
                  <p>000000000000000000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right-first-section */}

        <div className="right-sec-wrapper">
          <div className="shipping-info">
            <div className="info">
              <span>Courier Service</span>
              <div className="name-address">
                <h5>DHL Express</h5>
                <div className="address">
                  <span>Delivered on Next Possible Day</span>
                </div>
              </div>
            </div>
            <img
              src={RightArrow}
              alt="RightArrow"
              style={{ alignSelf: "center" }}
            />
          </div>
          {/* right-second-section */}
          <div className="order-total">
            <div className="total">
              <div className="values">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="values">
                <span>Delivery</span>
                <span>$0.00</span>
              </div>
              <div className="values">
                <span>VAT (18%)</span>
                <span>$0.00</span>
              </div>
              <div className="line"> </div>
              <div className="values">
                <span style={{ color: "#fff" }}>Shopping Cart Total:</span>
                <span style={{ color: "#fff" }}>$0.00</span>
              </div>
            </div>
            <div className="order-btn-bg">
              <button className="order-btn" style={{ boxShadow: "#fff" }}>
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  );
};

export default Checkout;
