import React from 'react';
import "./FoodCard.css";

const FoodCard = ({item}) => {
    const {img, price, name, food_element} = item;
    return (
        <div className='food_card hover_effect'>
            <img src={img} alt="food_card" />
            <div className='food_card_info'>
                <h1 className='food_card_heading '>{name}</h1>
                <p className='food_card_food_element'>{food_element}</p>
            </div>
            <p className='food_card_food_price'><span>BDT</span> {price} ++</p>
        </div>
    );
};

export default FoodCard;