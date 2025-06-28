import React, { useEffect, useState } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <section className='scroll-mt-24 my-20' id='skills'>
            <h2 className="text-3xl font-bold text-center">Skills</h2>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5'>
            {
                skills.map(skill =>
                <div key={skill.id} className="card w-60 bg-base-200 shadow-md hover:scale-105 rounded-2xl p-4">
                    <figure className="">
                        <img
                            src={skill.image}
                            alt="Shoes"
                            className="w-16 object-cover rounded-2xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-lg font-semibold">{skill.name}</h2>
                    </div>
                </div>
            )
            }
            </div>
        </section>
    );
};

export default Skills;