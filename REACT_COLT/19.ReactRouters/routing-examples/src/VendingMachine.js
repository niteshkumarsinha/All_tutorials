import React, { Component } from 'react'
import "./VendingMachine.css";
import {Link} from 'react-router-dom';

class VendingMachine extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="VendingMachine">
                <img src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="vending machine" />
                <Link exact to="/soda" >Soda</Link>
                <Link exact to="/chips" >Chips</Link>
                <Link exact to="/sardines" >Sardines</Link>
            </div>
        )
    }
}

export default VendingMachine
