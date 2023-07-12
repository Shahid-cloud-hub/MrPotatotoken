import React from "react";

const PotatoTokenAccordion = ({ title }) => {
  return (
    <div className="p-token-container">
      {title.title && <div className="p-t-title">{title.title}</div>}
      <div className="p-token-mini-wrapper">
        <div className="img-container">
          <div>
            {title.img && <img src={title.img} alt="Currency Logos" />}
            {title.img_3 && (
              <img
                src={title.img_3}
                style={{ maxWidth: title.maxWidth }}
                alt="Currency Logos"
              />
            )}
          </div>
          {title.potatoToken_title && (
            <span style={{ fontSize: title.size }}>
              {title.potatoToken_title}
            </span>
          )}
          {title.title_3 && <span>{title.title_3}</span>}
        </div>
        {title.grayTitle && (
          <div className="items-wrapper">
            <div>
              <span className="grayTitle">{title.grayTitle}</span>
              <span>{title.whiteTitle}</span>
            </div>
            <div>
              <span className="grayTitle">{title.grayTitle_1}</span>
              <span>{title.whiteTitle_1}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PotatoTokenDisplay = ({ data }) => {
  return (
    <div className="p-t-wrapper">
      {data?.Question?.map((item, index) => (
        <PotatoTokenAccordion title={{ ...item }} key={index} />
      ))}
    </div>
  );
};

export default PotatoTokenDisplay;
