import React from "react";

const seasonConfig = {
  Summer: { text: "Lets hit the beach", iconName: "sun" },
  Winter: { text: "Burr, it is Chilly", iconName: "snowflake" }
};

const getSeason = (month, lat) => {
  if (lat >= 0) {
    if (month <= 8 && month >= 3) {
      return "Summer";
    } else {
      return "Winter";
    }
  } else {
    if (month <= 8 && month >= 3) {
      return "Winter";
    } else {
      return "Summer";
    }
  }
};

const SeasonDisplay = props => {
  let { text, iconName } = seasonConfig[
    getSeason(new Date().getMonth(), props.lat)
  ];
  return (
    <div>
      <i className={`massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
