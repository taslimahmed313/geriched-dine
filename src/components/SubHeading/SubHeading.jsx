import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img data-aos="fade-down" data-aos-duration="3000" src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
