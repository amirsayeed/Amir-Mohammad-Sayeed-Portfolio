import React from 'react';
import { Link } from 'react-router';

const ProjectCard = ({project}) => {
    const {id,name,image,description,technologies} = project;

    return (
        <div className="card bg-base-200 shadow-md p-3 hover:scale-105">
        <figure>
            <img
            src={image}
            alt="Shoes"
            className="w-full h-[200px] rounded-xl" />
        </figure>
        <div className="card-body items-center space-y-4">
            <h2 className="text-2xl font-bold text-center">{name}</h2>
            <p className='text-base font-normal text-justify'>{description}</p>
            {/* <div className="flex flex-col md:flex-row justify-between gap-5">
                <button onClick={()=>{
                    window.open(live, '_blank')
                }} className="btn btn-primary">Live</button>
                <button onClick={()=>{
                    window.open(github, '_blank')
                }} className="btn btn-primary">Github</button>
            </div> */}
            <p className='flex flex-wrap gap-2'>
                {
                    technologies.map((tech,idx)=><span key={idx} className='badge badge-outline badge-primary text-xs'>{tech}</span>)
                }
            </p>
            <div className='card-actions justify-center'>
                <Link to={`/projectDetails/${id}`}>
                    <button onClick={()=>{
                        window.scrollTo(0,0);
                    }} className='btn btn-primary p-2'>View Details</button>
                </Link>
            </div>
            
        </div>
        </div>
    );
};

export default ProjectCard;