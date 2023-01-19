import React from 'react';
import { Link } from 'react-router-dom';
import { SubHeading } from '../../components';
import "./FoodMenu.css";
import MenuCart from './MenuCard';

const FoodMenu = () => {
    const items = [
        {
            name: "Mozzarella Sticks",
            img: "https://bistro-e.com/wp-content/uploads/2022/01/Mozzarella-Sticks-2.jpg",
            price: "500",
            food_element: "Parmesan, Cheddar, Mozzarella, Napoletana Sauce"
        },
        {
            name: "Crostini Pizzaiola",
            img: "https://bistro-e.com/wp-content/uploads/2022/01/Crostini-Peizzaiola-1.jpg",
            price: "550",
            food_element: "Toasted Baguette, Pepperoni, Mozzarella"
        },
        {
            name: "Steak Frites",
            img: "https://bistro-e.com/wp-content/uploads/2022/01/Steak-Frites-1.jpg",
            price: "2250",
            food_element: "Rib Eye/Sirloin, Salad, Fries, Choice of BBQ Marinade or Garlic & Herbs"
        },
        {
            name: "Chicken Pasta",
            img: "https://bistro-e.com/wp-content/uploads/2022/01/Chicken-Pesto-Pasta-2.jpg",
            price: "850",
            food_element: "Chicken, Button Mushroom, Fettuccine, Pesto, Cream, Parmesan"
        },
        {
            name: "Dijon Burger",
            img: "https://bistro-e.com/wp-content/uploads/2022/01/Dijon-Burger-2.jpg",
            price: "960",
            food_element: "Beef Patty, Spicy Dijon Mustard Sauce, Gherkins, Caramelized Onion"
        },
        {
            name: "Fish & Chips",
            img: "https://bistro-e.com/wp-content/uploads/2022/01/Fish-n-Chips-1.jpg",
            price: "900",
            food_element: "Dory, Tangy Slaw, Lime Wedge, Fries, Tartar Sauce"
        },
        
    ]
    return (
        <div className='app__bg section__padding'>
            <div className='food_menu'>
                <h1 className='headtext__cormorant'>Our Menu</h1>
                <SubHeading title={"The most delicious dishes made from the freshest of ingredients"}/>
            </div>
            <div className='items_grid'>
                {items.map((item,i) =><MenuCart key={i} item={item} /> )}
            </div>
            <div className='center_align'>
                
                    <Link to="/food_menu"><button type="button" className="custom__button">
                    Discover Entire Menu
                    </button></Link>
            </div>
        </div>
    );
};

export default FoodMenu;