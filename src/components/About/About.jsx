import React, { useEffect, useState } from 'react';

const About = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <div className='my-30'>
            <div className='text-center max-w-5xl mx-auto space-y-8'>
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-lg font-normal">A frontend web developer passionate about building responsive, accessible, and user-friendly interfaces. With hands-on experience, I specialize in technologies like React, Tailwind CSS, and Firebase to create clean, modern web applications. I also have a foundational understanding of backend development using Express.js and MongoDB, enabling me to build full-stack features when needed. I'm continuously learning and improving to deliver better and more efficient web experiences.</p>
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    skills.map(skill =>
                        <div key={skill.id} className="card bg-base-200 shadow-md hover:scale-105">
                            <figure className="px-5 pt-5">
                                <img
                                    src={skill.image}
                                    alt="Shoes"
                                    className="w-[100px] object-cover rounded-2xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-xl font-semibold">{skill.name}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default About;