import React from 'react';
import { Conduct_bg } from '../../components/MenuData/MenuData';
import TextOverlay from '../../components/TextOverlay/TextOverlay';
import "./Conduct.css";

const Conduct = () => {
      const [toggleMenu, setToggleMenu] = React.useState(false);

      console.log(toggleMenu)

    return (
        <div className='app__bg'>
            <TextOverlay page_title={"Any Query?"} optional={"+880 1710 652496"}
            source={Conduct_bg}/>
            {/* <LocationMap/> */}
            <div>
                <button onClick={() => setToggleMenu(true)} className='headtext__swash'>Click</button>
            </div>
            {toggleMenu && <div className='headtext__swash app__navbar-smallscreen_overlay'>
            <p>I am Here</p>
            <p onClick={() => setToggleMenu(false)}>Close</p>
            </div>}
        </div>
    );
};

export default Conduct;