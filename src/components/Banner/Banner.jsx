import React from 'react';
import pic from '../../assets/wmremove-transformed_300x300-removebg.png'
import { MdOutlineFileDownload } from 'react-icons/md';
import { motion } from "motion/react";
import { delay } from 'motion';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Banner = () => {
    return (
    <section
    className="w-11/12 mx-auto mt-20" id='banner'>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-10 md:gap-5">
            <div className="text-center lg:text-left space-y-6 max-w-2xl">
                <motion.h1
                 animate={{
                    x: [0,20,0]
                 }}
                 transition= {{ duration: 3, repeat: Infinity}}

                 className="text-5xl font-semibold">Hi, I'm <motion.span 
                 animate={{
                    color: ['#93C5FD','#2563EB'],
                 }}
                 transition= {{ duration: 3, repeat: Infinity}}
                 >Amir Mohammad Sayeed.</motion.span>
                </motion.h1>
                <h2 className="text-2xl mt-2 font-bold ">Full Stack Web Developer (MERN)</h2>
                <p className="text-xl font-normal">I am passionate about creating modern, responsive web experiences and specialize in transforming ideas into engaging and visually appealing websites.</p>
                <button onClick={()=>{
                    window.open('https://drive.google.com/file/d/1LIIIS9q3bSjEjAWuyN0RT8kjihunC6Th/view?usp=sharing','_blank')
                }} className="btn bg-[#1D4ED8] text-white text-lg rounded-xl">Download Resume <MdOutlineFileDownload size={20} /></button>
                <div className="flex gap-10 items-center justify-center lg:items-start lg:justify-start">
                    <a href="https://github.com/amirsayeed" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://linkedin.com/in/amirsayeed" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="text-2xl text-[#3B82F6]" />
                    </a>
                </div>
            </div>
            <motion.div 
            animate={{
                y: [-20,0,-20],
                transition: { duration:  3, repeat:Infinity  }
            }}
            className='px-1'>
                <img src={pic} className="max-w-md border-s-8 border-b-8 border-blue-500 object-cover rounded-xl shadow-2xl"/>
            </motion.div>
        </div>
    </section>
    );
};

export default Banner;