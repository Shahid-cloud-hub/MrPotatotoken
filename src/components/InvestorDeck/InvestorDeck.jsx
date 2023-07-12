import React, { useEffect } from "react";
import PDFProtector from "../PDFProtector/PDFProtector";
import InvestorDeckPDF from "../PDFProtector/InvestorDeckPDF";

const InvestorDeck = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <PDFProtector /> */}
      <InvestorDeckPDF />
    </>
  );
};

export default InvestorDeck;
