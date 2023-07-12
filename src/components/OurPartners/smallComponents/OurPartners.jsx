import { OurPartnersContainerSection } from "./PotatoStyle";
import {
  AllPaymentData_1,
  AllPaymentData_2,
} from "../../../assets/data/tableData";

const OurPartnersComponents = () => {
  return (
    <OurPartnersContainerSection>
      <div className="our-partners-container">
        <div className="our-partners-main">
          <div className="mini-wrpper">
            {AllPaymentData_1.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name">{item?.seasonName}</div>
                <div className="img-container">
                  <a href={item?.link} target="_blank" rel="noreferrer">
                    <img src={item.landImg} alt="Currency Logos" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="vl"></div>
          <div className="mini-wrpper">
            {AllPaymentData_2.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name">{item.seasonName}</div>
                <div className="img-container">
                  <a href={item?.link} target="_blank" rel="noreferrer">
                    <img
                      src={item.landImg}
                      width={item?.width}
                      alt="Currency Logos"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </OurPartnersContainerSection>
  );
};

export default OurPartnersComponents;
