import React, { Component } from 'react'

class Dog extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <h1 style={{backgroundColor: "red"}}> Dog</h1>   
                <h2>This dog is named: {this.props.name}</h2>        
            </div>
        )
    }
}

export default Dog
