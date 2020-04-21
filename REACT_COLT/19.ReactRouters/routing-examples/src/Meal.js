import React, { Component } from 'react'

class Meal extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {

        const name = this.props.match.params.foodName;
        const drink = this.props.match.params.drinkName

        const foodUrl = `https://source.unsplash.com/1600x900/?${name}`
        const drinkUrl = `https://source.unsplash.com/1600x900/?${drink}`
        return (
            <div>
                <img src={foodUrl} alt={name} />
                THIS IS A MEAL {name} {drink}
                <img src={drinkUrl} alt={name} />
            </div>
        )
    }
}

export default Meal
