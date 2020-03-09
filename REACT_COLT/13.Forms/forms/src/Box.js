import React, { Component } from "react";


class Box extends Component{

    constructor(props){
        super(props)
        this.renderStyles = this.renderStyles.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(){
        this.props.deleteBox(this.props.id)
    }

    renderStyles(){
        return {
            backgroundColor: this.props.backgroundColor,
            width: this.props.width,
            height: this.props.height,
            display: 'inline-block'
        }   
    }

    render(){
        return(
            <div>           
                <div style={this.renderStyles()}>

                </div>
                <button onClick={this.handleDelete}>X</button>
            </div> 
        )
    }
}

export default Box;