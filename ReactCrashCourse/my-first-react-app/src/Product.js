import React from 'react';


function Product(props){
    return (
        <div className='productItem'>
            <h3 className='name'>Name: {props.name}</h3>
            <p className='price'>Price: {props.price}</p>
            <p className='desc'>{props.description}</p>
        </div>
    )
}


export default Product;