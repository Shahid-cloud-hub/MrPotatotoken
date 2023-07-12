import React, { useState, useEffect } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CartTab,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "../SuperRare.style";
import Dustbin from "../../../assets/images/cart/Dustbin.png";
import Up from "../../../assets/images/MerchandiseImages/Up.png";
import Down from "../../../assets/images/MerchandiseImages/Down.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  getCartTotalAmount,
  incDecQuantity,
  removeFromCart,
} from "../../../redux/cart/cartSlice";

const TabCartList = () => {
  const [openId, setOpenId] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(getCartTotalAmount());
    dispatch(getCartTotal());
  }, [cartItems]);

  return (
    <>
      {cartItems.map(
        ({
          id,
          imgSrc,
          prodName,
          name,
          itemTotalPrice,
          price,
          quantity,
          selectedSize,
          size,
        }) => (
          <CartTab>
            <div className="img-section">
              <img src={imgSrc} alt="Product1" />
            </div>
            <div className="proInfo-section">
              <div className="pro-title">
                <h1>{prodName}</h1>
                <h5>{name}</h5>
              </div>
              <div className="price-sec">
                <p>
                  {" "}
                  $
                  {itemTotalPrice
                    ? itemTotalPrice.toFixed(2)
                    : price.toFixed(2)}{" "}
                </p>
              </div>
              <div className="last-sec">
                <div className="tab-dropdown">
                  <DropDownContainer style={{ width: "100%" }}>
                    <DropDownHeader style={{ width: "100%", height: "38px" }}>
                      <h5>{selectedSize}</h5>
                      <ArrowDownIcon
                        id={id}
                        openId={openId}
                        onClick={() => setOpenId(id)}
                      >
                        <img src={Down} alt="ArrowDown" />
                      </ArrowDownIcon>
                      <ArrowUpIcon
                        id={id}
                        openId={openId}
                        onClick={() => setOpenId(null)}
                      >
                        <img src={Up} alt="ArrowUp" />
                      </ArrowUpIcon>
                    </DropDownHeader>
                    {openId == id && (
                      <DropDownListContainer>
                        <DropDownList
                          id={id}
                          openId={openId}
                          style={{ padding: "0px" }}
                        >
                          {size?.length &&
                            size?.map((option, index) => (
                              <ListItem key={index}>{option}</ListItem>
                            ))}
                        </DropDownList>
                      </DropDownListContainer>
                    )}
                  </DropDownContainer>
                </div>
                <div className="counter">
                  <p
                    onClick={() => {
                      dispatch(incDecQuantity({ type: "INC", id }));
                    }}
                  >
                    +
                  </p>
                  <p>{quantity}</p>
                  <p
                    onClick={() => {
                      dispatch(incDecQuantity({ type: "DEC", id }));
                    }}
                  >
                    -
                  </p>
                </div>
                <div
                  className="remove-item"
                  onClick={() => {
                    dispatch(removeFromCart({ id }));
                  }}
                >
                  <img src={Dustbin} alt="dustbin" />
                </div>
              </div>
            </div>
          </CartTab>
        )
      )}
    </>
  );
};

export default TabCartList;
