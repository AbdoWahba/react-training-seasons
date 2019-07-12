import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      err => {
        console.error(err);
      }
    );
  }
  render() {
    return <div>lat: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("div"));
