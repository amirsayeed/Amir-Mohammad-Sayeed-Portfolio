import React, { Suspense, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';

import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';

import Portfolio from '../../components/Portfolio/Portfolio';
import Loading from '../../components/Loading/Loading';
import Contact from '../../components/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const skillsPromise = fetch('/skills.json').then(res=>res.json());
//console.log(skillsPromise);
const Home = () => {

    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
          });
    },[])

    return (
        <> 
        <title>Sayeed | Home</title>
        <div>
            <Banner/>
            <About/>
            <Suspense fallback={<Loading/>}>
                <Skills skillsPromise={skillsPromise}/>
            </Suspense>
            <Education/>
            <Portfolio/>
            <Contact/>
        </div>
        </>
    );
};

export default Home;