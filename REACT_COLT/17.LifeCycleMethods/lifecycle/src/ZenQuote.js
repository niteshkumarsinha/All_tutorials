import React, { Component } from "react";
import axios from "axios";
import './ZenQuote.css'

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "", isLoaded: false
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/zen").then(response => {
      setTimeout(() => {
        this.setState({ quote: response.data , isLoaded: true });
      } , 3000)
      
    });
  }
  render() {
    return (
      this.state.isLoaded ? ( <div>
        <h1>{this.state.quote}</h1>
      </div>) : <div className='loader' id="loader-1"></div>
    );
  }
}

export default ZenQuote;
