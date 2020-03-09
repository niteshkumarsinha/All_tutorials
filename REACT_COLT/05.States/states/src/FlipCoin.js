import React, { Component } from "react";
import Coin from "./Coin";
import "./FlipCoin.css";

class FlipCoin extends Component {
  static defaultProps = {
    image: [
      "https://tinyurl.com/react-coin-tails-jpg",
      "https://tinyurl.com/react-coin-heads-jpg"
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      heads: 0,
      tails: 0,
      current: 0
    };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState(currState => {
      let num = Math.floor(Math.random() * 2);
      if (num === 0) {
        return {
          total: currState.total + 1,
          tails: currState.tails + 1,
          current: 0
        };
      } else {
        return {
          total: currState.total + 1,
          heads: currState.heads + 1,
          current: 1
        };
      }
    });
  }

  render() {
    return (
      <div className="FlipCoin">
        <h1>Let's flip a coin!</h1>
        <Coin image={this.props.image[this.state.current]} />
        <button className="Flip-Button" onClick={this.flip}>
          Flip Meeeee
        </button>
        <p>
          Out of {this.state.total} flips, there have been {this.state.heads}{" "}
          heads and {this.state.tails} tails
        </p>
      </div>
    );
  }
}

export default FlipCoin;
