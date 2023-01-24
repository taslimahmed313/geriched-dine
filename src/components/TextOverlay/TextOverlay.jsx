import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import "./TextOverlay.css";

const TextOverlay = ({source,page_title}) => {
    return (
        <div className="image">
            <img className="image__img" src={source} alt="Bricks"/>
            <div className="image__overlay image__overlay--primary">
              <div className='text_decoration'>
                <h1 className='text_overlay_swash'>{page_title}</h1>
                <SubHeading title={"The most delicious dishes made from the freshest of ingredients"}/>
            </div>
            </div>
        </div>
    );
};

export default TextOverlay;