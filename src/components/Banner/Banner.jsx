import React from 'react';
import pic from '../../assets/photo_2023-09-28_15-43-33_300x300-removebg-preview.png'
import { MdOutlineFileDownload } from 'react-icons/md';
const Banner = () => {
    return (
    <div className="w-11/12 mx-auto mt-20">
        <div className="flex flex-col justify-center md:flex-row md:justify-between gap-3">
            <div className="text-center lg:text-left space-y-6 max-w-2xl">
                <h1 className="text-5xl font-semibold">Hi, I'm <span className="text-green-400">Amir Mohammad Sayeed.</span> A
                Frontend Web Developer.
                </h1>
                <p className="text-xl font-normal">I am passionate about creating modern, responsive web experiences and specialize in transforming ideas into engaging and visually appealing websites.</p>
                <button onClick={()=>{
                    window.open('https://drive.google.com/file/d/1LIIIS9q3bSjEjAWuyN0RT8kjihunC6Th/view?usp=sharing','_blank')
                }} className="btn btn-primary text-lg rounded-xl">Download CV <MdOutlineFileDownload size={20} /></button>
            </div>
            <div className='px-1'>
                <img src={pic} className="max-w-md object-cover rounded-lg shadow-2xl"/>
            </div>
        </div>
    </div>
    );
};

export default Banner;