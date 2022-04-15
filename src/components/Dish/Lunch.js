import React from 'react';
import lunch1 from '../../images/lunch/lunch1.png'
import lunch2 from '../../images/lunch/lunch2.png'
import lunch3 from '../../images/lunch/lunch3.png'
import lunch4 from '../../images/lunch/lunch4.png'
import lunch5 from '../../images/lunch/lunch5.png'
import lunch6 from '../../images/lunch/lunch6.png'
import FoodLoad from './FoodLoad';

const Lunch = () => {
    const lunches=[
        {name: 'Healthy Lunch', img: lunch1, tag: 'Very good food', price: 230},
        {name: 'Strong Lunch', img: lunch2, tag: 'Very good food', price: 430},
        {name: 'Honey lunch', img: lunch3, tag: 'Very good food', price: 233},
        {name: 'Taasty lunch', img: lunch4, tag: 'Very good food', price: 220},
        {name: 'Good lunch', img: lunch5, tag: 'Very good food', price: 235},
        {name: 'Common lunch', img: lunch6, tag: 'Very good food', price: 530}
    ]
    return (
        <div className="container">
        <div className='row row-cols-3'>
            {
                lunches.map(food=><FoodLoad key={food.price} food={food}></FoodLoad>)
            }
            </div>
        </div>
    );
};

export default Lunch;