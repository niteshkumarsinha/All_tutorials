import React , {Component} from 'react';
import Lotto from './Lotto';


class Lottery extends Component{

    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    constructor(props){
        super(props);
        this.state = {nums: Array.from({length: this.props.numBalls})};
        this.randomGenerator = this.randomGenerator.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    randomGenerator(){
        this.setState({
            nums: this.state.nums.map(n  => Math.floor(Math.random() * this.props.maxNum + 1))
        })
    }

    handleClick(){
       this.randomGenerator()
       console.log('clicked')
    } 

    render(){
        return(
            
            <div className='Lottery'>
                <p className='Lottery-title'>{this.props.title}</p>
                {this.state.nums.map(n => <Lotto randomNum={n} />)}
                <button className='GenerateButton' onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery