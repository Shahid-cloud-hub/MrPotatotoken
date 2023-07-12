import styled from "styled-components";

const PriceChartContainer = styled("div")`
  /* height: 400px; */
  .title {
    h5 {
      padding: 20px;
    }
  }

  @media screen and (max-width: 420px) {
    h5 {
      padding: 0px 0px 20px;
      text-align: center;
    }
  }
`;

// eslint-disable-next-line react/prop-types
const PriceChart = ({ link }) => {
  return (
    <PriceChartContainer>
      <iframe src={link} width="100%" height="500" allowFullScreen={true} />
    </PriceChartContainer>
  );
};

export default PriceChart;
