import React, { useEffect, useState } from 'react';
import "./FoodList.css";

import SubHeading from '../SubHeading/SubHeading';
import FoodCard from './FoodCard';


const FoodList = () => {
    const [starters, setStarters] = useState([]);
    
    useEffect(()=>{
        fetch("items.json")
        .then(res => res.json())
        .then(data => setStarters(data))
    },[])
    return (
        <div className='app__bg section__padding'>
             <div className='food_menu'>
                <h1 className='headtext__cormorant'>Our Menu</h1>
                <SubHeading title={"The most delicious dishes made from the freshest of ingredients"}/>
            </div>
            <div className='items_grid'>
                {/* {
                starters.map(food => <div>
                    <div className='food_list_flex'>
                        {food.status === "available" ? <img className='img_check_mark' src={images.check_mark} 
                        alt='check_mark'/> : <p className='margin_left'></p>}
                        {food.img && <img className='food_img' src={food.img} alt="" />}
                        <div>
                            <h2>{food.name}</h2>
                            <p>{food.food_element}</p>
                        </div>
                        <p className='food_price'><span>BDT</span> {food.price}</p>
                    </div>
                </div>)
            } */}
            {
                starters.map(item => <FoodCard item={item}/>)
            }
            </div>
        </div>
    );
};

export default FoodList;