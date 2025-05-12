import React from 'react';
import pic from '../../assets/photo_2023-09-28_15-43-33_300x300-removebg-preview.png'
import { MdOutlineFileDownload } from 'react-icons/md';
const Banner = () => {
    return (
    <div className="w-11/12 mx-auto mt-20">
        <div className="flex flex-col md:flex-row justify-between">
            <div className="text-center lg:text-left space-y-6 max-w-2xl">
                <h1 className="text-5xl font-semibold">Hi, I'm <span className="text-green-400">Amir Mohammad Sayeed.</span> A
                Frontend Web Developer.
                </h1>
                <p className="text-xl font-normal">I am passionate about creating modern, responsive web experiences and specialize in transforming ideas into engaging and visually appealing websites.</p>
                <button className="btn btn-primary text-lg rounded-xl">Download CV <MdOutlineFileDownload size={20} /></button>
            </div>
            <div className='bg-base-300 p-3 rounded-3xl'>
                <img src={pic} className="max-w-sm rounded-lg shadow-2xl"/>
            </div>
        </div>
    </div>
    );
};

export default Banner;