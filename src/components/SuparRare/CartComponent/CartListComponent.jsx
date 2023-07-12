import React, { useState, useEffect } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CartContainer,
  CartItemsContainer,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "../SuperRare.style";
import WhiteArrow from "../../../assets/images/cart/WhiteArrow.png";
import BlackArrow from "../../../assets/images/cart/BlackArrow.png";
import Dustbin from "../../../assets/images/cart/Dustbin.png";
import Checkout from "../../../assets/images/cart/Checkout.png";
import Up from "../../../assets/images/MerchandiseImages/Up.png";
import Down from "../../../assets/images/MerchandiseImages/Down.png";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  getCartTotal,
  getCartTotalAmount,
  incDecQuantity,
  removeFromCart,
} from "../../../redux/cart/cartSlice";
import useBreakpoint from "../../../hooks/useBreakpoints";
import TabCartList from "./TabCartList";

const CartListComponent = () => {
  const [openId, setOpenId] = useState(null);
  const { isDesktop, isSmallDesktop, isTablet, isMobile, isSmallMobile } =
    useBreakpoint();
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const { cartItems, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    dispatch(getCartTotalAmount());
    dispatch(getCartTotal());
  }, [cartItems]);

  useEffect(() => {
    if (pathname === "/merchandise" || pathname === "/merchandise/cart") {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [pathname]);

  return (
    <>
      {!hide && (
        <CartContainer>
          <div onClick={() => navigate("../")}>
            <img src={BlackArrow} alt="black-arrow" />
            <img src={WhiteArrow} alt="white-arrow" />
          </div>
          <h1>Cart</h1>
          <p>{totalQuantity} items</p>
          <div className="cart-wrapper">
            {isDesktop || isSmallDesktop ? (
              <div className="cart-items">
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
                    <CartItemsContainer key={id}>
                      <div className="item-card">
                        <div className="item-left">
                          <div className="item-img">
                            {" "}
                            <img src={imgSrc} alt="item-pic" />
                          </div>
                          <div className="item-details">
                            <h1>{prodName}</h1>
                            <p>{name}</p>
                            <DropDownContainer>
                              <DropDownHeader>
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
                                  <DropDownList id={id} openId={openId}>
                                    {size?.length &&
                                      size?.map((option, index) => (
                                        <ListItem key={index}>
                                          {option}
                                        </ListItem>
                                      ))}
                                  </DropDownList>
                                </DropDownListContainer>
                              )}
                            </DropDownContainer>
                          </div>
                        </div>
                        <div className="item-right">
                          <div className="price">
                            <p>
                              $
                              {itemTotalPrice
                                ? itemTotalPrice.toFixed(2)
                                : price.toFixed(2)}
                            </p>
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
                    </CartItemsContainer>
                  )
                )}
              </div>
            ) : (
              <TabCartList />
            )}
            <div className="check-sec">
              <div className="sub-total">
                <span>Subtotal</span>
                <h5>{totalAmount?.toFixed(2)}</h5>
              </div>
              <button
                className="checkout-btn"
                onClick={() => navigate("checkout")}
              >
                <p>Checkout</p>
                <img src={Checkout} alt="Checkout" />
              </button>
            </div>
          </div>
        </CartContainer>
      )}
      {hide && <Outlet />}
    </>
  );
};

export default CartListComponent;
