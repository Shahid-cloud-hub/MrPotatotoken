import React, { useState } from "react";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

import PDF_File from "../../PDF/MrPotato-whitePaper.pdf";
import SEO from "../SEO/SEO";
import styled from "styled-components";

const WhitePaper = () => {
  const [defaultPdfFile] = useState(PDF_File);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <SEO
        title="White Paper | Buy, Sell & Trade NFTs | Mr Potato NFT"
        description="Download our White Paper to learn more about buying, selling, and trading NFTs. You can also read our exclusive White Paper to learn more about our marketplace, the benefits of NFTs, and how to get involved. Get started today with the most reliable NFT marketplace."
      />
      <div className="pdf-container">
        {defaultPdfFile && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
              <Viewer
                fileUrl={defaultPdfFile}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}
      </div>
    </>
  );
};

export default WhitePaper;

export const PdfModalBtns = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2px;
  justify-content: center;
`;
