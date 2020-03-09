import React, { Component } from "react";
import './Pokemon.css';

class Pokemon extends Component {
  render() {

    let padToThree = (number) => ( number <= 999 ? `00${number}`.slice(-3): number )
    
    return (
      <div className="Pokemon">
        <h3 className="Pokemon-name">{this.props.name}</h3>
        <img
          className="Pokemon-imgsrc"
          alt="img"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(this.props.id)}.png`}
        ></img>
        <p className="Pokemon-type">Type: {this.props.type}</p>
        <p className="Pokemon-experience">EXP: {this.props.base_experience}</p>
      </div>
    );
  }
}

export default Pokemon;
