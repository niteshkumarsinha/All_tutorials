import React, {Component} from 'react';


class Lotto extends Component{
    render(){ 
        return(
            <div className='Lotto'>{this.props.randomNum}</div>
        )
    }
}

export default Lotto;