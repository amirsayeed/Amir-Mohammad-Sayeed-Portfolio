import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Portfolio from '../Portfolio/Portfolio';


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Portfolio/>
        </div>
    );
};

export default Home;