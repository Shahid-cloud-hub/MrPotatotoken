import React from "react";
import { TermsContainer } from "./Terms.style";

const TermsandCondition = ({ title, description }) => {
  return (
    <TermsContainer>
      <div className="container">
        <div className="paragraph">
          <h6>
            MRPOTATONFT.COM <br />
            POTATO TOKEN & MR POTATO NFT <br />
            {title}
          </h6>
          <pre>{description}</pre>
        </div>
      </div>
    </TermsContainer>
  );
};

export default TermsandCondition;
