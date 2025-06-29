import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

const Root = () => {
    const {state} = useNavigation();
    return (
        <div>
            <Navbar/>
            <div className='max-w-7xl mx-auto'>
                {state==='loading'? <Loading/> : <Outlet/>}
            </div>
            <Footer/>
        </div>
    );
};

export default Root;