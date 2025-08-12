import React from 'react';
const About = () => {
    
    return (
        <section id="about" className="scroll-mt-24 my-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold mb-10">About Me</h2>
        <div className='flex flex-col md:flex-row items-start justify-center md:justify-between gap-5' data-aos="zoom-in">
            <div className='w-full md:w-1/2'>
                <img src="https://i.ibb.co.com/yF8x0tJf/mod-7.png" className='w-full h-[400px]' alt="" />
            </div>
            <div className="flex-1 space-y-6 text-justify">
            <p className="text-base md:text-lg lg:text-xl font-normal leading-relaxed">
            I'm a passionate Full Stack Web Developer focused on building responsive, user-friendly web applications using the MERN stack. My journey into web development began with a curiosity for how things work on the web, which quickly grew into a strong interest in building full-stack applications. I'm confident in frontend development and currently expanding my skills in backend with tools like Express.js and MongoDB.<br/> I enjoy solving real-world problems, creating clean UIs, and learning new technologies. Outside of coding, I love watching football, anime, and exploring tech through docs and AI tools.
            </p>
        </div>
        </div>
    </section>
    );
};

export default About;