import React from "react";
import Star from "../../assets/images/Star.png";

const Accordion = ({ title }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className="questionWrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          <div className="question">
            <img src={Star} alt="question" />
          </div>
          {title.Q}
        </div>
      </div>

      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        {title.Ans && <div className="accordion-content">{title.Ans}</div>}
        <ul
          className="showPoints"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 33px",
          }}
        >
          {title.AnswerPoint &&
            title.AnswerPoint.map((item) => <li>{item}</li>)}
          {title.Ans_1 && (
            <div className="accordion-content">{title.Ans_1}</div>
          )}
        </ul>
      </div>
    </div>
  );
};

const FaqAccordian = ({ data }) => {
  return (
    <div>
      {data?.Question?.map((item, index) => (
        <Accordion title={{ ...item }} key={index} />
      ))}
    </div>
  );
};

export default FaqAccordian;
