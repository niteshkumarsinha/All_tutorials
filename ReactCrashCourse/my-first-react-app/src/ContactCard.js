import React from 'react';

const style = {
    width: '100px',
    height: '100px'
}

function ContactCard(props){
    return (
        <div class='contact-container'>
            <div className='contact-card'>
                <img alt='pic' src={props.imageUrl} style={style}/>
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
        
    )
}

export default ContactCard;