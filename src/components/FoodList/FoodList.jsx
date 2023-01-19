import React, { useEffect, useState } from 'react';

import { images } from '../../constants';


const FoodList = () => {
    const [starters, setStarters] = useState([]);
    
    useEffect(()=>{
        fetch("items.json")
        .then(res => res.json())
        .then(data => setStarters(data))
    },[])
    console.log(setStarters);
    return (
        <div className='app__bg'>
            <h1 className='headtext__cormorant'>Menu</h1>
            <div>
                {
                starters.map(food => <div>
                    <div>
                        {food.status === "available" && <img src={images.check_mark} 
                        alt='check_mark'/>}
                        {food.name}
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default FoodList;