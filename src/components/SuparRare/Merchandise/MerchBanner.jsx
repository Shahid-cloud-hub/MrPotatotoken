import React, { useState, useEffect } from "react";
import { MainContainer } from "./MerchandiseStyle";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { selection, products } from "../../../data/products";
import { addToCart, getCartTotalAmount } from "../../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactPopUpModel from "../../ReactPopUpModel/ReactPopUpModel";
import styled from "styled-components";

const MerchBanner = () => {
  const [check, setCheck] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [selectedPro, setSelectedPro] = useState(products[0]);
  const [active, setActive] = useState(0);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/merchandise" || pathname === "/merchandise/") {
      setHide(false);
    } else {
      setHide(true);
    }
  }, [pathname]);

  const [modalOpen, setModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  // SelectedProductDetails
  function selectedProDetail(id) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        setSelectedPro(products[i]);
        setActive(id);
      }
    }
    return {}; // Return null if no matching object is found
  }

  // ProductSize
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleClick = () => {
    if (selectedSize) {
      dispatch(addToCart({ selectedPro, selectedSize, navigate }));
      dispatch(getCartTotalAmount());
    } else {
      toast.info("Select Size", { theme: "colored" });
    }
  };

  const handleImageClick = (src) => {
    setModalOpen(true);
    setImageSrc(src);
  };

  const closeModal = () => {
    setModalOpen(false);
    setImageSrc("");
  };

  // Set the initial state to the first menu item when component mounts
  useEffect(() => {
    if (selection.length > 0) {
      setCheck(selection[0]?.id);
    }
  }, [selection]);

  const handle = (id) => {
    setCheck(id);
    selectedProDetail(id);
  };

  return (
    <MainContainer>
      {!hide && (
        <>
          <div className="auto-selected-prod-img-wrapper">
            <span>Select</span>
            <div className="selected-image-wrapper">
              {selection?.map(({ id, img }, index) => (
                <img
                  src={img}
                  className={check === id ? "active" : "de-active"}
                  alt="select-pro"
                  onClick={() => handle(id)}
                  key={id}
                />
              ))}
            </div>
          </div>
          <div className="backgroundMerchandise">
            <div key={selectedPro?.id} className="prod-item">
              <div className="prod-img-wrapper">
                <div className="image-bg">
                  <ImageContainer>
                    <img
                      src={selectedPro?.imgSrc}
                      onClick={() => handleImageClick(selectedPro?.imgSrc)}
                      alt="mainImg1"
                    />
                  </ImageContainer>
                </div>
              </div>
              <div className="prod-description">
                <div className="prod-title">
                  <span>{selectedPro?.prodName}</span>
                  <span>${selectedPro?.price}</span>
                </div>
                <span className="name">{selectedPro?.name}</span>
                <span className="sizes">Sizes</span>
                <div className="sizes-container">
                  {selectedPro?.size?.map((size, index) => (
                    <div
                      key={index}
                      className={`size-box ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
                <button onClick={handleClick}>Add to cart</button>
                <span className="shipping">Shipping*</span>
                <span className="shipping_desc">
                  To get accurate shipping information Edit Location
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      {modalOpen && <ReactPopUpModel src={imageSrc} closeModal={closeModal} />}
      {hide && <Outlet />}
    </MainContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
  img {
    transition: transform 0.3s ease-out;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

export default MerchBanner;
