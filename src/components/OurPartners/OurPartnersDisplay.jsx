import React from "react";

const OurAccordion = ({ title }) => {
  return (
    <div className="our-mobile-container">
      <div className="title-name" style={{ color: title.color && title.color }}>
        {title.currency_title}
      </div>
      <div className="img-container">
        {title.currency_img && (
          <a href={title?.link} target="_blank" rel="noreferrer">
            <img
              src={title.currency_img}
              style={{ maxWidth: title.maxWidth && title.maxWidth }}
              alt="Currency Logos"
            />
          </a>
        )}
      </div>
    </div>
  );
};

const OurPartnersDisplay = ({ data }) => {
  return (
    <>
      {data?.Question?.map((item, index) => (
        <OurAccordion title={{ ...item }} key={index} />
      ))}
    </>
  );
};

export default OurPartnersDisplay;
