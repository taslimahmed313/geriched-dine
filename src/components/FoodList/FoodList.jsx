import React from 'react';
import { Mains_first, Mains_first_img, Platters, salad, salad_img, Starters, starters_img } from '../MenuData/MenuData';
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
                            <h1 className='slider__swash'>Just Take A Look</h1>
                        <Slider item_img={starters_img} />
                        </div>
                    </div>
                </div>


                {/* Platters Menu List and Price */}
                <div>
                    <h1 className='headtext__swash'>Platters</h1>
                    <div className='platter_grid'>
                    {
                        Platters.map((platter,i) => <div 
                        className='single_platter hover_effect' key={i}>
                            <div>
                                <img src={platter.img} alt="" />
                            </div>
                            <h3>{platter.name}</h3>
                            <p>{platter.food_element}</p>
                            {platter.price && <p>BDT {platter.price}</p>}
                            {platter.single_pieces && <p>BDT {platter.single_pieces} (1 pcs each) 
                             </p>}
                            {platter.multi_pieces && <p>BDT {platter.multi_pieces} (2 pcs each) 
                             </p>}
                        </div>)
                    }
                    </div>
                </div>  


           {/* Soups & Salads Menu List----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                <div>
                    <h1 className='headtext__swash'>Soups & Salads</h1>
                    <div className='food_list_grid'>
                        <div className='food_list'>
                            { 
                                salad.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        <div className='food_list_slider'>
                            <h1 className='slider__swash'>Just Take A Look</h1>
                        <Slider item_img={salad_img} />
                        </div>
                    </div>
                </div>


           {/* Mains Menu List----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                <div>
                    <h1 className='headtext__swash'>Mains</h1>
                    <div className='food_list_grid_multi_slider'>
                        
                        {/* First Main Slider */}
                        <div className='food_list'>
                            { 
                                Mains_first.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        <div className='food_list_slider'>
                            <h1 className='slider__swash'>Just Take A Look</h1>
                        <Slider item_img={Mains_first_img} />
                        </div>
                        
                        {/* Second Main Slider */}
                        <div className='food_list'>
                            { 
                                salad.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        <div className='food_list_slider'>
                        <Slider item_img={salad_img} />
                        </div>

                        {/* Third Main Slider */}    
                        <div className='food_list_slider'>
                        <Slider item_img={salad_img} />
                        </div>    
                        <div className='food_list'>
                            { 
                                salad.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        
                        
                    </div>
                    {/* <div className='food_list_grid_multi_slider'>
                        <div className='food_list'>
                            { 
                                salad.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        <div className='food_list_slider'>
                            { 
                                data_indigrate.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        <Slider item_img={salad_img} />
                        { 
                                data_indigrate.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>       
                    </div> */}
                </div>

                  
            </div>
        </div>
    );
};

export default FoodList;