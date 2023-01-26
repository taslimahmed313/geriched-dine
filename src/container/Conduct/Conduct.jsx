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
            {toggleMenu && <div className='conduct__overlay'>
            <p className='headtext__swash'>I am Here</p>
            <p className='headtext__swash overlay__close' onClick={() => setToggleMenu(false)}>Close</p>
            </div>}
        </div>
    );
};

export default Conduct;