import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{props.msg}</div>
    </div>
  );
};

Spinner.defaultProps = {
  msg: "LOADING ..."
};
export default Spinner;
