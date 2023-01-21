import React from 'react';
import { Starters, starters_img } from '../MenuData/MenuData';
import Slider from '../Slider/Slider';
import SubHeading from '../SubHeading/SubHeading';
import FoodCard from './FoodCard';
import "./FoodList.css";


const FoodList = () => {
    // const [starters, setStarters] = useState(Starters);
  
    return (
        <div className='app__bg section__padding'>
             <div className='food_menu'>
                <h1 className='headtext__cormorant'>Our Menu</h1>
                <SubHeading title={"The most delicious dishes made from the freshest of ingredients"}/>
            </div>
            <div>
               
           {/* Starters Menu List-------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
           <div>
            <h1 className='headtext__swash'>Starters</h1>
            <div className='food_list_grid'>
                <div className='food_list'>
                    { 
                        Starters.map(item =><FoodCard key={item.id} item={item}/>)
                    }
                </div>
                <div className='food_list_slider'>
                    {/* <h1 className='headtext__cormorant'>Take A Look</h1> */}
                  <Slider item_img={starters_img} />
                </div>
            </div>
           </div>


            </div>
        </div>
    );
};

export default FoodList;