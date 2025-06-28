import React, { useEffect, useState } from 'react';
import Project from '../../components/Project/Project';
import Loading from '../../components/Loading/Loading';

const Portfolio = () => {
    // const allProjects = useLoaderData();
    // console.log(allProjects);
    const [projects,setProjects] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        fetch('/projects.json')
        .then(res=>res.json())
        .then(data=>{
            setProjects(data)
            setLoading(false)
        })
    },[])

    if(loading){
        return <Loading/>;
    }
    
    return (
        <section className='scroll-mt-24 my-20' id='portfolio'>
            <div className='text-center space-y-6 max-w-4xl mx-auto'>
                <h2 className="text-3xl font-bold">My Portfolio</h2>
                <p className='text-lg font-normal'>I love building web applications that are clean, responsive, and user-friendly.
                Below are a few of my featured projects that showcase my skills in frontend and backend technologies. Each project reflects my dedication to solving real-world problems with modern tools.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    projects.map(project=><Project key={project.id} project={project}/>)
                }
            </div>
        </section>
    );
};

export default Portfolio;