import React, { use } from 'react';
import ProjectCard from './ProjectCard';

const Project = ({projectPromise}) => {
    const projectData = use(projectPromise);
    // console.log(projectData);  

    return (
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                projectData.map(project=><ProjectCard key={project.id} project={project}/>)
            }
        </div> 
    );
};

export default Project;