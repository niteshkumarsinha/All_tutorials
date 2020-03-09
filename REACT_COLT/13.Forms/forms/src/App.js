import React, { Component } from 'react';
//import ShoppingList from './ShoppingList'//
import BoxList from './BoxList';


class App extends Component {
  
  //constructor(props){
    // super(props)
    // this.state = {
    //   username :"",
    //   email: "",
    //   password: ""
    // }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)

  //}

  render(){
    return (
      <div className="App">
        {/* <h1>{this.state.username}</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="username" type='text' value={this.state.username} onChange={this.handleChange}/>
          <input name="email" type="email" placeholder='email' onChange={this.handleChange} />
          <input name="password" type="password" placeholder='password' onChange={this.handleChange}/>
          <button >Submit!</button>
        </form> */}

        <BoxList />
      </div>
    );
  }
}

export default App;
