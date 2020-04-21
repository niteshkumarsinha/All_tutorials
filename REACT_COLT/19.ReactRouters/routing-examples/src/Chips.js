import React, { Component } from "react";
import {Link} from "react-router-dom";

class Chips extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default Chips;
