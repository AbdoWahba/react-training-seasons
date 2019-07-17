import React from "react";
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
  return (
    <div>
      <i
        className={`${
          getSeason(new Date().getMonth(), props.lat) === "Winter"
            ? "snowflake"
            : "sun"
        } icon`}
      />
      <h1>
        {getSeason(new Date().getMonth(), props.lat) === "Winter"
          ? "Burr, it is Chilly"
          : "Lets hit the beach"}
      </h1>
      <i
        className={`${
          getSeason(new Date().getMonth(), props.lat) === "Winter"
            ? "snowflake"
            : "sun"
        } icon`}
      />
    </div>
  );
};

export default SeasonDisplay;
