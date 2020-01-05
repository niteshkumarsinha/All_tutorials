import React from 'react';

//EVENTS
// class App extends React.Component{

//     constructor(){
//         super()   
//     }

//     handleClick(){
//         console.log('I was clicked');
//     };

//     render(){
        
//         return (
//             <div>
//                 <img onMouseOver={this.handleClick} src='https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1850&q=80'></img>
//                 <br />
//                 <br />
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         )
//     }
// }

//Changing State
class App extends React.Component{

    constructor(){
        super();
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 
            }
        });
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App