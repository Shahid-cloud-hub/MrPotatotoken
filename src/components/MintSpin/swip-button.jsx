import styled from "styled-components";

const Item = styled.div`
  margin-top: 5px;

  .swipe-button {
    min-height: 20px;
    border-radius: 60px;
    border: 0;
    font-size: 7.5px;
    width: 100%;
    min-height: 20px;
    position: relative;
    padding: 30px 0px;
    box-shadow: none;
  }
  .swipe-button:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 80px;
    left: 50%;
    transform: translateX(-50%);
    top: 15px;
    border-top: 3px dotted #fff;
  }

  .swipe-button.btn-white {
    background: #03011642;
    color: #fff;
    text-transform: uppercase;
  }
  .swipe-button.btn-primary,
  .swipe-button.btn-primary:active {
    background: #b3b1d9;
    color: white;
    text-transform: uppercase;
    padding: 6px;
    margin-bottom: 20px;
  }
  .swipe-button.btn-primary:after {
    position: absolute;
    height: 2px;
    width: 80px;
    left: 50%;
    transform: translateX(-50%);
    top: 15px;
    border-top: 3px dotted #fff;
  }
`;

// eslint-disable-next-line react/prop-types
function SwipButton({ type, className, childData }) {
  return (
    <Item>
      <button
        className={`swipe-button ${type === "primary" && "btn-primary"} ${
          type === "white" && "btn-white"
        } ${className}`}
      >
        {childData}
      </button>
    </Item>
  );
}

export default SwipButton;
