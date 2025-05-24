import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='max-w-7xl mx-auto'>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Root;