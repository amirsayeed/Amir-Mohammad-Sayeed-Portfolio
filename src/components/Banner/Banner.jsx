import React from 'react';
import pic from '../../assets/wmremove-transformed_300x300-removebg.png'
import { MdOutlineFileDownload } from 'react-icons/md';
import { motion } from "motion/react";
import { delay } from 'motion';

const Banner = () => {
    return (
    <div className="w-11/12 mx-auto mt-20">
        <div className="flex flex-col justify-center md:flex-row md:justify-between gap-8 md:gap-5">
            <div className="text-center lg:text-left space-y-6 max-w-2xl">
                <motion.h1
                 animate={{
                    x: [0,15,0],
                    transition: { duration: 3, repeat: Infinity }
                 }}
                 className="text-5xl font-semibold">Hi, I'm <span className="text-green-400">Amir Mohammad Sayeed.</span>  A
                Frontend Web Developer.
                </motion.h1>
                <p className="text-xl font-normal">I am passionate about creating modern, responsive web experiences and specialize in transforming ideas into engaging and visually appealing websites.</p>
                <button onClick={()=>{
                    window.open('https://drive.google.com/file/d/1LIIIS9q3bSjEjAWuyN0RT8kjihunC6Th/view?usp=sharing','_blank')
                }} className="btn btn-primary text-lg rounded-xl">Download CV <MdOutlineFileDownload size={20} /></button>
            </div>
            <motion.div 
            animate={{
                y: [-20,0,-20],
                transition: { duration:  3, repeat:Infinity  }
            }}
            className='px-1'>
                <img src={pic} className="max-w-md border-s-8 border-s-blue-400 border-b-8 border-b-blue-500  object-cover rounded-lg shadow-2xl"/>
            </motion.div>
        </div>
    </div>
    );
};

export default Banner;