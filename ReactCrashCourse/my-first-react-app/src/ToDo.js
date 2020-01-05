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
   
    return (
    <div className='todo-item'>
        {
            props.completed ? <input  id={props.id} type="checkbox"  onChange={displayText} checked={props.completed} /> : <input id={props.id} type="checkbox"  onChange={displayText}/>
        }           
        <p>{props.name}</p>
    </div>
    )
}


export default ToDo;