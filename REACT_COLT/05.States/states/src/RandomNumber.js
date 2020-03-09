import React, {Component} from 'react';

class RandomNumber extends Component{
    constructor(props){
        super(props)
        this.state = {
             num: 1
        }
    }

    handleClick = e => {
        this.setState({
            num: Math.floor(Math.random()*10 + 1)
        })
    }

    render(){
        return (
            <div className='RandomNumber'>
                <h1>Number is : {this.state.num}</h1>
                {this.state.num !==7 && <button onClick={this.handleClick}>GenerateNumber</button>}
                {this.state.num ===7 && <h2>You Win!</h2>}
            </div>
        )
    }
}


export default RandomNumber;