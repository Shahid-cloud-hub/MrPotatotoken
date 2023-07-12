import { useEffect } from "react";
import { OurPartnersData } from "../../assets/data/tableData";
import useBreakpoint from "../../hooks/useBreakpoints";
import SEO from "../SEO/SEO";
import OurPartners from "./mobile/OurPartners";
import OurBtn from "./OurBtn";
import { OurPartnersRow, OurPartnerswrapper } from "./OurPartners.Style";

const OurMrPartners = () => {
  const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Partner with Mr Potato NFT | A Leading NFT Marketplace"
        description="Partner with Mr Potato NFT, the leading NFT marketplace, and take advantage of our industry-leading features. Our partners enjoy easy onboarding, comprehensive analytics and secure transactions. Join us today and benefit from our cutting-edge platform."
      />
      {(isTablet || isMobile || isSmallMobile) && (
        <OurPartnerswrapper>
          <div className="background">
            <OurPartnersRow>
              <OurBtn
                data={OurPartnersData.QAData}
                btnData={OurPartnersData.btnData}
              />
            </OurPartnersRow>
          </div>
        </OurPartnerswrapper>
      )}
      {isDesktop && <OurPartners />}
    </>
  );
};

export default OurMrPartners;
