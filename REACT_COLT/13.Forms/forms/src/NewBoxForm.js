import React, { Component } from "react";
import Box from "./Box";
import uuid from "uuid/v4";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "",
      width: "",
      height: "",
      boxes: [],
      id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteBox = this.deleteBox.bind(this)
  }

  deleteBox(id){
    this.setState(state => (
        {boxes: state.boxes.filter(box => box.id !== id)}
    ))
    console.log('deleting', id)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState( (state) => ({
        boxes:[...state.boxes,{ 
            backgroundColor: state.backgroundColor,
            width: state.width,
            height: state.height,
            id: uuid()
        }]}
    ))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="bgColor">Background: </label>
          <input
            name="backgroundColor"
            id="bgColor"
            placeholder="bgColor"
            onChange={this.handleChange}
          />
          <label htmlFor="width">Width: </label>
          <input
            name="width"
            id="width"
            placeholder="width"
            onChange={this.handleChange}
          />
          <label htmlFor="height">Height: </label>
          <input
            name="height"
            id="height"
            placeholder="height"
            onChange={this.handleChange}
          />
          <button>Add Box</button>
        </form>

        {this.state.boxes.map((box, idx) => <Box backgroundColor={box.backgroundColor} width={box.width} height={box.height} key={idx} id={box.id} deleteBox={this.deleteBox} />)}
      </div>
    );
  }
}

export default NewBoxForm;
