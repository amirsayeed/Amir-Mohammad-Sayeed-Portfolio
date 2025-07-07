import React from 'react';
import { Link } from 'react-router';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
         <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-16">
            <div>
                <Link to="/">
                    <img src={logo} alt="" className='h-16 object-cover' />
                </Link>
            </div>

            <nav>
                <div className="grid grid-flow-col gap-6 text-2xl">
                <a href="https://github.com/amirsayeed" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/amir-mohammad-sayeed/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.hackerrank.com/profile/amirsayeed090" target="_blank" rel="noopener noreferrer">
                    <FaHackerrank />
                </a>
                <a href="https://leetcode.com/u/Amirsayeed/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
                <a href="https://www.codechef.com/users/acute_frogs_75" target="_blank" rel="noopener noreferrer">
                    <SiCodechef />
                </a>
                </div>
            </nav>

            <aside>
                <p>Copyright © {new Date().getFullYear()} - All rights reserved by Sayeed</p>
            </aside>
            </footer>
    );
};

export default Footer;