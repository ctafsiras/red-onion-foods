import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodLoad = ({food}) => {
    const {name, tag, img, price}=food;
    const navigate=useNavigate()
    return (
      
            <div onClick={()=>navigate(`/food/${price}`)} style={{width: '31%'}} className='shadow-hover col m-2 p-2 w-fluid'>
            <img className='w-50' src={img} alt="" />
            <h4>{name}</h4>
            <p>{tag}</p>
            <p>Price: ${price}</p>
        
        </div>
    );
};

export default FoodLoad;