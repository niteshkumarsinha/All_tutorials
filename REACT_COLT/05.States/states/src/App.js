import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute: 0,
      second: 0
    };

    this.makeTimer();
  }

  makeTimer() {
    setInterval(() => {
      let temp;
      if (this.state.second < 59) {
        temp = this.state.second + 1;
        this.setState({ second: temp });
      } else {
        temp = 0;
        let minute = this.state.minute < 59 ? this.state.minute + 1 : 0;
        this.setState({ second: temp, minute: minute });
      }
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="Timer">
          <span className="Minute">
            {this.state.minute < 10
              ? "0" + this.state.minute
              : this.state.minute}
          </span>
          :
          <span className="Second">
            {this.state.second < 10
              ? "0" + this.state.second
              : this.state.second}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
