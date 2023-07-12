import React from "react";
import { StakeContainer } from "./StyleSheet";

const Stake = (props) => {
  const monthoptions = [
    "JANUARY",
    "FEBURARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const options = ["$MRPOTATO", "POTATONFT", "MRTOPG"];
  const onOptionChangeHandler = (event) => {
    // console.log("User Selected Value - ", event.target.value);
  };
  return (
    <StakeContainer>
      <span className="heading">Calculate Your Rewards</span>
      <div className="stake-amount">
        <div className="amount">
          <div className="amount-dropdown">
            <label>
              TOKEN
              <select onChange={onOptionChangeHandler}>
                {/* <option>Please choose one option</option> */}
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </label>
            <label>
              AMOUNT (USD)
              <input type="number" placeholder="Amount" disabled />{" "}
            </label>
            <label>
              TERM
              <select onChange={onOptionChangeHandler}>
                <option>Months</option>
                {monthoptions.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </label>
          </div>
          <div className="amount-param">
            <span>{props.stakeTitle}</span>
            <div className="params">
              <span>$ 100 or less</span>
              <span id="active">$ 500</span>
              <span>$ 1,000 or more</span>
            </div>
          </div>
        </div>
        <div className="amount-percentage">
          <div className="percentage">
            <span>10.00%</span>
            <span id="white">p.a</span>
          </div>
          <div className="percentage">
            <span>$10.00</span>
            <span id="white">Rewards paid weekly</span>
          </div>
        </div>
      </div>
    </StakeContainer>
  );
};

export default Stake;
