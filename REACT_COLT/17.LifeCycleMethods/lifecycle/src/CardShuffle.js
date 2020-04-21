import React, { Component } from "react";
import axios from "axios";

class CardShuffle extends Component {
  constructor(props) {
    super(props);
    this.state = {deckId: "", imgSrc: []};
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(evt){
     const cardUrl = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`
     const response = await axios.get(cardUrl)
     this.setState({imgSrc: [...this.state.imgSrc, response.data.cards[0].image]})
     
  }

  async componentDidMount() {
    let shuffleUrl = "https://deckofcardsapi.com/api/deck/new/shuffle";
    let response = await axios.get(shuffleUrl);
    console.log(response);
    this.setState({deckId: response.data.deck_id})
  }

  render() {
    return (
      <div>
        <img src={this.state.imgSrc[0]} />
        <button onClick={this.handleClick}>Gimme a Card</button>
      </div>
    );
  }
}

export default CardShuffle;
