import React from 'react';
import { MdModeNight } from 'react-icons/md';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to="/">Blogs</Link></li>
                    <li><Link to="/">Contact</Link></li>
                  </>
    return (
        <div class="navbar">
            <div class="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                <a class="btn btn-ghost text-3xl font-bold">Sayeed</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 text-lg font-medium">
                    {links}
                </ul>
            </div>
            <div class="navbar-end">
                <button class="btn rounded-full"><MdModeNight size={20} /></button>
            </div>
        </div>
    );
};

export default Navbar;