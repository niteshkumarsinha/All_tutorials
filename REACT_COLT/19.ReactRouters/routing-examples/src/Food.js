import React, { Component } from "react";
import {Link, Redirect} from 'react-router-dom'; 

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const name = this.props.match.params.name;
    const url = `https://source.unsplash.com/1600x900/?${name}`;
    return (
      <div>
        {/\d/.test(name) ? <Redirect to="/" />  : <div>
        <h1>I love to eat {name} </h1>
        <span><Link to="/">Back</Link></span>
        <img src={url} alt={name} />
        </div>}
        
      </div>
    );
  }
}

export default Food;
