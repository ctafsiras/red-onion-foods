import React from 'react';
import breakfast1 from '../../images/breakfast/breakfast1.png'
import breakfast2 from '../../images/breakfast/breakfast2.png'
import breakfast3 from '../../images/breakfast/breakfast3.png'
import breakfast4 from '../../images/breakfast/breakfast4.png'
import breakfast5 from '../../images/breakfast/breakfast5.png'
import breakfast6 from '../../images/breakfast/breakfast6.png'
import FoodLoad from './FoodLoad';

const Breakfast = () => {
    const breakfasts=[
        {name: 'Healthy Meal', img: breakfast1, tag: 'Very good food', price: 230},
        {name: 'Strong Meal', img: breakfast2, tag: 'Very good food', price: 430},
        {name: 'Honey Meal', img: breakfast3, tag: 'Very good food', price: 233},
        {name: 'Tasty Meal', img: breakfast4, tag: 'Very good food', price: 220},
        {name: 'Good Meal', img: breakfast5, tag: 'Very good food', price: 235},
        {name: 'Common Meal', img: breakfast6, tag: 'Very good food', price: 530}
    ]
    return (
        <div className="container">
        <div className='row row-cols-3'>
            {
                breakfasts.map(food=><FoodLoad key={food.price} food={food}></FoodLoad>)
            }
            </div>
        </div>
    );
};

export default Breakfast;