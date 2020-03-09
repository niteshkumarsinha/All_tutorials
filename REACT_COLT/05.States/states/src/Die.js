import React, {Component} from 'react';

class Die extends Component{

    render(){
        return(
            <div className={`Die ${this.props.rolling ? 'btn-clicked2' : ''}`}>
                <i class={`fas fa-dice-${this.props.num}`}></i>
            </div>
        )
    }
}

export default Die;