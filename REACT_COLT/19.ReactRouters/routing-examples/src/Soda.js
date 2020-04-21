import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "./Soda.css"


class Soda extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="Soda">
                <img className="soda" src="https://images.unsplash.com/photo-1527960392543-80cd0fa46382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="soda1" />
                <div className="soda-txt">
                    OMG SUGAR
                    <Link to="/" >Go Back</Link>
                </div>
                <img className="soda" src="https://images.unsplash.com/photo-1527960392543-80cd0fa46382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="soda2" />
                
            </div>
        )
    }
}

export default Soda
