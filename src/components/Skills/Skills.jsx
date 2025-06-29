import React, { use } from 'react';
import SkillCard from './SkillCard';

const Skills = ({skillsPromise}) => {
    const skillsData = use(skillsPromise);
    //console.log(skillsData);
    // const [skills, setSkills] = useState([]);
    // const [loading,setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     fetch('/skills.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setSkills(data)
    //             setLoading(false)
    //         });
    // }, []);

    // if(loading){
    //     return <Loading/>;
    // }

    return (
        <section className="scroll-mt-24 my-20 px-4" id="skills">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center">Skills</h2>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                    {
                        skillsData.map(skill =><SkillCard key={skill.id} skill={skill}/>
                        )
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Skills;
