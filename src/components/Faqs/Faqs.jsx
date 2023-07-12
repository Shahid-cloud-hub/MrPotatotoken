import React, { useEffect } from "react";
import { FaqsData } from "../../assets/data/FaqsData";
import SEO from "../SEO/SEO";
import Faqbtn from "./Faqbtn";
import { FaqsRow, Faqswrapper } from "./Faqs.styles";

const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="FAQs | Buy & Sell NFTs | Mr Potato NFT"
        description="Get quick answers to your questions about NFTs and Mr Potato NFT Marketplace in our FAQ section. Learn how to buy and sell NFTs, manage your wallet, and more!"
      />

      <Faqswrapper>
        <div className="background">
          <FaqsRow>
            <Faqbtn data={FaqsData.QAData} btnData={FaqsData.btnData} />
          </FaqsRow>
        </div>
      </Faqswrapper>
    </>
  );
};

export default Faqs;
