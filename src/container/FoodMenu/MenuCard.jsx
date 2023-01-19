import React from 'react';

const MenuCart = ({item}) => {
    const {img, price, name, food_element} = item;
    return (
        <div className='home_menu_card hover_effect'>
            <img src={img} alt="food_card" />
            <div className='home_card_info'>
                <h1 className='card_heading '>{name}</h1>
                <p className='food_element'>{food_element}</p>
                <p className='food_price'><span>BDT</span> {price}++</p>
            </div>
        </div>
    );
};

export default MenuCart;