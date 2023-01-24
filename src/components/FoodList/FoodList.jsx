import React from 'react';
import { Burgers_first, Burgers_first_image, Drinks, Drinks_hot, Drinks_img, Mains_first, Mains_first_img, Mains_second, Mains_second_img, Mains_third, Mains_third_img, Platters, salad, salad_img, Salad_up, Sandwich, Sandwich_img, Starters, starters_img, Starters_up } from '../MenuData/MenuData';
import MenuItem from '../Menuitem/MenuItem';
import DrinksSlider from '../Slider/DrinksSlider';
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
                            { 
                                Starters_up.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                            {/* <h1 className='slider__swash'>Just Take A Look</h1> */}
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
                        <div className='food_list_slider'>
                            { 
                                Salad_up.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        <Slider item_img={salad_img} />
                        </div>
                        <div className='food_list'>
                            { 
                                salad.map(item =><FoodCard key={item.id} item={item}/>)
                            }
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
                            <h1 className='slider__swash extra__padding'>Just Take A Look</h1>
                        <Slider item_img={Mains_first_img} />
                        </div>
                        
                        {/* Second Main Slider */}
                        <div className='food_list_slider'>
                           <h1 className='slider__swash extra__padding'>Just Take A Look</h1>
                        <Slider item_img={Mains_second_img} />
                        </div>
                        <div className='food_list'>
                            { 
                                Mains_second.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        

                        {/* Third Main Slider */}    
                        <div className='food_list'>
                            { 
                                Mains_third.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        <div className='food_list_slider'>
                            <h1 className='slider__swash extra__padding'>Just Take A Look</h1>
                        <Slider item_img={Mains_third_img} />
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

            
           {/* Burger Menu List----------------------------->>>>>>>>>>>>>>>>>>>  */}
           <div>
                    <h1 className='headtext__swash'>Gourmet Burgers</h1>
                    <div className='food_list_grid'>
                        <div className='food_list'>
                            { 
                                Burgers_first.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        <div className='food_list_slider'>
                            <h1 className='slider__swash'>Just Take A Look</h1>
                        <Slider item_img={Burgers_first_image} />
                        </div>
                    </div>
            </div>



            {/* Sandwich Menu List */}
            <div>
                    <h1 className='headtext__swash'>Sandwiches</h1>
                    <div className='food_list_grid'>
                        <div className='food_list_slider'>
                        <Slider item_img={Sandwich_img} />
                        </div>
                        <div className='food_list'>
                            { 
                                Sandwich.map(item =><FoodCard key={item.id} item={item}/>)
                            }
                        </div>
                        
                    </div>
            </div>



            {/* Soft Drinks */}
            <div style={{ marginTop: 180 }} className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Soft Drinks</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Shakes & Frappé</p>
        <div className="app__specialMenu_menu_items">
          {Drinks.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

        <div className='Drinks_slider'>
            <DrinksSlider item_img={Drinks_img} />
        </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Tea & Coffee</p>
        <div className="app__specialMenu_menu_items">
          {Drinks_hot.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

                </div>
                  
            </div>
        </div>
    );
};

export default FoodList;