import React , {Component} from 'react'
import './Coin.css';

class Coin extends Component{
    render(){
        return(
        <img  className='Coin-Image' src={this.props.image} alt='coin'/>
    )}
}

export default Coin