import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => {
                setSkills(data)
                setLoading(false)
            });
    }, []);

    if(loading){
        return <Loading/>
    }

    return (
        <section className="scroll-mt-24 my-20 px-4" id="skills">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center">Skills</h2>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                    {
                        skills.map(skill =>
                            <div
                                key={skill.id}
                                className="bg-base-200 shadow-md hover:scale-105 transition-transform duration-200 rounded-2xl p-6 w-full max-w-[220px]"
                            >
                                <figure className="flex justify-center mb-4">
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className="w-16 object-contain rounded-xl"
                                    />
                                </figure>
                                <div className="text-center">
                                    <h2 className="text-lg font-semibold">{skill.name}</h2>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;
