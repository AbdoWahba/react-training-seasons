import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: { text: "Lets hit the beach", iconName: "sun" },
  winter: { text: "Burr, it is Chilly", iconName: "snowflake" }
};

const getSeason = (month, lat) => {
  if (lat >= 0) {
    if (month <= 8 && month >= 3) {
      return "summer";
    } else {
      return "winter";
    }
  } else {
    if (month <= 8 && month >= 3) {
      return "winter";
    } else {
      return "summer";
    }
  }
};

const SeasonDisplay = props => {
  let season = getSeason(new Date().getMonth(), props.lat);
  let { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
