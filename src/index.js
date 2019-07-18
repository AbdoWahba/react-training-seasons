import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class App extends React.Component {
  state = { lat: null, long: null, err: null, hona: 0 };

  componentDidMount() {
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
  renderItem() {
    if (!this.state.err) {
      if (this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />;
      } else {
        return <Spinner msg="accept access ..." />;
      }
    } else {
      return (
        <div style={{ backgroundColor: "pink" }}>err: {this.state.err}</div>
      );
    }
  }
  render() {
    return <div style={{ border: "10px solid red" }}>{this.renderItem()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("div"));
