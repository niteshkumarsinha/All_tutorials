import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => (
        <li  className="nav-item" key={dog.name}><NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>{dog.name}</NavLink></li>
        ))
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#" >Dog App</a>
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li><NavLink exact to="/dogs" className="nav-link">Home</NavLink></li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>

        )
    }
}

export default NavBar
