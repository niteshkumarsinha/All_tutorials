import React from 'react';


function Joke(props){
    return (
        <div>
            <h1>{props.question}</h1> 
            <p>{props.punchline}</p>
        </div>
    )
}

export default Joke;