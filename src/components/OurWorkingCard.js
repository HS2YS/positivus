import React, { useState } from "react";
import ListIcon from "./ListIcon";

const OurWorkingCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [rotate, setRotate] = useState(0);

  const toggleExpanded = () => {
    setRotate(prev => prev + 360);
    setTimeout(() => {
      setExpanded(prev => !prev);
    }, 100);
  };

  return (
    <div className={`ourWorking_card flex ${expanded ? 'expanded' : ''}`}>
      <div className="card-title-layout flex">
        <div className="card_title_block flex">
          <h1>{props.number}</h1>
          <h3>{props.title}</h3>
        </div>
        <div onClick={toggleExpanded} className="icon-wrapper">
          <ListIcon isOpen={expanded} rotate={rotate} />
        </div>
      </div>
      {expanded && (
        <>
          <div className="ourWorking-line"></div>
          <div className="ourworking-text">
            <p>{props.text}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default OurWorkingCard;
