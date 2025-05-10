import React from "react";

const GuideCard = ({ title, game, tags, image, nsfw }) => {
  const placeholderImage = "/static/images/censored.jpg";

  return (
    <div className="guideCard d-flex flex-row justify-content-center gap-3">
      <div className="guideCardImage">
        <img
          src={image}
          alt={title}
          className={`guideCardThumbnail ${nsfw ? "censored" : ""}`}
        />
      </div>

      <div className="guideCardInfo d-flex flex-column gap-1">
        <h1 className="guideCardTitle">{title}</h1>
        <h4 className="guideCardGame">{game?.name || "Unknown Game"}</h4>
        <h4 className="guideCardTags">
          {tags?.length > 0
            ? tags.map((tag) => (
                <span key={tag.id} className="me-1">
                  #{tag.name}
                </span>
              ))
            : "No tags"}
        </h4>
      </div>
    </div>
  );
};

export default GuideCard;
