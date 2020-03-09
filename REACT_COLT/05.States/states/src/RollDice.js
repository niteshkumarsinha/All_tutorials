import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: Math.floor(Math.random() * 6 + 1),
      num2: Math.floor(Math.random() * 6 + 1),
      clicked: false,
      btnText: "Roll dice"
    };
  }

  handleClick = e => {
    this.setState({
      clicked: true,
      btnText: "Rolling..."
    });

    setTimeout(() => {
      this.setState({
        num1: Math.floor(Math.random() * 6 + 1),
        num2: Math.floor(Math.random() * 6 + 1),
        clicked: false,
        btnText: "Roll Dice"
      });
    }, 1000);
  };

  getDieNum(num) {
    switch (num) {
      case 1:
        return "one";
        break;
      case 2:
        return "two";
        break;
      case 3:
        return "three";
        break;
      case 4:
        return "four";
        break;
      case 5:
        return "five";
        break;
      case 6:
        return "six";
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="Dice">
        <Die num={this.getDieNum(this.state.num1)} rolling={this.state.clicked}/>
        <Die num={this.getDieNum(this.state.num2)} rolling={this.state.clicked} />
        <button
          className={this.state.clicked ? "btn btn-clicked" : "btn"}
          onClick={this.handleClick}
          disabled={this.state.clicked }
        >
          {this.state.btnText}
        </button>
      </div>
    );
  }
}

export default RollDice;
