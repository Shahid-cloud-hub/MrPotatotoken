import {
  AllPaymentData_3,
  AllPaymentData_4,
  // AllPaymentData_5,
  AllPaymentData_6,
  AllPaymentData_tracker,
} from "../../../assets/data/tableData";
import { useState } from "react";
import OurPartnersComponents from "../smallComponents/OurPartners";
import { OurPartnersContainerSection } from "../smallComponents/PotatoStyle";
import { OurPartnersContainer } from "./StyleSheet";
import {
  // SecurityCompSec,
  SmartContractSec,
} from "../smallComponents/PotatoStyle";

const TokenTrackers = () => {
  return (
    <OurPartnersContainerSection>
      <div className="our-partners-container">
        <div className="our-partners-main">
          <div className="mini-wrpper">
            {AllPaymentData_tracker.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name">{item.seasonName}</div>
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
            {AllPaymentData_3.map((item, index) => (
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

const CentralisedExchanges = () => {
  return (
    <OurPartnersContainerSection>
      <div className="our-partners-container">
        <div
          className="our-partners-main"
          style={{ justifyContent: "center", width: "100%" }}
        >
          <div className="mini-wrpper">
            <span>Coming Soon...</span>
            {/* {AllPaymentData_4.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name">{item.seasonName}</div>
                <div className="img-container">
                  <img
                    src={item.landImg}
                    width={item?.width}
                    alt="Currency Logos"
                  />
                </div>
              </div>
            ))} */}
          </div>
          <div className="vl"></div>
          <div className="mini-wrpper">
            {/* {AllPaymentData.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name">{item.seasonName}</div>
                <div className="img-container">
                  <img
                    src={item.landImg}
                    width={item?.width}
                    alt="Currency Logos"
                  />
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </OurPartnersContainerSection>
  );
};

const DecentralisedExchanges = () => {
  return (
    <OurPartnersContainerSection>
      <div className="our-partners-container">
        <div className="our-partners-main">
          <div className="mini-wrpper">
            {AllPaymentData_4.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name">{item.seasonName}</div>
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
            {/* {AllPaymentData.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name">{item.seasonName}</div>
                <div className="img-container">
                  <img
                    src={item.landImg}
                    width={item?.width}
                    alt="Currency Logos"
                  />
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </OurPartnersContainerSection>
  );
};

// const SecurityComponent = () => {
//   return (
//     <SecurityCompSec>
//       <div className="our-partners-container">
//         <div className="our-partners-main">
//           <div className="mini-wrpper">
//             {AllPaymentData_5.map((item, index) => (
//               <div className="item-wrapper" key={index}>
//                 <div className="title-name">{item.text}</div>
//                 <div className="img-container">
//                   <img src={item.platform} alt="Currency Logos" />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="vl"></div>
//           <div className="mini-wrpper">
//             {/* {AllPaymentData.map((item, index) => (
//               <div className="item-wrapper" key={index}>
//                 <div className="title-name">{item.seasonName}</div>
//                 <div className="img-container">
//                   <img
//                     src={item.landImg}
//                     width={item?.width}
//                     alt="Currency Logos"
//                   />
//                 </div>
//               </div>
//             ))} */}
//           </div>
//         </div>
//       </div>
//     </SecurityCompSec>
//   );
// };

const SmartContracts = () => {
  return (
    <SmartContractSec>
      <div className="our-partners-container">
        <div className="our-partners-main">
          <div className="mini-wrpper">
            {AllPaymentData_6.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name size">{item.text}</div>
                <div className="small-icons">
                  <img src={item.img} alt="Currency Logos" />
                </div>
                <div className="img-container">
                  <img src={item.platform} alt="Currency Logos" />
                </div>
              </div>
            ))}
          </div>
          <div className="vl"></div>
          <div className="mini-wrpper">
            {/* {AllPaymentData.map((item, index) => (
              <div className="item-wrapper" key={index}>
                <div className="title-name">{item.seasonName}</div>
                <div className="img-container">
                  <img
                    src={item.landImg}
                    width={item?.width}
                    alt="Currency Logos"
                  />
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </SmartContractSec>
  );
};

const OurPartners = () => {
  const [change, setChange] = useState({
    allpartners: true,
    tokenTrackers: false,
    centralised: false,
    deCentralised: false,
    // security: false,
    sContrats: false,
  });
  return (
    <OurPartnersContainer>
      <div className="tabs">
        <div className="tabs-btn">
          <button
            className={change.allpartners ? "activated-1" : "de-activated"}
            onClick={() =>
              setChange((prev) => ({
                ...prev,
                allpartners: true,
                tokenTrackers: false,
                centralised: false,
                deCentralised: false,
                // security: false,
                sContrats: false,
              }))
            }
          >
            All
          </button>
          <button
            className={change.tokenTrackers ? "activated-2" : "de-activated"}
            onClick={() =>
              setChange((prev) => ({
                ...prev,
                allpartners: false,
                tokenTrackers: true,
                centralised: false,
                deCentralised: false,
                // security: false,
                sContrats: false,
              }))
            }
          >
            Trackers
          </button>
          <button
            className={change.centralised ? "activated-3" : "de-activated"}
            onClick={() =>
              setChange((prev) => ({
                ...prev,
                allpartners: false,
                tokenTrackers: false,
                centralised: true,
                deCentralised: false,
                // security: false,
                sContrats: false,
              }))
            }
          >
            CEX
          </button>
          <button
            className={change.deCentralised ? "activated-4" : "de-activated"}
            onClick={() =>
              setChange((prev) => ({
                ...prev,
                allpartners: false,
                tokenTrackers: false,
                centralised: false,
                deCentralised: true,
                // security: false,
                sContrats: false,
              }))
            }
          >
            DEX
          </button>
          {/* <button
            className={change.security ? "activated-5" : "de-activated"}
            onClick={() =>
              setChange((prev) => ({
                ...prev,
                allpartners: false,
                tokenTrackers: false,
                centralised: false,
                deCentralised: false,
                security: true,
                sContrats: false,
              }))
            }
          >
            Security
          </button> */}
          <button
            className={change.sContrats ? "activated-6" : "de-activated"}
            onClick={() =>
              setChange((prev) => ({
                ...prev,
                // security: false,
                allpartners: false,
                tokenTrackers: false,
                centralised: false,
                deCentralised: false,
                sContrats: true,
              }))
            }
          >
            Smart Contract's
          </button>
        </div>
        {(change.allpartners && <OurPartnersComponents />) ||
          (change.tokenTrackers && <TokenTrackers />) ||
          (change.centralised && <CentralisedExchanges />) ||
          (change.deCentralised && <DecentralisedExchanges />) ||
          // (change.security && <SecurityComponent />) ||
          (change.sContrats && <SmartContracts />)}
      </div>
    </OurPartnersContainer>
  );
};

export default OurPartners;
