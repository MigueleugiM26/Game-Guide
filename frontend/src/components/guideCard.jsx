import React, { useRef } from "react";

const GuideCard = () => {
  const getStaticPath = (path) => {
    return `${process.env.PUBLIC_URL || ""}/static/${path}`;
  };

  return (
    <>
      <div className="guideCard d-flex flex-row justify-content-center gap-3">
        <div className="guideCardImage"></div>
        <div className="guideCardInfo d-flex flex-column gap-1">
          <h1 className="guideCardTitle">title</h1>
          <h4 className="guideCardGame">game</h4>
          <h4 className="guideCardTags">tags</h4>
        </div>
      </div>
    </>
  );
};

export default GuideCard;
