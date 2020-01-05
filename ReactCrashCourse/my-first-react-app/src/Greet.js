import React from 'react'


let style = {
    fontSize: 20
}

function Greet(){
    const date = new Date(2019, 12, 31, 19);
    const hour =date.getHours();
    let timeOfDay = 'Night';

    if (hour < 12){
        timeOfDay = 'Morning 😁';
        style.color = '#ccaabb';
    }else if (hour < 18){
        timeOfDay = 'Afternoon 😂';   
        style.color = '#fcaabb';
    }else{
        timeOfDay = 'Night 😂😂😂';
        style.color = 'orange';
    }

    return (
    <h1 style={style}>Good {timeOfDay}</h1>
    )
}


export default Greet;