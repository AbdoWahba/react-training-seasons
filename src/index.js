import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, err: null };

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
        this.setState({ err: err.message });
      }
    );
  }
  render() {
    console.log(this.state);
    if (!this.state.err) {
      if (this.state.lat) {
        return <div>lat: {this.state.lat}</div>;
      } else {
        return <div>Wait</div>;
      }
    } else {
      return <div>err: {this.state.err}</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("div"));
