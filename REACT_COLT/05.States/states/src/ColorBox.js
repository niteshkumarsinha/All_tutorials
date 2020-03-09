import React, {Component} from 'react';
import './ColorBox.css';

class Color extends Component {

    constructor(props){
        super(props)
        this.state = {styles: {
            backgroundColor: `rgb(${this.props.value[0]}, ${this.props.value[1]}, ${this.props.value[2]})`,
            width: '200px',
            height: '200px',
            display: 'inline-block',
            cursor: 'pointer' 
           }
        }
    }

    handleClick = () => {
        this.setState((currState) => {
            return {
                styles: {
                    backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
                    width: '200px',
                    height: '200px',
                    display: 'inline-block'}
            }
        })
    }

    render(){
        return(
            <div style={this.state.styles} onClick={this.handleClick}>
            </div>
        )
    }
}

class ColorBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            colors : [
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] ,
               [Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256) , Math.floor(Math.random() * 256)] 
            ]
        }
    }

    render(){
        return(
            <div className='ColorBox' onClick={this.handleClick}>
                {this.state.colors.map((color, idx) => <Color value={color} key={idx} />)}
            </div>
        )
    }
}

export default ColorBox;