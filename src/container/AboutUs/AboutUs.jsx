import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div>
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Our Mission</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">To serve our valued customers with premium quality food and to give them an elite experience when it comes to fine dining. To become one of the top-rated restaurants nationally catering to the premium tastes of consumers.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The Gericht Restaurant began its in town ever since. Originally serving authentic Thai & Indian cuisine in Dhaka. At Gericht, we only user the top quality ingredients to prepare the dishes for our valued the top-quality ingredients to prepare the dishes for out valued customers. Quality is never compromised.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
  </div>
);

export default AboutUs;
