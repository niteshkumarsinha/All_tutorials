import React from 'react'
import './App.css';

function displayText(e){
   if(document.getElementById(e.target.id).checked) {
       document.getElementById(e.target.id).checked = true ;
       console.log('checked')
    }else{
     document.getElementById(e.target.id).checked = false;
     console.log('unchecked')
    }   
}


function ToDo(props){
    
    const style = {
        
        "text-decoration": 'line-through',
        "color" : '#cdcdcd'
    }    

    return (    
    <div className='todo-item'>
        {
            props.completed ? <input  id={props.id} type="checkbox"  onChange={() => props.handleChange(props.id)} checked={props.completed} /> : <input id={props.id} type="checkbox"  onChange={displayText}/>
        }           
        <p  style={props.completed ? style : null}>{props.name}</p>
    </div>
    )
}


export default ToDo;