import React from 'react';
import ContactCard from './ContactCard';


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoggedIn: true
            })
        }, 2000)
    }

    render(){
        return (
            <div>
                {this.state.isLoggedIn ?  <ContactCard name='nitesh' phone='121313' email='dasfsa@gmail.com' /> : <p>Loading User</p>}
            </div>
        )
    }
}

export default App;