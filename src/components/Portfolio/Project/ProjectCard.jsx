import React from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router';

const ProjectCard = ({project}) => {
    const {id,name,image,description,technologies} = project;

    return (
        <div className="card bg-base-100 border border-gray-200 rounded-xl shadow-md p-3 hover:scale-105">
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
                    technologies.map((tech,idx)=><span key={idx} className='badge badge-outline text-[#3B82F6] border-[#3B82F6] text-xs font-semibold'>{tech}</span>)
                }
            </p>
            <div className='card-actions justify-center'>
                <Link to={`/projectDetails/${id}`}>
                    <button onClick={()=>{
                        window.scrollTo(0,0);
                    }} className='btn bg-[#1D4ED8] flex text-white p-3 rounded-2xl'>
                        <span>View Details</span>
                        <span><FcViewDetails size={20} /></span>
                    </button>
                </Link>
            </div>
            
        </div>
        </div>
    );
};

export default ProjectCard;