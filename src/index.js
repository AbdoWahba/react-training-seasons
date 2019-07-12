import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.error(err);
      }
    );
    return <div>hi there</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("div"));
