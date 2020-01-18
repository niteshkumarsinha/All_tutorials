import React from 'react' ;


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            data: 'Loading Data .....'
        }
    }

    componentDidMount(){
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => this.setState({data: data.name}))
    }

    render(){
        return (
            <div>
                APIS    
                <p>{this.state.data} </p>
            </div>
        )            
    }

}

export default App;
