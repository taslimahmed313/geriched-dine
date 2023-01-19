import React from 'react';
import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container';
import FoodMenu from '../../container/FoodMenu/FoodMenu';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutUs />
            <SpecialMenu />
            <FoodMenu/>
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
        </div>
    );
};

export default Home;