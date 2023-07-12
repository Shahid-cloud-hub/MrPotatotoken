import React from "react";
import styled from "styled-components";
import MintPlay from "../../images/stylish-button/button.png";
import SmallKing from "../../images/mr-potato-king-logo.png";

const ContainerBtn = styled("div")`
  background-image: url(${MintPlay});
  background-size: 222px 84px;
  background-repeat: no-repeat;
  max-width: 250px;
  width: 100%;
  min-height: 150px;
  display: flex;
  margin: 20px;
  cursor: pointer;

  &:hover {
    transform: translateY(10px);
    transition: all 0.5s;
  }

  .kingImg {
    width: 50px !important;
  }

  span {
    text-align: center;
    color: #effbf0;
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    font-family: "Rammetto One", cursive;
    line-height: 187%;
    -webkit-text-stroke: 1px #000000;
  }

  .move {
    display: flex;
    transform: translate(38px, 19px);
    height: 44px;
  }
`;

const StylishButton = () => {
  return (
    <ContainerBtn>
      <div className="move">
        <div>
          <img src={SmallKing} className="kingImg" alt="Mintplay" />
        </div>
        <span>MINT</span>
      </div>
    </ContainerBtn>
  );
};

export default StylishButton;
