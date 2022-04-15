import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const {foodId}=useParams()
    return (
        <div>
            <h2>Food Detail: {foodId}</h2>
        </div>
    );
};

export default FoodDetails;