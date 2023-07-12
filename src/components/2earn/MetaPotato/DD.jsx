import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
const DD = ({ openDD }) => {
  const DDItems = [
    "Head",
    "Eyes",
    "Ears",
    "Nose",
    "Moustache",
    "Mouth",
    "Shoes",
    "Right  Hand",
    "Left Hand",
  ];
  return (
    <DDWrapper openDD={openDD}>
      {DDItems.map((val, idx) => (
        <DDItem key={idx}>
          <p>{val}</p>
        </DDItem>
      ))}
    </DDWrapper>
  );
};

export default DD;

export const DDWrapper = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 2px;
  z-index: 999;
  height: ${({ openDD }) => (openDD ? "600px" : "0")};
  transition: 1s ease-in-out;
`;

export const DDItem = styled.div`
  border-radius: 8px;
  background: linear-gradient(0deg, #000 0%, #594207 100%);
  margin-top: 5px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid linear-gradient(1.09deg, #000000 1%, #594207 219.03%);
  p {
    color: #f4cd68;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
  }
`;
