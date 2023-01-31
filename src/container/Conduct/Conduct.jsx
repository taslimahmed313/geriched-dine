import React from 'react';
import { Conduct_bg } from '../../components/MenuData/MenuData';
import TextOverlay from '../../components/TextOverlay/TextOverlay';
import "./Conduct.css";

import { images } from '../../constants';

const Conduct = () => {
      const [toggleMenu, setToggleMenu] = React.useState(false);

      const delivery_site = [
        "https://bistro-e.com/wp-content/uploads/2022/02/Bistro-E-1.jpg",
        "https://bistro-e.com/wp-content/uploads/2022/02/Foodpanda-1.jpg",
        "https://bistro-e.com/wp-content/uploads/2022/02/Hungrynaki-1.jpg",
      ]


    return (
        <div className='app__bg'>
            <TextOverlay page_title={"Any Query?"} optional={"+880 1710 652496"}
            source={Conduct_bg}/>
            <div className='conduct__main section__padding'>
                <div className='map hover_effect'>
                    <img src={images.map} alt="" />
                </div>
                <div className='hours'>
                    <h2 className='hours_title'>Hours</h2>
                    <div>
                        <h3>Breakfast </h3>
                    <p>8 am - 11:30 am</p>
                    </div>
                    <div>
                        <h3>Brunch</h3>
                        <p>8 am - 3 pm</p>
                    </div>
                    <div>
                        <h3>Lunch & Dinner</h3>
                        <p>12 pm - 11:30 pm</p>
                        <p>Last Order 11:00 pm</p>
                    </div>
                    <div>
                        <h3>Takeaway & Home Delivery</h3>
                        <p>12 pm - 11:30 pm</p>
                    </div>
                </div>
            </div>
            <div className='section__padding'>
                <h2 className='start__swash'>Home Delivery</h2>
                <div className='delivery__images'>
                    {delivery_site.map((d_img,i)=> <img key={i} className='hover_effect' src={d_img} alt="images"/>)}
                </div>
            </div>
            <div>
                <button onClick={() => setToggleMenu(true)} className='headtext__swash'>Click</button>
            </div>
            {toggleMenu && <div className='conduct__overlay'>
            <p className='headtext__swash'>I am Here</p>
            <p className=' overlay__close' onClick={() => setToggleMenu(false)}>X</p>
            </div>}
        </div>
    );
};

export default Conduct;