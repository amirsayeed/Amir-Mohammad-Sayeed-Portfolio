import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Skills/>
            <Education/>
            <Portfolio/>
        </div>
    );
};

export default Home;