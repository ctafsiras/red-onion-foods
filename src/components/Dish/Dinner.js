import React from 'react';
import dinner1 from '../../images/dinner/dinner1.png'
import dinner2 from '../../images/dinner/dinner2.png'
import dinner3 from '../../images/dinner/dinner3.png'
import dinner4 from '../../images/dinner/dinner4.png'
import dinner5 from '../../images/dinner/dinner5.png'
import dinner6 from '../../images/dinner/dinner6.png'
import FoodLoad from './FoodLoad';

const Dinner = () => {
    const breakfasts=[
        {name: 'Healthy Dinner', img: dinner1, tag: 'Very good food', price: 230},
        {name: 'Strong Dinner', img: dinner2, tag: 'Very good food', price: 430},
        {name: 'Honey Dinner', img: dinner3, tag: 'Very good food', price: 233},
        {name: 'Tasty Dinner', img: dinner4, tag: 'Very good food', price: 220},
        {name: 'Good Dinner', img: dinner5, tag: 'Very good food', price: 235},
        {name: 'Common Dinner', img: dinner6, tag: 'Very good food', price: 530}
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

export default Dinner;